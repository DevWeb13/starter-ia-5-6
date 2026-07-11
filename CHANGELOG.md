# Changelog

Les changements notables de Starter IA 5.6 sont documentés ici.

## Non publié — Cœur produit local

### Ajouté

- Modèle de projet TypeScript versionné avec les six sections, dates, exports Markdown et JSON.
- Création depuis la démonstration, éditeur local à sauvegarde automatique et dashboard local.
- Reprise, suppression confirmée, effacement global confirmé et gestion de conflit entre onglets.
- Couche `localStorage` validée, testable, avec messages pour indisponibilité, quota et données incompatibles/corrompues.
- Tests Vitest et Playwright du parcours local, de l’export, de la reprise et de la récupération.

### Modifié

- Le dashboard fictif devient l’espace local de projets ; la démonstration crée désormais un projet réel dans le navigateur.
- Les limites de stockage local, d’absence de compte/synchronisation et d’IA réelle sont explicites.

## Fondation SaaS — 2026-07-11

### Ajouté

- Application AI Project Launcher en Next.js App Router.
- Landing premium, fonctionnalités, tarifs envisagés, démonstration locale, dashboard fictif, documentation et 404.
- Navigation mobile accessible et thèmes système/clair/sombre.
- Démonstration déterministe en six sections avec états vide, erreur, chargement et succès.
- Composants shadcn/ui locaux et design tokens clair/sombre.
- Tests Vitest et Playwright.
- GitHub Action avec installation reproductible, lint, TypeScript, tests unitaires et build.
- Mémoire officielle : `ROADMAP.md`, `STATUS.md`, `DECISIONS.md`, `ARCHITECTURE.md`.
- Dossier marketing : positionnement, personas, messages et SEO.

### Modifié

- `README.md` devient la porte d’entrée du produit exécutable.
- `PROJECT.md` enregistre l’évolution du dépôt documentaire vers un starter SaaS.
- `DESIGN.md` couvre désormais le thème sombre, la démo et les contrôles 320 px.
- `AGENTS.md` et `QUALITY.md` ajoutent les vérifications applicatives, Vercel et mémoire.

### Conservé

- Parcours iPhone, workflow, prompts, modèle de brief, formation, licence MIT et configuration Codex de la version 0.1.

## 0.1.0 — 2026-07-11

- Première version documentaire iPhone-first.
- Workflow à écrivain unique, trois sous-agents maximum et deux cycles de correction.
- Prompts, formation express, identité visuelle et configuration Codex prudente.
