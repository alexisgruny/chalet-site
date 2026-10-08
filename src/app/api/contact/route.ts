import { NextRequest, NextResponse } from "next/server";
import { isIP } from "node:net";
import { Resend } from "resend";

// Process-local rate limiting is best-effort; use shared storage when scaling instances.
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60_000;
const MAX_RATE_LIMIT_ENTRIES = 10_000;
const MAX_REQUEST_BYTES = 16 * 1024;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    if (rateMap.size >= MAX_RATE_LIMIT_ENTRIES) {
      for (const [key, value] of rateMap) {
        if (now > value.resetAt) rateMap.delete(key);
      }
      if (rateMap.size >= MAX_RATE_LIMIT_ENTRIES) return true;
    }

    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

// ── Types ──────────────────────────────────────────────────────────────────
interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  arrival?: string;
  departure?: string;
  guests?: string;
  message: string;
}

function validate(data: unknown): { payload?: ContactPayload; error?: string } {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return { error: "Le formulaire est invalide." };
  }

  const fields = data as Record<string, unknown>;
  const stringFields = ["name", "email", "phone", "arrival", "departure", "guests", "message"];
  for (const field of stringFields) {
    const value = fields[field];
    if (value !== undefined && typeof value !== "string") {
      return { error: "Le formulaire est invalide." };
    }
  }

  const name = (fields.name as string | undefined)?.trim() ?? "";
  const email = (fields.email as string | undefined)?.trim() ?? "";
  const message = (fields.message as string | undefined)?.trim() ?? "";
  const phone = (fields.phone as string | undefined)?.trim() || undefined;
  const arrival = (fields.arrival as string | undefined)?.trim() || undefined;
  const departure = (fields.departure as string | undefined)?.trim() || undefined;
  const guests = (fields.guests as string | undefined)?.trim() || undefined;

  if (!name) return { error: "Le nom est requis." };
  if (!email) return { error: "L'email est requis." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return { error: "Email invalide." };
  if (!message) return { error: "Le message est requis." };
  if (name.length > 100) return { error: "Nom trop long." };
  if (email.length > 254) return { error: "Email trop long." };
  if (phone && phone.length > 30) return { error: "Téléphone trop long." };
  if (message.length > 3000) return { error: "Message trop long (3 000 caractères max)." };

  if (arrival && !isCalendarDate(arrival)) return { error: "Date d'arrivée invalide." };
  if (departure && !isCalendarDate(departure)) return { error: "Date de départ invalide." };
  if (arrival && departure && departure <= arrival) {
    return { error: "La date de départ doit être après la date d'arrivée." };
  }
  if (guests && !/^[1-6]$/.test(guests)) {
    return { error: "Le nombre de voyageurs doit être compris entre 1 et 6." };
  }

  return { payload: { name, email, phone, arrival, departure, guests, message } };
}

function isCalendarDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

async function readRequestBody(
  req: NextRequest,
): Promise<{ text: string; tooLarge: boolean }> {
  const reader = req.body?.getReader();
  if (!reader) return { text: "", tooLarge: false };

  const chunks: Uint8Array[] = [];
  let byteLength = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      byteLength += value.byteLength;
      if (byteLength > MAX_REQUEST_BYTES) {
        await reader.cancel();
        return { text: "", tooLarge: true };
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const bytes = new Uint8Array(byteLength);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return { text: new TextDecoder("utf-8", { fatal: true }).decode(bytes), tooLarge: false };
}

export async function POST(req: NextRequest) {
  const forwardedIp = req.headers.get("x-real-ip")?.trim();
  const ip = forwardedIp && isIP(forwardedIp) ? forwardedIp : "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: "Trop de tentatives. Réessayez dans une minute." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json(
      { success: false, message: "Le formulaire est trop volumineux." },
      { status: 413 }
    );
  }

  if (!req.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return NextResponse.json(
      { success: false, message: "Le format de la requête est invalide." },
      { status: 415 }
    );
  }

  let body: unknown;
  try {
    const requestBody = await readRequestBody(req);
    if (requestBody.tooLarge) {
      return NextResponse.json(
        { success: false, message: "Le formulaire est trop volumineux." },
        { status: 413 }
      );
    }
    body = JSON.parse(requestBody.text);
  } catch {
    return NextResponse.json(
      { success: false, message: "La requête JSON est invalide." },
      { status: 400 }
    );
  }

  const validation = validate(body);
  if (validation.error || !validation.payload) {
    return NextResponse.json(
      { success: false, message: validation.error ?? "Le formulaire est invalide." },
      { status: 400 }
    );
  }
  const payload = validation.payload;

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  if (!apiKey || !contactEmail) {
    console.error("Missing env: RESEND_API_KEY or CONTACT_EMAIL");
    return NextResponse.json(
      { success: false, message: "Erreur de configuration serveur." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error: sendError } = await resend.emails.send({
      from: "Chalet Jaïa <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: payload.email,
      subject: `Nouvelle demande de ${payload.name.replace(/[\r\n]+/g, " ")}`,
      text: buildEmailText(payload),
    });
    if (sendError) {
      console.error("Erreur envoi email :", sendError);
      return NextResponse.json(
        { success: false, message: "Erreur lors de l'envoi. Réessayez plus tard." },
        { status: 500 }
      );
    }

    try {
      const { error: confirmationError } = await resend.emails.send({
        from: "Chalet Jaïa <onboarding@resend.dev>",
        to: payload.email,
        subject: "Nous avons bien reçu votre message — Chalet Jaïa",
        text: buildConfirmationText(payload.name),
      });
      if (confirmationError) {
        console.error("Erreur email confirmation :", confirmationError);
      }
    } catch (confirmationError) {
      console.error("Erreur email confirmation :", confirmationError);
    }
  } catch (err) {
    console.error("Erreur envoi email :", err);
    return NextResponse.json(
      { success: false, message: "Erreur lors de l'envoi. Réessayez plus tard." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, message: "Message envoyé avec succès." });
}

// ── Helper ─────────────────────────────────────────────────────────────────
function buildEmailText(data: ContactPayload): string {
  return [
    `Nom      : ${data.name}`,
    `Email    : ${data.email}`,
    data.phone     ? `Téléphone: ${data.phone}`    : null,
    data.arrival   ? `Arrivée  : ${data.arrival}`  : null,
    data.departure ? `Départ   : ${data.departure}` : null,
    data.guests    ? `Voyageurs: ${data.guests}`   : null,
    "",
    `Message  :\n${data.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}

function buildConfirmationText(name: string): string {
  return [
    `Bonjour ${name},`,
    "",
    "Nous avons bien reçu votre message et vous répondrons dans les 24 heures.",
    "",
    "À très bientôt,",
    "L'équipe Chalet Jaïa",
    "chaletjaia@gmail.com",
  ].join("\n");
}
