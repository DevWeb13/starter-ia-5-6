# Starter IA 5.6 — AI Project Launcher

Starter IA 5.6 est une méthode open source, iPhone-first, pour piloter ChatGPT Work, Codex et des agents avec un brief clair, un seul écrivain et des résultats vérifiés.

**AI Project Launcher** est son produit exemple : une application web qui transforme une idée de produit en plan technique et commercial prêt à challenger puis à exécuter avec une équipe IA.

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

## Aperçu du produit

La première fondation publiable contient :

- une landing premium et mobile-first ;
- les pages fonctionnalités, tarifs envisagés, démonstration, dashboard et documentation ;
- une navigation accessible, un thème clair/sombre et une page 404 ;
- une création locale puis un éditeur de projet avec sauvegarde automatique ;
- un dashboard local pour reprendre, exporter et supprimer des projets ;
- un résultat structuré en proposition de valeur, cible, MVP, plan technique, plan marketing et prochaines actions.

L’interface utilise une palette sobre bleu ardoise, une typographie système et des cartes à forte hiérarchie. Aucun visuel, client, témoignage, résultat ou chiffre commercial n’est inventé.

La création n’appelle pas de véritable IA : elle produit un scénario déterministe dans le navigateur. Les projets sont stockés uniquement dans le `localStorage` de l’appareil courant — sans compte, synchronisation, base de données ni paiement. Le navigateur peut vider ou bloquer ce stockage : exportez vos projets importants.

## Démarrage local

Prérequis : Node.js 24 et npm.

```sh
npm ci
npm run dev
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000).

Aucune variable d’environnement n’est nécessaire pour cette version.

## Scripts

```sh
npm run lint       # ESLint
npm run typecheck  # TypeScript strict
npm test           # Vitest
npm run test:e2e   # Playwright Chromium
npm run build      # Build Next.js de production
```

Avant le premier lancement des tests E2E, installer le navigateur correspondant :

```sh
npx playwright install chromium
# Sur une image Linux minimale ou en CI : npx playwright install --with-deps chromium
```

Dans un environnement disposant déjà d’un Chromium compatible, son chemin peut être fourni avec `PLAYWRIGHT_EXECUTABLE_PATH=/chemin/vers/chromium`.

## Déploiement Vercel

Le dépôt suit les conventions Next.js détectées automatiquement par Vercel : application à la racine, commande `npm run build`, aucun `vercel.json` et aucune variable secrète.

Le déploiement public actuel est une **production créée avant fusion**, et non une preview : <https://starter-ia-5-6.vercel.app>. Son build distant, son accès, `/`, `/demo`, `/fonctionnalites`, la 404 et l’absence d’erreur d’exécution critique ont été vérifiés.

Le projet est relié à `DevWeb13/starter-ia-5-6` dans Vercel : chaque pull request doit produire une vraie preview automatique. Ne pas redéployer la production actuelle depuis une branche de travail.

L’état réel du dernier déploiement et ses éventuels blocages sont consignés dans [`STATUS.md`](STATUS.md).

## Architecture

- Next.js App Router et React Server Components par défaut ;
- TypeScript strict et Tailwind CSS ;
- composants shadcn/ui possédés par le dépôt ;
- composants client limités au thème, à la navigation mobile et au parcours produit local ;
- modèle versionné, générateur déterministe et stockage navigateur isolé ;
- Vitest, Playwright et GitHub Actions.

Voir [`ARCHITECTURE.md`](ARCHITECTURE.md) pour la structure réelle et [`DECISIONS.md`](DECISIONS.md) pour les choix durables.

## Feuille de route

Le projet suit cinq phases : fondation publiable, cœur produit, intégration IA, comptes et données, puis monétisation et maturité. La séquence, les critères et le statut sont dans [`ROADMAP.md`](ROADMAP.md).

## Utiliser ce dépôt avec Work

Le workflow de référence reste :

**Brief → sous-agents en lecture seule → plan → agent écrivain → vérification → revue indépendante → correction → livraison**

- Chat sert aux questions, décisions rapides et brouillons courts.
- Work exécute les missions complètes avec plusieurs étapes, fichiers et outils.
- Codex est spécialisé dans le développement et les dépôts.
- Un seul agent modifie les fichiers ou GitHub.
- Trois sous-agents maximum analysent en lecture seule.
- Deux cycles de correction maximum sont autorisés.

Commencer par [`START-HERE.md`](START-HERE.md), puis lire [`WORKFLOW.md`](WORKFLOW.md), [`QUALITY.md`](QUALITY.md) et [`AGENTS.md`](AGENTS.md).

## Mémoire officielle

- État réel : [`STATUS.md`](STATUS.md)
- Cinq phases : [`ROADMAP.md`](ROADMAP.md)
- Décisions : [`DECISIONS.md`](DECISIONS.md)
- Architecture : [`ARCHITECTURE.md`](ARCHITECTURE.md)
- Identité visuelle : [`DESIGN.md`](DESIGN.md)
- Historique : [`CHANGELOG.md`](CHANGELOG.md)
- Positionnement : [`marketing/`](marketing/)

## Limites actuelles

- pas de véritable appel IA ;
- pas d’authentification ;
- pas de base de données, de persistance distante ni de synchronisation ;
- pas de paiement ;
- pas de collaboration réelle ;
- les offres Free et Pro sont une direction envisagée, sans prix ni disponibilité annoncés ;
- Work, GPT-5.6, Sol, Terra, Luna, les plugins et les automatisations dépendent du compte et du déploiement en cours ;
- Work ne charge pas automatiquement `AGENTS.md` ni `.codex/config.toml`.

## Licence

Distribué sous licence MIT. Voir [`LICENSE`](LICENSE).
