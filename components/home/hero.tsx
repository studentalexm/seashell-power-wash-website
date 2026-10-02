import Image from "next/image"
import { ShieldCheck, Waves, MapPin } from "lucide-react"
import { EstimateButton, CallButton } from "@/components/site-buttons"
import { site } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/house-washing-charleston-sc-home-exterior.png"
          alt="Freshly cleaned Charleston Lowcountry home exterior at golden hour"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/85 via-ocean-deep/70 to-ocean-deep/85" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <p className="inline-flex animate-in items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur-sm fade-in slide-in-from-bottom-3 duration-700">
            <MapPin className="size-4" aria-hidden="true" />
            {site.primaryMarket}
          </p>
          <h1 className="mt-6 animate-in text-balance font-serif text-4xl font-semibold leading-[1.1] text-white fade-in slide-in-from-bottom-4 duration-700 [animation-delay:120ms] sm:text-5xl lg:text-6xl">
            Pressure Washing &amp; Window Cleaning for the Lowcountry
          </h1>
          <p className="mt-6 max-w-xl animate-in text-pretty text-lg leading-relaxed text-white/85 fade-in slide-in-from-bottom-4 duration-700 [animation-delay:240ms]">
            Salt air, humidity, and shade are hard on Charleston-area homes. We
            bring siding, roofs, driveways, and glass back to life with
            surface-safe soft washing and pressure washing.
          </p>
          <div className="mt-9 flex animate-in flex-col gap-3 fade-in slide-in-from-bottom-4 duration-700 [animation-delay:360ms] sm:flex-row">
            <EstimateButton size="lg" className="w-full sm:w-auto" />
            <CallButton
              size="lg"
              variant="outline"
              className="w-full border-white/30 bg-white/5 text-white hover:bg-white/15 sm:w-auto"
            />
          </div>

          <ul className="mt-10 flex animate-in flex-wrap gap-x-6 gap-y-3 text-sm text-white/85 fade-in duration-1000 [animation-delay:520ms]">
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-seafoam" aria-hidden="true" />
              Surface-safe methods
            </li>
            <li className="inline-flex items-center gap-2">
              <Waves className="size-4 text-seafoam" aria-hidden="true" />
              Coastal &amp; salt-air experience
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-seafoam" aria-hidden="true" />
              Locally based in Mount Pleasant
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
