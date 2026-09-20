import type { Metadata } from "next"
import { site } from "./site"

type PageMetaInput = {
  title: string
  description: string
  /** Path beginning with "/" — used to build the canonical URL. */
  path: string
  image?: string
}

/**
 * Build consistent, unique metadata (title, description, canonical, Open Graph,
 * Twitter) for a page.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = "/images/og-seashell-power-wash.png",
}: PageMetaInput): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}
