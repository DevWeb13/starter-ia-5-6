# Architecture

Ce document distingue l’architecture réellement livrée de la cible du prochain MVP. Cette PR ne modifie aucune fonction applicative et n’ajoute aucune intégration distante.

## Architecture actuellement livrée

```text
Starter IA
├── Ressources open source
│   ├── guides/configurations/
│   ├── prompts/
│   ├── templates/
│   ├── course/
│   └── .codex/ + AGENTS.md
└── Application Next.js existante
    ├── pages publiques rendues côté serveur
    ├── thème et navigation côté client
    └── démonstration, dashboard et éditeur locaux
        └── localStorage versionné
```

L’application crée un plan déterministe en six sections. Elle permet de modifier, reprendre et exporter un projet local. Elle n’exécute pas encore le cycle cible en six phases et n’appelle aucun fournisseur IA.

### Stack conservée

- Next.js `16.2.10`, App Router ;
- React / React DOM `19.2.7` ;
- TypeScript `5.9.3` strict ;
- Tailwind CSS `4.3.2`, composants shadcn/ui locaux et next-themes ;
- Vitest `4.1.10` et Playwright `1.61.1` ;
- npm avec `package-lock.json`.

### Frontières actuelles

- Les pages et contenus restent des Server Components par défaut.
- Les composants client couvrent uniquement navigation, thème, démonstration et stockage local.
- Le type `Project` utilise un schéma versionné.
- `local-project-store.ts` centralise validation, lecture, écriture, sauvegarde avant réinitialisation et erreurs.
- Les projets restent dans `localStorage` sur l’appareil courant.
- Il n’existe aucun compte, synchronisation, base distante, route de génération, SDK fournisseur ou secret serveur.

## Architecture cible du prochain MVP

```text
Description du projet
        ↓
Profil matériel
        ↓
Cycle complet en six phases
        ↓
Sélection des spécialistes
        ↓
Recommandation ChatGPT / Codex
        ↓
Paquets de missions
        ↓
Progression et livrables locaux
        ↓
Comprendre cette étape
        ↓
Preuves et validations humaines
        ↓
Pack de lancement marketing
```

### Moteur initial

Le moteur cible reste local et déterministe. Des règles et templates transforment les entrées du projet en phases, étapes, rôles recommandés, missions copiables, livrables, preuves et validations. Le système distingue les spécialistes recommandés des agents réellement utilisés.

Le profil matériel retient seulement les informations utiles : iPhone, ordinateur, système, Codex local, Remote Control, GitHub, Vercel éventuel et capacité de la machine à rester active. Le moteur recommande un parcours compatible au lieu de faire choisir une architecture complexe.

### Modèle cible

Le futur modèle local devra représenter :

- les six phases et leurs étapes ordonnées ;
- l’objectif, le pourquoi, le rôle, l’outil et la mission de chaque étape ;
- les livrables, preuves, contrôles et validations humaines ;
- la progression et les statuts fait et vérifié, partiel, bloqué ou non tenté ;
- les paquets ChatGPT et Codex ;
- le plan marketing et le rapport final.

Le schéma précis sera décidé et versionné pendant l’étape 8. Cette PR ne modifie pas le type `Project` actuel ni `localStorage`.

## Comprendre cette étape

Chaque étape cible expose un volet court « Comprendre cette étape ». Il explique pourquoi l’étape existe, le spécialiste mobilisé, le travail de ChatGPT et Codex, la raison de l’écrivain unique, le livrable, la preuve et l’approbation éventuelle.

Le rapport final cible enregistre les rôles et missions réellement exécutés, les livrables produits, les vérifications réussies, les actions non tentées ou bloquées et les validations humaines accordées.

## Sécurité et actions externes

L’orchestrateur prépare les actions. Leur exécution dépend des outils réellement disponibles, des permissions et du brief. Les changements réversibles restent sur une branche. La fusion dans `main`, la production, les suppressions, paiements, secrets, publications et messages exigent l’humain.

Le parcours iPhone + Ubuntu conserve les processus sur Ubuntu. Remote Control ne remplace ni la vérification Git ni la vérification des processus. Sa disponibilité dépend du compte et des versions.

## Tests et livraison

- Vitest couvre actuellement la génération déterministe et le stockage local.
- Playwright couvre les parcours essentiels, le responsive, le thème et les cas de stockage.
- GitHub Actions et l’intégration Vercel sont déjà présents.
- Une Preview de PR doit provenir de l’intégration GitHub automatique ; aucune production n’est implicite.

Les tests du futur modèle, de ses règles et de ses exports seront définis pendant l’étape 8.

## Évolutions exclues de cette architecture cible

Aucun SDK IA, appel payant, secret, compte, base distante, paiement, collaboration multi-utilisateur ou automatisation de production n’est ajouté. Work reste une référence optionnelle et ne structure pas le moteur.
