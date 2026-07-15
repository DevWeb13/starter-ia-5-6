import { describe, expect, it } from "vitest";

import {
  absoluteSiteUrl,
  createPublicPageMetadata,
  ROOT_METADATA,
  SITE_METADATA_BASE,
  SITE_URL,
} from "./site";

describe("origine publique du site", () => {
  it("utilise le domaine personnalisé comme metadataBase", () => {
    expect(SITE_METADATA_BASE.toString()).toBe(`${SITE_URL}/`);
    expect(ROOT_METADATA.metadataBase).toBe(SITE_METADATA_BASE);
    expect(SITE_URL).toBe("https://starter-ia.lareponsedev.fr");
  });

  it("construit les URL publiques sans double slash", () => {
    expect(absoluteSiteUrl("/")).toBe("https://starter-ia.lareponsedev.fr/");
    expect(absoluteSiteUrl("/accompagnement")).toBe(
      "https://starter-ia.lareponsedev.fr/accompagnement",
    );
  });

  it("produit des canonical et URL Open Graph absolues", () => {
    const metadata = createPublicPageMetadata({
      path: "/docs",
      title: "Choisir sa configuration",
      description: "Description de test",
      openGraphTitle: "Choisir sa configuration",
    });

    expect(metadata.alternates?.canonical).toBe("https://starter-ia.lareponsedev.fr/docs");
    expect(metadata.openGraph?.url).toBe("https://starter-ia.lareponsedev.fr/docs");
  });
});
