import type { MetadataRoute } from "next"
import { site } from "@/lib/site"
import { getLocations, getPosts, getServices } from "@/lib/cms"

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const [services, locations, blogPosts] = await Promise.all([
    getServices(),
    getLocations(),
    getPosts(),
  ])

  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/service-areas", priority: 0.9 },
    { path: "/gallery", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/blog", priority: 0.7 },
    { path: "/faq", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ].map((route) => ({
    url: `${site.url}${route.path === "/" ? "" : route.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }))

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const locationRoutes = locations.map((location) => ({
    url: `${site.url}/service-areas/${location.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const blogRoutes = blogPosts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes]
}
