import { expect, test } from "@playwright/test";

test("la landing charge avec sa promesse et ses limites", async ({ page }) => {
  const browserErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") browserErrors.push(message.text());
  });
  page.on("pageerror", (error) => browserErrors.push(error.message));
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /De l’idée au plan que votre équipe IA peut exécuter/i,
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /Essayer la démo locale/i }).first()).toBeVisible();
  await expect(page.getByText(/n’appelle aucune IA/i)).toBeVisible();
  expect(browserErrors).toEqual([]);
});

test("la navigation mène à l’offre future honnête", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Tarifs", exact: true }).first().click();

  await expect(page).toHaveURL(/\/tarifs$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "sans faux prix ni faux checkout",
  );
  await expect(page.getByRole("heading", { name: "Free", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Pro", exact: true })).toBeVisible();
  await expect(page.getByText("Prix à confirmer").first()).toBeVisible();
});

test("un projet est créé, modifié, rechargé, exporté et supprimé", async ({ page }) => {
  await page.goto("/demo");
  await expect(
    page
      .getByRole("navigation", { name: "Navigation principale" })
      .getByRole("link", { name: "Essayer la démo" }),
  ).toHaveAttribute("aria-current", "page");
  await page.getByRole("button", { name: "Générer le plan démo" }).click();
  await expect(page.locator("#idea-error")).toContainText("Décrivez votre idée");

  const ideaInput = page.getByLabel("Idée de produit");
  const exampleButton = page.getByRole("button", { name: "Utiliser l’exemple" });
  await ideaInput.fill(
    "Une application qui aide les associations à organiser leurs bénévoles.",
  );
  await page.getByRole("button", { name: "Générer le plan démo" }).click();
  await expect(ideaInput).toBeDisabled();
  await expect(exampleButton).toBeDisabled();
  await expect(page.getByText("Création et enregistrement local du projet…")).toBeVisible();
  await expect(page).toHaveURL(/\/dashboard\/.+/);
  await expect(page.getByText("Stocké uniquement sur cet appareil")).toBeVisible();

  for (const title of [
    "Proposition de valeur",
    "Cible initiale",
    "MVP",
    "Plan technique",
    "Plan marketing",
    "Prochaines actions",
  ]) {
    await expect(page.getByLabel(title)).toBeVisible();
  }
  await page.getByLabel("Titre").fill("Projet associations édité");
  await expect(page.getByRole("status").filter({ hasText: "Enregistré" })).toBeVisible();
  const markdown = page.waitForEvent("download");
  await page.getByRole("button", { name: "Exporter Markdown" }).click();
  expect((await markdown).suggestedFilename()).toMatch(/\.md$/);
  const json = page.waitForEvent("download");
  await page.getByRole("button", { name: "Exporter JSON" }).click();
  expect((await json).suggestedFilename()).toMatch(/\.json$/);
  await page.reload();
  await expect(page.getByLabel("Titre")).toHaveValue("Projet associations édité");
  await page.getByRole("link", { name: "Dashboard" }).click();
  await expect(page.getByText("Projet associations édité")).toBeVisible();
  page.once("dialog", (dialog) => dialog.accept());
  await page.getByRole("button", { name: "Supprimer" }).click();
  await expect(page.getByText("Aucun projet local")).toBeVisible();
  await page.setViewportSize({ width: 320, height: 640 });
  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
});

test("les données locales invalides expliquent la récupération", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("ai-project-launcher.projects.v1", "invalide"));
  await page.goto("/dashboard");
  await expect(page.getByText("Données locales indisponibles", { exact: true })).toBeVisible();
  await expect(
    page.getByText(
      "Les données locales sont incompatibles ou corrompues. Elles n’ont pas été modifiées.",
      { exact: true },
    ),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Réinitialiser les données locales" })).toBeVisible();
});

test("l’affichage essentiel reste utilisable à 320 px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 640 });
  await page.goto("/");

  const primaryCta = page.getByRole("link", { name: "Essayer la démo locale" }).first();
  await expect(primaryCta).toBeVisible();
  expect((await primaryCta.boundingBox())?.height).toBeGreaterThanOrEqual(44);

  const menu = page.locator('button[aria-controls="mobile-navigation"]');
  await expect(menu).toBeVisible();
  expect((await menu.boundingBox())?.height).toBeGreaterThanOrEqual(44);
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  await menu.click();
  await page.getByRole("navigation", { name: "Navigation mobile" }).getByRole("link", { name: "Tarifs" }).click();
  await expect(page).toHaveURL(/\/tarifs$/);

  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
});

test("le choix du thème sombre persiste", async ({ page }) => {
  const browserErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") browserErrors.push(message.text());
  });
  page.on("pageerror", (error) => browserErrors.push(error.message));
  await page.goto("/");
  const themeToggle = page
    .getByRole("navigation", { name: "Navigation principale" })
    .getByRole("button", { name: /Thème système/i });

  await themeToggle.click();
  await page
    .getByRole("navigation", { name: "Navigation principale" })
    .getByRole("button", { name: /Thème clair/i })
    .click();
  await expect(page.locator("html")).toHaveClass(/dark/);

  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await expect(
    page
      .getByRole("navigation", { name: "Navigation principale" })
      .getByRole("button", { name: /Thème sombre/i }),
  ).toBeVisible();
  expect(browserErrors).toEqual([]);
});

test("une route inconnue affiche la page 404", async ({ page }) => {
  const response = await page.goto("/route-inconnue");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Cette route ne fait pas partie du plan",
  );
  const robotsMeta = page.locator('meta[name="robots"]');
  const robotsContents = await robotsMeta.evaluateAll((elements) =>
    elements.map((element) => element.getAttribute("content") ?? ""),
  );
  expect(robotsContents.length).toBeGreaterThan(0);
  expect(robotsContents.every((content) => content.includes("noindex"))).toBe(true);
  await expect(page.getByRole("link", { name: "Retour à l’accueil" })).toBeVisible();
});
