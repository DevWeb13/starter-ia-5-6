# Journal des décisions

Les décisions sont append-only : une décision remplacée reste visible avec son nouveau statut et un lien vers celle qui la remplace.

## D-001 — Deux identités complémentaires

**Date :** 2026-07-11 — **Statut :** remplacée par D-017, puis D-022 pour la direction active

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

**Date :** 2026-07-11 — **Statut :** remplacée par D-017 pour la direction active

Free et Pro sont marqués « Prévu », avec « Prix à confirmer ». Les CTA renvoient vers la démonstration existante, jamais vers un checkout ou une inscription inexistante.

## D-010 — CI complète avec E2E Chromium

**Date :** 2026-07-11 — **Statut :** acceptée

GitHub Actions exécute `npm ci`, lint, TypeScript, Vitest, build puis les six scénarios Playwright. Le workflow installe Chromium et ses dépendances avec `npx playwright install --with-deps chromium` et garde un délai maximal de 20 minutes. Les scénarios couvrent la landing, les tarifs, la démo, une saisie continue de 500 caractères, le mobile 320 px, le thème persistant et la 404 `noindex`.

## D-011 — Déploiement Vercel natif

**Date :** 2026-07-11 — **Statut :** acceptée

Vercel détecte Next.js à la racine. Aucun `vercel.json`, token dans GitHub Actions ou variable d’environnement n’est nécessaire. Le déploiement `dpl_51FWd5SVYVLUjeszzcUqfkEso9G7` a été créé avant fusion avec la cible `production` : il ne s’agit pas d’une preview. Le projet doit être relié à GitHub avant la prochaine PR pour générer automatiquement une vraie preview par pull request.

## D-012 — « PR 1 » désigne la phase, pas le numéro GitHub

**Date :** 2026-07-11 — **Statut :** acceptée

La PR GitHub nº 1, documentaire, est déjà fusionnée. Cette mission reste la phase/PR produit 1 mais la nouvelle pull request reçoit le prochain numéro réel de GitHub. Aucune renumérotation artificielle n’est tentée.

## D-013 — SEO minimal sur le domaine public

**Date :** 2026-07-11 — **Statut :** acceptée

`metadataBase`, `sitemap.ts` et `robots.ts` utilisent `https://starter-ia-5-6.vercel.app`. Les routes publiques indexables sont déclarées dans le sitemap ; la route spéciale 404 de Next.js génère une directive `noindex`, sans directive globale d’indexation contradictoire.

## D-014 — Origine locale autorisée pour Playwright

**Date :** 2026-07-11 — **Statut :** acceptée

Next.js 16 bloque par défaut le canal HMR de `127.0.0.1` en développement. `allowedDevOrigins` autorise cette unique origine locale afin que Playwright puisse hydrater et tester les composants interactifs dans GitHub Actions. Ce réglage ne modifie pas les origines de production.

## D-015 — Projet local versionné et stockage navigateur isolé

**Date :** 2026-07-11 — **Statut :** acceptée

La phase 2 introduit un type `Project` au schéma 1 et un unique conteneur versionné dans `localStorage`. La couche de stockage valide entièrement les données au chargement, ne modifie pas les données invalides, conserve une copie brute avant toute réinitialisation destructive et remonte les indisponibilités ou erreurs de quota à l’interface.

## D-016 — Persistance locale explicitement limitée

**Date :** 2026-07-11 — **Statut :** acceptée

Les projets ne vivent que dans le navigateur et l’appareil courant. L’interface affiche cette limite près du dashboard et de l’éditeur : aucun compte, aucune synchronisation et aucune IA véritable. L’éditeur détecte un changement du stockage émis par un autre onglet et laisse choisir entre recharger la version enregistrée ou conserver son édition courante.

## D-017 — Starter de configurations, pas SaaS de génération

**Date :** 2026-07-12 — **Statut :** remplacée par D-022 pour la direction active — remplaçait D-001

Starter IA est l’unique identité produit active. Le dépôt fournit des workflows, configurations, guides et templates pour Chat, Work, Codex local, Codex Remote et les usages hybrides Work + Codex. AI Project Launcher reste le nom historique de l’application livrée pendant les phases 1 et 2, pas une seconde direction produit.

Le périmètre actif exclut fournisseur IA, API payante, secret, authentification, paiement et architecture de SaaS de génération IA.

## D-018 — Cinq configurations complémentaires

**Date :** 2026-07-12 — **Statut :** remplacée par D-023 pour la direction active

Les cinq configurations ont un point d’entrée commun dans `guides/configurations/`. Chat sert aux échanges courts ; Work aux missions cloud complètes ; Codex local aux modifications du dépôt ; Codex Remote au pilotage d’une session locale depuis iPhone ; le mode hybride organise un passage de relais explicite entre Work et Codex.

Ubuntu + iPhone + Remote Control n’est pas une exigence générale. Ses commandes et limites vivent uniquement dans son guide dédié.

## D-019 — Documentation centrale et application locale héritée

**Date :** 2026-07-12 — **Statut :** recentrée par D-024 — remplaçait D-002 pour la direction active

Les ressources documentaires constituent le cœur produit. L’application Next.js et le cœur local des phases 1 et 2 sont préservés et maintenus comme support démonstratif historique. Leur évolution ne doit pas inventer de capacité distante ni imposer un monorepo.

## D-020 — Robustesse du stockage local

**Date :** 2026-07-12 — **Statut :** acceptée — complète D-015 et D-016

La lecture du stockage commence après hydratation. Les dates doivent être des chaînes ISO valides, les identifiants non vides et uniques, et le tri ne doit pas muter le tableau décodé. Lors d’un changement inter-onglets, l’éditeur suspend la saisie et demande un choix accessible avant toute nouvelle écriture.

## D-021 — Hiérarchie publique centrée sur les ressources

**Date :** 2026-07-12 — **Statut :** recentrée par D-022 et D-024 pour la direction active

L’interface publique utilise les routes existantes sans migration : `/docs` pour les Configurations, `/tarifs` pour les Ressources, `/fonctionnalites` pour la Méthode et `/demo` pour la démonstration locale historique.

L’accueil donne accès au catalogue en une action. Le Dashboard sort de la navigation globale mais reste relié depuis la démonstration et les projets locaux. La démo, le dashboard et l’éditeur conservent leur architecture, leur stockage navigateur et leurs fonctions déterministes ; leurs libellés et priorités SEO les identifient comme support secondaire.

## D-022 — Orchestrateur de projet complet

**Date :** 2026-07-13 — **Statut :** acceptée — remplace D-017 et recentre D-021

Starter IA devient un orchestrateur simple et prudent qui transforme une idée en projet numérique lancé après validation humaine. Il organise un cycle unique en six phases : Cadrer, Valider, Concevoir, Construire, Vérifier, Lancer et améliorer. Les activités marché, produit, développement, qualité et marketing appartiennent au même projet.

L’application et la hiérarchie publique déjà livrées restent préservées. Elles ne constituent pas encore ce produit complet.

## D-023 — ChatGPT + Codex, Work secondaire et matériel

**Date :** 2026-07-13 — **Statut :** acceptée — remplace D-018

ChatGPT + Codex est le workflow principal. ChatGPT aide à cadrer, rechercher, décider, rédiger et piloter ; Codex agit sur les fichiers, Git et les vérifications autorisées. Work reste une ressource optionnelle et ses guides sont conservés.

Starter IA recommandera le parcours le plus simple selon le matériel et les fonctions réellement disponibles. Le workflow iPhone + Ubuntu avec Remote Control est prioritaire mais non obligatoire. Aucune disponibilité universelle n’est promise.

## D-024 — MVP local de cycle et de paquets d’exécution

**Date :** 2026-07-13 — **Statut :** acceptée — recentre D-019

Le prochain MVP utilisera d’abord un moteur local et déterministe. Il produira le cycle en six phases, des missions ChatGPT et Codex copiables ou exportables, des livrables, preuves, validations et un rapport final. Il n’appellera aucun fournisseur s’il ne l’intègre pas réellement.

Chaque étape comportera « Comprendre cette étape » : une explication courte du but, des rôles, des outils, du livrable, de la preuve et de l’autorisation humaine éventuelle. L’application locale existante reste historique jusqu’à une implémentation séparée.

## D-025 — Automatisation réversible et autorité humaine

**Date :** 2026-07-13 — **Statut :** acceptée

La cible est le maximum d’automatisation sans autonomie aveugle. Analyses, plans, missions, brouillons, tests et rapports peuvent être préparés automatiquement. Les fichiers, branches, commits, PR, Preview, exports et sauvegardes sont réversibles lorsqu’ils appartiennent au périmètre autorisé.

Fusion dans `main`, production, suppression, paiement, secret, publication externe, envoi de message et action irréversible exigent une autorisation humaine. Ces frontières ne décrivent pas des automatismes déjà implémentés.

## D-026 — Marketing intégré et progression économique

**Date :** 2026-07-13 — **Statut :** acceptée

Le marketing appartient au cycle : marché, cible et positionnement dans Valider ; pack factuel, démonstration, mesure et contenu dans Lancer et améliorer. Toute publication externe reste soumise à l’humain.

La progression économique est : cœur open source utile, usage personnel, cas réels publics, services payants, puis éventuel produit hébergé seulement après validation. Aucun prix, abonnement acquis ou revenu n’est inventé.

## D-027 — Modèle local version 2 et migration conservatrice

**Date :** 2026-07-13 — **Statut :** acceptée — complète D-015, D-016 et D-020

Le modèle `Project` version 2 représente le brief, le matériel déclaré, le workflow recommandé, six phases et 16 étapes actionnables. La clé active devient `starter-ia.projects.v2`.

Si aucune donnée v2 n’existe, la source `ai-project-launcher.projects.v1` est validée strictement, conservée intacte et copiée avant migration. Les anciens champs deviennent un contexte historique ; aucune progression, preuve ou approbation n’est déduite. Une donnée illisible n’est jamais écrasée automatiquement.

## D-028 — Moteur déterministe sans fournisseur

**Date :** 2026-07-13 — **Statut :** acceptée — implémente D-024

Le premier moteur complet reste une fonction TypeScript pure fondée sur des règles et templates. Il produit les phases, étapes, rôles, missions, livrables, preuves, validations et recommandations matérielles sans appel réseau, ChatGPT, Codex, OpenAI ou autre fournisseur.

GitHub et Vercel enrichissent le chemin de livraison sans être obligatoires. Remote Control n’est recommandé que lorsqu’il est explicitement déclaré et que ses conditions matérielles sont réunies.

## D-029 — Espace guidé et preuves déclaratives

**Date :** 2026-07-13 — **Statut :** acceptée

L’espace projet n’affiche qu’une phase principale à la fois. Chaque étape propose ses missions disponibles, « Comprendre cette étape », quatre statuts, des notes ou preuves et une validation humaine éventuelle. Une copie ne vaut jamais exécution et le rapport distingue rôles planifiés, missions préparées et déclarations de l’utilisateur.

Une étape sensible ne peut pas être marquée « fait et vérifié » sans accord humain. Le Dashboard et l’éditeur restent locaux, `noindex` et absents du sitemap.
