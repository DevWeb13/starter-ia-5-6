# Formation express — introduction

Objectif : comprendre les rôles de ChatGPT, Work et Codex, les fondamentaux d'un dépôt préparé pour Codex et le passage vers le vrai Starter IA Qwik Core.

Cette formation est une introduction. Le parcours complet est défini dans [`course/README.md`](README.md) et le template Core de référence est [`DevWeb13/starter-ia-qwik`](https://github.com/DevWeb13/starter-ia-qwik).

Chaque partie suit la même logique : une notion, une action et un point de contrôle.

## 1. Choisir le bon environnement — 5 min

### Notion

- **ChatGPT** aide à réfléchir, décider, rédiger, auditer et contrôler avec les outils réellement disponibles dans la session.
- **Work** peut conduire une mission cloud complète avec les fichiers et outils réellement disponibles.
- **Codex** travaille directement dans un environnement de développement et un dépôt dans le périmètre autorisé.

### Action

Pour chaque mission, demandez d'abord quel est le minimum d'outils réellement nécessaire. Ne supposez pas qu'un passage de relais ou une intégration existe sans l'avoir vérifié.

### Point de contrôle

Vous savez distinguer outil, environnement, agent et capacité disponible.

## 2. Comprendre les fondamentaux — 6 min

### Notion

Avant de regarder tout le template Core, retenez cinq idées :

1. `PROJECT.md` : où va le projet ;
2. `STATUS.md` : où il en est réellement ;
3. `AGENTS.md` : comment Codex doit travailler dans ce dépôt ;
4. `.codex/config.toml` : quelles permissions le projet partage ;
5. une mission doit être petite, bornée et vérifiable.

Ces cinq idées constituent un niveau pédagogique, pas un second template à copier et maintenir.

### Action

Ouvrez le dépôt [`starter-ia-qwik`](https://github.com/DevWeb13/starter-ia-qwik) et repérez ces fichiers sans encore chercher à tout comprendre.

### Point de contrôle

Vous savez expliquer en une phrase le rôle de chacun et pourquoi `PROJECT.md` et `STATUS.md` ne servent pas à la même chose.

## 3. Comprendre le vrai Core — 5 min

### Notion

Le Starter IA Qwik Core est une fondation complète, pas seulement quatre fichiers Markdown. Sa structure de référence comprend :

```text
AGENTS.md
PROJECT.md
STATUS.md
QUALITY.md
prompts/INITIALIZE.md
.codex/config.toml
.github/workflows/ci.yml
```

Elle inclut aussi l'application Qwik City, TypeScript strict, Vitest et Playwright.

### Action

Lisez le README du dépôt Core et observez comment les fichiers documentaires, la configuration Codex et les contrôles automatisés se complètent.

### Point de contrôle

Vous savez distinguer les fondamentaux pédagogiques du template Core réellement exécutable.

## 4. Initialiser un projet — 5 min

### Notion

Dans le Core actuel, `prompts/INITIALIZE.md` est le point d'entrée. Il transforme le template générique en projet précis avant le premier développement métier.

Il demande notamment à Codex de lire les règles et l'état du dépôt, remplir `PROJECT.md`, mettre `STATUS.md` à jour, adapter `QUALITY.md` si nécessaire et préparer ensuite une première mission limitée.

### Action

Lisez [`prompts/INITIALIZE.md`](https://github.com/DevWeb13/starter-ia-qwik/blob/main/prompts/INITIALIZE.md) puis imaginez la description d'un petit projet Qwik que vous pourriez lui fournir.

### Point de contrôle

Vous comprenez pourquoi l'ancien `FIRST-MISSION.md` n'est plus le point d'entrée du template Core.

## 5. Vérifier puis contrôler — 5 min

### Notion

- **Vérifier** : confirmer que le résultat existe et fonctionne sur sa cible.
- **Contrôler** : relire le résultat avec le brief et rechercher les défauts ou affirmations non prouvées.

Le Core utilise `QUALITY.md` et GitHub Actions pour rendre ces contrôles reproductibles.

### Action

Repérez dans le Core les commandes de formatage, lint, TypeScript, tests unitaires, build et Playwright, puis ouvrez `.github/workflows/ci.yml`.

### Point de contrôle

Vous savez expliquer pourquoi une réponse « c'est terminé » ne remplace pas les tests et la CI.

## 6. Savoir quand passer à Advanced — 4 min

Le Core suffit tant que le projet n'a pas besoin d'une orchestration plus spécialisée.

La variante [`starter-ia-qwik-advanced`](https://github.com/DevWeb13/starter-ia-qwik-advanced) ajoute notamment agents, skills, hooks, gates humains et artefacts séparés. Elle doit être étudiée après le Core, pas utilisée par réflexe.

Le parcours Advanced expliquera d'abord les concepts, puis les 14 agents et les 14 skills réellement présents dans le dépôt.

## Fin de l'introduction

Vous savez maintenant distinguer les outils, comprendre les fondamentaux, identifier les briques du vrai Core et expliquer pourquoi `INITIALIZE.md`, `QUALITY.md`, `.codex/config.toml` et la CI existent.

Étape suivante : suivre le parcours détaillé défini dans [`course/README.md`](README.md).
