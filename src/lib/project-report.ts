import {
  PROJECT_STEP_STATUS_LABELS,
  isProject,
  type HardwareProfile,
  type Project,
  type ProjectStep,
  type ProjectStepStatus,
} from "./project";

export type ProjectProgress = {
  total: number;
  completed: number;
  partial: number;
  blocked: number;
  notStarted: number;
  percentage: number;
};

export type ProjectReport = ProjectProgress & {
  plannedRoles: string[];
  evidenceCount: number;
  approvalsGranted: number;
  approvalsMissing: number;
  nextActions: { phase: string; step: string; status: ProjectStepStatus }[];
  executionNotice: string;
};

function allSteps(project: Project): ProjectStep[] {
  return project.phases.flatMap((phase) => phase.steps);
}

export function getProjectProgress(project: Project): ProjectProgress {
  const steps = allSteps(project);
  const count = (status: ProjectStepStatus) => steps.filter((step) => step.status === status).length;
  const completed = count("done-verified");
  return {
    total: steps.length,
    completed,
    partial: count("partial"),
    blocked: count("blocked"),
    notStarted: count("not-started"),
    percentage: steps.length ? Math.round((completed / steps.length) * 100) : 0,
  };
}

export function createProjectReport(project: Project): ProjectReport {
  const steps = allSteps(project);
  const progress = getProjectProgress(project);
  return {
    ...progress,
    plannedRoles: [...new Set(steps.map((step) => step.role))],
    evidenceCount: steps.filter((step) => step.userNotes.trim().length > 0).length,
    approvalsGranted: steps.filter((step) => step.requiresHumanApproval && step.humanApprovalGranted).length,
    approvalsMissing: steps.filter((step) => step.requiresHumanApproval && !step.humanApprovalGranted).length,
    nextActions: project.phases.flatMap((phase) =>
      phase.steps
        .filter((step) => step.status !== "done-verified")
        .map((step) => ({ phase: phase.name, step: step.title, status: step.status })),
    ).slice(0, 5),
    executionNotice: "Mission préparée, exécution non vérifiée sauf lorsqu’une étape est déclarée « fait et vérifié » par l’utilisateur.",
  };
}

function markdownText(value: string) {
  const normalized = value.replace(/\r\n?/g, "\n").trim();
  if (!normalized) return "Information manquante.";
  return normalized
    .split("\n")
    .map((line) => line.replace(/^([#>*_`~+-]|\d+[.)]\s)/, "\\$1"))
    .join("\n");
}

function list(items: string[]) {
  return items.length ? items.map((item) => `- ${markdownText(item)}`).join("\n") : "- Information manquante.";
}

function hardwareLines(hardware: HardwareProfile) {
  const systemLabels: Record<HardwareProfile["operatingSystem"], string> = {
    "ubuntu-linux": "Ubuntu/Linux",
    windows: "Windows",
    macos: "macOS",
    none: "Aucun",
  };
  const yesNo = (value: boolean) => value ? "oui" : "non";
  return [
    `Ordinateur : ${yesNo(hardware.hasComputer)}`,
    `Système : ${systemLabels[hardware.operatingSystem]}`,
    `iPhone : ${yesNo(hardware.hasIPhone)}`,
    `Codex local disponible : ${yesNo(hardware.codexLocalAvailable)}`,
    `Remote Control déclaré disponible : ${yesNo(hardware.remoteControlAvailable)}`,
    `GitHub disponible : ${yesNo(hardware.githubAvailable)}`,
    `Vercel disponible : ${yesNo(hardware.vercelAvailable)}`,
    `Machine pouvant rester active : ${yesNo(hardware.machineCanStayActive)}`,
  ];
}

export function projectToMarkdown(project: Project) {
  const report = createProjectReport(project);
  const phaseSections = project.phases.map((phase) => {
    const steps = phase.steps.map((step) => `### ${step.order}. ${markdownText(step.title)}

**Objectif**

${markdownText(step.objective)}

**Rôle planifié :** ${markdownText(step.role)}  
**Outil recommandé :** ${markdownText(step.recommendedTool)}  
**Statut déclaré par l’utilisateur :** ${PROJECT_STEP_STATUS_LABELS[step.status]}

**Mission ChatGPT**

${step.chatGptMission ? markdownText(step.chatGptMission) : "Non prévue pour cette étape."}

**Mission Codex**

${step.codexMission ? markdownText(step.codexMission) : "Non prévue pour cette étape."}

**Livrables attendus**

${list(step.deliverables)}

**Preuves attendues**

${list(step.successCriteria)}

**Notes ou preuves consignées**

${markdownText(step.userNotes)}

**Validation humaine :** ${step.requiresHumanApproval ? (step.humanApprovalGranted ? "accordée" : "manquante") : "non requise"}${step.requiresHumanApproval ? ` — ${markdownText(step.humanApprovalReason)}` : ""}`
    ).join("\n\n");
    return `## Phase ${phase.order} — ${phase.name}\n\n${markdownText(phase.summary)}\n\n${steps}`;
  }).join("\n\n");

  return `# ${markdownText(project.title)}

> Projet local Starter IA. Les missions sont préparées ; leur exécution n’est pas vérifiée automatiquement.

## Brief

**Description**

${markdownText(project.brief.description)}

**Résultat recherché**

${markdownText(project.brief.desiredOutcome)}

**Contraintes**

${markdownText(project.brief.constraints)}

**Contexte ou liens existants**

${markdownText(project.brief.existingContext)}

## Profil matériel déclaré

${list(hardwareLines(project.hardware))}

## Workflow recommandé

**${markdownText(project.workflow.name)}** — ${markdownText(project.workflow.summary)}

### Raisons

${list(project.workflow.reasons)}

### Prérequis

${list(project.workflow.prerequisites)}

### Avertissements

${list(project.workflow.warnings)}

### Chemin de livraison

${list(project.workflow.deliveryPath)}

${phaseSections}

## Rapport de progression

- ${report.completed}/${report.total} étapes déclarées « fait et vérifié » par l’utilisateur (${report.percentage} %)
- ${report.partial} étapes partielles
- ${report.blocked} étapes bloquées
- ${report.notStarted} étapes non tentées
- ${report.evidenceCount} étapes avec notes ou preuves consignées
- ${report.approvalsGranted} validations humaines accordées
- ${report.approvalsMissing} validations humaines manquantes

### Prochaines actions

${list(report.nextActions.map((action) => `${action.phase} — ${action.step} (${PROJECT_STEP_STATUS_LABELS[action.status]})`))}

## Limites actuelles

- Moteur local déterministe, sans appel ChatGPT, Codex ou fournisseur IA.
- Stockage limité à ce navigateur et cet appareil, sans compte ni synchronisation.
- Les statuts, preuves et validations sont déclarés par l’utilisateur.
- Une mission copiée n’est jamais considérée comme exécutée.

Créé le ${project.createdAt}. Modifié le ${project.updatedAt}.`;
}

export function projectToJson(project: Project) {
  if (!isProject(project)) throw new Error("Le projet local n’est pas valide et ne peut pas être exporté.");
  return JSON.stringify(project, null, 2);
}
