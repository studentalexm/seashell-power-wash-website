import Image from "next/image"
import { Breadcrumbs, type Crumb } from "./breadcrumbs"
import { Eyebrow } from "./section"

/**
 * Interior page hero with breadcrumbs, an eyebrow, an H1, and optional lead text.
 * Optionally shows a supporting image alongside the copy.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  image,
  imageAlt,
  priority = false,
}: {
  eyebrow?: string
  title: string
  lead?: string
  crumbs: Crumb[]
  image?: string
  imageAlt?: string
  priority?: boolean
}) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-secondary/60 to-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Breadcrumbs items={crumbs} />
        <div
          className={
            image
              ? "mt-6 grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              : "mt-6 max-w-3xl"
          }
        >
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h1 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {lead && (
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {lead}
              </p>
            )}
          </div>
          {image && (
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm animate-in fade-in duration-1000 [animation-delay:150ms]">
              <Image
                src={image || "/placeholder.svg"}
                alt={imageAlt ?? ""}
                fill
                priority={priority}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
