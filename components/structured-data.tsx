import { getBusiness } from "@/lib/cms"
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
export async function LocalBusinessSchema() {
  const business = await getBusiness()
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: business.name,
    description: site.description,
    url: site.url,
    telephone: business.phone.e164,
    email: business.email,
    image: `${site.url}/images/og-seashell-power-wash.png`,
    logo: `${site.url}/images/seashell-logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone.e164,
      email: business.email,
      contactType: "customer service",
      areaServed: "US-SC",
      availableLanguage: "English",
    },
    areaServed: locations.map((l) => ({
      "@type": "City",
      name: l.name,
      url: `${site.url}/service-areas/${l.slug}`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Exterior cleaning services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.shortName,
          description: s.cardSummary,
          url: `${site.url}/services/${s.slug}`,
        },
      })),
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    sameAs: [business.social.google, business.social.facebook, business.social.instagram, business.social.linkedin, business.social.yelp].filter(Boolean),
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
