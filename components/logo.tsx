import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site"

/**
 * Brand logo. Renders the official Seashell emblem (transparent PNG), so it
 * sits cleanly on both the light header and the dark footer with no treatment.
 * The mark lifts on hover. `onDark` is kept for API compatibility but needs
 * no special handling.
 */
export function Logo({
  className,
  onNavigate,
  onDark = false,
}: {
  className?: string
  onNavigate?: () => void
  onDark?: boolean
}) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label={`${site.name} — home`}
      className={cn("group inline-flex items-center", className)}
    >
      <Image
        src="/images/seashell-logo.png?v=2"
        alt={`${site.name} logo`}
        width={320}
        height={320}
        className={cn(
          "w-auto drop-shadow-sm transition-transform duration-500 ease-out group-hover:scale-110",
          onDark ? "h-24" : "h-20",
        )}
        priority
      />
    </Link>
  )
}
