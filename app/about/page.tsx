import type { Metadata } from "next"
import Image from "next/image"
import { ShieldCheck, Leaf, Waves, HandHeart } from "lucide-react"
import { pageMetadata } from "@/lib/seo"
import { PageHero } from "@/components/page-hero"
import { Section, Eyebrow } from "@/components/section"
import { WhyUs } from "@/components/home/why-us"
import { CtaBand } from "@/components/cta-band"
import { site } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "About Seashell Power Wash and discussion",
  description:
    "Seashell Power Wash is a locally based exterior cleaning company serving Charleston, Mount Pleasant, and the Lowcountry with careful, surface-safe soft washing and pressure washing.",
  path: "/about",
})

const values = [
  {
    icon: ShieldCheck,
    title: "Surface-safe by default",
    body: "We'd rather do it right than do it fast. The method always matches the material.",
  },
  {
    icon: Leaf,
    title: "Respect for your property",
    body: "Landscaping, fixtures, and details get protected and cared for, not overlooked.",
  },
  {
    icon: Waves,
    title: "Local coastal knowledge",
    body: "We understand what salt air, humidity, and shade do to Lowcountry exteriors.",
  },
  {
    icon: HandHeart,
    title: "Honest communication",
    body: "Clear estimates, realistic expectations, and a walkthrough when we're done.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Exterior cleaning built for the Lowcountry"
        lead={`${site.name} is a locally based exterior cleaning company serving Charleston, Mount Pleasant, and the surrounding coast with a careful, surface-aware approach.`}
        crumbs={[{ name: "About", href: "/about" }]}
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src="/images/about-lowcountry-exterior-cleaning.png"
              alt="Professional exterior cleaning equipment beside a clean Lowcountry home"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground">
              Rooted in the coast we serve
            </h2>
            <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Living along the Charleston coast means learning firsthand how
                salt air, humidity, and heavy shade wear on a home. Siding goes
                green, roofs streak dark, driveways dull, and glass hazes over
                with salt film, often faster than people expect.
              </p>
              <p>
                Seashell Power Wash was built around a simple idea: exterior
                cleaning should restore your property without putting it at
                risk. That means choosing the right method for every surface,
                soft washing where high pressure would cause harm, and using
                real pressure only where it belongs.
              </p>
              <p>
                We're based in Mount Pleasant and proud to serve homeowners and
                businesses throughout the Lowcountry with careful, dependable
                work and straightforward communication from the first call to
                the final walkthrough.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/50" aria-labelledby="values-heading">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>What We Value</Eyebrow>
          <h2
            id="values-heading"
            className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground"
          >
            How we approach every job
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      <Section aria-labelledby="whyus-heading">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>The Difference</Eyebrow>
          <h2
            id="whyus-heading"
            className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground"
          >
            Why homeowners choose Seashell
          </h2>
        </div>
        <div className="mt-12">
          <WhyUs />
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
