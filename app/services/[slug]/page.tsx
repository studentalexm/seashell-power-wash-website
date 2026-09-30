import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getService, getServices } from "@/lib/cms"
import { pageMetadata } from "@/lib/seo"
import { PageHero } from "@/components/page-hero"
import { Section, Eyebrow } from "@/components/section"
import { CheckList } from "@/components/prose-list"
import { FaqAccordion } from "@/components/faq-accordion"
import { CtaBand } from "@/components/cta-band"
import { EstimateButton, CallButton } from "@/components/site-buttons"
import { ServiceSchema, FAQSchema } from "@/components/structured-data"

export const revalidate = 60

export async function generateStaticParams() {
  return (await getServices()).map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = await getService(slug)
  if (!service) return {}
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.image,
  })
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const allServices = await getServices()
  const service = allServices.find((s) => s.slug === slug)
  if (!service) notFound()

  const related = service.related
    .map((s) => allServices.find((item) => item.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <>
      <ServiceSchema
        name={service.shortName}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
      />
      <FAQSchema faqs={service.faqs} />

      <PageHero
        eyebrow="Service"
        title={service.title}
        lead={service.intro}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: service.shortName, href: `/services/${service.slug}` },
        ]}
        image={service.image}
        imageAlt={service.imageAlt}
        priority
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <div className="space-y-5">
              {service.body.map((paragraph) => (
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
                What's included
              </h2>
              <CheckList items={service.includes} className="mt-5" />
            </div>

            <div className="mt-12">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Best suited for
              </h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {service.bestFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Get a free estimate
              </h2>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                Tell us about your property and we'll put together a
                no-obligation quote for {service.shortName.toLowerCase()}.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <EstimateButton className="w-full" />
                <CallButton variant="solid" className="w-full" />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-secondary/50" aria-labelledby="service-faq-heading">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>FAQs</Eyebrow>
          <h2
            id="service-faq-heading"
            className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground"
          >
            {service.shortName} questions, answered
          </h2>
          <div className="mt-8">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section aria-labelledby="related-heading">
          <h2
            id="related-heading"
            className="text-balance font-serif text-2xl font-semibold text-foreground"
          >
            Related services
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                    {item.shortName}
                  </h3>
                  <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.cardSummary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              )
            })}
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  )
}
