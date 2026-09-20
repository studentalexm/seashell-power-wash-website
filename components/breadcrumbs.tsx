import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { BreadcrumbSchema } from "./structured-data"

export type Crumb = { name: string; href: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "Home", href: "/" }, ...items]
  return (
    <>
      <BreadcrumbSchema items={full} />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
          {full.map((item, i) => {
            const isLast = i === full.length - 1
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {isLast ? (
                  <span aria-current="page" className="font-medium text-foreground">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight
                    className="size-3.5 shrink-0 text-muted-foreground/60"
                    aria-hidden="true"
                  />
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
