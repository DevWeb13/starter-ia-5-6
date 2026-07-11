import { buildDemoPlan, normalizeIdea } from "./demo-plan";

export const PROJECT_SCHEMA_VERSION = 1 as const;

export type Project = {
  id: string;
  schemaVersion: typeof PROJECT_SCHEMA_VERSION;
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

export type EditableProjectField = Exclude<keyof Project, "id" | "schemaVersion" | "createdAt" | "updatedAt">;

export const projectSections = [
  ["valueProposition", "Proposition de valeur", "text"],
  ["target", "Cible initiale", "text"],
  ["mvp", "MVP", "list"],
  ["technicalPlan", "Plan technique", "list"],
  ["marketingPlan", "Plan marketing", "list"],
  ["nextActions", "Prochaines actions", "list"],
] as const;

export function createProject(idea: string, id = crypto.randomUUID(), now = new Date().toISOString()): Project {
  const plan = buildDemoPlan(idea);
  return {
    id,
    schemaVersion: PROJECT_SCHEMA_VERSION,
    title: normalizeIdea(idea).slice(0, 72) || "Projet sans titre",
    originalIdea: plan.idea,
    valueProposition: plan.valueProposition,
    target: plan.target,
    mvp: plan.mvp,
    technicalPlan: plan.technicalPlan,
    marketingPlan: plan.marketingPlan,
    nextActions: plan.nextActions,
    createdAt: now,
    updatedAt: now,
  };
}

export function projectToMarkdown(project: Project) {
  const list = (items: string[]) => items.map((item) => `- ${item}`).join("\n");
  return `# ${project.title}\n\n## Idée d’origine\n\n${project.originalIdea}\n\n## Proposition de valeur\n\n${project.valueProposition}\n\n## Cible initiale\n\n${project.target}\n\n## MVP\n\n${list(project.mvp)}\n\n## Plan technique\n\n${list(project.technicalPlan)}\n\n## Plan marketing\n\n${list(project.marketingPlan)}\n\n## Prochaines actions\n\n${list(project.nextActions)}\n\n---\n\nCréé le ${project.createdAt}. Modifié le ${project.updatedAt}.`;
}

export function updateProject(project: Project, field: EditableProjectField, value: string | string[]): Project {
  return { ...project, [field]: value, updatedAt: new Date().toISOString() } as Project;
}
