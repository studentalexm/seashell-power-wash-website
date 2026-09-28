import { NextResponse } from "next/server"

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

  // NOTE: No email or database integration is connected yet, so requests are
  // logged server-side. Connect Resend (email) or a database to deliver or
  // store these submissions.
  console.log("[v0] New estimate request:", {
    name,
    email,
    phone,
    address,
    message,
    receivedAt: new Date().toISOString(),
  })

  return NextResponse.json({ ok: true })
}
