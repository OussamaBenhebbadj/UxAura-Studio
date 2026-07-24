import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  email?: string;
  object?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const email = body.email?.trim() ?? "";
  const object = body.object?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!email || !object || !message) {
    return NextResponse.json(
      { error: "Tous les champs sont obligatoires." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
  const CONTACT_RECEIVER = process.env.CONTACT_RECEIVER_EMAIL || GMAIL_USER;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error(
      "GMAIL_USER / GMAIL_APP_PASSWORD manquants. Voir .env.local.example."
    );
    return NextResponse.json(
      { error: "Le service d'email n'est pas configuré côté serveur." },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"UXaura Studio - Site web" <${GMAIL_USER}>`,
      to: CONTACT_RECEIVER,
      replyTo: email,
      subject: `[Contact site] ${object}`,
      text: `Nouveau message depuis le site UXaura Studio\n\nDe : ${email}\nObjet : ${object}\n\nMessage :\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 15px; color: #040C14;">
          <h2 style="color:#7A3FFF;">Nouveau message depuis le site UXaura Studio</h2>
          <p><strong>De :</strong> ${email}</p>
          <p><strong>Objet :</strong> ${object}</p>
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur d'envoi d'email :", error);
    return NextResponse.json(
      { error: "L'envoi du message a échoué. Merci de réessayer plus tard." },
      { status: 500 }
    );
  }
}