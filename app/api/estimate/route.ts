import { NextResponse } from "next/server"
import { Resend } from "resend"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type EstimatePayload = {
  name?: unknown
  email?: unknown
  phone?: unknown
  location?: unknown
  address?: unknown
  message?: unknown
  // Honeypot field; real users leave it empty.
  company?: unknown
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : ""
}

export async function POST(request: Request) {
  let body: EstimatePayload
  try {
    body = (await request.json()) as EstimatePayload
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    )
  }

  // Silently accept spam bots that fill the hidden honeypot field.
  if (asString(body.company)) {
    return NextResponse.json({ ok: true })
  }

  const name = asString(body.name)
  const email = asString(body.email)
  const phone = asString(body.phone)
  const address = asString(body.address)
  const message = asString(body.message)

  const errors: Record<string, string> = {}
  if (name.length < 2) errors.name = "Please enter your name."
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email."
  if (phone.replace(/\D/g, "").length < 10)
    errors.phone = "Please enter a valid phone number."
  if (!address) errors.address = "Please enter the service address."
  if (!message) errors.message = "Please tell us about your project."

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 })
  }

  const receivedAt = new Date().toISOString()
  const fromDomain = process.env.RESEND_EMAIL_DOMAIN || "seashellpowerwash.com"
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send(
    {
      from: `Seashell Power Wash <clean@${fromDomain}>`,
      to: ["clean@seashellpowerwash.com"],
      replyTo: email,
      subject: `New free estimate request from ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Address: ${address}`,
        "",
        "Project details:",
        message,
        "",
        `Received: ${receivedAt}`,
      ].join("\\n"),
    },
    { idempotencyKey: `estimate/${email}-${receivedAt}` },
  )

  if (error) {
    console.error("[v0] Estimate email failed:", error.message)
    return NextResponse.json(
      { ok: false, error: "We could not send your request. Please try again." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
