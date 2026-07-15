import { expect, test } from "@playwright/test";

const canonicalOrigin = "https://starter-ia.lareponsedev.fr";
const legacyOrigin = "https://starter-ia-5-6.vercel.app";
const publicRoutes = ["/", "/docs", "/ressources", "/fonctionnalites", "/accompagnement", "/demo"];

test("chaque page publique expose sa propre canonical et son URL Open Graph de production", async ({ page }) => {
  for (const path of publicRoutes) {
    await page.goto(path);

    const expectedUrl = `${canonicalOrigin}${path}`;
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", expectedUrl);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", expectedUrl);

    const publicMetadata = await page.locator('link[rel="canonical"], meta[property^="og:"], meta[name^="twitter:"]').evaluateAll(
      (elements) => elements.map((element) => element.outerHTML).join("\n"),
    );
    expect(publicMetadata).not.toContain(legacyOrigin);
  }
});

test("l’origine de la requête ne remplace jamais l’origine canonique de production", async ({ page }) => {
  await page.goto("/accompagnement");

  expect(new URL(page.url()).origin).not.toBe(canonicalOrigin);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `${canonicalOrigin}/accompagnement`,
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    `${canonicalOrigin}/accompagnement`,
  );
});

test("les routes locales restent hors de l’indexation publique", async ({ page, request }) => {
  for (const path of ["/dashboard", "/dashboard/projet-inexistant"]) {
    await page.goto(path);

    const robotsContents = await page.locator('meta[name="robots"]').evaluateAll((elements) =>
      elements.map((element) => element.getAttribute("content") ?? ""),
    );

    expect(robotsContents.length).toBeGreaterThan(0);
    expect(robotsContents.every((content) => content.includes("noindex"))).toBe(true);
    expect(robotsContents.every((content) => content.includes("nofollow"))).toBe(true);
  }

  const sitemapResponse = await request.get("/sitemap.xml");
  expect(sitemapResponse.ok()).toBe(true);

  const sitemap = await sitemapResponse.text();
  expect(sitemap).toContain(`<loc>${canonicalOrigin}/</loc>`);
  for (const path of publicRoutes.slice(1)) {
    expect(sitemap).toContain(`<loc>${canonicalOrigin}${path}</loc>`);
  }
  expect(sitemap).not.toContain(legacyOrigin);
  expect(sitemap).toContain("/ressources");
  expect(sitemap).toContain("/accompagnement");
  expect(sitemap).toContain("/demo");
  expect(sitemap).not.toContain("/tarifs");
  expect(sitemap).not.toContain("/dashboard");

  const robotsResponse = await request.get("/robots.txt");
  expect(robotsResponse.ok()).toBe(true);

  const robots = await robotsResponse.text();
  expect(robots).toContain(`Sitemap: ${canonicalOrigin}/sitemap.xml`);
  expect(robots).not.toContain(legacyOrigin);
});
