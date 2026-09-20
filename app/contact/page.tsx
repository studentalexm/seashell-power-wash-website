import type { Metadata } from "next"
import { Phone, MessageSquareText, MapPin, Clock } from "lucide-react"
import { pageMetadata } from "@/lib/seo"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { EstimateForm } from "@/components/estimate-form"
import { site, telHref, smsHref } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Get a Free Estimate",
  description:
    "Request a free, no-obligation exterior cleaning estimate in Charleston, Mount Pleasant, and the Lowcountry. Call, text, or fill out the form.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get your free estimate"
        lead="Tell us a bit about your property and what you'd like cleaned. We'll follow up to confirm the details, no obligation."
        crumbs={[{ name: "Contact", href: "/contact" }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Reach us directly
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Prefer to talk it through? Give us a call or send a text and we'll
              help you figure out the right services for your property.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={telHref}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-accent hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">
                    Call us
                  </span>
                  <span className="block font-medium text-foreground">
                    {site.phone.display}
                  </span>
                </span>
              </a>

              <a
                href={smsHref("Hi Seashell Power Wash, I'd like a free estimate for ")}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-accent hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <MessageSquareText className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">
                    Text us
                  </span>
                  <span className="block font-medium text-foreground">
                    {site.phone.display}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">
                    Based in
                  </span>
                  <span className="block font-medium text-foreground">
                    {site.base}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Clock className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">
                    Serving
                  </span>
                  <span className="block font-medium text-foreground">
                    {site.serviceRegion}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div>
            <EstimateForm />
          </div>
        </div>
      </Section>
    </>
  )
}
