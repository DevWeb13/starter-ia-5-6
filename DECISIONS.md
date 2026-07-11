# Journal des décisions

Les décisions sont append-only : une décision remplacée reste visible avec son nouveau statut et un lien vers celle qui la remplace.

## D-001 — Deux identités complémentaires

**Date :** 2026-07-11 — **Statut :** acceptée

Starter IA 5.6 désigne la méthode et le dépôt. AI Project Launcher désigne le produit SaaS exemple. L’application porte le second nom et précise discrètement son lien avec le premier.

## D-002 — Application unique à la racine

**Date :** 2026-07-11 — **Statut :** acceptée

Le dépôt reste une application unique, sans monorepo. La documentation historique reste à la racine ou dans ses dossiers existants. Ce choix réduit les scripts, le coût cognitif et la configuration Vercel.

## D-003 — Versions stables compatibles

**Date :** 2026-07-11 — **Statut :** acceptée

Next.js `16.2.10`, React `19.2.7` et Tailwind CSS `4.3.2` sont les versions stables vérifiées au registre. TypeScript `5.9.3` et ESLint `9.39.5` sont les dernières branches compatibles avec l’outillage Next actuel ; TypeScript 7 et ESLint 10 ont échoué lors du premier contrôle et ont été écartés.

## D-004 — Composants serveur par défaut

**Date :** 2026-07-11 — **Statut :** acceptée

Les pages et contenus restent des React Server Components. Les limites client sont le fournisseur de thème, la navigation mobile et le lanceur de démonstration. Il n’existe aucune route API dans la phase 1.

## D-005 — Démonstration déterministe locale

**Date :** 2026-07-11 — **Statut :** acceptée

Une fonction TypeScript pure normalise l’idée et produit six sections. Un délai local rend l’état de chargement testable. Aucun appel IA, endpoint, cookie ou base de données n’est utilisé. Aucune idée ni aucun plan n’est écrit dans `localStorage` ; seule la préférence de thème y est persistée par `next-themes`. L’interface répète les limites près de la saisie et du résultat.

## D-006 — shadcn/ui possédé, dépendances minimales

**Date :** 2026-07-11 — **Statut :** acceptée

Le dépôt possède les sources Button, Card, Badge et Textarea ainsi que `components.json`. Il n’installe ni CLI shadcn, ni SDK IA, ni bibliothèque de formulaire ou validation non nécessaire.

## D-007 — Thèmes clair et sombre dès la fondation

**Date :** 2026-07-11 — **Statut :** acceptée

Le brief courant exige le mode sombre et prime sur le report historique de `DESIGN.md`. Les deux palettes utilisent les mêmes rôles sémantiques, respectent la préférence système et proposent un choix persistant système/clair/sombre.

## D-008 — Police système et aucun média propriétaire

**Date :** 2026-07-11 — **Statut :** acceptée

La pile native de `DESIGN.md` évite les requêtes de police, améliore le premier rendu et reste familière sur iPhone. L’interface n’emploie aucune image marketing ni police propriétaire.

## D-009 — Offre future sans prix inventé

**Date :** 2026-07-11 — **Statut :** acceptée

Free et Pro sont marqués « Prévu », avec « Prix à confirmer ». Les CTA renvoient vers la démonstration existante, jamais vers un checkout ou une inscription inexistante.

## D-010 — CI minimale, E2E local et preview

**Date :** 2026-07-11 — **Statut :** acceptée

GitHub Actions exécute `npm ci`, lint, TypeScript, Vitest et build. Six scénarios Playwright couvrent la landing, les tarifs, la démo, une saisie continue de 500 caractères, le mobile 320 px, le thème persistant et la 404. L’ajout d’un job navigateur distant est reporté pour ne pas alourdir la fondation ; la preview doit être contrôlée réellement avant revue.

## D-011 — Déploiement Vercel natif

**Date :** 2026-07-11 — **Statut :** acceptée

Vercel détecte Next.js à la racine. Aucun `vercel.json`, token dans GitHub Actions ou variable d’environnement n’est nécessaire. La Git integration ou le connecteur Vercel crée la preview de branche.

## D-012 — « PR 1 » désigne la phase, pas le numéro GitHub

**Date :** 2026-07-11 — **Statut :** acceptée

La PR GitHub nº 1, documentaire, est déjà fusionnée. Cette mission reste la phase/PR produit 1 mais la nouvelle pull request reçoit le prochain numéro réel de GitHub. Aucune renumérotation artificielle n’est tentée.
