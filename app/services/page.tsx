import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { ServiceCards } from "@/components/service-cards"
import { CtaBand } from "@/components/cta-band"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Exterior Cleaning Services in Charleston & Mount Pleasant",
  description:
    "Explore our pressure washing, soft washing, house washing, roof cleaning, window cleaning, and more across Charleston and the Lowcountry. Free estimates.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Exterior Cleaning Services for the Lowcountry"
        lead="We match each surface with the safest, most effective method, from gentle soft washing for siding and roofs to high-performance pressure washing for concrete and hardscapes."
        crumbs={[{ name: "Services", href: "/services" }]}
        image="/images/pressure-washing-driveway.png"
        imageAlt="Pressure washing a concrete surface with a clear line between clean and dirty areas"
        priority
      />

      <Section>
        <ServiceCards />
      </Section>

      <CtaBand />
    </>
  )
}
