import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { getLocations } from "@/lib/cms"

export async function ServiceAreasPreview() {
  const locations = await getLocations()
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {locations.map((location) => (
          <Link
            key={location.slug}
            href={`/service-areas/${location.slug}`}
            className="group flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <MapPin
              className="size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span className="truncate">{location.navLabel}</span>
          </Link>
        ))}
      </div>
      <Link
        href="/service-areas"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-ocean-deep"
      >
        View all service areas
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  )
}
