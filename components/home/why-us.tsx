import { Leaf, Gauge, MessageSquare, Home } from "lucide-react"

const points = [
  {
    icon: Gauge,
    title: "The right method for every surface",
    body: "We match soft washing or pressure washing to each material, so siding and roofs are treated gently while concrete gets the power it needs.",
  },
  {
    icon: Leaf,
    title: "Care for your property",
    body: "We pre-wet and rinse landscaping, protect fixtures, and clean around the details instead of rushing through them.",
  },
  {
    icon: Home,
    title: "Built for the Lowcountry",
    body: "Salt film, humidity, and shade create problems specific to the coast. We clean with those conditions in mind.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    body: "From a straightforward estimate to a final walkthrough, you'll know what we're doing and why at every step.",
  },
]

export function WhyUs() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {points.map((point) => {
        const Icon = point.icon
        return (
          <div
            key={point.title}
            className="group flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {point.body}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
