import { NextRequest, NextResponse } from "next/server";

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
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Email invalide.";
  if (!data.message?.trim()) return "Le message est requis.";
  return null;
}

// ── Handler ────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const body: ContactPayload = await req.json();

  const error = validate(body);
  if (error) {
    return NextResponse.json({ success: false, message: error }, { status: 400 });
  }

  // TODO — choisir un service d'envoi d'email et décommenter le bloc correspondant

  // ── Option A : Resend (recommandé) ────────────────────────────────────────
  // npm install resend
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from:    "Chalet Jaïa <noreply@chalet-jaia.fr>",
  //   to:      process.env.CONTACT_EMAIL!,          // votre email
  //   replyTo: body.email,
  //   subject: `Nouvelle demande de ${body.name}`,
  //   text: buildEmailText(body),
  // });

  // ── Option B : Nodemailer (SMTP Gmail / OVH …) ───────────────────────────
  // npm install nodemailer @types/nodemailer
  //
  // import nodemailer from "nodemailer";
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: Number(process.env.SMTP_PORT),
  //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  // });
  // await transporter.sendMail({
  //   from:    `"Chalet Jaïa" <${process.env.SMTP_USER}>`,
  //   to:      process.env.CONTACT_EMAIL!,
  //   replyTo: body.email,
  //   subject: `Nouvelle demande de ${body.name}`,
  //   text:    buildEmailText(body),
  // });

  // ── Simulation (à retirer une fois un service branché) ────────────────────
  console.log("📬 Nouveau message reçu :", body);

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
