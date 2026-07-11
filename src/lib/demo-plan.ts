export const MIN_IDEA_LENGTH = 20;
export const MAX_IDEA_LENGTH = 500;

export type DemoPlan = {
  idea: string;
  valueProposition: string;
  target: string;
  mvp: string[];
  technicalPlan: string[];
  marketingPlan: string[];
  nextActions: string[];
};

export function normalizeIdea(value: string) {
  return value.replace(/\s+/g, " ").trim().slice(0, MAX_IDEA_LENGTH);
}

export function validateIdea(value: string) {
  const idea = normalizeIdea(value);

  if (!idea) {
    return "Décrivez votre idée avant de lancer la démonstration.";
  }

  if (idea.length < MIN_IDEA_LENGTH) {
    return `Ajoutez quelques précisions : ${MIN_IDEA_LENGTH} caractères minimum.`;
  }

  return null;
}

export function buildDemoPlan(value: string): DemoPlan {
  const idea = normalizeIdea(value);

  return {
    idea,
    valueProposition: `Transformer « ${idea} » en un parcours simple qui permet de comprendre la valeur, tester l’usage principal et décider de la suite sans investissement technique prématuré.`,
    target:
      "Une première niche d’utilisateurs confrontés régulièrement au problème, capables de décrire leur méthode actuelle et disponibles pour tester une solution imparfaite.",
    mvp: [
      "Une page qui explique le problème résolu et le résultat attendu.",
      "Un parcours principal unique, utilisable sans formation.",
      "Une collecte de retours qualitative après chaque essai.",
    ],
    technicalPlan: [
      "Valider les données nécessaires et les limites du parcours avant de choisir une base de données.",
      "Construire une interface web mobile-first avec des composants accessibles.",
      "Ajouter ensuite authentification, persistance et IA derrière des interfaces isolées.",
    ],
    marketingPlan: [
      "Interviewer cinq personnes de la niche sans présenter la solution trop tôt.",
      "Publier une page d’attente centrée sur le problème et un seul appel à l’action.",
      "Mesurer les demandes de démo et la qualité des retours, sans promettre de résultat chiffré.",
    ],
    nextActions: [
      "Formuler le problème en une phrase vérifiable.",
      "Choisir une niche initiale et recruter trois testeurs.",
      "Prototyper le parcours principal et définir le signal de validation.",
    ],
  };
}
