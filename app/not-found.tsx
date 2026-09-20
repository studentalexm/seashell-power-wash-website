import Link from "next/link"
import { EstimateButton } from "@/components/site-buttons"

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="font-serif text-6xl font-semibold text-accent">404</p>
      <h1 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
        The page you&apos;re looking for may have moved or no longer exists.
        Let&apos;s get you back to a clean start.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Back to home
        </Link>
        <EstimateButton />
      </div>
    </section>
  )
}
