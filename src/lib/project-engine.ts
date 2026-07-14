import {
  PROJECT_SCHEMA_VERSION,
  isHardwareProfile,
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
    summary: "Décrire clairement le projet, le résultat souhaité et ce qui doit rester sous votre contrôle.",
    steps: [
      {
        id: "scope-problem",
        order: 1,
        title: "Décrire le problème",
        objective: "Expliquez quel problème vous voulez résoudre, pour qui, et ce que vous aimeriez obtenir. À ce stade, ce sont encore des idées à vérifier.",
        reason: "Une description claire aide à construire quelque chose de vraiment utile.",
        role: "personne qui aide à définir le projet",
        recommendedTool: "ChatGPT",
        chatGpt: true,
        codex: false,
        deliverables: ["Description claire du problème", "Résultat souhaité que vous pourrez vérifier"],
        successCriteria: ["Les idées à vérifier sont indiquées", "Le résultat souhaité peut être observé", "Les informations manquantes sont listées"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "scope-constraints",
        order: 2,
        title: "Définir les limites",
        objective: "Indiquez ce qui est inclus, ce qui ne l’est pas, les contraintes importantes et les décisions que vous voulez garder.",
        reason: "Des limites claires protègent votre temps, vos données et vos décisions importantes.",
        role: "personne qui aide à définir le projet",
        recommendedTool: "ChatGPT",
        chatGpt: true,
        codex: false,
        deliverables: ["Liste de ce qui est inclus et exclu", "Liste des contraintes et des principaux risques"],
        successCriteria: ["Ce qui n’est pas prévu est indiqué", "Chaque risque important a une réponse", "Les décisions qui demandent votre accord sont identifiées"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
    ],
  },
  {
    id: "validate",
    order: 2,
    name: "Valider",
    summary: "Vérifier que le projet répond à un besoin réel avant de construire davantage.",
    steps: [
      {
        id: "validate-market",
        order: 1,
        title: "Comprendre les solutions existantes",
        objective: "Cherchez qui rencontre ce problème, comment ces personnes le résolvent aujourd’hui et quelles informations vous devez encore obtenir.",
        reason: "Regarder les solutions actuelles évite de partir de suppositions.",
        role: "personne qui étudie les besoins et les solutions existantes",
        recommendedTool: "ChatGPT et recherche par vous-même",
        chatGpt: true,
        codex: false,
        deliverables: ["Liste des solutions actuelles", "Description des personnes concernées", "Questions à poser ou points à observer"],
        successCriteria: ["Les sources sont séparées des suppositions", "Vous savez quel résultat ferait changer d’avis", "Aucune conclusion n’est présentée comme certaine sans résultat réel"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "validate-positioning",
        order: 2,
        title: "Tester l’intérêt du projet",
        objective: "Préparez un message simple et testez-le auprès des personnes qui pourraient utiliser le projet.",
        reason: "Un petit test aide à savoir si le projet mérite d’aller plus loin.",
        role: "personne qui aide à présenter le projet",
        recommendedTool: "ChatGPT",
        chatGpt: true,
        codex: false,
        deliverables: ["Promesse provisoire", "Message à tester", "Règles simples pour décider de la suite"],
        successCriteria: ["Le message décrit un résultat concret", "Le test peut montrer que l’idée doit changer", "Vous pouvez choisir de continuer, corriger ou arrêter"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "validate-evidence",
        order: 3,
        title: "Décider avec des résultats réels",
        objective: "Rassemblez les retours obtenus. Notez ce qu’ils confirment, ce qu’ils contredisent et ce qui manque encore.",
        reason: "Des résultats enregistrés évitent de confondre enthousiasme et intérêt réel.",
        role: "personne qui relit les résultats",
        recommendedTool: "Vous-même avec l’aide de ChatGPT",
        chatGpt: true,
        codex: false,
        deliverables: ["Résumé des retours obtenus", "Décision enregistrée pour la suite"],
        successCriteria: ["Chaque conclusion renvoie à un résultat réel", "Les limites de la recherche sont visibles", "Les informations encore inconnues sont signalées"],
        requiresHumanApproval: true,
        humanApprovalReason: "Vous décidez si les résultats obtenus suffisent pour continuer, corriger ou arrêter le projet.",
      },
    ],
  },
  {
    id: "design",
    order: 3,
    name: "Concevoir",
    summary: "Choisir une première version simple et organiser sa construction.",
    steps: [
      {
        id: "design-mvp",
        order: 1,
        title: "Choisir la première version",
        objective: "Choisissez le parcours le plus simple qui apporte déjà un résultat utile à la personne concernée.",
        reason: "Une petite première version permet d’apprendre avant d’ajouter du temps et des coûts.",
        role: "personne qui organise l’expérience et les contenus",
        recommendedTool: "ChatGPT",
        chatGpt: true,
        codex: false,
        deliverables: ["Liste de ce qui est inclus dans la première version", "Parcours principal", "Textes indispensables"],
        successCriteria: ["Un résultat principal passe avant le reste", "Le parcours se comprend sans formation", "Ce qui attendra une version suivante est indiqué"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "design-architecture",
        order: 2,
        title: "Organiser la construction",
        objective: "Décidez comment organiser les écrans, les données, les contrôles et les étapes de réalisation sans compliquer le projet.",
        reason: "Une organisation technique simple facilite la construction, les corrections et les tests.",
        role: "personne qui organise la partie technique",
        recommendedTool: "ChatGPT + Codex",
        chatGpt: true,
        codex: true,
        deliverables: ["Organisation technique choisie", "Étapes de réalisation", "Liste des tests à prévoir"],
        successCriteria: ["Les choix servent la première version", "La sécurité et l’accessibilité sont prises en compte", "Aucun outil inutile n’est ajouté"],
        requiresHumanApproval: true,
        humanApprovalReason: "Vous approuvez les choix qui auront un effet important sur les coûts, les outils ou les données utilisées.",
      },
    ],
  },
  {
    id: "build",
    order: 4,
    name: "Construire",
    summary: "Construire la première version par petites étapes, sans perdre les changements existants.",
    steps: [
      {
        id: "build-foundation",
        order: 1,
        title: "Préparer le projet",
        objective: "Vérifiez le point de départ, créez une branche de travail et préparez uniquement les fichiers nécessaires.",
        reason: "Un départ propre protège les changements existants et permet de revenir en arrière.",
        role: "personne qui construit le projet",
        recommendedTool: "Codex",
        chatGpt: false,
        codex: true,
        deliverables: ["Branche de travail", "Structure minimale de la première version", "Première étape enregistrée"],
        successCriteria: ["Les changements existants sont préservés", "Aucun secret n’est ajouté", "La première modification reste limitée au besoin"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "build-core",
        order: 2,
        title: "Construire le parcours principal",
        objective: "Construisez le parcours utile du début à la fin, avec les informations et les états nécessaires.",
        reason: "Un parcours complet montre mieux le résultat que plusieurs écrans isolés.",
        role: "personne qui construit le projet",
        recommendedTool: "Codex",
        chatGpt: true,
        codex: true,
        deliverables: ["Parcours principal qui fonctionne", "Cas vide, erreur et réussite", "Instructions utiles"],
        successCriteria: ["Le résultat souhaité peut être atteint", "Une erreur ne fait pas perdre les informations saisies", "Un seul agent modifie les fichiers"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "build-content",
        order: 3,
        title: "Ajouter les textes et les protections",
        objective: "Ajoutez les textes, les limites, les demandes d’accord et les protections nécessaires au parcours.",
        reason: "Le code seul ne suffit pas pour expliquer les décisions et protéger les actions importantes.",
        role: "personne qui organise l’expérience et les contenus",
        recommendedTool: "ChatGPT + Codex",
        chatGpt: true,
        codex: true,
        deliverables: ["Textes du parcours", "Demandes d’accord aux bons endroits", "Limites clairement affichées"],
        successCriteria: ["Aucune fonction future n’est présentée comme disponible", "Les actions importantes restent bloquées sans accord", "Les libellés sont faciles à comprendre et accessibles"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
    ],
  },
  {
    id: "verify",
    order: 5,
    name: "Vérifier",
    summary: "Tester le résultat dans les conditions réelles et corriger les problèmes importants.",
    steps: [
      {
        id: "verify-tests",
        order: 1,
        title: "Tester le résultat",
        objective: "Lancez les tests utiles, observez leurs résultats et corrigez les problèmes trouvés.",
        reason: "Un test réellement exécuté permet de savoir ce qui fonctionne.",
        role: "personne qui vérifie la qualité et la sécurité",
        recommendedTool: "Codex",
        chatGpt: false,
        codex: true,
        deliverables: ["Résultats des tests", "Liste des problèmes", "Corrections nécessaires"],
        successCriteria: ["Les tests utiles réussissent", "Chaque échec est expliqué", "Aucun résultat n’est annoncé sans avoir été observé"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "verify-experience",
        order: 2,
        title: "Vérifier l’usage sur tous les écrans",
        objective: "Essayez le parcours au clavier, sur mobile, avec le zoom et dans chaque thème disponible.",
        reason: "Une fonction illisible ou difficile à utiliser n’est pas vraiment terminée.",
        role: "personne qui vérifie la qualité et la sécurité",
        recommendedTool: "Codex et vérification par vous-même",
        chatGpt: false,
        codex: true,
        deliverables: ["Résultats sur mobile et au clavier", "Résultats d’accessibilité", "Captures ou comportements observés"],
        successCriteria: ["La page ne déborde pas à 320 px", "Le focus et les erreurs sont visibles", "Les textes restent lisibles dans chaque thème"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "verify-review",
        order: 3,
        title: "Faire relire le projet",
        objective: "Demandez à une autre personne de chercher les problèmes importants, puis vérifiez les corrections.",
        reason: "Un regard neuf trouve des problèmes que la personne qui a construit le projet peut manquer.",
        role: "personne qui relit sans modifier",
        recommendedTool: "Relecture indépendante",
        chatGpt: true,
        codex: false,
        deliverables: ["Liste des problèmes classés par importance", "Corrections vérifiées", "Décision de livrer ou non"],
        successCriteria: ["La personne qui relit n’a rien modifié", "Aucun problème bloquant ou important ne reste", "Deux passages au maximum sont utilisés"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
    ],
  },
  {
    id: "launch-improve",
    order: 6,
    name: "Lancer et améliorer",
    summary: "Préparer le lancement, demander les accords nécessaires et apprendre des retours.",
    steps: [
      {
        id: "launch-pack",
        order: 1,
        title: "Préparer le lancement",
        objective: "Préparez la démonstration et les messages de lancement uniquement avec des faits vérifiés.",
        reason: "Un lancement crédible montre ce qui fonctionne réellement et ce qui reste limité.",
        role: "personne qui aide à présenter le projet",
        recommendedTool: "ChatGPT + Codex",
        chatGpt: true,
        codex: true,
        deliverables: ["Message de lancement", "Démonstration", "Page de présentation fondée sur des faits"],
        successCriteria: ["Chaque affirmation s’appuie sur un résultat réel", "Les limites sont visibles", "Aucun chiffre ni succès n’est inventé"],
        requiresHumanApproval: false,
        humanApprovalReason: "",
      },
      {
        id: "launch-release",
        order: 2,
        title: "Autoriser le lancement",
        objective: "Vérifiez la branche, la version de test et le plan de publication avant toute action visible à l’extérieur.",
        reason: "La fusion, la production, la publication et l’envoi de messages doivent rester vos décisions.",
        role: "personne qui vérifie la qualité et la sécurité",
        recommendedTool: "Vous-même avec Codex",
        chatGpt: false,
        codex: true,
        deliverables: ["Liste des vérifications avant lancement", "Votre accord enregistré", "Liste des actions réellement effectuées"],
        successCriteria: ["La branche de départ et la destination sont vérifiées", "Chaque action importante a reçu un accord clair", "La mise en production n’arrive jamais sans demande explicite"],
        requiresHumanApproval: true,
        humanApprovalReason: "Votre accord est obligatoire avant une fusion dans main, une production, une suppression, un paiement, l’utilisation d’un secret, une publication, un message, un email ou toute action impossible à annuler facilement.",
      },
      {
        id: "launch-learn",
        order: 3,
        title: "Choisir les prochaines améliorations",
        objective: "Notez les retours reçus, ce qu’ils montrent et la prochaine idée à vérifier.",
        reason: "Les retours réels aident mieux à choisir la suite qu’un plan fixé trop tôt.",
        role: "personne qui aide à définir le projet",
        recommendedTool: "ChatGPT",
        chatGpt: true,
        codex: false,
        deliverables: ["Résumé des retours", "Amélioration choisie", "Prochain test simple"],
        successCriteria: ["Les faits sont séparés des interprétations", "La prochaine action reste petite et précise", "Arrêter reste une décision possible"],
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
  if (hardware.vercelAvailable && hardware.githubAvailable) path.push("Si l’intégration GitHub–Vercel est réellement reliée, utiliser uniquement sa Preview automatique ; sinon vérifier localement");
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
    hardware.hasComputer && hardware.operatingSystem !== "none" && hardware.hasIPhone && hardware.codexLocalAvailable &&
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
  if (
    hardware.hasComputer && hardware.operatingSystem !== "none" &&
    hardware.codexLocalAvailable && hardware.remoteControlAvailable
  ) {
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
  if (hardware.hasComputer && hardware.operatingSystem !== "none" && hardware.codexLocalAvailable) {
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
    warnings: ["Les missions Codex sont préparées mais pas encore exécutées", "Aucun fichier ne sera modifié automatiquement"],
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
  if (!isHardwareProfile(input.hardware)) {
    throw new Error("Le profil matériel est incohérent et ne peut pas être utilisé.");
  }
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

export function refreshProjectGeneratedCopy(project: Project): Project {
  const generated = createProject({
    title: project.title,
    brief: project.brief,
    hardware: project.hardware,
  }, project.id, project.createdAt);
  const generatedPhases = new Map(generated.phases.map((phase) => [phase.id, phase]));

  return {
    ...project,
    phases: project.phases.map((phase) => {
      const generatedPhase = generatedPhases.get(phase.id);
      if (!generatedPhase) return phase;
      const generatedSteps = new Map(generatedPhase.steps.map((step) => [step.id, step]));
      return {
        ...phase,
        name: generatedPhase.name,
        summary: generatedPhase.summary,
        steps: phase.steps.map((step) => {
          const generatedStep = generatedSteps.get(step.id);
          if (!generatedStep) return step;
          return {
            ...step,
            title: generatedStep.title,
            objective: generatedStep.objective,
            reason: generatedStep.reason,
            role: generatedStep.role,
            recommendedTool: generatedStep.recommendedTool,
            chatGptMission: generatedStep.chatGptMission,
            codexMission: generatedStep.codexMission,
            deliverables: generatedStep.deliverables,
            successCriteria: generatedStep.successCriteria,
            humanApprovalReason: generatedStep.humanApprovalReason,
          };
        }),
      };
    }),
  };
}
