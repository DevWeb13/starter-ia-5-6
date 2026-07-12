import { PROJECT_SCHEMA_VERSION, type Project } from "./project";

export const PROJECT_STORAGE_KEY = "ai-project-launcher.projects.v1";
export const PROJECT_BACKUP_KEY = "ai-project-launcher.projects.backup";

export type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;
type Envelope = { schemaVersion: typeof PROJECT_SCHEMA_VERSION; projects: Project[] };

export class LocalStorageUnavailableError extends Error {}
export class InvalidLocalProjectDataError extends Error {}

function isProject(value: unknown): value is Project {
  if (!value || typeof value !== "object") return false;
  const project = value as Record<string, unknown>;
  const isIsoDate = (candidate: unknown) =>
    typeof candidate === "string" &&
    !Number.isNaN(Date.parse(candidate)) &&
    new Date(candidate).toISOString() === candidate;
  return project.schemaVersion === PROJECT_SCHEMA_VERSION &&
    typeof project.id === "string" && project.id.length > 0 &&
    ["title", "originalIdea", "valueProposition", "target"].every((key) => typeof project[key] === "string") &&
    isIsoDate(project.createdAt) && isIsoDate(project.updatedAt) &&
    ["mvp", "technicalPlan", "marketingPlan", "nextActions"].every((key) => Array.isArray(project[key]) && project[key].every((item) => typeof item === "string"));
}

function getStorage(storage?: StorageLike): StorageLike {
  if (storage) return storage;
  if (typeof window === "undefined") throw new LocalStorageUnavailableError("Le stockage local n’est disponible que dans le navigateur.");
  try {
    const probe = "__ai_project_launcher_probe__";
    window.localStorage.setItem(probe, "1");
    window.localStorage.removeItem(probe);
    return window.localStorage;
  } catch {
    throw new LocalStorageUnavailableError("Le stockage local est indisponible dans ce navigateur.");
  }
}

export function readProjects(storage?: StorageLike): Project[] {
  const target = getStorage(storage);
  let raw: string | null;
  try { raw = target.getItem(PROJECT_STORAGE_KEY); } catch { throw new LocalStorageUnavailableError("Le stockage local est indisponible dans ce navigateur."); }
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") throw new Error();
    const envelope = parsed as Partial<Envelope>;
    if (envelope.schemaVersion !== PROJECT_SCHEMA_VERSION || !Array.isArray(envelope.projects) || !envelope.projects.every(isProject)) throw new Error();
    if (new Set(envelope.projects.map((project) => project.id)).size !== envelope.projects.length) throw new Error();
    return [...envelope.projects].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  } catch {
    throw new InvalidLocalProjectDataError("Les données locales sont incompatibles ou corrompues. Elles n’ont pas été modifiées.");
  }
}

export function saveProjects(projects: Project[], storage?: StorageLike) {
  const target = getStorage(storage);
  try { target.setItem(PROJECT_STORAGE_KEY, JSON.stringify({ schemaVersion: PROJECT_SCHEMA_VERSION, projects } satisfies Envelope)); }
  catch { throw new LocalStorageUnavailableError("L’enregistrement local a échoué (stockage plein ou indisponible). Vos modifications restent ouvertes dans cette page."); }
}

export function saveProject(project: Project, storage?: StorageLike) {
  const projects = readProjects(storage);
  saveProjects([project, ...projects.filter((item) => item.id !== project.id)], storage);
}

export function deleteProject(id: string, storage?: StorageLike) { saveProjects(readProjects(storage).filter((project) => project.id !== id), storage); }

export function resetProjects(storage?: StorageLike) {
  const target = getStorage(storage);
  try {
    const raw = target.getItem(PROJECT_STORAGE_KEY);
    if (raw) target.setItem(PROJECT_BACKUP_KEY, raw);
    target.removeItem(PROJECT_STORAGE_KEY);
  } catch { throw new LocalStorageUnavailableError("La réinitialisation locale a échoué."); }
}
