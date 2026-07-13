# Architecture

## Vue d’ensemble

Starter IA combine deux couches sans service distant métier :

```text
Starter IA
├── Ressources open source
│   ├── guides/configurations/   # choix et procédures des cinq configurations
│   ├── prompts/                 # instructions réutilisables
│   ├── templates/               # briefs et livrables de départ
│   ├── course/                  # formation existante
│   └── .codex/ + AGENTS.md      # configuration et règles du dépôt
└── Application Next.js existante
    ├── accueil, configurations, ressources et méthode rendus côté serveur
    ├── thème et navigation côté client
    └── démonstration, dashboard et éditeur locaux
        └── localStorage versionné
```

La documentation est le cœur produit actif. L’application héritée reste une démonstration locale testée ; elle n’est ni un SaaS de génération IA ni la preuve d’une fonction distante.

## Stack applicative conservée

- Next.js `16.2.10`, App Router ;
- React / React DOM `19.2.7` ;
- TypeScript `5.9.3` strict ;
- Tailwind CSS `4.3.2`, shadcn/ui local et next-themes ;
- Vitest `4.1.10` et Playwright `1.61.1` ;
- npm avec `package-lock.json`.

## Frontières

- Les pages et contenus restent des Server Components par défaut.
- Les composants client se limitent aux interactions navigateur : navigation, thème, démonstration et stockage local.
- Le modèle `Project` utilise un schéma versionné. `local-project-store.ts` centralise lecture, validation, écriture, sauvegarde avant réinitialisation et erreurs de stockage.
- Le dashboard charge les projets après hydratation. L’éditeur détecte les événements `storage` et suspend l’édition jusqu’au choix explicite de la version à conserver.

## Données et réseau

Les projets restent dans `localStorage` sur l’appareil courant. Il n’existe aucun compte, synchronisation, base distante, route de génération, SDK fournisseur ou secret serveur. La démonstration déterministe est du code local et ne doit jamais être présentée comme une IA véritable.

## Structure documentaire

`guides/configurations/README.md` compare les cinq configurations et renvoie vers un guide par configuration. Chaque guide contient uniquement rôle, cas d’usage, démarrage, limites et passage de relais. `WORKFLOW.md` reste la source unique du processus ; les guides y renvoient au lieu de le recopier.

L’interface expose ce contenu sans moteur Markdown dynamique : `/docs` résume les cinq guides, `/tarifs` indexe les ressources et `/fonctionnalites` résume la méthode. Les liens GitHub ouvrent les fichiers sources. `/demo`, `/dashboard` et `/dashboard/[id]` restent le parcours local historique, avec une priorité de navigation et de sitemap inférieure.

## Tests et livraison

- Vitest couvre la génération déterministe et le stockage local.
- Playwright couvre les parcours essentiels, le responsive, le thème, la corruption locale et les conflits inter-onglets.
- GitHub Actions et Vercel font partie de l’historique livré, mais aucune publication externe n’est implicite dans une mission locale.

## Évolutions autorisées

Les prochaines évolutions portent sur la qualité des guides, templates et passages de relais, puis sur l’alignement éventuel de l’interface avec ces ressources. Toute intégration de fournisseur IA, authentification, paiement ou stockage distant est hors périmètre tant qu’une nouvelle décision explicite ne remplace pas cette architecture.
