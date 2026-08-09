# Architecture

Ce document distingue le site pédagogique actif, les templates techniques de référence et la démonstration locale historique.

## Architecture active

```text
Pages Next.js statiques
        ↓
parcours pédagogique, configurations, guides, prompts et ressources
        ↓
liens vers les dépôts techniques de référence
        ↓
Starter IA Qwik Core puis Starter IA Qwik Advanced
```

### Application et stack

- Next.js `16.2.10`, App Router ;
- React / React DOM `19.2.7` ;
- TypeScript `5.9.3` strict ;
- Tailwind CSS `4.3.2`, composants UI locaux et `next-themes` ;
- Vitest `4.1.10` et Playwright `1.61.1` ;
- Server Components par défaut, avec limites client pour le thème, la navigation, les formulaires et `localStorage`.

Les routes publiques existantes sont réutilisées :

- `/` : orientation et progression Fondamentaux → Core → Advanced ;
- `/docs` : choix entre ChatGPT, Work et les configurations Codex ;
- `/ressources` : parcours pédagogique, dépôts Core/Advanced, guides, prompts et ressources ;
- `/fonctionnalites` : méthode de choix, exécution et vérification ;
- `/accompagnement` : présentation statique du service pilote et CTA externe vers LaReponseDev ;
- `/demo` : démonstration locale historique.

`/tarifs` reste une route de compatibilité et redirige de façon permanente vers `/ressources`.

Le site reste principalement statique. L’accompagnement est une page commerciale statique : la prise de contact quitte Starter IA vers le site public LaReponseDev. Il n’existe ni base de données, ni formulaire distant, ni paiement intégré, ni API IA, ni service de génération.

## Dépôts techniques de référence

Starter IA ne maintient plus plusieurs Core concurrents.

```text
starter-ia-5-6
└── documentation, cours, guides et démonstration historique

starter-ia-qwik
└── source de vérité technique du Qwik Core

starter-ia-qwik-advanced
└── source de vérité technique de la variante Advanced
```

Le site peut citer, expliquer et lier les fichiers versionnés de ces dépôts. Il ne les recopie pas par défaut dans un second template local.

## Architecture pédagogique

La progression détaillée vit dans [`course/README.md`](course/README.md).

```text
Fondamentaux
        ↓
Starter IA Qwik Core
        ↓
Starter IA Qwik Advanced
```

Les fondamentaux expliquent les notions essentielles sans constituer un autre template. Le Core enseigne la fondation réellement exécutable. Advanced n'est introduit qu'après le Core et seulement à partir de fonctions réellement présentes dans son dépôt.

Chaque chapitre distingue mécanisme officiel, décision Starter IA, fichier réel, interactions, limites et exemple.

## Démonstration historique conservée

```text
Brief + profil matériel déclarés
        ↓
moteur TypeScript pur et déterministe
        ↓
Project schéma 2 : workflow + 6 phases + 16 étapes
        ↓
stockage local version 2 dans localStorage
        ↓
Dashboard ↔ éditeur ↔ exports Markdown/JSON ↔ rapport local
```

`src/lib/project-engine.ts` produit le parcours sans appel réseau. `src/lib/project.ts` définit le modèle version 2. `/demo`, `/dashboard` et `/dashboard/[id]` conservent leurs fonctions. Les projets restent sur l’appareil, les données invalides ne sont pas écrasées automatiquement et les routes du Dashboard restent `noindex`.

Cette architecture est maintenue pour préserver une réalisation utile ; elle ne sert plus de fondation à un orchestrateur ou à un générateur futur.

## Directions non implémentées ou abandonnées

Le site pédagogique ne crée pas automatiquement de dépôt, n'exécute pas Codex de façon autonome et n'intègre pas par défaut API IA, authentification, paiement ou stockage distant.

Le générateur de starters, le manifeste automatique, le ZIP comme cœur produit et Social Autopilot ne font pas partie de l’architecture cible.

## Sécurité commune

Aucun secret ne doit être demandé, généré ou commité. Un seul agent écrit un même périmètre ; spécialistes et reviewers restent indépendants. Fusion, production, suppression, paiement, publication, message et action irréversible exigent une autorisation humaine explicite.
