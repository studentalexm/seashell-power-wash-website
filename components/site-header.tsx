"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { mainNav } from "@/lib/nav"
import { Logo } from "./logo"
import { EstimateButton } from "./site-buttons"

export function SiteHeader({ phone, telHref }: { phone: string; telHref: string }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false)
    setExpanded(null)
  }, [pathname])

  // Prevent body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary group-focus-within:text-primary",
                    pathname.startsWith(item.href) && "text-primary",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className="size-3.5 transition-transform group-hover:rotate-180"
                    aria-hidden="true"
                  />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="overflow-hidden rounded-xl border border-border bg-popover p-1.5 shadow-lg">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            "block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary",
                            pathname === child.href && "bg-secondary text-primary",
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary",
                  (pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href))) &&
                    "text-primary",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            <Phone className="size-4" aria-hidden="true" />
            {phone}
          </a>
          <EstimateButton size="sm" label="Free Estimate" />
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile slide-out menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-foreground/40 transition-opacity",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={cn(
            "fixed inset-y-0 right-0 z-[60] flex h-screen w-[85%] max-w-sm flex-col overflow-hidden bg-card text-card-foreground shadow-xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-20 items-center justify-between border-b border-border px-4">
            <Logo onNavigate={() => setOpen(false)} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-md text-foreground"
              aria-label="Close menu"
            >
              <X className="size-6" aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="flex-1 overflow-y-auto overscroll-contain px-4 py-4"
          >
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className="flex-1 rounded-lg px-3 py-3 text-base font-medium text-foreground"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(expanded === item.label ? null : item.label)
                        }
                        className="inline-flex size-11 items-center justify-center rounded-lg text-foreground"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={expanded === item.label}
                      >
                        <ChevronDown
                          className={cn(
                            "size-5 transition-transform",
                            expanded === item.label && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    {expanded === item.label && (
                      <ul className="mb-1 ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block rounded-lg px-3 py-2.5 text-sm text-foreground/80"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="border-t border-border p-4">
            <EstimateButton className="w-full" label="Get a Free Estimate" />
            <a
              href={telHref}
              className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-foreground"
            >
              <Phone className="size-4" aria-hidden="true" />
              {phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
