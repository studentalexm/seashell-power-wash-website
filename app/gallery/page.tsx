import type { Metadata } from "next"
import Image from "next/image"
import { pageMetadata } from "@/lib/seo"
import { PageHero } from "@/components/page-hero"
import { Section, Eyebrow } from "@/components/section"
import { BeforeAfter } from "@/components/before-after"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = pageMetadata({
  title: "Gallery of Exterior Cleaning Results",
  description:
    "See before-and-after results from house washing, roof cleaning, driveway cleaning, and window cleaning across the Charleston Lowcountry. Free estimates.",
  path: "/gallery",
})

const projectImages = [
  {
    src: "/images/house-washing-lowcountry-home.png",
    alt: "Freshly soft-washed white Lowcountry home with a clean porch",
  },
  {
    src: "/images/roof-cleaning-soft-wash.png",
    alt: "Roof with algae streaks removed on the cleaned section",
  },
  {
    src: "/images/window-cleaning-coastal-home.png",
    alt: "Large coastal home window cleaned to a streak-free finish",
  },
  {
    src: "/images/driveway-concrete-cleaning.png",
    alt: "Concrete driveway cleaned to an even, brightened finish",
  },
  {
    src: "/images/deck-patio-cleaning.png",
    alt: "Clean wooden deck with outdoor furniture on a Lowcountry home",
  },
  {
    src: "/images/gutter-cleaning.png",
    alt: "Clean white gutters along the roofline of a Lowcountry home",
  },
  {
    src: "/images/commercial-exterior-cleaning.png",
    alt: "Clean commercial storefront and walkway in a Charleston business district",
  },
  {
    src: "/images/charleston-home-exterior-pressure-washing-hero.png",
    alt: "Freshly cleaned Charleston Lowcountry home exterior",
  },
]

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Results worth showing off"
        lead="A look at the kind of transformation the right method makes, from algae-streaked siding to bright, even finishes across the Lowcountry."
        crumbs={[{ name: "Gallery", href: "/gallery" }]}
      />

      <Section aria-labelledby="ba-heading">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Before &amp; After</Eyebrow>
          <h2
            id="ba-heading"
            className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground"
          >
            Drag to see the difference
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <BeforeAfter
            beforeSrc="/images/before-house-siding-algae.png"
            afterSrc="/images/after-house-siding-clean.png"
            beforeAlt="House siding before and after soft washing away algae and salt film"
            afterAlt="House siding cleaned to a bright, even finish"
          />
          <BeforeAfter
            beforeSrc="/images/before-driveway-dirty.png"
            afterSrc="/images/after-driveway-clean.png"
            beforeAlt="Concrete driveway before and after pressure washing"
            afterAlt="Concrete driveway cleaned to an even, bright finish"
          />
        </div>
      </Section>

      <Section className="bg-secondary/50" aria-labelledby="projects-heading">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Recent Work</Eyebrow>
          <h2
            id="projects-heading"
            className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground"
          >
            A brighter Lowcountry, one property at a time
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectImages.map((image, i) => (
            <div
              key={image.src}
              className={
                i % 5 === 0
                  ? "relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm sm:col-span-2 sm:aspect-[16/9]"
                  : "relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm"
              }
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
