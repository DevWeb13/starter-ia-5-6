# Feuille de route

La feuille de route reste volontairement courte. L’historique détaillé vit dans Git et [`DECISIONS.md`](DECISIONS.md) ; l’état vérifié vit dans [`STATUS.md`](STATUS.md).

## Historique utile

- **Fondation publique :** application Next.js, design accessible, tests et déploiement historique.
- **MVP local :** parcours déterministe en six phases, Dashboard, stockage navigateur et exports.
- **Ressources :** guides de configuration, prompts, brief, formation et règles de qualité.
- **Ancien kit minimal :** quatre fichiers principaux et trois options dans `templates/starter-kit/`, retirés au profit du vrai template Qwik Core comme référence technique.
- **Directions abandonnées :** orchestrateur autonome, générateur de starters/ZIP et pilote Social Autopilot comme prochaine étape.

Le MVP local et ses tests sont conservés comme démonstration historique. Ils ne définissent plus la priorité produit.

## Direction active

### 1. Poser la fondation pédagogique

**Statut :** implémenté sur `work/18-core-learning-foundation`, en attente de revue et fusion.

La progression stable est **Fondamentaux → Starter IA Qwik Core → Starter IA Qwik Advanced**. Les dépôts techniques de référence et la structure commune des futurs chapitres sont enregistrés dans [`course/README.md`](course/README.md).

### 2. Réaligner le site sur le vrai Core

**Statut :** implémenté sur `work/18-core-learning-foundation`, en attente de revue et fusion.

`DevWeb13/starter-ia-qwik` devient l'unique source technique du Core. L'ancien `templates/starter-kit/` est supprimé de la branche, les principales entrées publiques renvoient vers le vrai Core et la formation express devient une introduction au parcours.

### 3. Publier le parcours Starter IA Qwik Core

**Statut :** prochaine étape après fusion de la fondation.

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
