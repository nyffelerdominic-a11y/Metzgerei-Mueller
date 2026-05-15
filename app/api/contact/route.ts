import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(60).optional(),
  occasion: z.string().max(160).optional(),
  date: z.string().max(40).optional(),
  guests: z.string().max(20).optional(),
  message: z.string().min(5).max(4000),
  variant: z.enum(["partyservice", "general"]).default("general"),
  website: z.string().max(0).optional(), // honeypot
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Bitte alle Pflichtfelder korrekt ausfüllen." },
      { status: 422 }
    );
  }

  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set — logging payload only", parsed.data);
    return NextResponse.json({ ok: true, mode: "dev" }, { status: 200 });
  }

  const resend = new Resend(apiKey);
  const data = parsed.data;
  const subjectPrefix =
    data.variant === "partyservice" ? "Partyservice-Anfrage" : "Kontakt";
  const subject = `${subjectPrefix} — ${data.name}`;

  const lines = [
    `Name: ${data.name}`,
    `E-Mail: ${data.email}`,
    data.phone && `Telefon: ${data.phone}`,
    data.occasion && `Anlass: ${data.occasion}`,
    data.date && `Datum: ${data.date}`,
    data.guests && `Personen: ${data.guests}`,
    "",
    "Nachricht:",
    data.message,
  ].filter(Boolean) as string[];

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? "Müller Metzgerei <no-reply@resend.dev>",
      to: [process.env.RESEND_TO ?? site.email],
      replyTo: data.email,
      subject,
      text: lines.join("\n"),
    });
    if (error) {
      console.error("[contact] resend error", error);
      return NextResponse.json(
        { error: "Senden fehlgeschlagen. Bitte rufen Sie uns an." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected", err);
    return NextResponse.json(
      { error: "Unerwarteter Fehler. Bitte rufen Sie uns an." },
      { status: 500 }
    );
  }
}
