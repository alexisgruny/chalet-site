import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ── Rate limiting (par IP) ─────────────────────────────────────────────────
// Simple in-memory : suffit pour un petit site, se remet à zéro au redémarrage
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;        // max 3 envois
const RATE_WINDOW = 60_000;  // par minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
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

// ── Validation ─────────────────────────────────────────────────────────────
function validate(data: ContactPayload): string | null {
  if (!data.name?.trim())    return "Le nom est requis.";
  if (!data.email?.trim())   return "L'email est requis.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) return "Email invalide.";
  if (!data.message?.trim()) return "Le message est requis.";

  // Limites de longueur pour éviter les abus
  if (data.name.length > 100)    return "Nom trop long.";
  if (data.email.length > 200)   return "Email trop long.";
  if (data.message.length > 3000) return "Message trop long (3 000 caractères max).";

  return null;
}

// ── Handler ────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: "Trop de tentatives. Réessayez dans une minute." },
      { status: 429 }
    );
  }

  const body: ContactPayload = await req.json();

  const error = validate(body);
  if (error) {
    return NextResponse.json({ success: false, message: error }, { status: 400 });
  }

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
    await resend.emails.send({
      from: "Chalet Jaïa <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: body.email,
      subject: `Nouvelle demande de ${body.name}`,
      text: buildEmailText(body),
    });
    resend.emails.send({
      from: "Chalet Jaïa <onboarding@resend.dev>",
      to: body.email,
      subject: "Nous avons bien reçu votre message — Chalet Jaïa",
      text: buildConfirmationText(body.name),
    }).catch((err) => console.error("Erreur email confirmation :", err));
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
