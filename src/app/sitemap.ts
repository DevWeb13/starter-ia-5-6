import type { MetadataRoute } from "next";

const siteUrl = "https://starter-ia-5-6.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/fonctionnalites`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/tarifs`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/demo`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/dashboard`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/docs`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
