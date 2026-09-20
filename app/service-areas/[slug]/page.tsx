import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getLocation, locations } from "@/lib/locations"
import { services } from "@/lib/services"
import { pageMetadata } from "@/lib/seo"
import { PageHero } from "@/components/page-hero"
import { Section, Eyebrow } from "@/components/section"
import { CheckList } from "@/components/prose-list"
import { FaqAccordion } from "@/components/faq-accordion"
import { CtaBand } from "@/components/cta-band"
import { EstimateButton, CallButton } from "@/components/site-buttons"
import { FAQSchema } from "@/components/structured-data"

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const location = getLocation(slug)
  if (!location) return {}
  return pageMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/service-areas/${location.slug}`,
    image: location.image,
  })
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = getLocation(slug)
  if (!location) notFound()

  return (
    <>
      <FAQSchema faqs={location.faqs} />

      <PageHero
        eyebrow="Service Area"
        title={location.title}
        lead={location.intro}
        crumbs={[
          { name: "Service Areas", href: "/service-areas" },
          { name: location.name, href: `/service-areas/${location.slug}` },
        ]}
        image={location.image}
        imageAlt={location.imageAlt}
        priority
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <div className="space-y-5">
              {location.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-pretty text-lg leading-relaxed text-foreground/90"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                What we focus on in {location.navLabel}
              </h2>
              <CheckList items={location.highlights} className="mt-5" />
            </div>

            <div className="mt-12">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Services available in {location.navLabel}
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:border-accent hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {service.shortName}
                      </span>
                      <ArrowRight
                        className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Serving {location.navLabel}
              </h2>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                Request a free, no-obligation estimate for your{" "}
                {location.navLabel} property.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <EstimateButton className="w-full" />
                <CallButton variant="solid" className="w-full" />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-secondary/50" aria-labelledby="location-faq-heading">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>FAQs</Eyebrow>
          <h2
            id="location-faq-heading"
            className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground"
          >
            {location.navLabel} questions, answered
          </h2>
          <div className="mt-8">
            <FaqAccordion faqs={location.faqs} />
          </div>
        </div>
      </Section>

      <Section aria-labelledby="other-areas-heading">
        <h2
          id="other-areas-heading"
          className="text-balance font-serif text-2xl font-semibold text-foreground"
        >
          Other areas we serve
        </h2>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {locations
            .filter((l) => l.slug !== location.slug)
            .map((l) => (
              <Link
                key={l.slug}
                href={`/service-areas/${l.slug}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {l.navLabel}
              </Link>
            ))}
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
