import { expect, test, type Download, type Page } from "@playwright/test";
import { readFile } from "node:fs/promises";

async function downloadText(download: Download) {
  const path = await download.path();
  if (!path) throw new Error("Le fichier téléchargé n’est pas accessible au test.");
  return readFile(path, "utf8");
}

async function launchProject(page: Page, options: { flagship?: boolean } = {}) {
  await page.goto("/demo");
  await page.getByLabel("Description du projet").fill("Une application qui aide les associations à organiser leurs bénévoles.");
  await page.getByLabel("Résultat recherché").fill("Réduire le temps nécessaire pour trouver un bénévole disponible.");
  await page.getByLabel(/Contraintes ou contexte existant/).fill("Budget limité, usage mobile et données personnelles minimales.");
  if (options.flagship) {
    await page.getByLabel("J’ai un iPhone").check();
    await page.getByLabel("Remote Control est réellement disponible sur mon compte").check();
    await page.getByLabel("La machine peut rester active, connectée et non suspendue").check();
  }
  await page.getByRole("button", { name: "Lancer mon projet" }).click();
  await expect(page).toHaveURL(/\/dashboard\/.+/);
}

test("la landing présente le MVP complet et ses actions principales", async ({ page }) => {
  const browserErrors: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") browserErrors.push(message.text()); });
  page.on("pageerror", (error) => browserErrors.push(error.message));
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { level: 1, name: /transforme une idée en projet guidé/i })).toBeVisible();
  await expect(page.getByRole("link", { name: "Lancer un projet", exact: true }).first()).toHaveAttribute("href", "/demo");
  await expect(page.getByRole("link", { name: "Comprendre le fonctionnement" })).toHaveAttribute("href", "/fonctionnalites");
  await expect(page.getByText(/aucun appel IA/i).first()).toBeVisible();
  for (const phase of ["Cadrer", "Valider", "Concevoir", "Construire", "Vérifier", "Lancer et améliorer"]) {
    await expect(page.getByRole("heading", { name: phase, exact: true })).toBeVisible();
  }
  expect(browserErrors).toEqual([]);
});

test("la création conserve la saisie et relie les erreurs aux champs", async ({ page }) => {
  await page.goto("/demo");
  await page.getByRole("button", { name: "Lancer mon projet" }).click();

  const description = page.getByLabel("Description du projet");
  const outcome = page.getByLabel("Résultat recherché");
  await expect(description).toHaveAttribute("aria-invalid", "true");
  await expect(outcome).toHaveAttribute("aria-invalid", "true");
  await expect(page.getByRole("region", { name: "Création d’un projet local" }).getByRole("alert")).toContainText("Le projet n’a pas encore été créé");

  await description.fill("Une description encore courte");
  await outcome.fill("Un résultat concret à vérifier");
  await page.getByRole("button", { name: "Lancer mon projet" }).click();
  await expect(description).toHaveValue("Une description encore courte");
});

test("le profil Ubuntu, iPhone et Remote Control recommande le workflow phare", async ({ page }) => {
  await launchProject(page, { flagship: true });
  await expect(page.getByText("iPhone + Codex Remote + Ubuntu", { exact: true })).toBeVisible();
  await expect(page.getByText(/L’iPhone ne contient ni le dépôt ni les processus/)).toBeVisible();
});

test("l’espace projet affiche six phases et une seule phase principale", async ({ page }) => {
  await launchProject(page);
  const phaseNav = page.getByRole("navigation", { name: "Phases du projet" });
  await expect(phaseNav.getByRole("button")).toHaveCount(6);
  await expect(phaseNav.getByRole("button", { name: /Cadrer/ })).toHaveAttribute("aria-current", "step");
  await expect(page.locator("[data-step-id]" )).toHaveCount(2);
  await expect(page.locator('[data-step-id="scope-problem"]')).toBeVisible();
  await expect(page.locator('[data-step-id="validate-market"]')).toHaveCount(0);

  await phaseNav.getByRole("button", { name: /Valider/ }).click();
  await expect(phaseNav.getByRole("button", { name: /Valider/ })).toHaveAttribute("aria-current", "step");
  await expect(page.locator("[data-step-id]")).toHaveCount(3);
  await expect(page.locator('[data-step-id="scope-problem"]')).toHaveCount(0);
});

test("Comprendre cette étape reste fermé puis explique les responsabilités", async ({ page }) => {
  await launchProject(page);
  const details = page.locator("details").first();
  await expect(details).not.toHaveAttribute("open", "");
  await details.getByText("Comprendre cette étape", { exact: true }).click();
  await expect(details).toHaveAttribute("open", "");
  await expect(details).toContainText("Écrivain unique");
  await expect(details).toContainText("Votre approbation");
});

test("une mission peut être copiée sans être considérée comme exécutée", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await launchProject(page);
  const firstStep = page.locator('[data-step-id="scope-problem"]');
  await firstStep.getByRole("button", { name: "Copier la mission ChatGPT" }).click();
  await expect(firstStep.getByRole("status")).toContainText("Mission ChatGPT copiée. Exécution non vérifiée.");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain("Une application qui aide les associations");
});

test("statut, preuve et reprise après rechargement utilisent l’état enregistré", async ({ page }) => {
  await launchProject(page);
  const firstStep = page.locator('[data-step-id="scope-problem"]');
  await firstStep.getByLabel("Statut déclaré par l’utilisateur").selectOption("partial");
  await firstStep.getByLabel("Notes ou preuves").fill("Deux entretiens réalisés ; liens consignés dans le dossier de recherche.");
  await expect(page.getByRole("status").filter({ hasText: "Enregistré sur cet appareil" })).toBeVisible();

  await page.reload();
  const reloaded = page.locator('[data-step-id="scope-problem"]');
  await expect(reloaded.getByLabel("Statut déclaré par l’utilisateur")).toHaveValue("partial");
  await expect(reloaded.getByLabel("Notes ou preuves")).toHaveValue(/Deux entretiens réalisés/);
  await expect(page.getByText("Preuves consignées").locator("..").getByText("1", { exact: true })).toBeVisible();
});

test("une étape sensible ne peut pas être terminée sans accord humain", async ({ page }) => {
  await launchProject(page);
  await page.getByRole("navigation", { name: "Phases du projet" }).getByRole("button", { name: /Lancer et améliorer/ }).click();
  const release = page.locator('[data-step-id="launch-release"]');
  const status = release.getByLabel("Statut déclaré par l’utilisateur");
  await release.getByLabel("Notes ou preuves").fill("Preview vérifiée ; action de lancement préparée mais non exécutée.");
  await status.selectOption("done-verified");
  await expect(status).toHaveValue("not-started");
  await expect(release.getByRole("status")).toContainText("Accord humain requis");

  await release.getByLabel("J’accorde cette validation humaine").check();
  await status.selectOption("done-verified");
  await expect(status).toHaveValue("done-verified");
  await expect(release).toContainText("fait et vérifié");
});

test("le dashboard calcule la progression et produit les deux exports", async ({ page }) => {
  await launchProject(page);
  const firstStep = page.locator('[data-step-id="scope-problem"]');
  await firstStep.getByLabel("Notes ou preuves").fill("Brief relu et résultat attendu validé par l’utilisateur.");
  await firstStep.getByLabel("Statut déclaré par l’utilisateur").selectOption("done-verified");
  const markdownDownload = page.waitForEvent("download");
  await page.getByRole("button", { name: "Exporter Markdown" }).click();
  const markdown = await markdownDownload;
  expect(markdown.suggestedFilename()).toMatch(/\.md$/);
  expect(await downloadText(markdown)).toContain("## Rapport de progression");
  const jsonDownload = page.waitForEvent("download");
  await page.getByRole("button", { name: "Exporter JSON" }).click();
  const json = await jsonDownload;
  expect(json.suggestedFilename()).toMatch(/\.json$/);
  const exportedProject = JSON.parse(await downloadText(json));
  expect(exportedProject.schemaVersion).toBe(2);
  expect(exportedProject.phases).toHaveLength(6);

  await page.getByRole("link", { name: "Mes projets", exact: true }).first().click();
  await expect(page).toHaveURL(/\/dashboard$/);
  await expect(page.getByText("Fait et vérifié").locator("..").getByText("1/16", { exact: true })).toBeVisible();
  await expect(page.getByText("Bloqué").locator("..").getByText("0", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Reprendre" })).toBeVisible();

  const dashboardMarkdown = page.waitForEvent("download");
  await page.getByRole("button", { name: "Exporter Markdown" }).click();
  expect((await dashboardMarkdown).suggestedFilename()).toMatch(/\.md$/);
});

test("un projet version 1 est migré sans supprimer sa source", async ({ page }) => {
  const legacyRaw = JSON.stringify({
    schemaVersion: 1,
    projects: [{
      id: "legacy-project",
      schemaVersion: 1,
      title: "Projet historique",
      originalIdea: "Une idée historique suffisamment détaillée pour être migrée.",
      valueProposition: "Un ancien résultat recherché.",
      target: "Une ancienne cible.",
      mvp: ["Ancien MVP"],
      technicalPlan: ["Ancien plan technique"],
      marketingPlan: ["Ancien plan marketing"],
      nextActions: ["Ancienne action"],
      createdAt: "2026-07-11T00:00:00.000Z",
      updatedAt: "2026-07-12T00:00:00.000Z",
    }],
  });
  await page.addInitScript((raw) => localStorage.setItem("ai-project-launcher.projects.v1", raw), legacyRaw);
  await page.goto("/dashboard");
  await expect(page.getByText("Projet historique")).toBeVisible();
  const storageState = await page.evaluate(() => ({
    legacy: localStorage.getItem("ai-project-launcher.projects.v1"),
    backup: localStorage.getItem("starter-ia.projects.v1.migration-backup"),
    current: localStorage.getItem("starter-ia.projects.v2"),
  }));
  expect(storageState.legacy).toBe(legacyRaw);
  expect(storageState.backup).toBe(legacyRaw);
  expect(JSON.parse(storageState.current!).schemaVersion).toBe(2);
});

test("les données version 2 invalides expliquent la récupération", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("starter-ia.projects.v2", "not-json"));
  await page.goto("/dashboard");
  await expect(page.getByText("Données locales indisponibles", { exact: true })).toBeVisible();
  await expect(page.getByText(/version 2 sont incompatibles ou corrompues/)).toBeVisible();
  const rawDownload = page.waitForEvent("download");
  await page.getByRole("button", { name: "Télécharger les données brutes" }).click();
  expect(await downloadText(await rawDownload)).toBe("not-json");
  await expect(page.getByRole("button", { name: "Réinitialiser les données locales" })).toBeVisible();
});

test("un conflit entre deux onglets suspend l’écriture et exige un choix", async ({ page, context }) => {
  await launchProject(page);
  const projectUrl = page.url();
  const otherPage = await context.newPage();
  await otherPage.goto(projectUrl);
  await expect(otherPage.getByLabel("Titre du projet")).toBeVisible();

  await page.getByLabel("Titre du projet").fill("Version enregistrée A");
  const conflict = otherPage.getByRole("alert").filter({ hasText: "Modification détectée" });
  await expect(conflict).toBeVisible();
  await expect(conflict).toBeFocused();
  await expect(otherPage.getByLabel("Titre du projet")).toBeDisabled();
  await otherPage.getByRole("button", { name: "Conserver et enregistrer mon édition" }).click();
  await expect(conflict).toHaveCount(0);
});

test("la suppression d’un projet exige une confirmation", async ({ page }) => {
  await launchProject(page);
  await page.getByRole("link", { name: "Mes projets", exact: true }).first().click();
  page.once("dialog", (dialog) => dialog.dismiss());
  await page.getByRole("button", { name: "Supprimer" }).click();
  await expect(page.getByRole("link", { name: "Reprendre" })).toBeVisible();
  page.once("dialog", (dialog) => dialog.accept());
  await page.getByRole("button", { name: "Supprimer" }).click();
  await expect(page.getByText("Aucun projet local")).toBeVisible();
});

test("le parcours reste utilisable à 320 px et au clavier", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 640 });
  await page.goto("/");
  const primaryCta = page.getByRole("link", { name: "Lancer un projet", exact: true }).first();
  expect((await primaryCta.boundingBox())?.height).toBeGreaterThanOrEqual(44);
  const menu = page.locator('button[aria-controls="mobile-navigation"]');
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await primaryCta.click();
  await page.getByLabel("Description du projet").focus();
  await page.keyboard.type("Une application accessible préparée entièrement au clavier.");
  await expect(page.getByLabel("Description du projet")).toHaveValue(/accessible préparée/);
  await page.getByLabel("Résultat recherché").fill("R".repeat(600));
  await page.getByRole("button", { name: "Lancer mon projet" }).click();
  await expect(page).toHaveURL(/\/dashboard\/.+/);
  await expect(page.getByText("R".repeat(600), { exact: true })).toBeVisible();
  const dimensions = await page.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
});

test("le thème sombre persiste", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("navigation", { name: "Navigation principale" }).getByRole("button", { name: /Thème système/i });
  await toggle.click();
  await page.getByRole("navigation", { name: "Navigation principale" }).getByRole("button", { name: /Thème clair/i }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("une route inconnue reste une 404 noindex", async ({ page }) => {
  const response = await page.goto("/route-inconnue");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Cette route ne fait pas partie du plan");
  const robots = await page.locator('meta[name="robots"]').evaluateAll((elements) => elements.map((element) => element.getAttribute("content") ?? ""));
  expect(robots.every((content) => content.includes("noindex"))).toBe(true);
});
