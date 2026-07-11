# État du projet

**Dernière mise à jour :** 11 juillet 2026  
**Phase :** 1 — Fondation publiable  
**Branche :** `work/01-foundation`  
**Statut réel :** fondation validée localement ; preview créée mais contrôle Vercel bloqué par l’autorisation du scope ; publication GitHub en cours

## Résultat implémenté

- Next.js 16 avec App Router, React 19, TypeScript strict et Tailwind CSS.
- Composants shadcn/ui possédés par le dépôt.
- Landing, `/fonctionnalites`, `/tarifs`, `/demo`, `/dashboard`, `/docs` et 404.
- Navigation mobile, thèmes système/clair/sombre et réduction des animations.
- Démonstration locale déterministe avec les six sections demandées.
- Dashboard et offres explicitement marqués comme fictifs ou prévus.
- États vide, validation-erreur, chargement, succès et erreur de route.
- Vitest, Playwright et GitHub Actions.
- Mémoire officielle et dossier `marketing/`.

## Contrôles

| Contrôle | État | Preuve |
|---|---|---|
| Installation reproductible | réussi | `npm ci` — 410 paquets installés, sortie 0 |
| Lint | réussi | `npm run lint` — sortie 0 |
| TypeScript | réussi | `npm run typecheck` — sortie 0 |
| Tests unitaires | réussi | 4 tests Vitest — sortie 0 |
| Build local | réussi | 7 routes statiques et 404 générées par Next.js 16.2.10 |
| Playwright | réussi | 6 scénarios Chromium — sortie 0 |
| Responsive 320 px | réussi | menu, CTA, cibles 44 px, course de démo et saisie continue de 500 caractères sans débordement |
| Thème et erreurs navigateur | réussi | persistance sombre après rechargement, aucune erreur console ni hydratation |
| Inspection visuelle | réussi | landing mobile 320 px et desktop sombre contrôlés avec le vrai sélecteur de thème |
| Preview Vercel | partiel | déploiement `dpl_51FWd5SVYVLUjeszzcUqfkEso9G7` créé ; état initial `INITIALIZING`, état final illisible en raison du HTTP 403 du scope |
| Landing/navigation/démo distantes | bloqué | l’URL redirige vers Vercel SSO ; le connecteur ne peut pas créer de lien partagé pour ce scope |
| Logs Vercel | bloqué | `get_deployment` et `get_deployment_build_logs` renvoient « Not authorized: Trying to access resource under scope devweb13s-projects » |

## Revue et corrections

- Sous-agents utilisés en lecture seule : architecte technique, UX/UI mobile et accessibilité, QA/tests/risques.
- Cycle 1 utilisé : incompatibilités TypeScript 7 / ESLint 10 corrigées vers TypeScript 5.9.3 / ESLint 9.39.5 ; transmission de ref du bouton et sélecteurs E2E corrigés.
- Cycle 2 utilisé : course de démonstration, débordement d’une chaîne longue, hiérarchie de titres, région accessible, page courante, tailles essentielles, contrastes, contrat Node 24, documentation Playwright et hydratation du thème corrigés puis vérifiés.
- Aucun bloquant ou important local connu ne reste après le deuxième cycle.

## Preview et GitHub

- PR : en attente d’ouverture.
- Preview créée, non vérifiable : <https://starter-ia-5-6-gd38cino2-devweb13s-projects.vercel.app>
- Inspector : <https://vercel.com/devweb13s-projects/starter-ia-5-6/51FWd5SVYVLUjeszzcUqfkEso9G7>
- Commit de référence : en attente.
- CI distante : en attente du push.

## Blocages connus

Aucun blocage produit local connu. Le seul blocage externe restant est Vercel : le connecteur a créé la preview sous le scope `devweb13s-projects`, puis les lectures du déploiement, des logs et la création d’un lien partagé ont renvoyé HTTP 403 « Not authorized ». L’URL répond par une redirection vers Vercel SSO. Le build distant, la landing, la navigation, la démo mobile et les logs ne sont donc pas déclarés vérifiés. Il faut réauthentifier le connecteur sur le scope `team_b8fqmcmQLC3WinuFgDLJVnY4` ou retirer la protection, puis rejouer ces contrôles.

## Prochaine mission prévue

**Branche :** `work/02-product-core`

**Objectif :** transformer la démonstration déterministe en cœur produit éditable et persistant localement, avant toute intégration IA réelle.

**Prérequis :** PR de fondation revue ; CI verte ; preview Vercel exploitable ; décisions de structure et de données validées ; aucun bloquant ou important ouvert.

**Livrables :** modèle de projet TypeScript versionné ; création et édition des six sections ; sauvegarde locale provisoire avec effacement explicite ; reprise d’un projet ; export Markdown/JSON ; états de conflit, perte et récupération ; tests unitaires et E2E associés ; mémoire officielle mise à jour.

**Critères de réussite :** un utilisateur crée, ferme, reprend, modifie, exporte et supprime un projet local sans perte silencieuse ; le parcours fonctionne à 320 px, au clavier et dans les deux thèmes ; tous les scripts et la preview réussissent.

**Risques connus :** faire passer le stockage local pour une base sécurisée ; figer trop tôt le schéma avant l’IA ; migrations de données locales ; perte ou duplication lors des reprises ; export de contenu non échappé ; élargissement prématuré vers authentification ou paiement.
