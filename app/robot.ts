import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/member/", "/api/"],
    },
    sitemap: "https://electroxplore.com/sitemap.xml",
    host: "https://electroxplore.com",
  };
}
