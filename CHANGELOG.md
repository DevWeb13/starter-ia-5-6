# Changelog

Les changements notables de Starter IA 5.6 sont documentés ici.

## Non publié — Catalogue et templates

### Modifié

- Le catalogue central relie les cinq configurations aux guides, prompts, briefs, critères qualité, formation et configuration réellement disponibles.
- Chaque guide propose un démarrage en trois étapes maximum, des ressources associées, ses limites et un passage de relais.
- La mémoire officielle reflète les PR nº 4 et nº 5 fusionnées et l’étape 4 en cours.

### Non inclus

- Aucune modification de l’application, de la configuration Codex ou du périmètre produit.

## Réalignement du starter — 2026-07-12

### Modifié

- Starter IA devient l’unique direction produit : workflows, configurations, guides et templates pour cinq usages complémentaires.
- `AGENTS.md` applique `WORKFLOW.md` et conserve uniquement les règles permanentes du dépôt.
- La mémoire officielle abandonne les phases prévues de fournisseur IA, comptes et monétisation.
- L’application Next.js et le cœur local sont requalifiés comme support démonstratif historique maintenu.
- Les pages actives ne promettent plus de fournisseur, de SaaS, de compte ou d’offre Pro future.
- `README.md` devient la porte d’entrée publique de Starter IA et dirige d’abord vers les cinq configurations.
- `START-HERE.md` présente le parcours Work sur iPhone sans bloquer les autres configurations si Work est absent.
- Les métadonnées, la navigation, le pied de page et les pages publiques utilisent Starter IA comme identité active ; `/tarifs` conserve sa route sous le libellé « Ressources ».
- `/docs` reflète la persistance `localStorage`, la phase 2 fusionnée et les limites réelles.

### Ajouté

- Point d’entrée et guides courts pour Chat, Work, Codex local, Codex Remote et Work + Codex.
- Validation renforcée des dates et identifiants locaux.
- Chargement après hydratation et arbitrage accessible des conflits inter-onglets.

### Non inclus

- Aucun fichier `src/server/ai`, fournisseur, SDK, appel payant, secret, authentification, paiement ou déploiement manuel.

## Configuration Codex sécurisée — 2026-07-12

- Sandbox limité au dépôt en mode `workspace-write`.
- Revue automatique des demandes d’autorisation avec `auto_review`.
- Accès réseau du sandbox désactivé.

## Cœur produit local — 2026-07-11

- Modèle de projet TypeScript versionné avec six sections, dates et exports Markdown/JSON.
- Création depuis la démonstration, dashboard, éditeur et sauvegarde automatique locale.
- Reprise, suppression confirmée, sauvegarde avant réinitialisation et détection de conflit inter-onglets.
- Tests Vitest et Playwright du parcours local.

## Fondation applicative — 2026-07-11

- Application Next.js App Router, landing, pages de présentation, démonstration locale, dashboard et documentation.
- Navigation accessible, thèmes système/clair/sombre et design tokens.
- Tests Vitest et Playwright, GitHub Actions et déploiement historique.
- Mémoire officielle et ressources marketing.

## 0.1.0 — 2026-07-11

- Première version documentaire iPhone-first.
- Workflow à écrivain unique, trois sous-agents maximum et deux cycles de correction.
- Prompts, formation express, identité visuelle et configuration Codex prudente.
