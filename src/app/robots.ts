import type { MetadataRoute } from "next";

const siteUrl = "https://starter-ia-5-6.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
