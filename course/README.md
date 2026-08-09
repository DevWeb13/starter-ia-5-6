# Parcours pédagogique Starter IA

Ce dossier organise la documentation pédagogique de Starter IA. Le site public explique les concepts et renvoie vers les dépôts techniques de référence ; il ne maintient pas un second template concurrent.

## Sources techniques de vérité

- **Starter IA Qwik Core** : `https://github.com/DevWeb13/starter-ia-qwik`
- **Starter IA Qwik Advanced** : `https://github.com/DevWeb13/starter-ia-qwik-advanced`
- **Site pédagogique et ressources** : ce dépôt `starter-ia-5-6`

Le contenu pédagogique doit toujours distinguer :

1. ce qui est une capacité ou une convention officielle OpenAI ;
2. ce qui est un choix de conception Starter IA ;
3. ce qui appartient spécifiquement au template Qwik Core ou Advanced.

## Progression

### Niveau 1 — Fondamentaux

Objectif : comprendre les éléments qui permettent à Codex de travailler proprement dans un dépôt sans apprendre toute la variante Advanced.

À expliquer en premier :

- `PROJECT.md` : le but durable du projet ;
- `STATUS.md` : l'état réel et la prochaine action ;
- `AGENTS.md` : les règles permanentes du dépôt ;
- `.codex/config.toml` : permissions et sandbox du projet ;
- le principe d'une mission petite, bornée et vérifiable.

Ce niveau est pédagogique. Il ne constitue pas un second template à maintenir.

### Niveau 2 — Starter IA Qwik Core

Source de vérité : `DevWeb13/starter-ia-qwik`.

Le cours Core explique la fondation réellement versionnée :

1. `AGENTS.md` ;
2. `PROJECT.md` ;
3. `STATUS.md` ;
4. `QUALITY.md` ;
5. `prompts/INITIALIZE.md` ;
6. `.codex/config.toml` ;
7. `.github/workflows/ci.yml` ;
8. la fondation Qwik, les tests et la manière dont ces éléments travaillent ensemble.

Le point d'entrée du template est `prompts/INITIALIZE.md`. Il transforme le template générique en projet précis, puis prépare une première mission limitée. L'ancien `prompts/FIRST-MISSION.md` du kit statique de ce dépôt n'est pas la source de vérité du Core Qwik.

### Niveau 3 — Starter IA Qwik Advanced

Source de vérité : `DevWeb13/starter-ia-qwik-advanced`.

Le cours Advanced part du Core et explique progressivement :

- agents et sous-agents ;
- skills ;
- différence agent / skill ;
- permissions et sandbox ;
- hooks ;
- gates humains ;
- artefacts ;
- orchestration ;
- les 14 agents et leurs responsabilités ;
- les 14 skills et leurs déclenchements ;
- les pipelines complets construits et validés dans le dépôt Advanced.

Le cours Advanced ne doit jamais présenter une fonction future comme déjà implémentée. Chaque chapitre s'appuie sur l'état réel du dépôt Advanced.

## Structure d'un chapitre

Chaque chapitre doit suivre la même progression afin de rester accessible :

1. **En français normal** — à quoi cela sert ?
2. **Dans Starter IA** — pourquoi l'avons-nous utilisé ?
3. **Dans le dépôt** — quel fichier ou dossier l'implémente ?
4. **Fonctionnement** — qui le lit, qui l'appelle, quelles entrées et sorties ?
5. **Limites** — quand ne faut-il pas l'utiliser ?
6. **Source** — ce qui vient d'OpenAI et ce qui relève de notre méthode.
7. **Exemple réel** — extrait ou scénario issu du template de référence.

La lecture courte doit suffire à un débutant ; les détails techniques restent disponibles plus bas sur la même page ou dans un niveau avancé.

## Architecture publique visée

La structure exacte des routes sera validée pendant l'implémentation, mais le parcours doit rester lisible ainsi :

```text
Comprendre
  → Fondamentaux
  → Starter IA Qwik Core
      → vue d'ensemble
      → fichiers Core
      → comment tout fonctionne ensemble
  → Starter IA Qwik Advanced
      → concepts Advanced
      → agents
      → skills
      → hooks / permissions / gates
      → orchestration
      → pipelines réels
```

La formation express existante devient une introduction courte vers ce parcours, pas la documentation complète du Core.

## Règles de maintenance

- Ne pas dupliquer le code des templates Core ou Advanced dans ce dépôt par défaut.
- Lier vers les fichiers versionnés dans les dépôts de référence lorsque le lecteur doit consulter ou copier le vrai fichier.
- Vérifier l'état réel du dépôt de référence avant d'affirmer qu'une capacité existe.
- Mettre à jour la documentation après une étape majeure du Core ou de l'Advanced lorsque son fonctionnement change réellement.
- Préférer une progression courte et cliquable à une documentation massive affichée d'un seul bloc.

## Chantier courant

Première priorité : réaligner la documentation publique actuelle sur le véritable `starter-ia-qwik`, retirer l'ancien kit technique concurrent de `templates/starter-kit/`, puis publier le parcours Core avant de documenter en détail la fondation Advanced.
