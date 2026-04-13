import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/mission-control/standby", // Success page
          "/_next/",
          "/static/",
        ],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "Claude-Bot", "PerplexityBot", "CCBot"],
        allow: ["/", "/blogs/", "/case-studies/", "/principles/", "/about/"],
      },
    ],
    sitemap: "https://www.saadqadir.com/sitemap.xml",
  };
}
