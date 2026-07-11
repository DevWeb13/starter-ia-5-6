# Architecture

## Vue d’ensemble

AI Project Launcher est une application Next.js unique à la racine du dépôt. La phase 1 est entièrement statique côté serveur, à l’exception de trois îlots client. Elle ne possède ni backend métier, ni stockage, ni intégration IA.

```text
Navigateur
├── Pages rendues par Next.js (Server Components)
├── Navigation mobile + thème (Client Components)
└── Démonstration locale (Client Component)
    └── fonction pure buildDemoPlan()
```

## Stack réelle

- Next.js `16.2.10`, App Router et Turbopack pour le build.
- React / React DOM `19.2.7`.
- TypeScript `5.9.3`, mode strict.
- Tailwind CSS `4.3.2` et variables CSS sémantiques.
- shadcn/ui en code source local.
- next-themes pour système/clair/sombre.
- Vitest `4.1.10` et Playwright `1.61.1`.
- npm et `package-lock.json`.

## Structure

```text
src/
├── app/
│   ├── page.tsx                  # landing
│   ├── fonctionnalites/page.tsx
│   ├── tarifs/page.tsx
│   ├── demo/page.tsx
│   ├── dashboard/page.tsx
│   ├── docs/page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── demo-launcher.tsx         # état interactif local
│   ├── site-header.tsx           # navigation mobile
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── page-intro.tsx
│   ├── site-footer.tsx
│   └── ui/                       # composants shadcn utilisés
└── lib/
    ├── demo-plan.ts              # validation + génération pure
    ├── demo-plan.test.ts
    └── utils.ts
tests/e2e/app.spec.ts
.github/workflows/ci.yml
marketing/
```

## Rendu et frontières client

`layout.tsx`, toutes les pages, le footer et les composants de contenu sont serveur par défaut.

Trois frontières portent `"use client"` :

1. `site-header.tsx` pour l’ouverture du menu, le chemin courant et le focus ;
2. `theme-provider.tsx` / `theme-toggle.tsx` pour la préférence persistante ;
3. `demo-launcher.tsx` pour la saisie, les quatre états et le résultat en mémoire.

Cette séparation limite le JavaScript envoyé sans sacrifier les interactions nécessaires.

## Flux de démonstration

1. Le champ conserve la saisie dans l’état React.
2. `validateIdea()` normalise les espaces, borne à 500 caractères et renvoie une erreur corrective si nécessaire.
3. L’interface passe 700 ms dans l’état de chargement local.
4. `buildDemoPlan()` retourne un objet typé avec les six sections.
5. Le titre du résultat reçoit le focus ; une live region annonce seulement la transition.
6. Un rechargement efface le résultat, conformément à l’absence de persistance.

Aucune requête `fetch`, route API, action serveur, variable d’environnement ou SDK externe ne participe à ce flux. Aucune idée ni aucun plan n’est stocké dans `localStorage` ; seule la préférence système/clair/sombre y est persistée par `next-themes`.

## Design system

Les couleurs sont des variables par rôle (`background`, `card`, `primary`, `success`, `warning`, `destructive`) définies en clair et sombre. Tailwind les expose via `@theme inline`. La police est strictement système.

Les sources shadcn utilisées sont Button, Card, Badge et Textarea. Les autres compositions emploient des éléments HTML sémantiques, notamment `details/summary` pour la FAQ.

## Tests et livraison

- Quatre tests Vitest couvrent normalisation, validation, contrat des six sections et traitement du texte comme donnée.
- Six tests Playwright couvrent landing, navigation tarifs, états et courses de la démo, saisie continue de 500 caractères, focus succès, menu et débordement à 320 px, thème persistant sans erreur navigateur et 404.
- GitHub Actions installe avec `npm ci`, puis exécute lint, TypeScript, Vitest et build.
- Vercel construit la racine selon les conventions Next.js sans configuration dédiée.

## Évolutions prévues

La phase 2 ajoute un modèle `Project` au schéma 1, `src/lib/local-project-store.ts` (lecture, validation, écriture, sauvegarde avant effacement) et trois îlots client : création, dashboard et éditeur. L’éditeur autosauvegarde, signale son état et détecte les changements d’un autre onglet. Les projets restent exclusivement dans `localStorage` ; ni compte, ni synchronisation, ni IA véritable n’est disponible.

Les phases suivantes isoleront génération IA, stockage distant, authentification et paiement derrière des frontières dédiées. Aucune de ces capacités n’est simulée comme disponible aujourd’hui.
