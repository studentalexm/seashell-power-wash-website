import type { Metadata } from "next"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { pageMetadata } from "@/lib/seo"
import { getGalleryImages } from "@/lib/cms"
import { PageHero } from "@/components/page-hero"
import { Section, Eyebrow } from "@/components/section"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = pageMetadata({
  title: "Gallery of Exterior Cleaning Results",
  description:
    "See before-and-after results from house washing, roof cleaning, driveway cleaning, and window cleaning across the Charleston Lowcountry. Free estimates.",
  path: "/gallery",
})

const beforeAfterJobs = [
  {
    src: "/images/deck-pressure-washing-isle-of-palms-sc-before-after.png",
    alt: "Before and after deck pressure washing in Isle of Palms, SC: a weathered, algae-covered wooden deck and railings restored to clean, warm brown wood",
    service: "Deck pressure washing",
    location: "Isle of Palms, SC",
    width: 2048,
    height: 768,
    wide: true,
  },
  {
    src: "/images/house-washing-folly-island-sc-before-after.png",
    alt: "Before and after house washing in Folly Island, SC: rust-stained porch ceiling and green algae on vinyl siding cleaned to a bright finish",
    service: "House washing",
    location: "Folly Island, SC",
    width: 1447,
    height: 1087,
    wide: false,
  },
  {
    src: "/images/house-washing-james-island-sc-before-after.png",
    alt: "Before and after house washing in James Island, SC: dark mildew streaks removed from tall beige vinyl siding",
    service: "House washing",
    location: "James Island, SC",
    width: 1536,
    height: 1024,
    wide: false,
  },
  {
    src: "/images/house-soft-wash-kiawah-island-sc-before-after.png",
    alt: "Before and after house soft washing in Kiawah Island, SC: green algae cleaned off lap siding beside a red brick corner",
    service: "House soft wash",
    location: "Kiawah Island, SC",
    width: 1536,
    height: 1024,
    wide: false,
  },
  {
    src: "/images/retaining-wall-pressure-washing-mount-pleasant-sc-before-after.jpg",
    alt: "Before and after pressure washing in Mount Pleasant, SC: moss and grime removed from a curved stone block retaining wall",
    service: "Retaining wall pressure washing",
    location: "Mount Pleasant, SC",
    width: 2048,
    height: 768,
    wide: true,
  },
]

const projectImages = [
  {
    src: "/images/house-washing-daniel-island-sc.png",
    alt: "House washing in Daniel Island, SC: freshly soft-washed white home with a clean porch",
  },
  {
    src: "/images/house-washing-roof-soft-wash-sullivans-island-sc.png",
    alt: "House washing in Sullivan's Island, SC: roof soft wash with algae streaks removed",
  },
  {
    src: "/images/window-cleaning-isle-of-palms-sc.png",
    alt: "Window cleaning in Isle of Palms, SC: large coastal home windows cleaned streak-free",
  },
  {
    src: "/images/house-washing-driveway-cleaning-mount-pleasant-sc.png",
    alt: "House washing in Mount Pleasant, SC: concrete driveway cleaned to an even, bright finish",
  },
  {
    src: "/images/house-washing-deck-cleaning-folly-island-sc.png",
    alt: "House washing in Folly Island, SC: clean wooden deck with outdoor furniture",
  },
  {
    src: "/images/gutter-cleaning-charleston-sc.png",
    alt: "Gutter cleaning in Charleston, SC: bright white gutters along a clean roofline",
  },
  {
    src: "/images/window-cleaning-commercial-storefront-charleston-sc.png",
    alt: "Window cleaning in Charleston, SC: clean commercial storefront glass and walkway",
  },
  {
    src: "/images/house-washing-charleston-sc-home-exterior.png",
    alt: "House washing in Charleston, SC: freshly cleaned Lowcountry home exterior",
  },
]

export const revalidate = 60

export default async function GalleryPage() {
  const galleryImages = (await getGalleryImages()) ?? projectImages
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
            Real results from Lowcountry jobs
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {beforeAfterJobs.map((job) => (
            <figure
              key={job.src}
              className={job.wide ? "md:col-span-2 lg:col-span-3" : undefined}
            >
              <div className="relative">
                <Image
                  src={job.src}
                  alt={job.alt}
                  width={job.width}
                  height={job.height}
                  sizes={
                    job.wide
                      ? "(max-width: 1280px) 100vw, 1200px"
                      : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="h-auto w-full rounded-2xl border border-border shadow-sm"
                />
                <p className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm sm:text-sm">
                  <MapPin className="size-4 text-primary" aria-hidden="true" />
                  {job.location}
                </p>
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">{job.service}</span>
                {" in "}
                {job.location}
              </figcaption>
            </figure>
          ))}
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
          {galleryImages.map((image, i) => (
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
