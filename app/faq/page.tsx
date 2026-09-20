import type { Metadata } from "next"
import { faqGroups, allFaqs } from "@/lib/faqs"
import { pageMetadata } from "@/lib/seo"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { FaqAccordion } from "@/components/faq-accordion"
import { CtaBand } from "@/components/cta-band"
import { FAQSchema } from "@/components/structured-data"

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about soft washing vs. pressure washing, coastal salt film, roof algae, scheduling, and caring for Charleston-area exteriors. Free estimates.",
  path: "/faq",
})

export default function FaqPage() {
  return (
    <>
      <FAQSchema faqs={allFaqs} />

      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        lead="Everything homeowners and businesses tend to ask about exterior cleaning in the Lowcountry. Still have a question? We're glad to help."
        crumbs={[{ name: "FAQ", href: "/faq" }]}
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-14">
          {faqGroups.map((group) => (
            <div key={group.category}>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                {group.category}
              </h2>
              <div className="mt-6">
                <FaqAccordion faqs={group.faqs} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
