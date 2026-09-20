import { EstimateButton, CallButton } from "./site-buttons"

export function CtaBand({
  heading = "Ready for a Cleaner, Brighter Property?",
  text = "Tell us about your property and we'll put together a free, no-obligation estimate. Requesting a quote creates no commitment.",
}: {
  heading?: string
  text?: string
}) {
  return (
    <section className="animate-sheen isolate bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-balance font-serif text-3xl font-semibold sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
          {text}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <EstimateButton
            size="lg"
            className="w-full bg-white text-primary hover:bg-white/90 sm:w-auto"
          />
          <CallButton
            size="lg"
            className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 sm:w-auto"
          />
        </div>
      </div>
    </section>
  )
}
