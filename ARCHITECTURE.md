# Architecture

Ce document distingue le site de ressources actif de la démonstration locale historique.

## Architecture active

```text
Pages Next.js statiques
        ↓
catalogue de configurations, guides, prompts et templates versionnés
        ↓
consultation ou copie depuis GitHub
```

### Application et stack

- Next.js `16.2.10`, App Router ;
- React / React DOM `19.2.7` ;
- TypeScript `5.9.3` strict ;
- Tailwind CSS `4.3.2`, composants UI locaux et `next-themes` ;
- Vitest `4.1.10` et Playwright `1.61.1` ;
- Server Components par défaut, avec limites client pour le thème, la navigation, les formulaires et `localStorage`.

Les routes publiques existantes sont réutilisées :

- `/` : orientation et points de départ ;
- `/docs` : choix entre ChatGPT, Work et les configurations Codex ;
- `/tarifs` : kit, prompts, templates et guides ;
- `/fonctionnalites` : méthode ChatGPT → Codex → ChatGPT ;
- `/demo` : démonstration locale historique.

Les ressources restent des fichiers Markdown ou TOML simples. Le site renvoie vers leur version enregistrée dans GitHub ; il n’existe ni base de données, ni API IA, ni service de génération.

## Kit statique

`templates/starter-kit/` contient quatre fichiers minimaux et trois options. L’utilisateur copie seulement ce qui correspond à son projet. Aucun code ne compose automatiquement un dossier, un manifeste ou un ZIP.

```text
templates/starter-kit/
├── README.md
├── PROJECT.md
├── STATUS.md
├── AGENTS.md
├── prompts/FIRST-MISSION.md
├── DECISIONS.md             # facultatif
├── QUALITY.md               # facultatif
└── .codex/config.toml       # facultatif
```

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

## Directions non implémentées et abandonnées

Le générateur de starters, le manifeste automatique, le ZIP, la création de dépôt, l’exécution automatique de Codex, Social Autopilot, l’API IA, l’authentification, le paiement et le stockage distant ne font pas partie de l’architecture cible.

## Sécurité commune

Aucun secret ne doit être demandé, généré ou commité. Un seul agent écrit ; spécialistes et reviewers restent en lecture seule. Fusion, production, suppression, paiement, publication, message et action irréversible exigent une autorisation humaine explicite.
