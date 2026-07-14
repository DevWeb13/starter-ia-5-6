# Architecture

Ce document décrit l’architecture réellement livrée sur la branche de l’étape 8.

## Vue d’ensemble

```text
Brief + profil matériel déclarés
        ↓
project-engine.ts (pur et déterministe)
        ↓
Project schéma 2 : workflow + 6 phases + 16 étapes
        ↓
local-project-store.ts
        ↓
starter-ia.projects.v2 dans localStorage
        ↓
Dashboard ↔ espace projet ↔ exports ↔ rapport local
```

Les pages et contenus restent des Server Components par défaut. Les limites client couvrent la navigation, le thème, le formulaire, le Dashboard et l’espace projet, qui ont besoin du navigateur et de `localStorage`.

## Stack

- Next.js `16.2.10`, App Router ;
- React / React DOM `19.2.7` ;
- TypeScript `5.9.3` strict ;
- Tailwind CSS `4.3.2`, composants UI locaux et next-themes ;
- Vitest `4.1.10` et Playwright `1.61.1` ;
- aucune nouvelle dépendance pour le MVP.

## Modèle version 2

`src/lib/project.ts` définit l’identité, le brief, le profil matériel, le workflow recommandé, les six phases et les étapes. Chaque étape possède un identifiant stable, un ordre, un objectif, une raison, un rôle, un outil, des missions facultatives, des livrables, des preuves, un statut, des notes et une validation humaine éventuelle.

Les statuts internes sont `not-started`, `partial`, `blocked` et `done-verified`. L’interface affiche les libellés français officiels. Le validateur interdit un projet dont une étape sensible serait « fait et vérifié » sans accord humain.

## Moteur déterministe

`src/lib/project-engine.ts` contient les templates des six phases et recommande un workflow uniquement à partir des déclarations de l’utilisateur :

- iPhone + Codex Remote + Ubuntu ;
- iPhone + Remote Control sur un autre système ;
- ChatGPT + Codex local ;
- parcours local sans Remote Control ;
- préparation ChatGPT avec Codex à installer ou activer.

GitHub et Vercel enrichissent le chemin de livraison sans conditionner la création locale. Une Preview n’est recommandée que sous la forme conditionnelle « si l’intégration GitHub–Vercel est réellement reliée ». Le moteur n’effectue aucun appel réseau, fournisseur, ChatGPT, Codex ou OpenAI. Les missions intègrent le brief, l’étape, les livrables, les preuves, les frontières de sécurité et les actions soumises à l’humain.

## Migration version 1

La lecture suit cet ordre :

1. lire et valider `starter-ia.projects.v2` ;
2. si la clé est absente et qu’aucune migration n’est marquée, lire `ai-project-launcher.projects.v1` ;
3. valider strictement le conteneur, les projets, les dates ISO et les identifiants ;
4. conserver la source et une copie brute dans `starter-ia.projects.v1.migration-backup` ;
5. transformer les anciens champs en brief et contexte historique ;
6. générer les six phases avec tous les statuts non tentés ;
7. écrire le conteneur v2 puis marquer la migration.

Une donnée v1 ou v2 illisible n’est jamais écrasée automatiquement. La réinitialisation v2 sauvegarde d’abord la donnée brute. Le listener `storage` écoute uniquement la clé active v2 et suspend l’éditeur jusqu’au choix explicite de l’utilisateur.

## Interface

- `/demo` crée immédiatement un projet à partir de trois questions et du profil matériel ;
- `/dashboard` liste les projets, leur workflow, leur progression et leurs exports ;
- `/dashboard/[id]` affiche une seule phase principale, ses étapes, « Comprendre cette étape », les statuts, preuves, copies et validations ;
- le rapport local est dérivé de l’état enregistré ;
- le Dashboard et l’éditeur sont `noindex` et absents du sitemap.

## Exports et rapport

`src/lib/project-report.ts` centralise la progression, le rapport, l’export JSON validé et l’export Markdown. Le Markdown normalise les contenus utilisateurs afin de préserver sa structure. Le rapport distingue rôles planifiés, statuts déclarés, preuves consignées et validations ; il ne prétend jamais qu’une mission préparée a été exécutée.

## Sécurité et limites

Aucun SDK IA, appel payant, secret, fichier `.env`, compte, base distante, paiement, collaboration multi-utilisateur, publication automatique ou production automatique n’est ajouté. Les contenus utilisateurs sont rendus comme texte React. Fusion, production, suppression, paiement, secret, publication, message et action irréversible restent sous validation humaine.

## Livraison

GitHub Actions et l’intégration Vercel restent les seules voies de CI et de Preview distante. La Preview d’une PR doit provenir de l’intégration GitHub ; aucun déploiement manuel n’est nécessaire. L’étape 9 d’exécution guidée reste future.
