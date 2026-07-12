# Starter IA 5.6

Starter IA 5.6 est un starter open source de workflows, configurations, guides et templates concrets pour utiliser ChatGPT, Work, Codex et les agents avec un résultat vérifiable.

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

## Choisir sa configuration

Commencez par le [sélecteur des cinq configurations](guides/configurations/README.md) :

1. **Chat** pour réfléchir, décider et produire des brouillons courts ;
2. **Work** pour exécuter des missions complètes dans un environnement cloud ;
3. **Codex local avec VS Code** pour inspecter, modifier et vérifier un dépôt ;
4. **Codex Remote depuis iPhone** pour piloter une session qui continue sur la machine locale ;
5. **Work + Codex** pour préparer ou analyser dans Work, puis implémenter dans le dépôt avec Codex.

Le workflow commun reste :

**Brief → sous-agents en lecture seule → plan → agent écrivain → vérification → revue indépendante → correction → livraison**

Voir [`WORKFLOW.md`](WORKFLOW.md), [`QUALITY.md`](QUALITY.md) et [`templates/BRIEF.md`](templates/BRIEF.md).

## Ressources disponibles

- [`guides/configurations/`](guides/configurations/README.md) : choix, démarrage, limites et passages de relais ;
- [`prompts/`](prompts/) : instructions réutilisables ;
- [`templates/`](templates/) : briefs et livrables de départ ;
- [`course/`](course/) : formation existante ;
- [`AGENTS.md`](AGENTS.md) et [`.codex/`](.codex/) : règles et configuration Codex du dépôt.

## Démonstration locale historique

Le dépôt conserve l’application Next.js livrée pendant les phases 1 et 2. Elle permet de créer un projet déterministe en six sections, le modifier, l’exporter et le conserver dans le `localStorage` de l’appareil courant.

Cette application est un support démonstratif historique, pas le produit actif complet. Elle n’appelle aucun fournisseur IA et ne possède ni compte, ni synchronisation distante, ni paiement. Le navigateur peut vider ou bloquer son stockage local : exportez les projets importants.

### Démarrage local

Prérequis : Node.js 24 et npm.

```sh
npm ci
npm run dev
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000). Aucune variable d’environnement n’est nécessaire.

### Contrôles

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Playwright utilise Chromium. Avant un premier lancement local, exécutez si nécessaire `npx playwright install chromium`.

## Historique préservé

- **Version 0.1** : méthode iPhone-first, prompts, brief, formation et configuration Codex prudente.
- **Phase 1**, commit `6819f79` : application Next.js, design system, tests, CI et déploiement historique.
- **Phase 2**, commit `1026f75` : modèle de projet, dashboard, éditeur, exports et persistance locale.

Ces phases sont livrées. Les anciennes projections d’intégration IA, comptes ou monétisation ne constituent plus la feuille de route active.

## Architecture et mémoire

- Direction : [`PROJECT.md`](PROJECT.md)
- État réel : [`STATUS.md`](STATUS.md)
- Feuille de route : [`ROADMAP.md`](ROADMAP.md)
- Décisions : [`DECISIONS.md`](DECISIONS.md)
- Architecture : [`ARCHITECTURE.md`](ARCHITECTURE.md)
- Identité visuelle : [`DESIGN.md`](DESIGN.md)
- Historique : [`CHANGELOG.md`](CHANGELOG.md)

L’application suit Next.js App Router, TypeScript strict, Tailwind CSS, Vitest et Playwright. Les interactions navigateur restent limitées au thème, à la navigation, à la démonstration et au stockage local.

## Limites actuelles

- aucun fournisseur ou SDK IA intégré ;
- aucune API payante ni clé secrète ;
- aucune authentification, base distante ou synchronisation ;
- aucun paiement ni abonnement ;
- la disponibilité de Chat, Work, Codex, Remote Control, modèles et plugins dépend du compte et de l’environnement ;
- Work ne charge pas automatiquement `AGENTS.md` ni `.codex/config.toml`.

## Licence

Distribué sous licence MIT. Voir [`LICENSE`](LICENSE).
