# Starter IA 5.6

**Décrivez le projet que vous voulez lancer. Starter IA organise avec ChatGPT et Codex les étapes, les spécialistes, les missions et les vérifications nécessaires, de l’idée au lancement.**

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

## Direction du produit

Starter IA vise un parcours unique en six phases : **Cadrer → Valider → Concevoir → Construire → Vérifier → Lancer et améliorer**.

- ChatGPT aide à réfléchir, rechercher, décider, rédiger et piloter.
- Codex travaille sur les fichiers et vérifie les résultats dans les environnements autorisés.
- Starter IA prépare le parcours, les missions, les livrables et les preuves selon le matériel.
- Un seul exécutant écrit, un reviewer contrôle et l’humain autorise les actions sensibles.

La direction complète et ses limites sont définies dans [`PROJECT.md`](PROJECT.md). Le processus d’une mission est distinct du cycle du projet et vit dans [`WORKFLOW.md`](WORKFLOW.md).

## Ce qui existe déjà

- des guides pour Chat, Work, Codex local, Codex Remote et Work + Codex ;
- des prompts, briefs, critères qualité et ressources de formation ;
- une application Next.js locale historique ;
- un projet déterministe modifiable, stocké dans le `localStorage` de l’appareil courant et exportable en Markdown ou JSON.

La démonstration actuelle produit six **sections** locales. Elle n’exécute pas le futur cycle en six phases, n’appelle ni ChatGPT ni Codex et ne possède ni compte, ni synchronisation, ni paiement.

## Prochain MVP

Une PR séparée construira un orchestrateur local et déterministe. À partir d’un projet, de contraintes et du matériel disponible, il préparera les six phases, les missions ChatGPT et Codex, les livrables, les preuves, les validations humaines, le marketing et le volet **« Comprendre cette étape »**.

Ce MVP ne contiendra aucun SDK IA, appel payant, secret, compte, base distante, paiement, publication automatique ou déploiement automatique en production. Voir [`ROADMAP.md`](ROADMAP.md) et [`ARCHITECTURE.md`](ARCHITECTURE.md).

## Choisir son environnement

Starter IA recommande le parcours le plus simple réellement compatible : Codex local sur Ubuntu/Linux, Windows ou macOS, ou Remote Control depuis iPhone lorsque cette fonction est disponible. Work reste une option secondaire.

Les guides de configuration sont des références techniques, pas le point de départ produit : [`guides/configurations/README.md`](guides/configurations/README.md).

## Démarrage local

Prérequis : Node.js 24 et npm.

```sh
npm ci
npm run dev
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000). Aucune variable d’environnement n’est nécessaire.

## Contrôles

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Playwright utilise Chromium. Avant un premier lancement local, exécutez si nécessaire `npx playwright install chromium`.

## Ressources et mémoire

- démarrage : [`START-HERE.md`](START-HERE.md) ;
- direction : [`PROJECT.md`](PROJECT.md) ;
- état réel : [`STATUS.md`](STATUS.md) ;
- feuille de route : [`ROADMAP.md`](ROADMAP.md) ;
- décisions : [`DECISIONS.md`](DECISIONS.md) ;
- architecture : [`ARCHITECTURE.md`](ARCHITECTURE.md) ;
- design : [`DESIGN.md`](DESIGN.md) ;
- prompts et briefs : [`prompts/`](prompts/) et [`templates/`](templates/) ;
- historique : [`CHANGELOG.md`](CHANGELOG.md).

## Licence

Distribué sous licence MIT. Voir [`LICENSE`](LICENSE).
