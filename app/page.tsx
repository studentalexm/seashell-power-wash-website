import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Hero } from "@/components/home/hero"
import { WhyUs } from "@/components/home/why-us"
import { Process } from "@/components/home/process"
import { Testimonials } from "@/components/home/testimonials"
import { ServiceAreasPreview } from "@/components/home/service-areas-preview"
import { ServiceCards } from "@/components/service-cards"
import { BeforeAfter } from "@/components/before-after"
import { FaqAccordion } from "@/components/faq-accordion"
import { Section, Eyebrow } from "@/components/section"
import { CtaBand } from "@/components/cta-band"
import { Reveal } from "@/components/reveal"
import { FAQSchema } from "@/components/structured-data"
import { EstimateButton } from "@/components/site-buttons"

const homeFaqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve Charleston, Mount Pleasant, Daniel Island, Isle of Palms, Sullivan's Island, James Island, Folly Beach, and the surrounding Lowcountry communities.",
  },
  {
    question: "What is the difference between soft washing and pressure washing?",
    answer:
      "Soft washing uses low pressure with cleaning solutions to safely clean delicate surfaces like siding and roofs. Pressure washing uses higher pressure for durable surfaces like concrete. We choose the right method for each surface.",
  },
  {
    question: "Is requesting an estimate really free?",
    answer:
      "Yes. Estimates are free and there's no obligation. Tell us about your property and what you'd like cleaned, and we'll follow up with the details.",
  },
  {
    question: "Do you clean both homes and businesses?",
    answer:
      "We handle residential and commercial exteriors, from single-family homes to storefronts, walkways, and building facades.",
  },
]

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={homeFaqs} />
      <Hero />

      <Section aria-labelledby="services-heading">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our Services</Eyebrow>
          <h2
            id="services-heading"
            className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl"
          >
            Exterior cleaning, matched to every surface
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            From soft washing delicate siding to powering grime off concrete, we
            clean the whole exterior of your Lowcountry property.
          </p>
        </Reveal>
        <Reveal className="mt-12" delay={120}>
          <ServiceCards />
        </Reveal>
      </Section>

      <Section className="bg-secondary/50" aria-labelledby="results-heading">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>See the Difference</Eyebrow>
            <h2
              id="results-heading"
              className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl"
            >
              Real results you can see
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Drag the slider to compare. Years of algae, mildew, and salt film
              lift away to reveal the surface underneath, cleaned with the right
              method for the material.
            </p>
            <div className="mt-8">
              <EstimateButton />
            </div>
          </Reveal>
          <Reveal className="grid gap-6" delay={140}>
            <BeforeAfter
              beforeSrc="/images/house-wash-before.jpg"
              afterSrc="/images/house-wash-after.png"
              beforeAlt="Stucco home chimney and facade before house washing, with dark weathering and staining"
              afterAlt="Stucco home chimney and facade after house washing, with a clean bright finish"
            />
            <BeforeAfter
              beforeSrc="/images/driveway-wash-before.jpg"
              afterSrc="/images/driveway-wash-after.png"
              beforeAlt="Concrete driveway before pressure washing, with dark staining and weathering"
              afterAlt="Concrete driveway after pressure washing, with a bright clean finish"
            />
          </Reveal>
        </div>
      </Section>

      <Section aria-labelledby="why-heading">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Seashell</Eyebrow>
          <h2
            id="why-heading"
            className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl"
          >
            A careful approach that protects your property
          </h2>
        </Reveal>
        <Reveal className="mt-12" delay={120}>
          <WhyUs />
        </Reveal>
      </Section>

      <Section className="bg-secondary/50" aria-labelledby="process-heading">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>How It Works</Eyebrow>
          <h2
            id="process-heading"
            className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl"
          >
            Simple from first call to final rinse
          </h2>
        </Reveal>
        <Reveal className="mt-12" delay={120}>
          <Process />
        </Reveal>
      </Section>

      <Section aria-labelledby="areas-heading">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Service Areas</Eyebrow>
          <h2
            id="areas-heading"
            className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl"
          >
            Proudly serving the Charleston Lowcountry
          </h2>
        </Reveal>
        <Reveal className="mt-12" delay={120}>
          <ServiceAreasPreview />
        </Reveal>
      </Section>

      <Section className="bg-secondary/50" aria-labelledby="testimonials-heading">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Testimonials</Eyebrow>
          <h2
            id="testimonials-heading"
            className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl"
          >
            What Lowcountry homeowners value
          </h2>
        </Reveal>
        <Reveal className="mt-12" delay={120}>
          <Testimonials />
        </Reveal>
      </Section>

      <Section aria-labelledby="home-faq-heading">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2
              id="home-faq-heading"
              className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl"
            >
              Frequently asked questions
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              A few of the things homeowners ask most. Have another question?
              We're happy to help.
            </p>
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-ocean-deep"
            >
              See all FAQs
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={140}>
            <FaqAccordion faqs={homeFaqs} />
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
