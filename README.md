# Starter IA 5.6

**Un site de ressources et un kit de démarrage pour mieux utiliser ChatGPT, Work et Codex.**

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

Starter IA explique les rôles des outils, aide à choisir une configuration réaliste et fournit des guides, prompts et modèles faciles à copier. La méthode conseillée est simple : cadrer dans ChatGPT, exécuter dans Codex, puis contrôler le résultat dans ChatGPT. Work reste une option pour les missions cloud compatibles.

## Commencer

- orientation rapide : [`START-HERE.md`](START-HERE.md) ;
- comparaison des configurations : [`guides/configurations/README.md`](guides/configurations/README.md) ;
- kit minimal pour un dépôt Codex : [`templates/starter-kit/README.md`](templates/starter-kit/README.md) ;
- modèle de brief : [`templates/BRIEF.md`](templates/BRIEF.md) ;
- prompts prêts à adapter : [`prompts/`](prompts/) ;
- formation courte : [`course/FORMATION-EXPRESS.md`](course/FORMATION-EXPRESS.md).

## Kit de démarrage

Le noyau minimal contient `PROJECT.md`, `STATUS.md`, `AGENTS.md` et `prompts/FIRST-MISSION.md`. `DECISIONS.md`, `QUALITY.md` et `.codex/config.toml` sont facultatifs et documentés. Le kit est statique : aucun générateur, manifeste ou ZIP n’est nécessaire.

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
- design : [`DESIGN.md`](DESIGN.md) ;
- qualité : [`QUALITY.md`](QUALITY.md) ;
- workflow interne : [`WORKFLOW.md`](WORKFLOW.md).

## Limites

Aucun générateur de starter, ZIP, manifeste automatique, SDK IA, secret, fichier `.env`, compte, base distante, paiement, création de dépôt, exécution automatique, fusion automatique ou production automatique n’est inclus.

## Licence

Distribué sous licence MIT. Voir [`LICENSE`](LICENSE).
