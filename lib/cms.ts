import { cache } from "react"
import { site as staticSite } from "@/lib/site"
import { Sparkles } from "lucide-react"
import { sanityClient } from "@/lib/sanity"
import { services as staticServices, type Service } from "@/lib/services"
import { locations as staticLocations, type Location } from "@/lib/locations"
import { blogPosts as staticPosts, type BlogPost, type BlogSection } from "@/lib/blog"

const REVALIDATE_SECONDS = 60

type PortableBlock = {
  _type: string
  style?: string
  listItem?: string
  children?: { text?: string }[]
}

type ParsedBody = {
  lead: string[]
  sections: { heading?: string; paragraphs: string[]; bullets: string[] }[]
}

async function query<T>(groq: string, tag: string): Promise<T | null> {
  try {
    return await sanityClient.fetch<T>(groq, {}, { next: { revalidate: REVALIDATE_SECONDS, tags: [tag] } })
  } catch (error) {
    console.error(`[cms] Sanity request for ${tag} failed, using built-in content:`, error)
    return null
  }
}

function sizedImage(url?: string) {
  return url ? `${url}?w=1600&auto=format&fit=max` : undefined
}

function parseBody(blocks?: PortableBlock[]): ParsedBody {
  const parsed: ParsedBody = { lead: [], sections: [] }
  for (const block of blocks ?? []) {
    if (block._type !== "block") continue
    const text = (block.children ?? []).map((child) => child.text ?? "").join("").trim()
    if (!text) continue
    const current = parsed.sections.at(-1)
    if (block.style && /^h[1-6]$/.test(block.style)) {
      parsed.sections.push({ heading: text, paragraphs: [], bullets: [] })
    } else if (block.listItem) {
      if (current) current.bullets.push(text)
      else parsed.sections.push({ paragraphs: [], bullets: [text] })
    } else if (current) {
      current.paragraphs.push(text)
    } else {
      parsed.lead.push(text)
    }
  }
  return parsed
}

function sectionBullets(parsed: ParsedBody, pattern: RegExp) {
  const section = parsed.sections.find((s) => s.heading && pattern.test(s.heading))
  return section?.bullets.length ? section.bullets : undefined
}

type SanityService = {
  title?: string
  slug?: string
  shortDescription?: string
  description?: PortableBlock[]
  imageUrl?: string
  imageAlt?: string
}

export async function getServices(): Promise<Service[]> {
  const docs = await query<SanityService[]>(
    `*[_type == "service" && defined(slug.current)] | order(_createdAt asc) {
      title, "slug": slug.current, shortDescription, description,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    }`,
    "sanity-services",
  )
  if (!docs?.length) return staticServices

  const order = (slug: string) => {
    const index = staticServices.findIndex((s) => s.slug === slug)
    return index === -1 ? Number.MAX_SAFE_INTEGER : index
  }

  return docs
    .filter((doc): doc is SanityService & { slug: string } => Boolean(doc.slug))
    .sort((a, b) => order(a.slug) - order(b.slug))
    .map((doc) => {
      const base = staticServices.find((s) => s.slug === doc.slug)
      const body = parseBody(doc.description)
      const name = doc.title ?? base?.shortName ?? doc.slug
      const renamed = Boolean(base && doc.title && doc.title !== base.shortName)
      return {
        slug: doc.slug,
        navLabel: renamed || !base ? name : base.navLabel,
        shortName: name,
        title: renamed || !base ? name : base.title,
        metaTitle: base?.metaTitle ?? name,
        metaDescription: base?.metaDescription ?? doc.shortDescription ?? name,
        icon: base?.icon ?? Sparkles,
        cardSummary: doc.shortDescription ?? base?.cardSummary ?? "",
        image: sizedImage(doc.imageUrl) ?? base?.image ?? "/placeholder.svg",
        imageAlt: doc.imageAlt ?? base?.imageAlt ?? name,
        intro: body.lead[0] ?? base?.intro ?? "",
        body: body.lead.length ? body.lead.slice(1) : (base?.body ?? []),
        includes: sectionBullets(body, /includ/i) ?? base?.includes ?? [],
        bestFor: sectionBullets(body, /best/i) ?? base?.bestFor ?? [],
        faqs: base?.faqs ?? [],
        related: base?.related ?? [],
      }
    })
}

export async function getService(slug: string) {
  return (await getServices()).find((s) => s.slug === slug)
}

type SanityArea = {
  title?: string
  slug?: string
  description?: PortableBlock[]
  imageUrl?: string
  imageAlt?: string
}

export async function getLocations(): Promise<Location[]> {
  const docs = await query<SanityArea[]>(
    `*[_type == "serviceArea" && defined(slug.current)] | order(_createdAt asc) {
      title, "slug": slug.current, description,
      "imageUrl": image.asset->url, "imageAlt": image.alt
    }`,
    "sanity-service-areas",
  )
  if (!docs?.length) return staticLocations

  const order = (slug: string) => {
    const index = staticLocations.findIndex((l) => l.slug === slug)
    return index === -1 ? Number.MAX_SAFE_INTEGER : index
  }

  return docs
    .filter((doc): doc is SanityArea & { slug: string } => Boolean(doc.slug))
    .sort((a, b) => order(a.slug) - order(b.slug))
    .map((doc) => {
      const base = staticLocations.find((l) => l.slug === doc.slug)
      const body = parseBody(doc.description)
      const name = doc.title ?? base?.name ?? doc.slug
      const renamed = Boolean(base && doc.title && doc.title !== base.name)
      const intro = body.lead[0] ?? base?.intro ?? ""
      return {
        slug: doc.slug,
        navLabel: renamed || !base ? name : base.navLabel,
        name,
        title: renamed || !base ? `Exterior Cleaning in ${name}` : base.title,
        metaTitle: base?.metaTitle ?? `Pressure Washing in ${name}`,
        metaDescription: base?.metaDescription ?? intro.slice(0, 160),
        image: sizedImage(doc.imageUrl) ?? base?.image ?? "/placeholder.svg",
        imageAlt: doc.imageAlt ?? base?.imageAlt ?? name,
        blurb: base?.blurb ?? intro,
        intro,
        body: body.lead.length ? body.lead.slice(1) : (base?.body ?? []),
        highlights: sectionBullets(body, /highlight|focus/i) ?? base?.highlights ?? [],
        faqs: base?.faqs ?? [],
      }
    })
}

export async function getLocation(slug: string) {
  return (await getLocations()).find((l) => l.slug === slug)
}

type SanityPost = {
  title?: string
  slug?: string
  excerpt?: string
  category?: string
  publishedAt?: string
  body?: PortableBlock[]
  imageUrl?: string
  imageAlt?: string
}

function readingTime(parsed: ParsedBody) {
  const text = [
    ...parsed.lead,
    ...parsed.sections.flatMap((s) => [s.heading ?? "", ...s.paragraphs, ...s.bullets]),
  ].join(" ")
  const minutes = Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 200))
  return `${minutes} min read`
}

export async function getPosts(): Promise<BlogPost[]> {
  const docs = await query<SanityPost[]>(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      title, "slug": slug.current, excerpt, category, publishedAt, body,
      "imageUrl": mainImage.asset->url, "imageAlt": mainImage.alt
    }`,
    "sanity-posts",
  )
  if (!docs?.length) return staticPosts

  return docs
    .filter((doc): doc is SanityPost & { slug: string } => Boolean(doc.slug))
    .map((doc) => {
      const base = staticPosts.find((p) => p.slug === doc.slug)
      const body = parseBody(doc.body)
      const title = doc.title ?? base?.title ?? "Untitled post"
      const sections: BlogSection[] = [
        ...(body.lead.length > 1 ? [{ paragraphs: body.lead.slice(1) }] : []),
        ...body.sections.map((s) => ({
          heading: s.heading,
          paragraphs: s.paragraphs,
          ...(s.bullets.length ? { bullets: s.bullets } : {}),
        })),
      ]
      return {
        slug: doc.slug,
        title,
        metaTitle: base && base.title === title ? base.metaTitle : title,
        metaDescription: doc.excerpt ?? base?.metaDescription ?? "",
        excerpt: doc.excerpt ?? base?.excerpt ?? "",
        date: (doc.publishedAt ?? base?.date ?? new Date().toISOString()).slice(0, 10),
        readingTime: readingTime(body),
        category: doc.category ?? base?.category ?? "Tips",
        image: sizedImage(doc.imageUrl) ?? base?.image ?? "/placeholder.svg",
        imageAlt: doc.imageAlt ?? base?.imageAlt ?? title,
        intro: body.lead[0] ?? base?.intro ?? "",
        sections: body.lead.length || body.sections.length ? sections : (base?.sections ?? []),
        relatedServices: base?.relatedServices ?? [],
      }
    })
}

export async function getPost(slug: string) {
  return (await getPosts()).find((p) => p.slug === slug)
}

export type GalleryImage = { src: string; alt: string }

export async function getGalleryImages(): Promise<GalleryImage[] | null> {
  const docs = await query<{ title?: string; imageUrl?: string; imageAlt?: string }[]>(
    `*[_type == "galleryItem" && defined(image.asset)] | order(coalesce(completedAt, _createdAt) desc, _id asc) {
      title, "imageUrl": image.asset->url, "imageAlt": image.alt
    }`,
    "sanity-gallery",
  )
  if (!docs?.length) return null
  return docs
    .filter((doc) => doc.imageUrl)
    .map((doc) => ({
      src: sizedImage(doc.imageUrl) as string,
      alt: doc.imageAlt ?? doc.title ?? "Seashell Power Wash project",
    }))
}

export type Testimonial = { quote: string; name: string; where?: string }

export async function getTestimonials(): Promise<Testimonial[] | null> {
  const docs = await query<{ customerName?: string; review?: string; location?: string }[]>(
    `*[_type == "testimonial" && permissionToDisplay == true && defined(review)] | order(publishedAt desc) {
      customerName, review, location
    }`,
    "sanity-testimonials",
  )
  if (!docs?.length) return null
  return docs.map((doc) => ({
    quote: doc.review as string,
    name: doc.customerName ?? "Customer",
    where: doc.location,
  }))
}

type SanityBusiness = {
  businessName?: string
  email?: string
  phone?: string
  street?: string
  city?: string
  region?: string
  postalCode?: string
  googleReviewUrl?: string
}

function phoneParts(input: string | undefined) {
  const digits = input?.replace(/\D/g, "") ?? ""
  const national = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits
  if (national.length !== 10) return staticSite.phone
  return {
    display: `(${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6)}`,
    e164: `+1${national}`,
    sms: `1${national}`,
  }
}

export type Business = {
  name: string
  legalName: string
  email: string
  phone: { display: string; e164: string; sms: string }
  telHref: string
  address: { street: string; city: string; region: string; postalCode: string; country: string }
  base: string
  social: Record<keyof typeof staticSite.social, string>
}

export const getBusiness = cache(async (): Promise<Business> => {
  const doc = await query<SanityBusiness | null>(
    `*[_type == "businessSettings"][0]{businessName, email, phone, street, city, region, postalCode, googleReviewUrl}`,
    "businessSettings",
  )
  const phone = phoneParts(doc?.phone)
  const city = doc?.city?.trim() || staticSite.address.city
  const region = doc?.region?.trim() || staticSite.address.region
  const name = doc?.businessName?.trim() || staticSite.name
  return {
    name,
    legalName: name,
    email: doc?.email?.trim() || staticSite.email,
    phone,
    telHref: `tel:${phone.e164}`,
    address: {
      street: doc?.street?.trim() || staticSite.address.street,
      city,
      region,
      postalCode: doc?.postalCode?.trim() || staticSite.address.postalCode,
      country: staticSite.address.country,
    },
    base: doc?.city || doc?.region ? `${city}, ${region}` : staticSite.base,
    social: { ...staticSite.social, google: doc?.googleReviewUrl?.trim() || staticSite.social.google },
  }
})
