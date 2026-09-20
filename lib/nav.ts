import { services } from "./services"
import { locations } from "./locations"

export const serviceNavItems = services.map((s) => ({
  label: s.navLabel,
  href: `/services/${s.slug}`,
}))

export const locationNavItems = locations.map((l) => ({
  label: l.navLabel,
  href: `/service-areas/${l.slug}`,
}))

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", children: serviceNavItems },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas", children: locationNavItems },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export const footerServiceLinks = services.map((s) => ({
  label: s.shortName,
  href: `/services/${s.slug}`,
}))

export const footerLocationLinks = locations.map((l) => ({
  label: l.name,
  href: `/service-areas/${l.slug}`,
}))
