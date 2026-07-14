export const PROJECT_SCHEMA_VERSION = 2 as const;

export const PROJECT_PHASE_IDS = [
  "scope",
  "validate",
  "design",
  "build",
  "verify",
  "launch-improve",
] as const;

export const PROJECT_STEP_STATUSES = [
  "not-started",
  "partial",
  "blocked",
  "done-verified",
] as const;

export const PROJECT_STEP_STATUS_LABELS: Record<ProjectStepStatus, string> = {
  "not-started": "Pas commencé",
  partial: "En cours",
  blocked: "Bloqué",
  "done-verified": "Terminé et vérifié",
};

export type ProjectPhaseId = (typeof PROJECT_PHASE_IDS)[number];
export type ProjectStepStatus = (typeof PROJECT_STEP_STATUSES)[number];
export type OperatingSystem = "ubuntu-linux" | "windows" | "macos" | "none";
export type WorkflowId =
  | "iphone-remote-ubuntu"
  | "remote-control"
  | "chatgpt-codex-local"
  | "local-without-remote"
  | "chatgpt-prepare-codex";

export type ProjectBrief = {
  description: string;
  desiredOutcome: string;
  constraints: string;
  existingContext: string;
};

export type HardwareProfile = {
  hasComputer: boolean;
  operatingSystem: OperatingSystem;
  hasIPhone: boolean;
  codexLocalAvailable: boolean;
  remoteControlAvailable: boolean;
  githubAvailable: boolean;
  vercelAvailable: boolean;
  machineCanStayActive: boolean;
};

export type WorkflowRecommendation = {
  id: WorkflowId;
  name: string;
  summary: string;
  reasons: string[];
  prerequisites: string[];
  warnings: string[];
  deliveryPath: string[];
};

export type ProjectStep = {
  id: string;
  order: number;
  title: string;
  objective: string;
  reason: string;
  role: string;
  recommendedTool: string;
  chatGptMission?: string;
  codexMission?: string;
  deliverables: string[];
  successCriteria: string[];
  requiresHumanApproval: boolean;
  humanApprovalReason: string;
  status: ProjectStepStatus;
  userNotes: string;
  humanApprovalGranted: boolean;
};

export type ProjectPhase = {
  id: ProjectPhaseId;
  order: number;
  name: string;
  summary: string;
  steps: ProjectStep[];
};

export type Project = {
  id: string;
  schemaVersion: typeof PROJECT_SCHEMA_VERSION;
  title: string;
  createdAt: string;
  updatedAt: string;
  brief: ProjectBrief;
  hardware: HardwareProfile;
  workflow: WorkflowRecommendation;
  phases: ProjectPhase[];
  migrationHistory?: {
    fromSchemaVersion: 1;
    migratedAt: string;
    historicalSummary: string;
  };
};

export type CreateProjectInput = {
  brief: ProjectBrief;
  hardware: HardwareProfile;
  title?: string;
};

export type StepUpdate = Partial<
  Pick<ProjectStep, "status" | "userNotes" | "humanApprovalGranted">
>;

export function isIsoDate(value: unknown): value is string {
  return typeof value === "string" &&
    !Number.isNaN(Date.parse(value)) &&
    new Date(value).toISOString() === value;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

export function isHardwareProfile(value: unknown): value is HardwareProfile {
  if (!value || typeof value !== "object") return false;
  const hardware = value as Record<string, unknown>;
  const hasValidFields = typeof hardware.hasComputer === "boolean" &&
    ["ubuntu-linux", "windows", "macos", "none"].includes(String(hardware.operatingSystem)) &&
    [
      "hasIPhone",
      "codexLocalAvailable",
      "remoteControlAvailable",
      "githubAvailable",
      "vercelAvailable",
      "machineCanStayActive",
    ].every((key) => typeof hardware[key] === "boolean");
  if (!hasValidFields) return false;

  const hasComputer = hardware.hasComputer as boolean;
  const operatingSystem = hardware.operatingSystem as OperatingSystem;
  return hasComputer === (operatingSystem !== "none") &&
    (hasComputer || (
      hardware.codexLocalAvailable === false &&
      hardware.remoteControlAvailable === false &&
      hardware.machineCanStayActive === false
    ));
}

function isWorkflow(value: unknown): value is WorkflowRecommendation {
  if (!value || typeof value !== "object") return false;
  const workflow = value as Record<string, unknown>;
  return [
    "iphone-remote-ubuntu",
    "remote-control",
    "chatgpt-codex-local",
    "local-without-remote",
    "chatgpt-prepare-codex",
  ].includes(String(workflow.id)) &&
    ["name", "summary"].every((key) => typeof workflow[key] === "string") &&
    ["reasons", "prerequisites", "warnings", "deliveryPath"].every((key) => isStringArray(workflow[key]));
}

function isStep(value: unknown): value is ProjectStep {
  if (!value || typeof value !== "object") return false;
  const step = value as Record<string, unknown>;
  return typeof step.id === "string" && step.id.length > 0 &&
    Number.isInteger(step.order) && Number(step.order) > 0 &&
    ["title", "objective", "reason", "role", "recommendedTool", "humanApprovalReason", "userNotes"].every(
      (key) => typeof step[key] === "string",
    ) &&
    (step.chatGptMission === undefined || typeof step.chatGptMission === "string") &&
    (step.codexMission === undefined || typeof step.codexMission === "string") &&
    isStringArray(step.deliverables) &&
    isStringArray(step.successCriteria) &&
    PROJECT_STEP_STATUSES.includes(step.status as ProjectStepStatus) &&
    typeof step.requiresHumanApproval === "boolean" &&
    typeof step.humanApprovalGranted === "boolean" &&
    (!step.requiresHumanApproval || (step.humanApprovalReason as string).length > 0) &&
    !(step.status === "done-verified" && (step.userNotes as string).trim().length === 0) &&
    !(step.status === "done-verified" && step.requiresHumanApproval && !step.humanApprovalGranted);
}

export function isProject(value: unknown): value is Project {
  if (!value || typeof value !== "object") return false;
  const project = value as Record<string, unknown>;
  if (
    project.schemaVersion !== PROJECT_SCHEMA_VERSION ||
    typeof project.id !== "string" || !project.id ||
    typeof project.title !== "string" ||
    !isIsoDate(project.createdAt) || !isIsoDate(project.updatedAt) ||
    !project.brief || typeof project.brief !== "object" ||
    !isHardwareProfile(project.hardware) || !isWorkflow(project.workflow) ||
    !Array.isArray(project.phases) || project.phases.length !== PROJECT_PHASE_IDS.length
  ) return false;

  const brief = project.brief as Record<string, unknown>;
  if (!["description", "desiredOutcome", "constraints", "existingContext"].every((key) => typeof brief[key] === "string")) return false;

  const phases = project.phases as unknown[];
  const stepIds = new Set<string>();
  return phases.every((value, phaseIndex) => {
    if (!value || typeof value !== "object") return false;
    const phase = value as Record<string, unknown>;
    if (
      phase.id !== PROJECT_PHASE_IDS[phaseIndex] ||
      phase.order !== phaseIndex + 1 ||
      typeof phase.name !== "string" ||
      typeof phase.summary !== "string" ||
      !Array.isArray(phase.steps) ||
      phase.steps.length < 2 || phase.steps.length > 3
    ) return false;
    return phase.steps.every((step, stepIndex) => {
      if (!isStep(step) || step.order !== stepIndex + 1 || stepIds.has(step.id)) return false;
      stepIds.add(step.id);
      return true;
    });
  });
}

export function updateProjectTitle(project: Project, title: string, now = new Date().toISOString()): Project {
  return { ...project, title, updatedAt: now };
}

export function updateProjectStep(
  project: Project,
  stepId: string,
  update: StepUpdate,
  now = new Date().toISOString(),
): Project {
  let found = false;
  const phases = project.phases.map((phase) => ({
    ...phase,
    steps: phase.steps.map((step) => {
      if (step.id !== stepId) return step;
      found = true;
      const next = { ...step, ...update };
      if (next.status === "done-verified" && next.requiresHumanApproval && !next.humanApprovalGranted) {
        throw new Error("Votre accord est nécessaire avant de choisir « Terminé et vérifié ».");
      }
      if (next.status === "done-verified" && !next.userNotes.trim()) {
        throw new Error("Ajoutez une note ou un résultat avant de choisir « Terminé et vérifié ».");
      }
      return next;
    }),
  }));
  if (!found) throw new Error("Étape introuvable.");
  return { ...project, phases, updatedAt: now };
}
