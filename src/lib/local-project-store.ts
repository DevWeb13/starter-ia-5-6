import { createProject } from "./project-engine";
import {
  PROJECT_SCHEMA_VERSION,
  isIsoDate,
  isProject,
  type HardwareProfile,
  type Project,
} from "./project";

export const PROJECT_STORAGE_KEY = "starter-ia.projects.v2";
export const LEGACY_PROJECT_STORAGE_KEY = "ai-project-launcher.projects.v1";
export const PROJECT_BACKUP_KEY = "starter-ia.projects.v2.backup";
export const LEGACY_MIGRATION_BACKUP_KEY = "starter-ia.projects.v1.migration-backup";
export const LEGACY_MIGRATION_MARKER_KEY = "starter-ia.projects.v1.migrated";

export type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;
type Envelope = { schemaVersion: typeof PROJECT_SCHEMA_VERSION; projects: Project[] };

type LegacyProject = {
  id: string;
  schemaVersion: 1;
  title: string;
  originalIdea: string;
  valueProposition: string;
  target: string;
  mvp: string[];
  technicalPlan: string[];
  marketingPlan: string[];
  nextActions: string[];
  createdAt: string;
  updatedAt: string;
};

export class LocalStorageUnavailableError extends Error {}
export class InvalidLocalProjectDataError extends Error {}

export type RawProjectData = { key: string; raw: string };

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isLegacyProject(value: unknown): value is LegacyProject {
  if (!value || typeof value !== "object") return false;
  const project = value as Record<string, unknown>;
  return project.schemaVersion === 1 &&
    typeof project.id === "string" && project.id.length > 0 &&
    ["title", "originalIdea", "valueProposition", "target"].every((key) => typeof project[key] === "string") &&
    isIsoDate(project.createdAt) && isIsoDate(project.updatedAt) &&
    ["mvp", "technicalPlan", "marketingPlan", "nextActions"].every((key) => isStringArray(project[key]));
}

function getStorage(storage?: StorageLike): StorageLike {
  if (storage) return storage;
  if (typeof window === "undefined") {
    throw new LocalStorageUnavailableError("Le stockage local n’est disponible que dans le navigateur.");
  }
  try {
    const probe = "__starter_ia_storage_probe__";
    window.localStorage.setItem(probe, "1");
    window.localStorage.removeItem(probe);
    return window.localStorage;
  } catch {
    throw new LocalStorageUnavailableError("Le stockage local est indisponible dans ce navigateur.");
  }
}

function getItem(target: StorageLike, key: string) {
  try {
    return target.getItem(key);
  } catch {
    throw new LocalStorageUnavailableError("Le stockage local est indisponible dans ce navigateur.");
  }
}

function parseV2(raw: string): Project[] {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") throw new Error();
    const envelope = parsed as Partial<Envelope>;
    if (
      envelope.schemaVersion !== PROJECT_SCHEMA_VERSION ||
      !Array.isArray(envelope.projects) ||
      !envelope.projects.every(isProject) ||
      new Set(envelope.projects.map((project) => project.id)).size !== envelope.projects.length
    ) throw new Error();
    return [...envelope.projects].sort((first, second) => second.updatedAt.localeCompare(first.updatedAt));
  } catch {
    throw new InvalidLocalProjectDataError(
      "Les données locales version 2 sont incompatibles ou corrompues. Elles n’ont pas été modifiées. Exportez la sauvegarde brute avant de réinitialiser.",
    );
  }
}

function parseLegacy(raw: string): LegacyProject[] {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") throw new Error();
    const envelope = parsed as { schemaVersion?: unknown; projects?: unknown };
    if (
      envelope.schemaVersion !== 1 ||
      !Array.isArray(envelope.projects) ||
      !envelope.projects.every(isLegacyProject) ||
      new Set(envelope.projects.map((project) => project.id)).size !== envelope.projects.length
    ) throw new Error();
    return envelope.projects;
  } catch {
    throw new InvalidLocalProjectDataError(
      "La migration des anciens projets a échoué : les données version 1 sont incompatibles ou corrompues. La source historique n’a pas été modifiée. Exportez-la ou réinitialisez après sauvegarde.",
    );
  }
}

const migratedHardware: HardwareProfile = {
  hasComputer: false,
  operatingSystem: "none",
  hasIPhone: false,
  codexLocalAvailable: false,
  remoteControlAvailable: false,
  githubAvailable: false,
  vercelAvailable: false,
  machineCanStayActive: false,
};

function historicalSummary(project: LegacyProject) {
  return [
    "Contexte historique importé depuis Starter IA schéma 1. Aucune progression, preuve ou approbation n’a été déduite.",
    `Ancienne cible : ${project.target || "information manquante"}`,
    `Ancien MVP : ${project.mvp.join(" ; ") || "information manquante"}`,
    `Ancien plan technique : ${project.technicalPlan.join(" ; ") || "information manquante"}`,
    `Ancien plan marketing : ${project.marketingPlan.join(" ; ") || "information manquante"}`,
    `Anciennes prochaines actions : ${project.nextActions.join(" ; ") || "information manquante"}`,
  ].join("\n");
}

function migrateLegacyProject(project: LegacyProject, migratedAt: string): Project {
  const summary = historicalSummary(project);
  return {
    ...createProject({
      title: project.title,
      brief: {
        description: project.originalIdea,
        desiredOutcome: project.valueProposition || "Information manquante : résultat recherché non renseigné dans le schéma 1.",
        constraints: "Information manquante : contraintes non renseignées dans le schéma 1.",
        existingContext: summary,
      },
      hardware: migratedHardware,
    }, project.id, project.createdAt),
    updatedAt: project.updatedAt,
    migrationHistory: {
      fromSchemaVersion: 1,
      migratedAt,
      historicalSummary: summary,
    },
  };
}

export function readProjects(storage?: StorageLike, now = new Date().toISOString()): Project[] {
  const target = getStorage(storage);
  const rawV2 = getItem(target, PROJECT_STORAGE_KEY);
  if (rawV2) return parseV2(rawV2);

  if (getItem(target, LEGACY_MIGRATION_MARKER_KEY)) return [];
  const rawV1 = getItem(target, LEGACY_PROJECT_STORAGE_KEY);
  if (!rawV1) return [];
  const migrated = parseLegacy(rawV1).map((project) => migrateLegacyProject(project, now));

  try {
    target.setItem(LEGACY_MIGRATION_BACKUP_KEY, rawV1);
    saveProjects(migrated, target);
    target.setItem(LEGACY_MIGRATION_MARKER_KEY, now);
  } catch (cause) {
    if (cause instanceof LocalStorageUnavailableError) throw cause;
    throw new LocalStorageUnavailableError(
      "La migration a été préparée mais son enregistrement a échoué. La source version 1 reste intacte.",
    );
  }
  return [...migrated].sort((first, second) => second.updatedAt.localeCompare(first.updatedAt));
}

export function readRawProjectData(storage?: StorageLike): RawProjectData | null {
  const target = getStorage(storage);
  const rawV2 = getItem(target, PROJECT_STORAGE_KEY);
  if (rawV2 !== null) return { key: PROJECT_STORAGE_KEY, raw: rawV2 };
  const rawV1 = getItem(target, LEGACY_PROJECT_STORAGE_KEY);
  return rawV1 === null ? null : { key: LEGACY_PROJECT_STORAGE_KEY, raw: rawV1 };
}

export function saveProjects(projects: Project[], storage?: StorageLike) {
  const target = getStorage(storage);
  if (
    !projects.every(isProject) ||
    new Set(projects.map((project) => project.id)).size !== projects.length
  ) {
    throw new InvalidLocalProjectDataError("Le projet local est invalide et n’a pas été enregistré.");
  }
  try {
    target.setItem(
      PROJECT_STORAGE_KEY,
      JSON.stringify({ schemaVersion: PROJECT_SCHEMA_VERSION, projects } satisfies Envelope),
    );
  } catch {
    throw new LocalStorageUnavailableError(
      "L’enregistrement local a échoué (stockage plein ou indisponible). Vos modifications restent ouvertes dans cette page.",
    );
  }
}

export function saveProject(project: Project, storage?: StorageLike) {
  const projects = readProjects(storage);
  saveProjects([project, ...projects.filter((item) => item.id !== project.id)], storage);
}

export function deleteProject(id: string, storage?: StorageLike) {
  saveProjects(readProjects(storage).filter((project) => project.id !== id), storage);
}

export function resetProjects(storage?: StorageLike) {
  const target = getStorage(storage);
  try {
    const raw = target.getItem(PROJECT_STORAGE_KEY);
    if (raw) target.setItem(PROJECT_BACKUP_KEY, raw);
    target.removeItem(PROJECT_STORAGE_KEY);
    target.setItem(LEGACY_MIGRATION_MARKER_KEY, new Date().toISOString());
  } catch {
    throw new LocalStorageUnavailableError("La réinitialisation locale a échoué.");
  }
}
