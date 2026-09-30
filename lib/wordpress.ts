import type { BlogPost } from "@/lib/blog"

const wordpressUrl = "https://1286662.us20.myftpupload.com"
const wordpressUsername = "seashell"

function getAuthHeader() {
  const password = process.env.WORDPRESS_APPLICATION_PASSWORD
  if (!password) return undefined
  return `Basic ${Buffer.from(`${wordpressUsername}:${password}`).toString("base64")}`
}

export async function getWordPressPosts(): Promise<BlogPost[] | null> {
  const auth = getAuthHeader()
  if (!auth) return null

  try {
    const response = await fetch(`${wordpressUrl}/wp-json/wp/v2/posts?per_page=100&_embed`, {
      headers: { Authorization: auth },
      next: { revalidate: 300 },
    })

    if (!response.ok) return null
    const posts = (await response.json()) as Array<{
      slug: string
      date: string
      title: { rendered: string }
      excerpt: { rendered: string }
      content: { rendered: string }
      _embedded?: { [key: string]: unknown }
    }>

    return posts.map((post) => ({
      slug: post.slug,
      title: post.title.rendered.replace(/<[^>]+>/g, ""),
      metaTitle: post.title.rendered.replace(/<[^>]+>/g, ""),
      metaDescription: post.excerpt.rendered.replace(/<[^>]+>/g, "").trim(),
      excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, "").trim(),
      date: post.date.slice(0, 10),
      readingTime: "",
      category: "Lowcountry Home Care",
      image: "/images/charleston-home-exterior-pressure-washing-hero.png",
      imageAlt: post.title.rendered.replace(/<[^>]+>/g, ""),
      intro: post.excerpt.rendered.replace(/<[^>]+>/g, "").trim(),
      sections: [{ paragraphs: [post.content.rendered.replace(/<[^>]+>/g, "").trim()] }],
      relatedServices: [],
    }))
  } catch {
    return null
  }
}

export function getWordPressApiUrl() {
  return wordpressUrl
}

export function hasWordPressCredentials() {
  return Boolean(process.env.WORDPRESS_APPLICATION_PASSWORD)
}
