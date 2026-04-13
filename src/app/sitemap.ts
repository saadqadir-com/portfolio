import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogs";
import { caseStudies } from "@/data/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.saadqadir.com";

  // Static routes
  const routes = [
    "",
    "/about",
    "/principles",
    "/case-studies",
    "/blogs",
    "/contact",
    "/mission-control/briefing",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog posts
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Case studies
  const studyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes, ...studyRoutes];
}
