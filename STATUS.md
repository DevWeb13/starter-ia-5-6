# État du projet

**Dernière mise à jour :** 9 août 2026

## Branche active

`work/18-core-learning-foundation`

Base vérifiée : `main` au commit `d794196d97918fd60a2a56a3897665e29d575f20`.

Aucune modification directe de `main`, aucune PR, aucune fusion et aucun déploiement production manuel n'ont été effectués pendant ce chantier.

## Direction active

Starter IA devient le site pédagogique qui explique progressivement :

```text
Fondamentaux
→ Starter IA Qwik Core
→ Starter IA Qwik Advanced
```

Les sources techniques de vérité sont désormais séparées clairement :

- Core : `https://github.com/DevWeb13/starter-ia-qwik` ;
- Advanced : `https://github.com/DevWeb13/starter-ia-qwik-advanced` ;
- documentation, cours et ressources : ce dépôt `starter-ia-5-6`.

Le site ne maintient plus un second template Core concurrent.

La décision active correspondante est **D-034 — Parcours pédagogique et templates techniques de référence** dans `DECISIONS.md`.

## Ce qui a été réalisé sur la branche

- création de `course/README.md` comme architecture pédagogique durable ;
- définition d'une structure commune de chapitre : explication simple, choix Starter IA, fichier réel, fonctionnement, limites, source et exemple ;
- réalignement de `PROJECT.md`, `ROADMAP.md`, `ARCHITECTURE.md`, `DECISIONS.md`, `DESIGN.md` et `QUALITY.md` ;
- transformation de `course/FORMATION-EXPRESS.md` en introduction au vrai Core ;
- réalignement de `README.md`, `START-HERE.md` et `guides/configurations/README.md` ;
- réalignement des pages publiques `/`, `/docs`, `/ressources` et `/fonctionnalites` ;
- suppression complète de l'ancien `templates/starter-kit/`, y compris l'ancien `prompts/FIRST-MISSION.md` et sa copie de `.codex/config.toml` ;
- maintien de l'offre d'accompagnement et du MVP local historique sans en faire la priorité du chantier.

## État pédagogique actuel

### Fondamentaux

Le niveau pédagogique introduit :

- `PROJECT.md` ;
- `STATUS.md` ;
- `AGENTS.md` ;
- `.codex/config.toml` ;
- le principe d'une mission petite, bornée et vérifiable.

Ce niveau n'est pas un template séparé.

### Qwik Core

Le vrai Core est `DevWeb13/starter-ia-qwik`. Le parcours doit expliquer progressivement :

1. `AGENTS.md` ;
2. `PROJECT.md` ;
3. `STATUS.md` ;
4. `QUALITY.md` ;
5. `prompts/INITIALIZE.md` ;
6. `.codex/config.toml` ;
7. `.github/workflows/ci.yml` ;
8. la fondation Qwik et la manière dont ces éléments travaillent ensemble.

`prompts/INITIALIZE.md` est le point d'entrée du template Core. L'ancien `FIRST-MISSION.md` de ce dépôt n'est plus une source active.

### Advanced

Le dépôt `DevWeb13/starter-ia-qwik-advanced` reste inchangé pendant cette mission. Sa fondation actuelle — agents, skills, hooks, gates, artefacts et orchestration — sera documentée après le parcours Core. Le chantier technique `work/02-design-pipeline` reste volontairement en attente.

## Contrôles réalisés

- comparaison GitHub finale `main...work/18-core-learning-foundation` : branche en avance et sans retard sur `main` au moment du contrôle ;
- 24 fichiers modifiés ou supprimés dans le diff contrôlé ;
- les 8 fichiers de l'ancien `templates/starter-kit/` sont supprimés ;
- Preview Vercel automatique déclenchée par la branche ;
- plusieurs déploiements de branche observés `READY` ;
- le déploiement `dpl_2K4h5kc7ZNrRbCd7WQFgMUj88UhR`, qui inclut tous les changements applicatifs et la fermeture de la migration de l'ancien Core, est `READY` ;
- un build précédent a été vérifié sans erreur avec `Build Completed`.

Les suites locales `npm run lint`, `npm run typecheck`, `npm test` et `npm run test:e2e` n'ont pas été exécutées depuis cette interface. Elles devront être couvertes par la CI de la PR ou par un contrôle local avant fusion.

## Points restant à vérifier avant fusion

- revue du diff complet de la branche ;
- absence de lien résiduel vers `templates/starter-kit/` dans une ressource non encore repérée ;
- CI GitHub complète sur la future PR ;
- contrôle visuel rapide des pages publiques modifiées sur la Preview.

## Prochaine action unique

Auditer cette branche `work/18-core-learning-foundation`, corriger tout bloquant ou important, puis ouvrir une PR pour la fondation pédagogique. Après fusion, la mission suivante sera de publier le cours Starter IA Qwik Core détaillé, chapitre par chapitre, avant de documenter la fondation Advanced.
