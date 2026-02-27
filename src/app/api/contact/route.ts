import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // mini validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Champs manquants" },
        { status: 400 }
      );
    }

    // TODO: ici tu envoies un mail (Resend, Nodemailer, etc.)
    // Pour l’instant on renvoie juste OK pour débloquer le build.
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Requête invalide" },
      { status: 400 }
    );
  }
}