import { describe, expect, it } from "vitest";

import { createProject } from "./project-engine";
import {
  InvalidLocalProjectDataError,
  LEGACY_MIGRATION_BACKUP_KEY,
  LEGACY_PROJECT_STORAGE_KEY,
  LocalStorageUnavailableError,
  PROJECT_BACKUP_KEY,
  PROJECT_STORAGE_KEY,
  readProjects,
  readRawProjectData,
  resetProjects,
  saveProject,
  saveProjects,
} from "./local-project-store";

function memoryStorage(initial: Record<string, string> = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => { values.set(key, value); },
    removeItem: (key: string) => { values.delete(key); },
    values,
  };
}

function project(id = "id", now = "2026-07-13T10:00:00.000Z") {
  return createProject({
    brief: {
      description: "Un outil qui simplifie les devis des artisans.",
      desiredOutcome: "Préparer un devis clair en moins de dix minutes.",
      constraints: "Fonctionner sur mobile.",
      existingContext: "",
    },
    hardware: {
      hasComputer: true,
      operatingSystem: "ubuntu-linux",
      hasIPhone: false,
      codexLocalAvailable: true,
      remoteControlAvailable: false,
      githubAvailable: false,
      vercelAvailable: false,
      machineCanStayActive: false,
    },
  }, id, now);
}

function legacyProject(id = "legacy-id", updatedAt = "2026-07-12T12:00:00.000Z") {
  return {
    id,
    schemaVersion: 1,
    title: `Ancien projet ${id}`,
    originalIdea: "Une ancienne idée suffisamment détaillée.",
    valueProposition: "Une ancienne proposition de valeur.",
    target: "Une ancienne cible.",
    mvp: ["Ancien MVP"],
    technicalPlan: ["Ancien plan technique"],
    marketingPlan: ["Ancien plan marketing"],
    nextActions: ["Ancienne action"],
    createdAt: "2026-07-11T00:00:00.000Z",
    updatedAt,
  };
}

describe("local project store version 2", () => {
  it("persists and reads valid version 2 projects", () => {
    const storage = memoryStorage();
    const value = project();
    saveProject(value, storage);
    expect(readProjects(storage)).toEqual([value]);
  });

  it("sorts without mutating and rejects duplicate identifiers", () => {
    const older = project("older", "2026-07-13T10:00:00.000Z");
    const newer = project("newer", "2026-07-13T11:00:00.000Z");
    const storage = memoryStorage();
    saveProjects([older, newer], storage);
    expect(readProjects(storage).map((item) => item.id)).toEqual(["newer", "older"]);
    expect(() => saveProjects([older, older], storage)).toThrow(InvalidLocalProjectDataError);
  });

  it("migrates one legacy project without changing the source", () => {
    const source = JSON.stringify({ schemaVersion: 1, projects: [legacyProject()] });
    const storage = memoryStorage({ [LEGACY_PROJECT_STORAGE_KEY]: source });
    const [migrated] = readProjects(storage, "2026-07-13T12:00:00.000Z");

    expect(migrated.schemaVersion).toBe(2);
    expect(migrated.id).toBe("legacy-id");
    expect(migrated.migrationHistory?.fromSchemaVersion).toBe(1);
    expect(migrated.brief.existingContext).toContain("Ancien plan marketing");
    expect(migrated.phases.flatMap((phase) => phase.steps).every((step) => step.status === "not-started")).toBe(true);
    expect(storage.values.get(LEGACY_PROJECT_STORAGE_KEY)).toBe(source);
    expect(storage.values.get(LEGACY_MIGRATION_BACKUP_KEY)).toBe(source);
    expect(storage.values.has(PROJECT_STORAGE_KEY)).toBe(true);
  });

  it("migrates and sorts multiple legacy projects", () => {
    const storage = memoryStorage({
      [LEGACY_PROJECT_STORAGE_KEY]: JSON.stringify({
        schemaVersion: 1,
        projects: [legacyProject("older"), legacyProject("newer", "2026-07-13T12:00:00.000Z")],
      }),
    });
    expect(readProjects(storage).map((item) => item.id)).toEqual(["newer", "older"]);
  });

  it("leaves corrupt legacy data untouched", () => {
    const storage = memoryStorage({ [LEGACY_PROJECT_STORAGE_KEY]: "not-json" });
    expect(() => readProjects(storage)).toThrow(/source historique n’a pas été modifiée/);
    expect(storage.values.get(LEGACY_PROJECT_STORAGE_KEY)).toBe("not-json");
    expect(storage.values.has(PROJECT_STORAGE_KEY)).toBe(false);
  });

  it("exposes corrupt raw data for recovery without changing it", () => {
    const storage = memoryStorage({ [PROJECT_STORAGE_KEY]: "not-json" });
    expect(readRawProjectData(storage)).toEqual({ key: PROJECT_STORAGE_KEY, raw: "not-json" });
    expect(storage.values.get(PROJECT_STORAGE_KEY)).toBe("not-json");
  });

  it("rejects corrupt version 2 data without falling back to version 1", () => {
    const legacy = JSON.stringify({ schemaVersion: 1, projects: [legacyProject()] });
    const storage = memoryStorage({ [PROJECT_STORAGE_KEY]: "not-json", [LEGACY_PROJECT_STORAGE_KEY]: legacy });
    expect(() => readProjects(storage)).toThrow(/version 2/);
    expect(storage.values.get(PROJECT_STORAGE_KEY)).toBe("not-json");
  });

  it("rejects invalid dates and duplicate identifiers while reading", () => {
    const valid = project();
    const invalidDate = memoryStorage({
      [PROJECT_STORAGE_KEY]: JSON.stringify({ schemaVersion: 2, projects: [{ ...valid, updatedAt: "not-a-date" }] }),
    });
    const duplicateId = memoryStorage({
      [PROJECT_STORAGE_KEY]: JSON.stringify({ schemaVersion: 2, projects: [valid, { ...valid, title: "Copie" }] }),
    });
    expect(() => readProjects(invalidDate)).toThrow(InvalidLocalProjectDataError);
    expect(() => readProjects(duplicateId)).toThrow(InvalidLocalProjectDataError);
  });

  it("rejects an incoherent stored hardware profile", () => {
    const valid = project();
    const storage = memoryStorage({
      [PROJECT_STORAGE_KEY]: JSON.stringify({
        schemaVersion: 2,
        projects: [{
          ...valid,
          hardware: {
            ...valid.hardware,
            hasComputer: false,
            operatingSystem: "none",
            codexLocalAvailable: true,
          },
        }],
      }),
    });

    expect(() => readProjects(storage)).toThrow(InvalidLocalProjectDataError);
  });

  it("reports unavailable storage", () => {
    const storage = {
      getItem: () => { throw new Error("blocked"); },
      setItem: () => { throw new Error("blocked"); },
      removeItem: () => undefined,
    };
    expect(() => readProjects(storage)).toThrow(LocalStorageUnavailableError);
  });

  it("keeps a raw version 2 backup before reset", () => {
    const raw = JSON.stringify({ schemaVersion: 2, projects: [project()] });
    const storage = memoryStorage({ [PROJECT_STORAGE_KEY]: raw });
    resetProjects(storage);
    expect(storage.values.get(PROJECT_BACKUP_KEY)).toBe(raw);
    expect(storage.values.has(PROJECT_STORAGE_KEY)).toBe(false);
  });
});
