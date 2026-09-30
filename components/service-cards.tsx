import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getServices } from "@/lib/cms"
import { Reveal } from "@/components/reveal"

export async function ServiceCards({ exclude }: { exclude?: string }) {
  const list = (await getServices()).filter((s) => s.slug !== exclude)
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {list.map((service, i) => {
        const Icon = service.icon
        return (
          <Reveal key={service.slug} delay={(i % 4) * 90}>
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                {service.shortName}
              </h3>
              <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {service.cardSummary}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Learn More
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </Reveal>
        )
      })}
    </div>
  )
}
