import { createClient } from "@sanity/client"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "cmthxaec"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-09-29",
  useCdn: true,
})

export type SanityPost = {
  _id: string
  title?: string
  slug?: { current?: string }
  excerpt?: string
  publishedAt?: string
  category?: string
  imageUrl?: string
}

export async function getSanityPosts(): Promise<SanityPost[]> {
  try {
    return await client.fetch(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        _id,
        title,
        slug,
        "excerpt": coalesce(excerpt, pt::text(body)[0...180]),
        publishedAt,
        category,
        "imageUrl": mainImage.asset->url
      }`,
      {},
      { next: { revalidate: 60, tags: ["sanity-posts"] } },
    )
  } catch (error) {
    console.error("[v0] Sanity posts request failed:", error)
    return []
  }
}

export function isSanityConfigured() {
  return Boolean(projectId && dataset)
}

export { client as sanityClient }
export { projectId as sanityProjectId, dataset as sanityDataset }
