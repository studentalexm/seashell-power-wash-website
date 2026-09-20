const steps = [
  {
    title: "Request an estimate",
    body: "Call or fill out the form with your address and what you'd like cleaned. It's free and creates no obligation.",
  },
  {
    title: "We assess your property",
    body: "We review your surfaces and conditions, then recommend the safest, most effective method for each one.",
  },
  {
    title: "We clean with care",
    body: "Soft wash or pressure wash, we protect your landscaping and details while restoring an even, bright finish.",
  },
  {
    title: "Final walkthrough",
    body: "We confirm the results with you and flag anything worth keeping an eye on for the future.",
  },
]

export function Process() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg"
        >
          <span
            aria-hidden="true"
            className="inline-block font-serif text-3xl font-semibold text-accent transition-transform duration-300 group-hover:scale-110"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">
            {step.title}
          </h3>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  )
}
