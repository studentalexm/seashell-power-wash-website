import Link from "next/link"
import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { site, telHref } from "@/lib/site"

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50"

const sizes = {
  default: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
  sm: "h-9 px-4 text-sm",
}

type Size = keyof typeof sizes

/** Primary "Get a Free Estimate" call to action. */
export function EstimateButton({
  className,
  size = "default",
  label = "Get a Free Estimate",
}: {
  className?: string
  size?: Size
  label?: string
}) {
  return (
    <Link
      href="/contact"
      className={cn(
        base,
        sizes[size],
        "bg-primary text-primary-foreground shadow-sm hover:bg-ocean-deep hover:shadow-md",
        className,
      )}
    >
      {label}
    </Link>
  )
}

/** Click-to-call button. */
export function CallButton({
  className,
  size = "default",
  variant = "outline",
  showNumber = true,
}: {
  className?: string
  size?: Size
  variant?: "outline" | "solid" | "ghost"
  showNumber?: boolean
}) {
  const variants = {
    outline: "border border-border bg-background text-foreground hover:bg-secondary",
    solid: "bg-accent text-accent-foreground hover:bg-accent/85",
    ghost: "text-foreground hover:bg-secondary",
  }
  return (
    <a
      href={telHref}
      className={cn(base, sizes[size], variants[variant], className)}
      aria-label={`Call ${site.name} at ${site.phone.display}`}
    >
      <Phone className="size-4" aria-hidden="true" />
      {showNumber ? `Call ${site.phone.display}` : "Call Now"}
    </a>
  )
}
