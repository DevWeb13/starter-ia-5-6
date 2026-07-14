# Changelog

Les changements notables de Starter IA 5.6 sont documentés ici.

## Non publié — Expérience du MVP en français courant

### Modifié

- Les six phases et les 16 étapes utilisent des titres courts, des objectifs directs et des résultats faciles à vérifier.
- Une carte montre d’abord l’étape, son état et une seule action principale ; les explications et la mission complémentaire restent repliées.
- Le formulaire, les statuts, le Dashboard, le rapport et l’export Markdown partagent des libellés plus simples.
- Les boutons actifs et désactivés affichent les curseurs attendus, et les liens externes ouvrent un nouvel onglet avec une indication accessible.

### Conservé

- Le moteur n’est pas reconstruit : schéma 2, données existantes, stockage, migration, conflits, progression, règles de preuve et d’accord, missions et exports JSON restent compatibles.
- L’étape 9 reste future et aucune intégration distante, dépendance, exécution IA, base ou production manuelle n’est ajoutée.

## Non publié — MVP local du projet complet

### Ajouté

- Modèle `Project` version 2 avec brief, profil matériel, workflow recommandé, six phases et 16 étapes.
- Moteur TypeScript déterministe sans appel réseau ou fournisseur IA.
- Recommandations pour iPhone + Ubuntu + Remote Control, Remote Control alternatif, Codex local et absence de Codex.
- Missions ChatGPT et Codex contextualisées, livrables, preuves, quatre statuts et validations humaines.
- Espace projet à une phase principale, volet « Comprendre cette étape » et rapport local déclaratif.
- Exports JSON validé et Markdown complet, normalisé pour les contenus utilisateurs.

### Modifié

- `/demo` devient le véritable lancement local du projet, sans faux délai.
- Le Dashboard affiche résultat recherché, workflow, progression, blocages, exports et actions confirmées.
- L’accueil, le fonctionnement, les ressources, la navigation, le footer et les métadonnées présentent le MVP complet comme produit principal.

### Migration

- La clé active devient `starter-ia.projects.v2`.
- Les projets `ai-project-launcher.projects.v1` sont validés, sauvegardés et migrés sans supprimer la source ni inventer de progression.
- Les données v1 ou v2 corrompues restent intactes avec une action de récupération explicite.

### Limites

- Aucun SDK IA, appel ChatGPT ou Codex automatique, compte, synchronisation, base distante, paiement, publication ou production automatique.
- L’exécution guidée reste prévue pour l’étape 9.

## Non publié — Réalignement définitif de la direction produit

### Direction décidée

- Starter IA devient un orchestrateur de projet complet en six phases, de l’idée au lancement et à l’amélioration.
- ChatGPT + Codex devient le workflow principal ; Work reste une option secondaire.
- Les rôles d’orchestrateur, spécialiste, exécutant, reviewer et humain sont explicités.
- Le futur parcours sera recommandé selon le matériel, avec iPhone + Ubuntu comme workflow phare lorsqu’il est disponible.
- Le marketing appartient au cycle complet et la stratégie économique progresse de l’open source aux services, puis à un éventuel produit hébergé après validation.
- Le contrat du prochain MVP inclut missions copiables, preuves, validations, exports, rapport final et « Comprendre cette étape ».
- Les frontières d’automatisation distinguent préparation automatique, actions réversibles autorisées et décisions humaines obligatoires.

### Pas encore construit

- Aucun nouveau modèle de données, composant, route ou stockage n’est ajouté.
- Aucun appel ChatGPT ou Codex, SDK IA, compte, base distante, paiement ou automatisation de publication n’est introduit.
- Le cycle en six phases, la recommandation matérielle et « Comprendre cette étape » restent la cible de l’étape 8.

## Non publié — Clôture post-fusion

### Modifié

- La mémoire officielle reflète la fusion de la PR nº 7, le commit courant de `main` et le déploiement de production vérifié.
- Le Dashboard et l’éditeur locaux sont exclus de l’indexation publique sans modifier leur fonctionnement.
- Le sitemap ne publie plus la route locale `/dashboard`.
- Les tests Playwright vérifient les directives `noindex` et l’absence du Dashboard dans le sitemap.

### Non inclus

- Aucun changement du cœur local, du design, des dépendances ou du périmètre produit.

## Interface alignée sur les ressources — 2026-07-12

### Modifié

- L’accueil devient la porte d’entrée vers les cinq configurations, le workflow et les ressources documentaires.
- `/docs`, `/tarifs` et `/fonctionnalites` présentent respectivement les Configurations, les Ressources et la Méthode.
- La navigation, le pied de page, les métadonnées et le sitemap privilégient le produit documentaire actif.
- La démonstration, le dashboard et l’éditeur restent un support local historique secondaire, avec leurs fonctions préservées.
- Les tests Playwright couvrent le CTA principal, les cinq configurations, la navigation sans Dashboard, les Ressources, la Méthode et le responsive à 320 px.

### Non inclus

- Aucun fournisseur, appel externe, compte, paiement, stockage distant, dépendance ou changement de stack.

## Catalogue et templates — 2026-07-12

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
