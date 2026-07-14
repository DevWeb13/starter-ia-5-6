import { describe, expect, it } from "vitest";

import { createProject, recommendWorkflow } from "./project-engine";
import {
  PROJECT_PHASE_IDS,
  PROJECT_SCHEMA_VERSION,
  isProject,
  updateProjectStep,
  type CreateProjectInput,
  type HardwareProfile,
} from "./project";

const baseHardware: HardwareProfile = {
  hasComputer: true,
  operatingSystem: "ubuntu-linux",
  hasIPhone: false,
  codexLocalAvailable: true,
  remoteControlAvailable: false,
  githubAvailable: true,
  vercelAvailable: true,
  machineCanStayActive: true,
};

const input: CreateProjectInput = {
  brief: {
    description: "Une application qui aide les associations à organiser leurs bénévoles.",
    desiredOutcome: "Réduire le temps nécessaire pour trouver un bénévole disponible.",
    constraints: "Budget limité et données personnelles minimales.",
    existingContext: "Un tableur est déjà utilisé par deux associations pilotes.",
  },
  hardware: baseHardware,
};

describe("deterministic project engine", () => {
  it("creates a valid schema 2 project with exactly six ordered phases", () => {
    const project = createProject(input, "project-id", "2026-07-13T10:00:00.000Z");
    const steps = project.phases.flatMap((phase) => phase.steps);

    expect(project.schemaVersion).toBe(PROJECT_SCHEMA_VERSION);
    expect(project.phases.map((phase) => phase.id)).toEqual(PROJECT_PHASE_IDS);
    expect(project.phases.map((phase) => phase.order)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(project.phases.every((phase) => phase.steps.length >= 2 && phase.steps.length <= 3)).toBe(true);
    expect(steps).toHaveLength(16);
    expect(steps.map((step) => step.id)).toEqual([
      "scope-problem", "scope-constraints", "validate-market", "validate-positioning",
      "validate-evidence", "design-mvp", "design-architecture", "build-foundation",
      "build-core", "build-content", "verify-tests", "verify-experience",
      "verify-review", "launch-pack", "launch-release", "launch-learn",
    ]);
    expect(steps.every((step) => step.status === "not-started")).toBe(true);
    expect(isProject(project)).toBe(true);
  });

  it("uses short action-first wording without changing the saved model", () => {
    const project = createProject(input, "project-id", "2026-07-13T10:00:00.000Z");
    const steps = project.phases.flatMap((phase) => phase.steps);

    expect(steps.map((step) => step.title)).toEqual([
      "Décrire le problème", "Définir les limites", "Comprendre les solutions existantes",
      "Tester l’intérêt du projet", "Décider avec des résultats réels", "Choisir la première version",
      "Organiser la construction", "Préparer le projet", "Construire le parcours principal",
      "Ajouter les textes et les protections", "Tester le résultat", "Vérifier l’usage sur tous les écrans",
      "Faire relire le projet", "Préparer le lancement", "Autoriser le lancement",
      "Choisir les prochaines améliorations",
    ]);
    expect(steps[0].objective).toContain("ce sont encore des idées à vérifier");
    expect(project.schemaVersion).toBe(2);
  });

  it("keeps existing schema 2 projects readable when their saved wording is older", () => {
    const existing = createProject(input, "existing-v2", "2026-07-13T10:00:00.000Z");
    existing.phases[0].steps[0].title = "Formuler le problème et le résultat";
    existing.phases[0].steps[0].objective = "Ancien texte enregistré.";

    expect(isProject(existing)).toBe(true);
    expect(existing.phases[0].steps[0].title).toBe("Formuler le problème et le résultat");
  });

  it("returns the same plan for the same inputs", () => {
    const first = createProject(input, "stable-id", "2026-07-13T10:00:00.000Z");
    const second = createProject(input, "stable-id", "2026-07-13T10:00:00.000Z");
    expect(second).toEqual(first);
  });

  it("includes real user context and safety boundaries in prepared missions", () => {
    const project = createProject(input, "project-id", "2026-07-13T10:00:00.000Z");
    const missions = project.phases.flatMap((phase) => phase.steps).flatMap((step) => [step.chatGptMission, step.codexMission]).filter(Boolean).join("\n");

    expect(missions).toContain(input.brief.description);
    expect(missions).toContain(input.brief.desiredOutcome);
    expect(missions).toContain(input.brief.constraints);
    expect(missions).toContain("ne pas inventer de preuve");
    expect(missions).toContain("unique écrivain");
  });

  it("integrates marketing during validation and launch", () => {
    const project = createProject(input, "project-id", "2026-07-13T10:00:00.000Z");
    expect(project.phases[1].steps.some((step) => step.role === "personne qui aide à présenter le projet")).toBe(true);
    expect(project.phases[5].steps.some((step) => step.role === "personne qui aide à présenter le projet")).toBe(true);
  });

  it("prevents a sensitive step from being completed without human approval", () => {
    const project = createProject(input, "project-id", "2026-07-13T10:00:00.000Z");
    expect(() => updateProjectStep(project, "launch-release", { status: "done-verified" })).toThrow(/Votre accord est nécessaire/);

    const approved = updateProjectStep(project, "launch-release", {
      humanApprovalGranted: true,
      userNotes: "Preview contrôlée et accord de lancement consigné.",
      status: "done-verified",
    }, "2026-07-13T11:00:00.000Z");
    expect(approved.phases[5].steps[1].status).toBe("done-verified");
  });

  it("requires a recorded proof before any step is done and verified", () => {
    const project = createProject(input, "project-id", "2026-07-13T10:00:00.000Z");
    expect(() => updateProjectStep(project, "scope-problem", { status: "done-verified" })).toThrow(/note ou un résultat/);
    const completed = updateProjectStep(project, "scope-problem", {
      userNotes: "Compte rendu de deux entretiens et décision consignés.",
      status: "done-verified",
    });
    expect(completed.phases[0].steps[0].status).toBe("done-verified");
  });
});

describe("hardware workflow recommendation", () => {
  it("recommends the flagship iPhone, Remote Control and Ubuntu workflow only with all declarations", () => {
    const flagshipHardware = { ...baseHardware, hasIPhone: true, remoteControlAvailable: true };
    expect(recommendWorkflow(flagshipHardware).id).toBe("iphone-remote-ubuntu");
    expect(recommendWorkflow({ ...flagshipHardware, hasComputer: false, operatingSystem: "none" }).id).not.toBe("iphone-remote-ubuntu");
    expect(recommendWorkflow({ ...flagshipHardware, operatingSystem: "windows" }).id).not.toBe("iphone-remote-ubuntu");
    expect(recommendWorkflow({ ...flagshipHardware, hasIPhone: false }).id).not.toBe("iphone-remote-ubuntu");
    expect(recommendWorkflow({ ...flagshipHardware, codexLocalAvailable: false }).id).not.toBe("iphone-remote-ubuntu");
    expect(recommendWorkflow({ ...flagshipHardware, remoteControlAvailable: false }).id).not.toBe("iphone-remote-ubuntu");
    expect(recommendWorkflow({ ...flagshipHardware, machineCanStayActive: false }).id).not.toBe("iphone-remote-ubuntu");
  });

  it("recommends Remote Control on another system only when declared and sustainable", () => {
    expect(recommendWorkflow({ ...baseHardware, operatingSystem: "macos", hasIPhone: true, remoteControlAvailable: true }).id).toBe("remote-control");
    expect(recommendWorkflow({ ...baseHardware, operatingSystem: "macos", remoteControlAvailable: true }).id).toBe("chatgpt-codex-local");
    expect(recommendWorkflow({ ...baseHardware, operatingSystem: "windows", remoteControlAvailable: true, machineCanStayActive: false }).id).toBe("chatgpt-codex-local");
  });

  it("uses local Codex only when a computer, its system and Codex are explicitly declared", () => {
    expect(recommendWorkflow(baseHardware).id).toBe("local-without-remote");
    expect(recommendWorkflow({ ...baseHardware, hasComputer: false, operatingSystem: "none" }).id).toBe("chatgpt-prepare-codex");
    expect(recommendWorkflow({ ...baseHardware, operatingSystem: "none" }).id).toBe("chatgpt-prepare-codex");
    expect(recommendWorkflow({ ...baseHardware, codexLocalAvailable: false }).id).toBe("chatgpt-prepare-codex");
  });

  it("prepares ChatGPT work when Ubuntu is declared without Codex", () => {
    const recommendation = recommendWorkflow({ ...baseHardware, codexLocalAvailable: false });
    expect(recommendation.id).toBe("chatgpt-prepare-codex");
    expect(recommendation.name).toBe("Préparation ChatGPT, Codex à installer ou activer");
  });

  it("keeps GitHub and Vercel optional", () => {
    const withoutGithub = recommendWorkflow({ ...baseHardware, githubAvailable: false });
    const withoutVercel = recommendWorkflow({ ...baseHardware, vercelAvailable: false });
    expect(withoutGithub.deliveryPath.join(" ")).toContain("sans dépendre de GitHub");
    expect(withoutVercel.deliveryPath.join(" ")).toContain("sans supposer Vercel");
  });
});
