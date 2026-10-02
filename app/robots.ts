import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

// AI assistants use these crawlers to find and cite local businesses.
// Naming them explicitly guards against a future blanket rule blocking them.
const aiCrawlers = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/studio"] },
      { userAgent: aiCrawlers, allow: "/", disallow: ["/api/", "/studio"] },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
