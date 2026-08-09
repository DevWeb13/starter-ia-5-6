# Feuille de route

La feuille de route reste volontairement courte. L’historique détaillé vit dans Git et [`DECISIONS.md`](DECISIONS.md) ; l’état vérifié vit dans [`STATUS.md`](STATUS.md).

## Historique utile

- **Fondation publique :** application Next.js, design accessible, tests et déploiement historique.
- **MVP local :** parcours déterministe en six phases, Dashboard, stockage navigateur et exports.
- **Ressources :** guides de configuration, prompts, brief, formation et règles de qualité.
- **Ancien kit minimal :** quatre fichiers principaux et trois options dans `templates/starter-kit/`, désormais remplacés comme référence technique par le vrai template Qwik Core.
- **Directions abandonnées :** orchestrateur autonome, générateur de starters/ZIP et pilote Social Autopilot comme prochaine étape.

Le MVP local et ses tests sont conservés comme démonstration historique. Ils ne définissent plus la priorité produit.

## Direction active

### 1. Poser la fondation pédagogique

**Statut :** en cours sur `work/18-core-learning-foundation`.

Définir une progression stable **Fondamentaux → Starter IA Qwik Core → Starter IA Qwik Advanced**, enregistrer les dépôts techniques de référence et empêcher que la continuité du projet dépende d’un chat précédent.

Source pédagogique : [`course/README.md`](course/README.md).

### 2. Réaligner le site sur le vrai Core

**Statut :** à faire immédiatement après la fondation.

Prendre `DevWeb13/starter-ia-qwik` comme seule source technique du Core. Corriger les textes publics qui présentent encore l’ancien kit quatre fichiers comme produit de référence, retirer `templates/starter-kit/` et remplacer ses liens par le vrai dépôt Core ou par le nouveau parcours pédagogique.

La formation express actuelle reste une introduction courte ; elle doit être mise à jour pour conduire vers le Core réel.

### 3. Publier le parcours Starter IA Qwik Core

**Statut :** à faire.

Expliquer progressivement :

1. les fondamentaux ;
2. `AGENTS.md` ;
3. `PROJECT.md` ;
4. `STATUS.md` ;
5. `QUALITY.md` ;
6. `prompts/INITIALIZE.md` ;
7. `.codex/config.toml` ;
8. `.github/workflows/ci.yml` ;
9. la fondation Qwik et la manière dont toutes ces pièces travaillent ensemble.

Chaque chapitre distingue mécanisme officiel, choix Starter IA, fichier réel, limites et exemple.

### 4. Documenter la fondation Advanced

**Statut :** à faire après le Core.

Prendre `DevWeb13/starter-ia-qwik-advanced` comme source de vérité. Expliquer d’abord les concepts — agents, skills, agent vs skill, permissions, sandbox, hooks, gates, artefacts et orchestration — puis documenter les 14 agents et les 14 skills réellement présents.

Cette étape doit rendre le projet Advanced compréhensible et explicable, pas seulement copiable.

### 5. Reprendre le pipeline design Advanced

**Statut :** en attente volontaire.

Revenir ensuite dans `starter-ia-qwik-advanced` sur le chantier `work/02-design-pipeline`. Le pipeline design reste nécessaire, mais il n’est pas prioritaire tant que la fondation Advanced déjà construite n’est pas comprise et documentée.

### 6. Consolider par des cas réels

**Statut :** à faire plus tard.

Documenter des cas d’usage réels et les enseignements utiles. Le test Cars Pat peut servir d’étude de cas sur la différence entre réussite technique et validation visuelle, sans devenir le seul motif du projet Advanced.

L’offre d’accompagnement existante reste disponible, mais la monétisation n’est pas la priorité du chantier pédagogique actuel.
