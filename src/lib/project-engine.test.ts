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

    expect(project.schemaVersion).toBe(PROJECT_SCHEMA_VERSION);
    expect(project.phases.map((phase) => phase.id)).toEqual(PROJECT_PHASE_IDS);
    expect(project.phases.map((phase) => phase.order)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(project.phases.every((phase) => phase.steps.length >= 2 && phase.steps.length <= 3)).toBe(true);
    expect(project.phases.flatMap((phase) => phase.steps)).toHaveLength(16);
    expect(project.phases.flatMap((phase) => phase.steps).every((step) => step.status === "not-started")).toBe(true);
    expect(isProject(project)).toBe(true);
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
    expect(project.phases[1].steps.some((step) => step.role === "marketing")).toBe(true);
    expect(project.phases[5].steps.some((step) => step.role === "marketing")).toBe(true);
  });

  it("prevents a sensitive step from being completed without human approval", () => {
    const project = createProject(input, "project-id", "2026-07-13T10:00:00.000Z");
    expect(() => updateProjectStep(project, "launch-release", { status: "done-verified" })).toThrow(/Accord humain requis/);

    const approved = updateProjectStep(project, "launch-release", {
      humanApprovalGranted: true,
      status: "done-verified",
    }, "2026-07-13T11:00:00.000Z");
    expect(approved.phases[5].steps[1].status).toBe("done-verified");
  });
});

describe("hardware workflow recommendation", () => {
  it("recommends the flagship iPhone, Remote Control and Ubuntu workflow only with all declarations", () => {
    expect(recommendWorkflow({ ...baseHardware, hasIPhone: true, remoteControlAvailable: true }).id).toBe("iphone-remote-ubuntu");
  });

  it("recommends Remote Control on another system only when declared and sustainable", () => {
    expect(recommendWorkflow({ ...baseHardware, operatingSystem: "macos", remoteControlAvailable: true }).id).toBe("remote-control");
    expect(recommendWorkflow({ ...baseHardware, operatingSystem: "windows", remoteControlAvailable: true, machineCanStayActive: false }).id).toBe("chatgpt-codex-local");
  });

  it("supports local Codex without Remote Control", () => {
    expect(recommendWorkflow(baseHardware).id).toBe("local-without-remote");
  });

  it("prepares ChatGPT work when Codex is unavailable", () => {
    expect(recommendWorkflow({ ...baseHardware, codexLocalAvailable: false }).id).toBe("chatgpt-prepare-codex");
  });

  it("keeps GitHub and Vercel optional", () => {
    const withoutGithub = recommendWorkflow({ ...baseHardware, githubAvailable: false });
    const withoutVercel = recommendWorkflow({ ...baseHardware, vercelAvailable: false });
    expect(withoutGithub.deliveryPath.join(" ")).toContain("sans dépendre de GitHub");
    expect(withoutVercel.deliveryPath.join(" ")).toContain("sans supposer Vercel");
  });
});
