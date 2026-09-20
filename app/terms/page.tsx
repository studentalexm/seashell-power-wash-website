import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { LegalContent, type LegalBlock } from "@/components/legal-content"
import { site } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply to using the Seashell Power Wash website and requesting exterior cleaning services.",
  path: "/terms",
})

const blocks: LegalBlock[] = [
  {
    heading: "Acceptance of terms",
    paragraphs: [
      `By using the ${site.name} website or requesting our services, you agree to these Terms of Service. If you do not agree, please do not use the site.`,
    ],
  },
  {
    heading: "Our services",
    paragraphs: [
      "We provide exterior cleaning services, including pressure washing, soft washing, house washing, roof cleaning, window cleaning, and related work throughout the Charleston Lowcountry. Descriptions on this site are for general information and do not constitute a binding offer.",
    ],
  },
  {
    heading: "Estimates and pricing",
    paragraphs: [
      "Estimates are provided free of charge and are based on the information available at the time. Final pricing may be adjusted if actual conditions differ significantly from what was described. We will communicate any material changes before proceeding.",
    ],
  },
  {
    heading: "Scheduling and access",
    paragraphs: [
      "Completing scheduled work depends on reasonable access to the property and the areas to be cleaned, as well as a functioning water source. Weather may require rescheduling, and we will coordinate a new time with you when needed.",
    ],
  },
  {
    heading: "Results and expectations",
    paragraphs: [
      "We use methods appropriate to each surface and take care to protect your property. Some staining, damage, or wear that predates our service may not be fully removable. Where we anticipate limitations, we will set expectations during the estimate.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, our liability is limited to the amount paid for the services in question. We are not responsible for pre-existing conditions or damage caused by defects in the property not disclosed to us.",
    ],
  },
  {
    heading: "Website content",
    paragraphs: [
      "The content on this website is provided for general informational purposes and may change without notice. Images may include representative examples.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: [
      `Questions about these terms can be directed to us by phone at ${site.phone.display} or by email at ${site.email}.`,
      "This is a general terms of service template and does not constitute legal advice. Please review and adapt it to your business and applicable laws before relying on it.",
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        lead="The terms that apply to using our site and services."
        crumbs={[{ name: "Terms of Service", href: "/terms" }]}
      />
      <Section>
        <LegalContent blocks={blocks} />
      </Section>
    </>
  )
}
