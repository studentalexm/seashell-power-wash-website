import { Quote } from "lucide-react"
import { getTestimonials, type Testimonial } from "@/lib/cms"

/**
 * Representative testimonials for the template. Replace the quotes and names
 * below with real, verifiable customer reviews before launch. No review or
 * rating schema is emitted, so these do not create misleading structured data.
 */
const testimonials: Testimonial[] = [
  {
    quote:
      "Our siding had gone green on the shaded side and they brought it right back without blasting the house. You can tell they knew exactly how much pressure to use.",
    name: "Homeowner",
    where: "Mount Pleasant",
  },
  {
    quote:
      "The driveway looked brand new and there were none of the streaky lines I've gotten from doing it myself. Easy to schedule and they walked the property with me at the end.",
    name: "Homeowner",
    where: "Daniel Island",
  },
  {
    quote:
      "Salt film had hazed all our windows facing the water. After they finished, the view was crystal clear again. Careful, tidy, and professional.",
    name: "Homeowner",
    where: "Isle of Palms",
  },
]

export async function Testimonials() {
  const items = (await getTestimonials())?.slice(0, 6) ?? testimonials
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((testimonial) => (
        <figure
          key={testimonial.quote}
          className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg"
        >
          <Quote
            className="size-8 text-accent transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          />
          <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
            {testimonial.quote}
          </blockquote>
          <figcaption className="mt-5 text-sm font-medium text-muted-foreground">
            {testimonial.name}
            {testimonial.where && (
              <span className="text-muted-foreground/70">
                {" "}
                · {testimonial.where}
              </span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
