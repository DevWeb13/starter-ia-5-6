import type { MetadataRoute } from "next";

import { absoluteSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteSiteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteSiteUrl("/docs"), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteSiteUrl("/ressources"), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteSiteUrl("/fonctionnalites"), changeFrequency: "monthly", priority: 0.85 },
    { url: absoluteSiteUrl("/accompagnement"), changeFrequency: "monthly", priority: 0.75 },
    { url: absoluteSiteUrl("/demo"), changeFrequency: "monthly", priority: 0.4 },
  ];
}
