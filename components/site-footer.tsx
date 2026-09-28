import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { site, telHref } from "@/lib/site"
import { footerServiceLinks, footerLocationLinks } from "@/lib/nav"
import { Logo } from "./logo"

const company = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact / Free Estimate", href: "/contact" },
]

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-ocean-deep text-white">
      <div className="mx-auto w-full max-w-7xl px-4 pt-14 pb-28 sm:px-6 lg:px-8 lg:pb-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo onDark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Professional pressure washing, soft washing, and window cleaning for
              homes and businesses across Charleston, Mount Pleasant, and the
              Lowcountry.
            </p>
            <div className="mt-5 flex flex-col gap-2.5 text-sm">
              <a
                href={telHref}
                className="inline-flex items-center gap-2 text-white/90 transition-colors hover:text-white"
              >
                <Phone className="size-4" aria-hidden="true" />
                {site.phone.display}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-white/90 transition-colors hover:text-white"
              >
                <Mail className="size-4" aria-hidden="true" />
                {site.email}
              </a>
              <span className="inline-flex items-center gap-2 text-white/70">
                <MapPin className="size-4" aria-hidden="true" />
                Based in {site.base}
              </span>
            </div>
          </div>

          <nav aria-label="Services">
            <h2 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Service areas">
            <h2 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Service Areas
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {footerLocationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-3" aria-label="Social links">
              <a
                href={site.social.yelp}
                target="_blank"
                rel="noreferrer"
                aria-label="Find Seashell Power Wash on Yelp"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-sm font-bold text-white/80 transition-colors hover:border-white hover:text-white"
              >
                Y
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Seashell Power Wash on Instagram"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-sm font-bold text-white/80 transition-colors hover:border-white hover:text-white"
              >
                ig
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Seashell Power Wash on Facebook"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-sm font-bold text-white/80 transition-colors hover:border-white hover:text-white"
              >
                f
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with Seashell Power Wash on LinkedIn"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-xs font-bold text-white/80 transition-colors hover:border-white hover:text-white"
              >
                in
              </a>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
