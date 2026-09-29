import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { blogPosts, formatDate } from "@/lib/blog"
import { getWordPressPosts } from "@/lib/wordpress"
import { pageMetadata } from "@/lib/seo"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = pageMetadata({
  title: "Exterior Cleaning Tips & Resources",
  description:
    "Guides on soft washing, roof algae, salt-air maintenance, and keeping Charleston-area homes clean. Practical advice from Seashell Power Wash.",
  path: "/blog",
})

export default async function BlogPage() {
  const posts = (await getWordPressPosts()) ?? blogPosts
  const [featured, ...rest] = posts

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Exterior cleaning tips for the Lowcountry"
        lead="Practical guides on keeping Charleston-area homes clean, from choosing the right cleaning method to managing salt air and roof algae."
        crumbs={[{ name: "Blog", href: "/blog" }]}
      />

      <Section>
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-accent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:grid-cols-2"
        >
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
            <Image
              src={featured.image || "/placeholder.svg"}
              alt={featured.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground">
                {featured.category}
              </span>
              <span>{featured.readingTime}</span>
            </div>
            <h2 className="mt-4 text-balance font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              Read article
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </Link>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-secondary-foreground">
                    {post.category}
                  </span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="mt-3 text-balance font-serif text-lg font-semibold text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <time
                  dateTime={post.date}
                  className="mt-4 text-xs text-muted-foreground"
                >
                  {formatDate(post.date)}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
