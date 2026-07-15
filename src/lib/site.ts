import type { Metadata } from "next";

export const SITE_URL = "https://starter-ia.lareponsedev.fr";
export const SITE_METADATA_BASE = new URL(SITE_URL);
export const DEFAULT_OPEN_GRAPH_TITLE = "Starter IA 5.6";
export const DEFAULT_OPEN_GRAPH_DESCRIPTION =
  "Un site de ressources pratique et un kit minimal pour préparer vos projets avec ChatGPT, Work et Codex.";

export const ROOT_METADATA: Metadata = {
  metadataBase: SITE_METADATA_BASE,
  title: {
    default: "Starter IA 5.6 — Guides et kit pour ChatGPT, Work et Codex",
    template: "%s — Starter IA 5.6",
  },
  description:
    "Guides, configurations, templates et prompts pour mieux utiliser ChatGPT, Work et Codex.",
  openGraph: {
    title: DEFAULT_OPEN_GRAPH_TITLE,
    description: DEFAULT_OPEN_GRAPH_DESCRIPTION,
    type: "website",
    locale: "fr_FR",
  },
};

export function absoluteSiteUrl(path: `/${string}`): string {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function createPublicPageMetadata({
  path,
  title,
  description,
  openGraphTitle = DEFAULT_OPEN_GRAPH_TITLE,
  openGraphDescription = DEFAULT_OPEN_GRAPH_DESCRIPTION,
}: {
  path: `/${string}`;
  title?: string;
  description: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
}): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: absoluteSiteUrl(path) },
    openGraph: {
      title: openGraphTitle,
      description: openGraphDescription,
      url: absoluteSiteUrl(path),
      type: "website",
    },
  };
}
