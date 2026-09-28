import { site } from "@/lib/site"
import { services } from "@/lib/services"
import { locations } from "@/lib/locations"
import type { FAQ } from "@/lib/services"

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data must be serialized into the document.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/**
 * LocalBusiness / HomeAndConstructionBusiness schema.
 *
 * Keep business details synchronized with the verified Google Business Profile.
 * Do not add review text or rating counts unless they are publicly visible and
 * can be reproduced accurately.
 */
export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone.e164,
    image: `${site.url}/images/og-seashell-power-wash.png`,
    logo: `${site.url}/images/seashell-logo.png`,
    areaServed: [
      "Charleston, SC",
      "Mount Pleasant, SC",
      ...locations.map((l) => l.name),
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    sameAs: [site.social.google, site.social.facebook, site.social.instagram, site.social.linkedin, site.social.yelp].filter(Boolean),
    knowsAbout: services.map((s) => s.shortName),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.shortName },
    })),
  }
  return <JsonLd data={data} />
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[]
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  }
  return <JsonLd data={data} />
}

export function ServiceSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    provider: { "@id": `${site.url}/#business` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Charleston Lowcountry, SC",
    },
    url: `${site.url}${path}`,
  }
  return <JsonLd data={data} />
}

/** Only render this where the same FAQs are visibly displayed on the page. */
export function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }
  return <JsonLd data={data} />
}
