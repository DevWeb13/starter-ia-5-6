# Starter IA 5.6

**Un site de ressources et un parcours pédagogique pour mieux utiliser ChatGPT, Work et Codex.**

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

Starter IA explique les rôles des outils, aide à choisir une configuration réaliste et apprend progressivement à préparer puis comprendre un dépôt Codex. Le parcours va des fondamentaux au template Starter IA Qwik Core, puis à la variante Advanced.

## Commencer

- orientation rapide : [`START-HERE.md`](START-HERE.md) ;
- architecture du parcours pédagogique : [`course/README.md`](course/README.md) ;
- comparaison des configurations : [`guides/configurations/README.md`](guides/configurations/README.md) ;
- template Core de référence : [DevWeb13/starter-ia-qwik](https://github.com/DevWeb13/starter-ia-qwik) ;
- template Advanced de référence : [DevWeb13/starter-ia-qwik-advanced](https://github.com/DevWeb13/starter-ia-qwik-advanced) ;
- modèle de brief : [`templates/BRIEF.md`](templates/BRIEF.md) ;
- prompts prêts à adapter : [`prompts/`](prompts/) ;
- introduction courte : [`course/FORMATION-EXPRESS.md`](course/FORMATION-EXPRESS.md).

## Trois niveaux

### Fondamentaux

Comprendre `PROJECT.md`, `STATUS.md`, `AGENTS.md`, `.codex/config.toml` et le principe d'une mission petite, bornée et vérifiable. Ce niveau sert à apprendre ; ce n'est pas un second template.

### Starter IA Qwik Core

Le dépôt [`starter-ia-qwik`](https://github.com/DevWeb13/starter-ia-qwik) est la source de vérité technique du Core. Il contient une fondation Qwik City vérifiable avec les documents projet, `QUALITY.md`, `prompts/INITIALIZE.md`, la configuration Codex et GitHub Actions.

### Starter IA Qwik Advanced

Le dépôt [`starter-ia-qwik-advanced`](https://github.com/DevWeb13/starter-ia-qwik-advanced) part du Core et ajoute progressivement agents, skills, hooks, permissions, gates humains, artefacts et orchestration.

## Démonstration historique

Le dépôt conserve un MVP local déterministe de six phases et 16 étapes avec Dashboard, stockage navigateur, missions copiables et exports Markdown/JSON. Il reste utile pour démontrer une méthode guidée, mais n’est plus la porte d’entrée produit. Il n’appelle automatiquement aucun fournisseur IA.

## Lancer le site

Prérequis : Node.js 24 et npm.

```sh
npm ci
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000). Aucune variable d’environnement n’est nécessaire.

## Contrôles

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Playwright utilise Chromium. Avant un premier lancement local, exécutez si nécessaire `npx playwright install chromium`.

## Mémoire du projet

- direction : [`PROJECT.md`](PROJECT.md) ;
- état réel : [`STATUS.md`](STATUS.md) ;
- feuille de route : [`ROADMAP.md`](ROADMAP.md) ;
- décisions : [`DECISIONS.md`](DECISIONS.md) ;
- architecture : [`ARCHITECTURE.md`](ARCHITECTURE.md) ;
- architecture pédagogique : [`course/README.md`](course/README.md) ;
- design : [`DESIGN.md`](DESIGN.md) ;
- qualité : [`QUALITY.md`](QUALITY.md) ;
- workflow interne : [`WORKFLOW.md`](WORKFLOW.md).

## Limites

Starter IA n’intègre aucun SDK IA, secret, fichier `.env`, compte, base distante ou paiement. Le site pédagogique ne maintient pas une copie technique concurrente des templates Core et Advanced.

## Licence

Distribué sous licence MIT. Voir [`LICENSE`](LICENSE).
