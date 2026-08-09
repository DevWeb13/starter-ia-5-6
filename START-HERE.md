# Commencer avec Starter IA

Starter IA aide à mieux utiliser ChatGPT, Work et Codex avec des explications accessibles, des configurations conseillées, des exemples réels et deux templates techniques de référence : Core et Advanced.

## Choisir son point de départ

- **Comprendre les rôles :** lire [`guides/configurations/README.md`](guides/configurations/README.md).
- **Comprendre les fondamentaux :** suivre le parcours défini dans [`course/README.md`](course/README.md).
- **Démarrer un vrai projet Qwik Core :** utiliser [`DevWeb13/starter-ia-qwik`](https://github.com/DevWeb13/starter-ia-qwik).
- **Étudier la configuration Advanced :** utiliser [`DevWeb13/starter-ia-qwik-advanced`](https://github.com/DevWeb13/starter-ia-qwik-advanced) après avoir compris le Core.
- **Cadrer une demande :** remplir [`templates/BRIEF.md`](templates/BRIEF.md).
- **Réaliser une mission cloud complète :** utiliser Work seulement si les fichiers et outils nécessaires y sont réellement disponibles.

## Les fondamentaux

Avant le Core complet, il est utile de comprendre cinq idées simples :

1. `PROJECT.md` décrit le but durable ;
2. `STATUS.md` décrit l'état réel et la prochaine action ;
3. `AGENTS.md` fixe les règles permanentes du dépôt ;
4. `.codex/config.toml` borne les permissions du projet ;
5. une mission doit être petite, bornée et vérifiable.

Ce niveau sert à apprendre. Il ne constitue pas un autre template à maintenir.

## Le vrai Starter IA Qwik Core

Le dépôt `starter-ia-qwik` ajoute à ces fondamentaux les éléments nécessaires à une fondation Qwik réellement exécutable et vérifiable : `QUALITY.md`, `prompts/INITIALIZE.md`, GitHub Actions, tests et application Qwik City.

Le point d'entrée est `prompts/INITIALIZE.md`, qui transforme le template générique en projet précis avant le premier développement métier.

## Puis Advanced

La variante `starter-ia-qwik-advanced` ajoute les mécanismes utiles lorsque le projet justifie davantage d'orchestration : agents, skills, hooks, permissions, gates humains, artefacts et workflows spécialisés.

## Ce qui existe aussi

Une démonstration locale historique organise un projet en six phases et 16 étapes, conserve son état dans le navigateur et exporte du Markdown ou du JSON. Elle n’appelle automatiquement ni ChatGPT ni Codex et ne constitue plus la direction principale.

## Limites

Starter IA ne prétend pas qu'un outil ou une intégration est disponible sans vérification. Les capacités réelles dépendent de l'environnement, du compte et des connecteurs installés.
