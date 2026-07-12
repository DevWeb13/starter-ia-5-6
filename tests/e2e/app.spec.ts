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
      name: /Starter IA pour Chat, Work et Codex/i,
    }),
  ).toBeVisible();
  const primaryCta = page.getByRole("link", { name: /Choisir une configuration/i }).first();
  await expect(primaryCta).toBeVisible();
  await expect(primaryCta).toHaveAttribute("href", "/docs");
  await expect(page.getByText(/n’intègre aucun fournisseur/i)).toBeVisible();
  await expect(
    page
      .getByRole("navigation", { name: "Navigation principale" })
      .getByRole("link", { name: "Dashboard", exact: true }),
  ).toHaveCount(0);
  expect(browserErrors).toEqual([]);
});

test("le catalogue distingue les cinq configurations", async ({ page }) => {
  await page.goto("/docs");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Choisir la configuration la plus simple",
  );
  for (const configuration of ["Chat", "Work", "Codex local", "Codex Remote", "Work + Codex"]) {
    await expect(page.getByRole("heading", { name: configuration, exact: true })).toBeVisible();
  }
  await expect(page.getByRole("link", { name: "Lire le guide complet" })).toHaveCount(5);
});

test("la navigation mène à un index de ressources sans vocabulaire commercial", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Ressources", exact: true }).first().click();

  await expect(page).toHaveURL(/\/tarifs$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("L’index des ressources Starter IA");
  await expect(page.getByText("WORKFLOW.md", { exact: true })).toBeVisible();
  await expect(page.getByText("prompts/MASTER-WORK.md", { exact: true })).toBeVisible();
  await expect(page.locator("main")).not.toContainText(/prix|abonnement|offre|formule/i);
});

test("la méthode expose le processus commun et ses sources", async ({ page }) => {
  await page.goto("/fonctionnalites");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("livraison vérifiée");
  await expect(page.getByRole("heading", { name: "Exécuter avec un seul écrivain" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Lire WORKFLOW.md" })).toBeVisible();
});

test("un projet est créé, modifié, rechargé, exporté et supprimé", async ({ page }) => {
  await page.goto("/demo");
  await expect(
    page
      .getByRole("navigation", { name: "Navigation principale" })
      .getByRole("link", { name: "Démo locale" }),
  ).toHaveAttribute("aria-current", "page");
  await expect(page.getByRole("link", { name: "Voir les projets locaux" })).toHaveAttribute("href", "/dashboard");
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
  await expect(page.getByText("Démonstration locale historique.", { exact: true })).toBeVisible();

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
  await page
    .getByRole("main")
    .getByRole("link", { name: "Dashboard", exact: true })
    .click();
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
  await page.addInitScript(() => localStorage.setItem("ai-project-launcher.projects.v1", JSON.stringify({
    schemaVersion: 1,
    projects: [{
      id: "invalid-date",
      schemaVersion: 1,
      title: "Projet corrompu",
      originalIdea: "Idée",
      valueProposition: "Valeur",
      target: "Cible",
      mvp: [],
      technicalPlan: [],
      marketingPlan: [],
      nextActions: [],
      createdAt: "2026-07-11T00:00:00.000Z",
      updatedAt: "date-invalide",
    }],
  })));
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

test("l’éditeur arbitre un conflit entre deux onglets sans écrasement silencieux", async ({ page, context }) => {
  const id = "project-conflict";
  await page.goto("/");
  await page.evaluate(({ projectId }) => localStorage.setItem("ai-project-launcher.projects.v1", JSON.stringify({
    schemaVersion: 1,
    projects: [{
      id: projectId,
      schemaVersion: 1,
      title: "Version locale B",
      originalIdea: "Une idée suffisamment détaillée pour le test",
      valueProposition: "Valeur",
      target: "Cible",
      mvp: ["MVP"],
      technicalPlan: ["Technique"],
      marketingPlan: ["Marketing"],
      nextActions: ["Action"],
      createdAt: "2026-07-11T00:00:00.000Z",
      updatedAt: "2026-07-11T00:00:00.000Z",
    }],
  })), { projectId: id });

  const otherPage = await context.newPage();
  await Promise.all([page.goto(`/dashboard/${id}`), otherPage.goto(`/dashboard/${id}`)]);
  await expect(page.getByLabel("Titre")).toHaveValue("Version locale B");
  await expect(otherPage.getByLabel("Titre")).toHaveValue("Version locale B");

  await page.getByLabel("Titre").fill("Version enregistrée A");
  const conflictAlert = otherPage.getByRole("alert").filter({ hasText: "Modification détectée" });
  await expect(conflictAlert).toContainText("Modification détectée");
  await expect(otherPage.getByLabel("Titre")).toBeDisabled();
  await expect(conflictAlert).toBeFocused();
  await otherPage.getByRole("button", { name: "Conserver et enregistrer mon édition" }).click();
  await otherPage.reload();
  await expect(otherPage.getByLabel("Titre")).toHaveValue("Version locale B");
});

test("l’affichage essentiel reste utilisable à 320 px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 640 });
  await page.goto("/");

  const primaryCta = page.getByRole("link", { name: "Choisir une configuration" }).first();
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
  await page.getByRole("navigation", { name: "Navigation mobile" }).getByRole("link", { name: "Ressources" }).click();
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
