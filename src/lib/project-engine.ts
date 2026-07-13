import {
  PROJECT_SCHEMA_VERSION,
  type CreateProjectInput,
  type HardwareProfile,
  type Project,
  type ProjectPhase,
  type ProjectPhaseId,
  type ProjectStep,
  type WorkflowRecommendation,
} from "./project";

type StepTemplate = Omit<
  ProjectStep,
  "chatGptMission" | "codexMission" | "status" | "userNotes" | "humanApprovalGranted"
> & {
  chatGpt: boolean;
  codex: boolean;
};

type PhaseTemplate = Omit<ProjectPhase, "steps"> & { steps: StepTemplate[] };

const phaseTemplates: PhaseTemplate[] = [
  {
    id: "scope",
    order: 1,
    name: "Cadrer",
    summary: "Transformer l’idée en objectif, limites et décisions observables.",
    steps: [
      {
        id: "scope-problem",
        order: 1,
        title: "Formuler le problème et le résultat",
        objective: "Décrire le problème, le résultat recherché et les personnes concernées sans présenter une hypothèse comme validée.",
        reason: "Un problème précis évite de construire une solution séduisante mais inutile.",
        role: "stratégie produit",
        recommendedTool: "ChatGPT",
        chatGpt: true,
        codex: false,
        deliverables: ["Brief de problème", "Résultat attendu mesurable"],
        successCriteria: ["Les hypothèses sont nommées", "Le résultat attendu est observable", "Les informations manquantes sont listées"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "scope-constraints",
        order: 2,
        title: "Fixer les contraintes et les frontières",
        objective: "Définir le périmètre, les contraintes, les risques et les actions qui resteront sous contrôle humain.",
        reason: "Les frontières explicites protègent le temps, les données et les décisions sensibles.",
        role: "stratégie produit",
        recommendedTool: "ChatGPT",
        chatGpt: true,
        codex: false,
        deliverables: ["Périmètre initial", "Registre des contraintes et risques"],
        successCriteria: ["Le hors-périmètre est explicite", "Les risques majeurs ont une réponse", "Les actions sensibles sont identifiées"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
    ],
  },
  {
    id: "validate",
    order: 2,
    name: "Valider",
    summary: "Confronter les hypothèses au marché et préparer un positionnement vérifiable.",
    steps: [
      {
        id: "validate-market",
        order: 1,
        title: "Étudier le marché et les alternatives",
        objective: "Lister les hypothèses de cible, les solutions actuelles et les preuves à recueillir.",
        reason: "Une recherche structurée réduit les affirmations commerciales sans preuve.",
        role: "recherche marché",
        recommendedTool: "ChatGPT + recherche humaine",
        chatGpt: true,
        codex: false,
        deliverables: ["Carte des alternatives", "Hypothèses de cible", "Plan d’entretiens ou d’observation"],
        successCriteria: ["Les sources sont distinguées des suppositions", "Les critères d’invalidation sont définis", "Aucun marché n’est déclaré validé sans preuve"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "validate-positioning",
        order: 2,
        title: "Tester la proposition de valeur",
        objective: "Préparer un message, une preuve nécessaire et un test simple auprès de la cible supposée.",
        reason: "Le marketing commence par un message testable, pas par une promesse définitive.",
        role: "marketing",
        recommendedTool: "ChatGPT",
        chatGpt: true,
        codex: false,
        deliverables: ["Proposition de valeur provisoire", "Message de test", "Critères de décision"],
        successCriteria: ["Le message décrit un résultat attendu", "Le test peut contredire l’hypothèse", "La décision poursuivre, corriger ou arrêter est possible"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "validate-evidence",
        order: 3,
        title: "Consigner les preuves de validation",
        objective: "Rassembler les retours réels et décider ce qui reste non tenté, partiel ou bloqué.",
        reason: "Des notes vérifiables empêchent de confondre enthousiasme et validation.",
        role: "reviewer",
        recommendedTool: "Humain + ChatGPT",
        chatGpt: true,
        codex: false,
        deliverables: ["Journal de preuves", "Décision de poursuite documentée"],
        successCriteria: ["Chaque conclusion renvoie à une preuve", "Les biais et limites sont visibles", "Les inconnues restent signalées"],
        requiresHumanApproval: true,
        humanApprovalReason: "L’utilisateur décide si les preuves justifient de poursuivre, corriger ou arrêter le projet.",
      },
    ],
  },
  {
    id: "design",
    order: 3,
    name: "Concevoir",
    summary: "Définir un MVP, une expérience et une architecture proportionnés aux preuves.",
    steps: [
      {
        id: "design-mvp",
        order: 1,
        title: "Définir le MVP et son parcours principal",
        objective: "Choisir le plus petit parcours capable de produire la preuve utile suivante.",
        reason: "Un MVP réduit apprend avant d’élargir le coût de construction.",
        role: "UX et contenu",
        recommendedTool: "ChatGPT",
        chatGpt: true,
        codex: false,
        deliverables: ["Périmètre MVP", "Parcours utilisateur", "Contenus essentiels"],
        successCriteria: ["Un résultat principal est prioritaire", "Le parcours reste utilisable sans formation", "Les exclusions sont explicites"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "design-architecture",
        order: 2,
        title: "Choisir l’architecture et le plan de réalisation",
        objective: "Définir les composants, données, risques et contrôles sans surdimensionner la solution.",
        reason: "Une architecture proportionnée facilite les corrections et les vérifications.",
        role: "architecture",
        recommendedTool: "ChatGPT + Codex",
        chatGpt: true,
        codex: true,
        deliverables: ["Architecture cible", "Plan de réalisation", "Plan de tests"],
        successCriteria: ["Les choix répondent au MVP", "Les risques sécurité et accessibilité sont traités", "Les dépendances non nécessaires sont écartées"],
        requiresHumanApproval: true,
        humanApprovalReason: "L’utilisateur approuve les compromis structurants, les coûts et les données qui seront traitées.",
      },
    ],
  },
  {
    id: "build",
    order: 4,
    name: "Construire",
    summary: "Produire le MVP sur une branche avec un écrivain unique et des contrôles ciblés.",
    steps: [
      {
        id: "build-foundation",
        order: 1,
        title: "Préparer le dépôt et les fondations",
        objective: "Vérifier le point de départ, créer une branche et préparer la structure minimale.",
        reason: "Un socle propre rend le travail récupérable et protège les changements existants.",
        role: "développement",
        recommendedTool: "Codex",
        chatGpt: false,
        codex: true,
        deliverables: ["Branche dédiée", "Structure du MVP", "Premier checkpoint vérifiable"],
        successCriteria: ["Le dépôt était propre ou les changements ont été préservés", "Aucun secret n’est ajouté", "Le checkpoint est limité au périmètre"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "build-core",
        order: 2,
        title: "Implémenter le parcours principal",
        objective: "Construire le résultat utile de bout en bout avec les données et états nécessaires.",
        reason: "Le parcours complet fournit une preuve plus forte que des écrans isolés.",
        role: "développement",
        recommendedTool: "Codex",
        chatGpt: true,
        codex: true,
        deliverables: ["Parcours principal fonctionnel", "États vide, erreur et succès", "Documentation utile"],
        successCriteria: ["Le résultat attendu est atteignable", "Les erreurs conservent les données", "Un seul agent modifie les fichiers"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "build-content",
        order: 3,
        title: "Intégrer les contenus et garde-fous",
        objective: "Ajouter les textes, limites, validations et protections nécessaires au parcours.",
        reason: "Le code seul ne suffit pas à rendre les décisions et limites compréhensibles.",
        role: "UX et contenu",
        recommendedTool: "ChatGPT + Codex",
        chatGpt: true,
        codex: true,
        deliverables: ["Contenus du parcours", "Garde-fous humains", "Limites visibles"],
        successCriteria: ["Aucune capacité future n’est promise", "Les actions sensibles sont bloquées sans accord", "Les libellés sont accessibles"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
    ],
  },
  {
    id: "verify",
    order: 5,
    name: "Vérifier",
    summary: "Contrôler le comportement, la qualité, la sécurité et l’accessibilité sur la cible réelle.",
    steps: [
      {
        id: "verify-tests",
        order: 1,
        title: "Exécuter les contrôles techniques",
        objective: "Lancer les tests ciblés puis la suite pertinente et observer leurs résultats.",
        reason: "Une commande réellement réussie apporte une preuve reproductible.",
        role: "qualité et sécurité",
        recommendedTool: "Codex",
        chatGpt: false,
        codex: true,
        deliverables: ["Résultats de tests", "Journal des défauts", "Corrections ciblées"],
        successCriteria: ["Les contrôles applicables réussissent", "Les échecs sont expliqués", "Aucun résultat n’est inventé"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "verify-experience",
        order: 2,
        title: "Vérifier l’expérience et l’accessibilité",
        objective: "Contrôler le parcours au clavier, sur mobile, au zoom et dans les thèmes disponibles.",
        reason: "Une fonction inaccessible ou illisible n’est pas un résultat utilisable.",
        role: "qualité et sécurité",
        recommendedTool: "Codex + vérification humaine",
        chatGpt: false,
        codex: true,
        deliverables: ["Contrôle mobile et clavier", "Contrôle accessibilité", "Preuves visuelles ou comportementales"],
        successCriteria: ["Aucun débordement global à 320 px", "Le focus et les erreurs sont perceptibles", "Les thèmes gardent le contraste"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "verify-review",
        order: 3,
        title: "Faire relire indépendamment",
        objective: "Rechercher les problèmes bloquants ou importants et vérifier les corrections.",
        reason: "Une revue indépendante révèle les angles morts de l’écrivain.",
        role: "reviewer",
        recommendedTool: "Reviewer en lecture seule",
        chatGpt: true,
        codex: true,
        deliverables: ["Revue priorisée", "Corrections vérifiées", "Décision de livraison"],
        successCriteria: ["Le reviewer n’a rien modifié", "Aucun bloquant ou important ne subsiste", "Deux cycles maximum sont respectés"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
    ],
  },
  {
    id: "launch-improve",
    order: 6,
    name: "Lancer et améliorer",
    summary: "Préparer une publication factuelle, obtenir les accords et apprendre des retours réels.",
    steps: [
      {
        id: "launch-pack",
        order: 1,
        title: "Préparer le pack de lancement",
        objective: "Créer les contenus de démonstration et de marketing uniquement à partir de faits vérifiés.",
        reason: "Un lancement crédible montre le résultat réel et ses limites.",
        role: "marketing",
        recommendedTool: "ChatGPT + Codex",
        chatGpt: true,
        codex: true,
        deliverables: ["Message de lancement", "Démonstration", "README ou landing factuelle"],
        successCriteria: ["Les preuves soutiennent les affirmations", "Les limites sont visibles", "Aucune métrique ou réussite n’est inventée"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "launch-release",
        order: 2,
        title: "Autoriser puis effectuer le lancement",
        objective: "Vérifier la branche, la Preview et le plan de publication avant toute action externe.",
        reason: "Fusion, production, publication et messages sont des décisions humaines sensibles.",
        role: "qualité et sécurité",
        recommendedTool: "Humain + Codex",
        chatGpt: false,
        codex: true,
        deliverables: ["Checklist de lancement", "Accord humain consigné", "Journal des actions réellement effectuées"],
        successCriteria: ["La source et la cible sont vérifiées", "Chaque action sensible a un accord explicite", "La production n’est jamais implicite"],
        requiresHumanApproval: true,
        humanApprovalReason: "Accord obligatoire avant fusion dans main, production, suppression, paiement, secret, publication externe, message, email ou action irréversible.",
      },
      {
        id: "launch-learn",
        order: 3,
        title: "Mesurer et décider des améliorations",
        objective: "Consigner les retours, les signaux utiles et la prochaine hypothèse à vérifier.",
        reason: "Les retours réels guident mieux la suite qu’une feuille de route figée.",
        role: "stratégie produit",
        recommendedTool: "ChatGPT",
        chatGpt: true,
        codex: false,
        deliverables: ["Rapport de retours", "Décision d’amélioration", "Prochaine expérience"],
        successCriteria: ["Les faits sont séparés des interprétations", "La prochaine action est limitée", "Un arrêt reste une décision possible"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
    ],
  },
];

function deliveryPath(hardware: HardwareProfile): string[] {
  const path = ["Préparer les missions dans ChatGPT", "Exécuter les modifications autorisées avec Codex", "Vérifier les résultats réels"];
  if (hardware.githubAvailable) path.push("Travailler sur une branche GitHub et ouvrir une pull request");
  else path.push("Conserver les changements et preuves localement, sans dépendre de GitHub");
  if (hardware.vercelAvailable && hardware.githubAvailable) path.push("Utiliser uniquement la Preview Vercel automatique de la pull request");
  else if (!hardware.vercelAvailable) path.push("Vérifier localement sans supposer Vercel disponible");
  path.push("Demander un accord humain avant toute action sensible");
  return path;
}

export function recommendWorkflow(hardware: HardwareProfile): WorkflowRecommendation {
  const base = { deliveryPath: deliveryPath(hardware) };
  if (
    hardware.hasComputer && hardware.operatingSystem === "ubuntu-linux" && hardware.hasIPhone &&
    hardware.codexLocalAvailable && hardware.remoteControlAvailable && hardware.machineCanStayActive
  ) {
    return {
      ...base,
      id: "iphone-remote-ubuntu",
      name: "iPhone + Codex Remote + Ubuntu",
      summary: "Pilotez depuis l’iPhone une session Codex qui s’exécute sur Ubuntu, puis vérifiez Git et les contrôles sur la machine.",
      reasons: ["Toutes les capacités du workflow phare ont été déclarées disponibles", "La machine peut rester active, connectée et non suspendue"],
      prerequisites: ["Remote Control disponible sur le compte", "Session Codex ouverte sur Ubuntu", "Machine active et connectée"],
      warnings: ["L’iPhone ne contient ni le dépôt ni les processus", "Une déconnexion ne prouve pas l’arrêt des processus et ne crée aucun commit"],
    };
  }
  if (
    hardware.hasComputer && hardware.operatingSystem !== "none" && hardware.codexLocalAvailable &&
    hardware.remoteControlAvailable && hardware.machineCanStayActive
  ) {
    return {
      ...base,
      id: "remote-control",
      name: "ChatGPT + Codex Remote Control",
      summary: "Pilotez la session à distance uniquement parce que Remote Control et une machine active ont été déclarés disponibles.",
      reasons: ["Remote Control est déclaré disponible", "La machine peut rester active et connectée"],
      prerequisites: ["Codex local ouvert sur la machine", "Association Remote Control vérifiée sur le compte"],
      warnings: ["La disponibilité peut dépendre du compte, du client et des versions", "Contrôlez Git et les processus séparément"],
    };
  }
  if (hardware.codexLocalAvailable && hardware.remoteControlAvailable) {
    return {
      ...base,
      id: "chatgpt-codex-local",
      name: "ChatGPT + Codex local",
      summary: "Travaillez directement sur l’ordinateur : les conditions déclarées ne suffisent pas à recommander un pilotage distant fiable.",
      reasons: ["Codex local est disponible", "Le parcours local ne dépend pas d’une machine distante active"],
      prerequisites: ["Dépôt accessible sur l’ordinateur", "Branche dédiée avant modification"],
      warnings: ["Remote Control a été déclaré, mais ses conditions d’usage ne sont pas toutes réunies"],
    };
  }
  if (hardware.codexLocalAvailable) {
    return {
      ...base,
      id: "local-without-remote",
      name: "ChatGPT + Codex local, sans Remote Control",
      summary: "Préparez dans ChatGPT puis exécutez et vérifiez avec Codex directement sur l’ordinateur.",
      reasons: ["Codex local est déclaré disponible", "Remote Control n’est pas nécessaire pour avancer"],
      prerequisites: ["Dépôt accessible sur l’ordinateur", "Branche dédiée avant modification"],
      warnings: ["Le pilotage à distance n’est pas inclus dans ce parcours"],
    };
  }
  return {
    ...base,
    id: "chatgpt-prepare-codex",
    name: "Préparation ChatGPT, Codex à installer ou activer",
    summary: "Cadrez et préparez les missions dans ChatGPT, puis installez ou activez Codex avant toute modification de fichiers.",
    reasons: ["Codex n’a pas été déclaré disponible", "Starter IA ne simule aucune exécution de fichiers"],
    prerequisites: ["Installer ou activer Codex dans un environnement compatible", "Vérifier l’accès au dépôt avant la phase Construire"],
    warnings: ["Les missions Codex sont préparées mais leur exécution reste non tentée", "Aucun fichier ne sera modifié automatiquement"],
  };
}

function missionContext(input: CreateProjectInput, phase: string, step: StepTemplate) {
  const constraints = input.brief.constraints || "Information manquante : aucune contrainte saisie.";
  const context = input.brief.existingContext || "Information manquante : aucun contexte ou lien existant saisi.";
  return [
    `Projet : ${input.brief.description}`,
    `Résultat recherché : ${input.brief.desiredOutcome}`,
    `Contraintes : ${constraints}`,
    `Contexte existant : ${context}`,
    `Phase : ${phase}`,
    `Étape : ${step.title}`,
    `Objectif : ${step.objective}`,
    `Livrables attendus : ${step.deliverables.join(" ; ")}`,
    `Preuves nécessaires : ${step.successCriteria.join(" ; ")}`,
    "Frontières de sécurité : ne pas inventer de preuve, de validation marché ou de résultat commercial ; signaler toute information manquante.",
    `Accord humain : ${step.requiresHumanApproval ? step.humanApprovalReason : "obligatoire avant fusion dans main, production, suppression, paiement, secret, publication externe, message, email ou action irréversible."}`,
  ].join("\n");
}

function buildStep(input: CreateProjectInput, phase: PhaseTemplate, template: StepTemplate): ProjectStep {
  const { chatGpt, codex, ...step } = template;
  const context = missionContext(input, phase.name, template);
  return {
    ...step,
    chatGptMission: chatGpt
      ? `Tu interviens comme spécialiste « ${template.role} ». Analyse et prépare le livrable sans présenter une hypothèse comme validée.\n\n${context}`
      : undefined,
    codexMission: codex
      ? `Tu es l’unique écrivain autorisé pour cette mission. Inspecte d’abord la cible réelle, modifie uniquement le périmètre autorisé et vérifie le résultat enregistré.\n\n${context}`
      : undefined,
    status: "not-started",
    userNotes: "",
    humanApprovalGranted: false,
  };
}

function normalizeTitle(description: string) {
  const normalized = description.replace(/\s+/g, " ").trim();
  return normalized.slice(0, 72) || "Projet sans titre";
}

export function createProject(
  input: CreateProjectInput,
  id = crypto.randomUUID(),
  now = new Date().toISOString(),
): Project {
  return {
    id,
    schemaVersion: PROJECT_SCHEMA_VERSION,
    title: input.title?.trim().slice(0, 72) || normalizeTitle(input.brief.description),
    createdAt: now,
    updatedAt: now,
    brief: { ...input.brief },
    hardware: { ...input.hardware },
    workflow: recommendWorkflow(input.hardware),
    phases: phaseTemplates.map((phase) => ({
      id: phase.id as ProjectPhaseId,
      order: phase.order,
      name: phase.name,
      summary: phase.summary,
      steps: phase.steps.map((step) => buildStep(input, phase, step)),
    })),
  };
}
