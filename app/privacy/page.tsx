import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { LegalContent, type LegalBlock } from "@/components/legal-content"
import { getBusiness, type Business } from "@/lib/cms"

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Seashell Power Wash collects, uses, and protects the information you share when requesting an estimate or contacting us.",
  path: "/privacy",
})

const buildBlocks = (site: Business): LegalBlock[] => [
  {
    heading: "Overview",
    paragraphs: [
      `This Privacy Policy explains how ${site.name} ("we," "us," or "our") handles information you provide when you use our website or request a service. We are committed to being straightforward about what we collect and why.`,
    ],
  },
  {
    heading: "Information we collect",
    paragraphs: [
      "We collect the information you choose to give us, primarily through our estimate request form or when you call or text us.",
    ],
    bullets: [
      "Contact details such as your name, phone number, and email address",
      "Your property's city, neighborhood, or address",
      "Details about the services you're interested in and your property",
    ],
  },
  {
    heading: "How we use your information",
    paragraphs: [
      "We use the information you provide to respond to your request, prepare an estimate, schedule and perform services, and communicate with you about your project. We do not sell your personal information.",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "Our website may use basic analytics to understand how visitors use the site so we can improve it. This information is used in aggregate and is not used to identify you personally.",
    ],
  },
  {
    heading: "How we protect your information",
    paragraphs: [
      "We take reasonable measures to protect the information you share with us. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      "You may contact us at any time to ask what information we have about you or to request that we update or delete it. You can also opt out of non-essential communications.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: [
      `If you have questions about this Privacy Policy, contact us by phone at ${site.phone.display} or by email at ${site.email}.`,
      "This is a general privacy policy template and does not constitute legal advice. Please review and adapt it to your specific business practices and applicable laws before relying on it.",
    ],
  },
]

export default async function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="How we handle the information you share with us."
        crumbs={[{ name: "Privacy Policy", href: "/privacy" }]}
      />
      <Section>
        <LegalContent blocks={buildBlocks(await getBusiness())} />
      </Section>
    </>
  )
}
