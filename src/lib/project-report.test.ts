import { describe, expect, it } from "vitest";

import { createProject } from "./project-engine";
import { createProjectReport, projectToJson, projectToMarkdown } from "./project-report";
import { updateProjectStep } from "./project";

function project() {
  return createProject({
    brief: {
      description: "# Un outil pour associations",
      desiredOutcome: "Aider les équipes à décider.",
      constraints: "- Ne pas exposer de données",
      existingContext: "README existant",
    },
    hardware: {
      hasComputer: true,
      operatingSystem: "ubuntu-linux",
      hasIPhone: true,
      codexLocalAvailable: true,
      remoteControlAvailable: true,
      githubAvailable: true,
      vercelAvailable: true,
      machineCanStayActive: true,
    },
  }, "report-id", "2026-07-13T10:00:00.000Z");
}

describe("project exports and report", () => {
  it("computes a declarative report from saved state", () => {
    const updated = updateProjectStep(project(), "scope-problem", {
      status: "partial",
      userNotes: "Deux entretiens consignés.",
    }, "2026-07-13T11:00:00.000Z");
    const report = createProjectReport(updated);
    expect(report.partial).toBe(1);
    expect(report.evidenceCount).toBe(1);
    expect(report.executionNotice).toContain("réellement exécuté et vérifié");
    expect(report.approvalsMissing).toBeGreaterThan(0);
  });

  it("exports complete valid JSON", () => {
    const exported = JSON.parse(projectToJson(project()));
    expect(exported.schemaVersion).toBe(2);
    expect(exported.phases).toHaveLength(6);
  });

  it("exports readable Markdown and escapes user heading syntax", () => {
    const markdown = projectToMarkdown(project());
    expect(markdown).toContain("# \\# Un outil pour associations");
    expect(markdown).toContain("## Phase 1 — Cadrer");
    expect(markdown).toContain("Mission ChatGPT");
    expect(markdown).toContain("Mission Codex");
    expect(markdown).toContain("**Où en êtes-vous ?** Pas commencé");
    expect(markdown).toContain("**Ce que vous devez obtenir**");
    expect(markdown).toContain("**Comment savoir que c’est bon**");
    expect(markdown).toContain("Rapport de progression");
    expect(markdown).toContain("Remote Control déclaré disponible : oui");
    expect(markdown).toContain("Une mission copiée n’est jamais considérée comme exécutée");
  });
});
