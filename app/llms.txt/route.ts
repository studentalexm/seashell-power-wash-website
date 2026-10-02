import { getBusiness, getLocations, getServices } from "@/lib/cms"
import { site } from "@/lib/site"

export const revalidate = 3600

export async function GET() {
  const [business, services, locations] = await Promise.all([
    getBusiness(),
    getServices(),
    getLocations(),
  ])

  const { address } = business
  const lines = [
    `# ${business.name}`,
    "",
    `> ${site.description}`,
    "",
    "## Business details",
    `- Business type: Pressure washing, soft washing, and window cleaning company`,
    `- Based in: ${address.street}, ${address.city}, ${address.region} ${address.postalCode}`,
    `- Phone (call or text): ${business.phone.display}`,
    `- Email: ${business.email}`,
    `- Website: ${site.url}`,
    `- Hours: ${site.hours.map((h) => `${h.label} ${h.display}`).join("; ")}`,
    `- Serves: residential homes and commercial properties`,
    `- Service region: ${site.serviceRegion}`,
    `- Free estimates: ${site.url}/contact`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.shortName}](${site.url}/services/${s.slug}): ${s.cardSummary}`),
    "",
    "## Service areas",
    ...locations.map((l) => `- [${l.name}](${site.url}/service-areas/${l.slug}): ${l.blurb}`),
    "",
    "## More information",
    `- [Frequently asked questions](${site.url}/faq)`,
    `- [About ${business.name}](${site.url}/about)`,
    `- [Project gallery](${site.url}/gallery)`,
    `- [Exterior cleaning blog](${site.url}/blog)`,
    "",
    "## Profiles",
    ...Object.values(business.social)
      .filter(Boolean)
      .map((url) => `- ${url}`),
    "",
  ]

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
