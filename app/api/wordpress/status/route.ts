import { NextResponse } from "next/server"
import { getWordPressApiUrl, hasWordPressCredentials } from "@/lib/wordpress"

export async function GET() {
  if (!hasWordPressCredentials()) {
    return NextResponse.json({ connected: false, reason: "missing_credentials" }, { status: 503 })
  }

  const response = await fetch(`${getWordPressApiUrl()}/wp-json/wp/v2/users/me`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`seashell:${process.env.WORDPRESS_APPLICATION_PASSWORD}`).toString("base64")}`,
    },
    cache: "no-store",
  })

  return NextResponse.json(
    { connected: response.ok, status: response.status },
    { status: response.ok ? 200 : 502 },
  )
}
