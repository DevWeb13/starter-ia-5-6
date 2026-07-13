import { expect, test } from "@playwright/test";

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
  expect(sitemap).toContain("/demo");
  expect(sitemap).not.toContain("/dashboard");
});
