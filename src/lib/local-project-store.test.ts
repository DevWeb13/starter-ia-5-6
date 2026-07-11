import { describe, expect, it } from "vitest";
import { InvalidLocalProjectDataError, LocalStorageUnavailableError, PROJECT_BACKUP_KEY, PROJECT_STORAGE_KEY, readProjects, resetProjects, saveProject } from "./local-project-store";
import { createProject } from "./project";

function memoryStorage(initial: Record<string, string> = {}) {
  const values = new Map(Object.entries(initial));
  return { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => values.set(key, value), removeItem: (key: string) => values.delete(key), values };
}

describe("local project store", () => {
  it("persists and reads versioned projects", () => {
    const storage = memoryStorage(); const project = createProject("Un outil qui simplifie les devis des artisans", "id", "2026-07-11T00:00:00.000Z");
    saveProject(project, storage); expect(readProjects(storage)).toEqual([project]);
  });
  it("does not silently overwrite invalid data and preserves it before reset", () => {
    const storage = memoryStorage({ [PROJECT_STORAGE_KEY]: "not-json" });
    expect(() => readProjects(storage)).toThrow(InvalidLocalProjectDataError);
    resetProjects(storage); expect(storage.values.get(PROJECT_BACKUP_KEY)).toBe("not-json");
  });
  it("reports unavailable storage instead of losing the current edit", () => {
    const storage = { getItem: () => { throw new Error("blocked"); }, setItem: () => { throw new Error("blocked"); }, removeItem: () => undefined };
    expect(() => readProjects(storage)).toThrow(LocalStorageUnavailableError);
  });
});
