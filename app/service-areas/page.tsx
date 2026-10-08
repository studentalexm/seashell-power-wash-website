import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getLocations } from "@/lib/cms"
import { pageMetadata } from "@/lib/seo"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = pageMetadata({
  title: "Charleston SC Exterior Cleaning Service Areas | Seashell",
  description:
    "Explore our exterior cleaning service areas across Charleston, Mount Pleasant, Daniel Island, and nearby Lowcountry communities. Request your free quote.",
  path: "/service-areas",
})

export const revalidate = 60

export default async function ServiceAreasPage() {
  const locations = await getLocations()
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Serving the Charleston Lowcountry"
        lead="From the historic peninsula to the barrier islands, we bring surface-safe exterior cleaning to homes and businesses across the greater Charleston area."
        crumbs={[{ name: "Service Areas", href: "/service-areas" }]}
        image="/images/charleston-lowcountry-street.png"
        imageAlt="Historic Charleston street with well-kept homes and mature trees"
        priority
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/service-areas/${location.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={location.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-serif text-xl font-semibold text-foreground">
                  {location.name}
                </h2>
                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {location.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Explore this area
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
