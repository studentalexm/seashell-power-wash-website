"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone } from "lucide-react"
import { site, telHref } from "@/lib/site"

/**
 * Fixed bottom action bar shown on small screens so a free estimate and a call
 * are always one tap away. Hidden on the contact page where the form lives.
 */
export function MobileEstimateBar() {
  const pathname = usePathname()
  if (pathname === "/contact") return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-3">
        <a
          href={telHref}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background text-sm font-medium text-foreground"
          aria-label={`Call ${site.name}`}
        >
          <Phone className="size-4" aria-hidden="true" />
          Call
        </a>
        <Link
          href="/contact"
          className="inline-flex h-12 flex-[2] items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-sm"
        >
          Get a Free Estimate
        </Link>
      </div>
    </div>
  )
}
