import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatDate } from "@/lib/blog"
import { getPost, getPosts, getServices } from "@/lib/cms"
import { pageMetadata } from "@/lib/seo"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Section } from "@/components/section"
import { CheckList } from "@/components/prose-list"
import { CtaBand } from "@/components/cta-band"
import { site } from "@/lib/site"

export const revalidate = 60

export async function generateStaticParams() {
  return (await getPosts()).map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return pageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.image,
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const [post, services] = await Promise.all([getPost(slug), getServices()])
  if (!post) notFound()

  const related = post.relatedServices
    .map((s) => services.find((item) => item.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.image.startsWith("http") ? post.image : `${site.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@id": `${site.url}/#business` },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article>
        <div className="border-b border-border bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Blog", href: "/blog" },
                { name: post.title, href: `/blog/${post.slug}` },
              ]}
            />
            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground">
                {post.category}
              </span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              {post.title}
            </h1>
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <p className="mt-10 text-pretty text-xl leading-relaxed text-foreground/90">
            {post.intro}
          </p>

          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading ?? section.paragraphs[0]}>
                {section.heading && (
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    {section.heading}
                  </h2>
                )}
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-pretty leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && (
                  <CheckList items={section.bullets} className="mt-4" />
                )}
              </section>
            ))}
          </div>

          {related.length > 0 && (
            <div className="mt-12 rounded-2xl border border-border bg-secondary/50 p-6 sm:p-8">
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Related services
              </h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {related.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {service.shortName}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CtaBand />
    </>
  )
}
