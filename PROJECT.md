# Cadre du projet

## Identité

**Starter IA 5.6** est un starter open source de workflows, configurations, guides et templates concrets pour utiliser ChatGPT, Work, Codex et les agents avec un résultat vérifiable.

Le dépôt conserve une application Next.js locale héritée des phases 1 et 2. Elle sert de support démonstratif et de base testée, mais ne définit plus le produit comme un SaaS de génération IA.

## Public

- personnes qui veulent choisir le bon environnement avant de commencer une mission ;
- débutants qui cherchent des procédures copiables et leurs limites ;
- développeurs qui utilisent Codex localement ou à distance ;
- équipes qui séparent réflexion, exécution cloud et modification du dépôt.

## Les cinq configurations

1. **Chat** pour réfléchir, décider et produire des brouillons courts.
2. **Work** pour exécuter des missions complètes dans un environnement cloud.
3. **Codex local avec VS Code** pour inspecter, modifier et vérifier un dépôt sur la machine de développement.
4. **Codex Remote depuis iPhone** pour piloter une session qui continue de s’exécuter sur la machine locale.
5. **Work + Codex** pour préparer ou analyser dans Work, puis implémenter et vérifier dans le dépôt avec Codex.

Le point d’entrée commun est [`guides/configurations/README.md`](guides/configurations/README.md). Ubuntu + iPhone + Codex Remote Control est une configuration parmi les autres.

## Principes stables

- choisir l’environnement selon la mission et expliciter les passages de relais ;
- écrire un brief vérifiable avant une mission complète ;
- réserver les sous-agents à la lecture, l’analyse et la revue ;
- conserver un seul écrivain ;
- limiter la correction à deux cycles complets ;
- vérifier avant d’annoncer une réussite ;
- signaler les fonctions dépendantes du compte, du client ou d’un déploiement progressif.

## Périmètre actuel

- documentation cohérente des cinq configurations ;
- workflow de référence, critères qualité, prompts, briefs et ressources de formation ;
- application Next.js et cœur local déjà livrés, maintenus sans infrastructure distante ;
- exemples déterministes clairement présentés comme locaux.

## Hors périmètre

- fournisseur ou SDK IA intégré ;
- API payante ou appel externe de génération ;
- clé secrète ou variable fournisseur ;
- authentification, comptes ou synchronisation distante ;
- paiement, abonnement ou architecture de SaaS de génération IA.

## Historique livré

- La version 0.1 a livré la méthode iPhone-first, les prompts, le modèle de brief, la formation et une configuration Codex prudente.
- La phase 1 (`6819f79`) a livré l’application Next.js, le design system, la CI et les contrôles de publication.
- La phase 2 (`1026f75`) a livré le modèle de projet, le dashboard, l’éditeur, les exports et la persistance locale.

Ces éléments restent historiques et maintenus. Leur vocabulaire SaaS antérieur ne décrit plus la direction active.

## Livrables durables

```text
README.md
START-HERE.md
PROJECT.md
WORKFLOW.md
QUALITY.md
AGENTS.md
DESIGN.md
ROADMAP.md
STATUS.md
DECISIONS.md
ARCHITECTURE.md
CHANGELOG.md
guides/configurations/
prompts/
templates/
course/
.codex/
```

## Sources de vérité

- direction et périmètre : [`PROJECT.md`](PROJECT.md) ;
- état : [`STATUS.md`](STATUS.md) ;
- étapes : [`ROADMAP.md`](ROADMAP.md) ;
- décisions : [`DECISIONS.md`](DECISIONS.md) ;
- architecture : [`ARCHITECTURE.md`](ARCHITECTURE.md) ;
- processus : [`WORKFLOW.md`](WORKFLOW.md) ;
- qualité : [`QUALITY.md`](QUALITY.md) ;
- visuel : [`DESIGN.md`](DESIGN.md) ;
- configurations : [`guides/configurations/README.md`](guides/configurations/README.md).

## Définition de fini

Une étape est terminée lorsque ses livrables existent, que les contrôles applicables réussissent, que les limites sont explicites, que la mémoire reflète le résultat et qu’aucun problème bloquant ou important connu n’est masqué.
