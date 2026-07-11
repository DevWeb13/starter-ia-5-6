# État du projet

**Dernière mise à jour :** 11 juillet 2026  
**Phase :** 1 — Fondation publiable  
**Branche :** `work/01-foundation`  
**Statut réel :** fondation validée localement, CI GitHub configurée et déploiement Vercel de production créé avant fusion, vérifié et prêt pour revue

## Résultat implémenté

- Next.js 16 avec App Router, React 19, TypeScript strict et Tailwind CSS.
- Composants shadcn/ui possédés par le dépôt.
- Landing, `/fonctionnalites`, `/tarifs`, `/demo`, `/dashboard`, `/docs` et 404.
- Navigation mobile, thèmes système/clair/sombre et réduction des animations.
- Démonstration locale déterministe avec les six sections demandées.
- Dashboard et offres explicitement marqués comme fictifs ou prévus.
- États vide, validation-erreur, chargement, succès et erreur de route.
- Vitest, Playwright et GitHub Actions, y compris Chromium dans la CI.
- Métadonnées, sitemap et robots pour le domaine public ; la 404 générée par Next.js est `noindex`.
- Mémoire officielle et dossier `marketing/`.

## Contrôles

| Contrôle | État | Preuve |
|---|---|---|
| Installation reproductible | réussi | `npm ci` — sortie 0 |
| Lint | réussi | `npm run lint` — sortie 0 |
| TypeScript | réussi | `npm run typecheck` — sortie 0 |
| Tests unitaires | réussi | 4 tests Vitest — sortie 0 |
| Build local | réussi | Next.js génère les routes statiques, le sitemap, `robots.txt` et la 404 |
| Playwright | réussi | 6 scénarios Chromium, dont la 404 `noindex` — sortie 0 |
| Responsive 320 px | réussi | menu, CTA, cibles 44 px, course de démo et saisie continue de 500 caractères sans débordement |
| Thème et erreurs navigateur | réussi | persistance sombre après rechargement, aucune erreur console ni hydratation |
| Inspection visuelle | réussi | landing mobile 320 px et desktop sombre contrôlés avec le vrai sélecteur de thème |
| Déploiement Vercel de production | réussi | `dpl_51FWd5SVYVLUjeszzcUqfkEso9G7` est `READY`, cible `production`, créé avant fusion |
| Build et accès Vercel | réussi | build distant réussi ; <https://starter-ia-5-6.vercel.app> accessible |
| Routes et runtime Vercel | réussi | `/`, `/demo` et `/fonctionnalites` répondent HTTP 200 ; une route inconnue répond HTTP 404 ; aucune erreur d’exécution critique détectée dans les données accessibles |

## Revue et corrections

- Sous-agents utilisés en lecture seule : architecte technique, UX/UI mobile et accessibilité, QA/tests/risques.
- Cycle 1 utilisé : incompatibilités TypeScript 7 / ESLint 10 corrigées vers TypeScript 5.9.3 / ESLint 9.39.5 ; transmission de ref du bouton et sélecteurs E2E corrigés.
- Cycle 2 utilisé : course de démonstration, débordement d’une chaîne longue, hiérarchie de titres, région accessible, page courante, tailles essentielles, contrastes, contrat Node 24, documentation Playwright et hydratation du thème corrigés puis vérifiés.
- Correction finale : Chromium et les tests E2E sont exécutés par GitHub Actions ; la cible Vercel, les documents et le SEO correspondent au domaine public de production.
- Aucun bloquant ou important connu ne reste pour la revue de cette PR.

## Production Vercel et GitHub

- Branche distante : `work/01-foundation`, pour la PR GitHub nº 2 vers `main`, titre `feat: build the publishable SaaS foundation`.
- Déploiement public de production créé avant fusion : <https://starter-ia-5-6.vercel.app>.
- Déploiement : `dpl_51FWd5SVYVLUjeszzcUqfkEso9G7` ; état `READY` ; cible `production` ; framework Next.js.
- Inspector : <https://vercel.com/devweb13s-projects/starter-ia-5-6/51FWd5SVYVLUjeszzcUqfkEso9G7>.
- Ce déploiement n’est pas une preview et ne doit pas être redéployé depuis cette correction.
- La CI distante exécute désormais installation reproductible, lint, TypeScript, Vitest, build et Playwright Chromium à chaque mise à jour de la PR.

## Blocages connus

Aucun blocage de la PR actuelle n’est connu. Avant d’ouvrir la prochaine PR, relier le projet Vercel à GitHub et activer son intégration afin qu’une vraie preview soit créée automatiquement pour chaque pull request. Le déploiement actuel reste une production créée avant fusion ; il ne remplace pas ce flux de preview.

## Prochaine mission prévue

**Branche :** `work/02-product-core`

**Objectif :** transformer la démonstration déterministe en cœur produit éditable et persistant localement, avant toute intégration IA réelle.

**Prérequis :** PR de fondation revue ; CI verte ; projet Vercel relié à GitHub pour les previews automatiques de pull request ; décisions de structure et de données validées ; aucun bloquant ou important ouvert.

**Livrables :** modèle de projet TypeScript versionné ; création et édition des six sections ; sauvegarde locale provisoire avec effacement explicite ; reprise d’un projet ; export Markdown/JSON ; états de conflit, perte et récupération ; tests unitaires et E2E associés ; mémoire officielle mise à jour.

**Critères de réussite :** un utilisateur crée, ferme, reprend, modifie, exporte et supprime un projet local sans perte silencieuse ; le parcours fonctionne à 320 px, au clavier et dans les deux thèmes ; tous les scripts et la vraie preview de pull request réussissent.

**Risques connus :** faire passer le stockage local pour une base sécurisée ; figer trop tôt le schéma avant l’IA ; migrations de données locales ; perte ou duplication lors des reprises ; export de contenu non échappé ; élargissement prématuré vers authentification ou paiement.
