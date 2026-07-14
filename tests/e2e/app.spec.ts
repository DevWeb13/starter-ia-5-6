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
  await page.getByLabel(/Contraintes/).fill("Budget limité, usage mobile et données personnelles minimales.");
  await page.getByLabel("Système de l’ordinateur").selectOption("ubuntu-linux");
  await page.getByLabel("Codex local est disponible sur mon ordinateur").check();
  if (options.flagship) {
    await page.getByLabel("J’ai un iPhone").check();
    await page.getByLabel("Remote Control est réellement disponible sur mon compte").check();
    await page.getByLabel("La machine peut rester active, connectée et non suspendue").check();
  }
  await page.getByRole("button", { name: "Lancer mon projet" }).click();
  await expect(page).toHaveURL(/\/dashboard\/.+/);
}

async function showRecommendedWorkflow(page: Page) {
  await page.getByText("Voir la méthode conseillée", { exact: true }).click();
}

test("la landing présente les ressources, les rôles et le kit minimal", async ({ page }) => {
  const browserErrors: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") browserErrors.push(message.text()); });
  page.on("pageerror", (error) => browserErrors.push(error.message));
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { level: 1, name: /mieux utiliser ChatGPT, Work et Codex/i })).toBeVisible();
  await expect(page.getByRole("link", { name: "Choisir ma configuration" })).toHaveAttribute("href", "/docs");
  await expect(page.getByRole("link", { name: "Voir le kit et les prompts" })).toHaveAttribute("href", "/ressources");
  const desktopNavigation = page.getByRole("navigation", { name: "Navigation principale" });
  for (const [label, href] of [["Accueil", "/"], ["Configurations", "/docs"], ["Ressources", "/ressources"], ["Méthode", "/fonctionnalites"], ["Accompagnement", "/accompagnement"]]) {
    const navigationLink = desktopNavigation.getByRole("link", { name: label, exact: true });
    await expect(navigationLink).toBeVisible();
    await expect(navigationLink).toHaveAttribute("href", href);
    expect((await navigationLink.boundingBox())?.height).toBeGreaterThanOrEqual(44);
  }
  await expect(page.getByText("Aucun compte, service IA, paiement ou stockage distant n’est intégré.")).toBeVisible();
  await expect(page.getByText("Quatre fichiers suffisent pour démarrer.")).toBeVisible();
  await expect(page.getByText(/prix pilote de 390 € TTC/)).toBeVisible();
  await expect(page.getByRole("link", { name: "Découvrir l’accompagnement" })).toHaveAttribute("href", "/accompagnement");
  await expect(page.getByText(/Ressources et kit de démarrage pour mieux utiliser/)).toBeVisible();
  for (const role of ["ChatGPT", "Work", "Codex"]) {
    await expect(page.getByRole("heading", { name: role, exact: true })).toBeVisible();
  }
  await expect(page.getByRole("heading", { name: "Réfléchir, exécuter, contrôler." })).toBeVisible();
  await expect(page.getByRole("link", { name: "Ouvrir la démonstration" })).toHaveAttribute("href", "/demo");
  expect(browserErrors).toEqual([]);
});

test("les ressources, l’accompagnement et l’ancienne route tarifs restent accessibles", async ({ page, request }) => {
  await page.setViewportSize({ width: 320, height: 640 });
  const resourcesResponse = await page.goto("/ressources");
  expect(resourcesResponse?.status()).toBe(200);
  await expect(page.getByRole("heading", { level: 1, name: /préparer un projet pour Codex/i })).toBeVisible();
  const resourcesDimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(resourcesDimensions.scrollWidth).toBeLessThanOrEqual(resourcesDimensions.clientWidth);

  const supportResponse = await page.goto("/accompagnement");
  expect(supportResponse?.status()).toBe(200);
  await expect(page.getByRole("heading", { level: 1, name: /installer un workflow ChatGPT \+ Codex/i })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "390 € TTC" })).toBeVisible();

  const supportLink = page.getByRole("link", { name: /Demander l’accompagnement pilote/ });
  await expect(supportLink).toHaveAttribute("href", "https://www.lareponsedev.fr/");
  await expect(supportLink).toHaveAttribute("target", "_blank");
  await expect(supportLink).toHaveAttribute("rel", "noopener noreferrer");
  expect((await supportLink.boundingBox())?.height).toBeGreaterThanOrEqual(44);
  await expect(page.locator("form")).toHaveCount(0);
  await expect(page.locator('input, textarea, select')).toHaveCount(0);
  await expect(page.locator('a[href*="checkout"], a[href*="stripe"]')).toHaveCount(0);
  const supportDimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(supportDimensions.scrollWidth).toBeLessThanOrEqual(supportDimensions.clientWidth);

  const legacyResponse = await request.get("/tarifs", { maxRedirects: 0 });
  expect(legacyResponse.status()).not.toBe(404);
  await page.goto("/tarifs");
  await expect(page).toHaveURL(/\/ressources$/);
});

test("les boutons actifs, désactivés et au clavier gardent un retour clair", async ({ page }) => {
  await page.goto("/demo");
  const launch = page.getByRole("button", { name: "Lancer mon projet" });
  await expect(launch).toHaveCSS("cursor", "pointer");

  const backgroundBeforeHover = await launch.evaluate((element) => getComputedStyle(element).backgroundColor);
  await launch.hover();
  await expect.poll(() => launch.evaluate((element) => getComputedStyle(element).backgroundColor)).not.toBe(backgroundBeforeHover);

  await launch.focus();
  await expect(launch).toBeFocused();
  await page.keyboard.press("Space");
  await expect(page.getByRole("region", { name: "Création d’un projet local" }).getByRole("alert")).toContainText("Le projet n’a pas encore été créé");

  await launch.evaluate((element: HTMLButtonElement) => { element.disabled = true; });
  await expect(launch).toBeDisabled();
  await expect(launch).toHaveCSS("cursor", "not-allowed");
  await page.mouse.move(0, 0);
  await page.waitForTimeout(250);
  const disabledBackground = await launch.evaluate((element) => getComputedStyle(element).backgroundColor);
  await launch.hover();
  await page.waitForTimeout(250);
  await expect(launch).toHaveCSS("background-color", disabledBackground);
});

test("les liens externes ouvrent un nouvel onglet et les liens internes restent sur place", async ({ page }) => {
  for (const path of ["/fonctionnalites", "/docs", "/ressources", "/accompagnement", "/"]) {
    await page.goto(path);
    const externalLinks = page.locator('a[href^="http"]');
    expect(await externalLinks.count()).toBeGreaterThan(0);
    for (const link of await externalLinks.all()) {
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", "noopener noreferrer");
      await expect(link).toContainText("ouvre un nouvel onglet");
    }
    const internalLinks = page.locator('a[href^="/"]');
    for (const link of await internalLinks.all()) await expect(link).not.toHaveAttribute("target", "_blank");
  }
});

test("la création conserve la saisie et relie les erreurs aux champs", async ({ page }) => {
  await page.goto("/demo");
  const system = page.getByLabel("Système de l’ordinateur");
  await expect(system).toHaveValue("");
  const capabilities = page.getByRole("group", { name: "Outils disponibles" }).locator('input[type="checkbox"]');
  await expect(capabilities).toHaveCount(6);
  for (const capability of await capabilities.all()) await expect(capability).not.toBeChecked();
  await page.getByRole("button", { name: "Lancer mon projet" }).click();

  const description = page.getByLabel("Description du projet");
  const outcome = page.getByLabel("Résultat recherché");
  await expect(description).toHaveAttribute("aria-invalid", "true");
  await expect(outcome).toHaveAttribute("aria-invalid", "true");
  await expect(system).toHaveAttribute("aria-invalid", "true");
  await expect(system).toHaveAttribute("aria-describedby", /operating-system-error/);
  await expect(page.getByText("Choisissez votre système ou indiquez qu’aucun ordinateur n’est disponible.")).toBeVisible();
  await expect(page.getByRole("region", { name: "Création d’un projet local" }).getByRole("alert")).toContainText("Le projet n’a pas encore été créé");

  await description.fill("Une description encore courte");
  await outcome.fill("Un résultat concret à vérifier");
  await page.getByRole("button", { name: "Lancer mon projet" }).click();
  await expect(description).toHaveValue("Une description encore courte");
  await expect(page).toHaveURL(/\/demo$/);
});

test("le choix explicite aucun ordinateur désactive et efface les capacités locales", async ({ page }) => {
  await page.goto("/demo");
  await page.getByLabel("Description du projet").fill("Une application qui aide les associations à organiser leurs bénévoles.");
  await page.getByLabel("Résultat recherché").fill("Réduire le temps nécessaire pour trouver un bénévole disponible.");
  const system = page.getByLabel("Système de l’ordinateur");
  const codex = page.getByLabel("Codex local est disponible sur mon ordinateur");
  const remote = page.getByLabel("Remote Control est réellement disponible sur mon compte");
  const activeMachine = page.getByLabel("La machine peut rester active, connectée et non suspendue");

  await system.selectOption("ubuntu-linux");
  await codex.check();
  await remote.check();
  await activeMachine.check();
  await system.selectOption("none");

  for (const capability of [codex, remote, activeMachine]) {
    await expect(capability).not.toBeChecked();
    await expect(capability).toBeDisabled();
  }
  await page.getByRole("button", { name: "Lancer mon projet" }).click();
  await expect(page).toHaveURL(/\/dashboard\/.+/);
  await showRecommendedWorkflow(page);
  await expect(page.getByText("Préparation ChatGPT, Codex à installer ou activer", { exact: true })).toBeVisible();
});

test("Ubuntu déclaré sans Codex prépare son installation ou activation", async ({ page }) => {
  await page.goto("/demo");
  await page.getByLabel("Description du projet").fill("Une application qui aide les associations à organiser leurs bénévoles.");
  await page.getByLabel("Résultat recherché").fill("Réduire le temps nécessaire pour trouver un bénévole disponible.");
  await page.getByLabel("Système de l’ordinateur").selectOption("ubuntu-linux");
  await page.getByRole("button", { name: "Lancer mon projet" }).click();

  await showRecommendedWorkflow(page);
  await expect(page.getByText("Préparation ChatGPT, Codex à installer ou activer", { exact: true })).toBeVisible();
});

test("Ubuntu et Codex explicitement déclarés recommandent le parcours local", async ({ page }) => {
  await launchProject(page);
  await showRecommendedWorkflow(page);
  await expect(page.getByText("ChatGPT + Codex local, sans Remote Control", { exact: true })).toBeVisible();
});

test("le profil Ubuntu, iPhone et Remote Control recommande le workflow phare", async ({ page }) => {
  await launchProject(page, { flagship: true });
  await showRecommendedWorkflow(page);
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

test("la carte montre une action principale et garde les explications fermées", async ({ page }) => {
  await launchProject(page);
  const firstStep = page.locator('[data-step-id="scope-problem"]');
  await expect(firstStep.getByRole("heading", { name: "Prochaine action" })).toBeVisible();
  await expect(firstStep.getByRole("button", { name: "Copier pour ChatGPT" })).toBeVisible();
  await expect(firstStep.locator("button.bg-primary")).toHaveCount(1);
  const details = firstStep.locator("details");
  await expect(details).not.toHaveAttribute("open", "");
  await details.getByText("Comprendre cette étape", { exact: true }).click();
  await expect(details).toHaveAttribute("open", "");
  await expect(details).toContainText("Pourquoi cette étape ?");
  await expect(details).toContainText("Qui peut aider");
  await expect(details).toContainText("Comment savoir que c’est bon");
});

test("une mission peut être copiée sans être considérée comme exécutée", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await launchProject(page);
  const firstStep = page.locator('[data-step-id="scope-problem"]');
  const copyButton = firstStep.getByRole("button", { name: "Copier pour ChatGPT" });
  await expect(copyButton).not.toContainText(/Exécuter|Préparer/);
  await copyButton.click();
  await expect(firstStep.getByRole("status")).toContainText("Mission copiée. Collez-la dans ChatGPT.");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain("Une application qui aide les associations");
});

test("statut, preuve et reprise après rechargement utilisent l’état enregistré", async ({ page }) => {
  await launchProject(page);
  const firstStep = page.locator('[data-step-id="scope-problem"]');
  await firstStep.getByLabel("Où en êtes-vous ?").selectOption("partial");
  await firstStep.getByText("Comprendre cette étape", { exact: true }).click();
  await firstStep.getByLabel("Notes et résultats").fill("Deux entretiens réalisés ; liens consignés dans le dossier de recherche.");
  await expect(page.getByRole("status").filter({ hasText: "Enregistré sur cet appareil" })).toBeVisible();

  await page.reload();
  const reloaded = page.locator('[data-step-id="scope-problem"]');
  await expect(reloaded.getByLabel("Où en êtes-vous ?")).toHaveValue("partial");
  await reloaded.getByText("Comprendre cette étape", { exact: true }).click();
  await expect(reloaded.getByLabel("Notes et résultats")).toHaveValue(/Deux entretiens réalisés/);
  await expect(page.getByText("Notes et résultats").last().locator("..").getByText("1", { exact: true })).toBeVisible();
});

test("une étape sensible ne peut pas être terminée sans accord humain", async ({ page }) => {
  await launchProject(page);
  await page.getByRole("navigation", { name: "Phases du projet" }).getByRole("button", { name: /Lancer et améliorer/ }).click();
  const release = page.locator('[data-step-id="launch-release"]');
  await release.getByRole("button", { name: "Vérifier avant d’autoriser" }).click();
  await expect(release.getByLabel("J’ai vérifié et j’autorise cette action")).toBeFocused();
  const status = release.getByLabel("Où en êtes-vous ?");
  await release.getByLabel("Notes et résultats").fill("Preview vérifiée ; action de lancement préparée mais non exécutée.");
  await status.selectOption("done-verified");
  await expect(status).toHaveValue("not-started");
  await expect(release.getByRole("status")).toContainText("Votre accord est nécessaire");

  await release.getByLabel("J’ai vérifié et j’autorise cette action").check();
  await status.selectOption("done-verified");
  await expect(status).toHaveValue("done-verified");
  await expect(release).toContainText("Terminé et vérifié");
});

test("le dashboard calcule la progression et produit les deux exports", async ({ page }) => {
  await launchProject(page);
  const firstStep = page.locator('[data-step-id="scope-problem"]');
  await firstStep.getByText("Comprendre cette étape", { exact: true }).click();
  await firstStep.getByLabel("Notes et résultats").fill("Brief relu et résultat attendu validé par l’utilisateur.");
  await firstStep.getByLabel("Où en êtes-vous ?").selectOption("done-verified");
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
  await expect(page.getByText("Terminé et vérifié").locator("..").getByText("1/16", { exact: true })).toBeVisible();
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

test("un projet version 2 existant utilise les textes actuels sans réécrire sa lecture", async ({ page }) => {
  await launchProject(page);
  await page.evaluate(() => {
    const key = "starter-ia.projects.v2";
    const raw = localStorage.getItem(key)!;
    const envelope = JSON.parse(raw);
    const project = envelope.projects[0];
    const phase = project.phases[5];
    const step = phase.steps[1];
    phase.name = "Ancienne phase";
    phase.summary = "Ancien résumé.";
    step.title = "Ancien titre d’étape";
    step.objective = "Ancien objectif.";
    step.reason = "Ancienne raison.";
    step.role = "Ancien rôle";
    step.recommendedTool = "Ancien outil";
    step.codexMission = "Ancienne mission Codex";
    step.deliverables = ["Ancien résultat attendu"];
    step.successCriteria = ["Ancien critère"];
    step.humanApprovalReason = "Ancienne raison d’accord.";
    step.status = "partial";
    step.userNotes = "Notes existantes à préserver.";
    step.humanApprovalGranted = true;
    project.updatedAt = "2026-07-14T08:30:00.000Z";
    localStorage.setItem(key, JSON.stringify(envelope));
  });

  await page.goto("/dashboard");
  expect(await page.evaluate(() => {
    const envelope = JSON.parse(localStorage.getItem("starter-ia.projects.v2")!);
    return envelope.projects[0].phases[5].steps[1].title;
  })).toBe("Ancien titre d’étape");
  await page.getByRole("link", { name: "Reprendre" }).click();
  await page.getByRole("navigation", { name: "Phases du projet" }).getByRole("button", { name: /Lancer et améliorer/ }).click();

  const release = page.locator('[data-step-id="launch-release"]');
  await expect(release.getByRole("heading", { name: "Autoriser le lancement" })).toBeVisible();
  await expect(release.getByLabel("Où en êtes-vous ?")).toHaveValue("partial");
  await release.getByText("Comprendre cette étape", { exact: true }).click();
  await expect(release.getByLabel("Notes et résultats")).toHaveValue("Notes existantes à préserver.");
  await expect(release.getByLabel("J’ai vérifié et j’autorise cette action")).toBeChecked();

  const markdownDownload = page.waitForEvent("download");
  await page.getByRole("button", { name: "Exporter Markdown" }).click();
  const markdown = await downloadText(await markdownDownload);
  expect(markdown).toContain("Autoriser le lancement");
  expect(markdown).not.toContain("Ancien titre d’étape");
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
  const primaryCta = page.getByRole("link", { name: "Choisir ma configuration" }).first();
  expect((await primaryCta.boundingBox())?.height).toBeGreaterThanOrEqual(44);
  const menu = page.locator('button[aria-controls="mobile-navigation"]');
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  const mobileNavigation = page.getByRole("navigation", { name: "Navigation mobile" });
  for (const [label, href] of [["Accueil", "/"], ["Configurations", "/docs"], ["Ressources", "/ressources"], ["Méthode", "/fonctionnalites"], ["Accompagnement", "/accompagnement"]]) {
    await expect(mobileNavigation.getByRole("link", { name: label, exact: true })).toHaveAttribute("href", href);
  }
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await page.goto("/demo");
  await page.getByLabel("Description du projet").focus();
  await page.keyboard.type("Une application accessible préparée entièrement au clavier.");
  await expect(page.getByLabel("Description du projet")).toHaveValue(/accessible préparée/);
  await page.getByLabel("Résultat recherché").fill("R".repeat(600));
  await page.getByLabel("Système de l’ordinateur").selectOption("none");
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
