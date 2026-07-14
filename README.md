# Starter IA 5.6

**Décrivez le projet que vous voulez lancer. Starter IA organise localement six phases, les missions ChatGPT et Codex, les livrables, les preuves et les validations humaines selon votre matériel.**

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

## MVP local version 2

Le parcours actif est : **Cadrer → Valider → Concevoir → Construire → Vérifier → Lancer et améliorer**.

- `/demo` recueille la description, le résultat recherché, les contraintes et l’environnement déclaré ;
- un moteur TypeScript pur produit 16 étapes déterministes dans les six phases ;
- le workflow recommandé distingue Codex local, Remote Control, le parcours phare iPhone + Ubuntu et l’absence de Codex ;
- chaque étape expose les rôles, outils, missions copiables, livrables, preuves, statut et éventuelle validation humaine ;
- « Comprendre cette étape » explique progressivement les responsabilités ;
- le Dashboard permet de reprendre, exporter, supprimer ou réinitialiser après confirmation et sauvegarde ;
- l’export JSON contient le projet version 2 complet ; l’export Markdown ajoute le rapport déclaratif lisible.

Aucun fournisseur IA n’est appelé. Une mission copiée n’est jamais considérée comme exécutée. Les projets restent dans `localStorage` sur le navigateur et l’appareil courants, sans compte ni synchronisation.

## Migration locale

Le schéma actif utilise `starter-ia.projects.v2`. Si cette clé est absente, Starter IA valide strictement `ai-project-launcher.projects.v1`, conserve la source et une sauvegarde brute, puis crée des projets v2 dont toutes les étapes restent « non tenté ». Une donnée illisible n’est jamais écrasée automatiquement.

## Démarrage local

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

## Ressources

- démarrage : [`START-HERE.md`](START-HERE.md) ;
- direction : [`PROJECT.md`](PROJECT.md) ;
- workflow : [`WORKFLOW.md`](WORKFLOW.md) ;
- configurations secondaires : [`guides/configurations/README.md`](guides/configurations/README.md) ;
- état réel : [`STATUS.md`](STATUS.md) ;
- architecture : [`ARCHITECTURE.md`](ARCHITECTURE.md) ;
- qualité : [`QUALITY.md`](QUALITY.md) ;
- historique : [`CHANGELOG.md`](CHANGELOG.md).

## Limites

Aucun SDK IA, secret, fichier `.env`, authentification, base distante, paiement, publication automatique, fusion automatique ou production automatique n’est inclus. L’étape 9 ajoutera plus tard l’exécution guidée ; elle n’est pas livrée ici.

## Licence

Distribué sous licence MIT. Voir [`LICENSE`](LICENSE).
