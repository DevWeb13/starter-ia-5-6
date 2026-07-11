# État du projet

**Dernière mise à jour :** 11 juillet 2026  
**Phase :** 2 — Cœur produit  
**Branche :** `work/02-product-core`  
**Statut réel :** phase 1 fusionnée dans `main` via la PR nº 2 (`6819f79bf4b52746c956426cabe625c706d53abc`) ; cœur produit local implémenté, CI verte et vraie Preview Vercel vérifiée ; PR nº 3 prête à fusionner

## Résultat implémenté

### Fondation fusionnée

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

### Cœur produit local

- Modèle TypeScript `Project` versionné (schéma 1), avec idée, titre, six sections et dates.
- Création depuis `/demo`, génération déterministe conservée, puis ouverture de l’éditeur dédié.
- Dashboard local : liste, reprise, exports Markdown/JSON, suppression confirmée, état vide et réinitialisation confirmée.
- Sauvegarde navigateur isolée derrière `local-project-store`, avec gestion d’indisponibilité, corruption, quota et conflit entre onglets.
- Les données sont explicitement limitées à cet appareil : sans compte, synchronisation ni IA réelle.

## Contrôles de la fondation

| Contrôle | État | Preuve |
|---|---|---|
| Installation reproductible | réussi | `npm ci` — sortie 0 |
| Lint | réussi | `npm run lint` — sortie 0 |
| TypeScript | réussi | `npm run typecheck` — sortie 0 |
| Tests unitaires | réussi | Vitest — sortie 0 |
| Build local | réussi | Next.js génère les routes statiques, le sitemap, `robots.txt` et la 404 |
| Playwright | réussi | 6 scénarios Chromium, dont la 404 `noindex` — sortie 0 |
| Responsive 320 px | réussi | menu, CTA, cibles 44 px, course de démo et saisie continue de 500 caractères sans débordement |
| Thème et erreurs navigateur | réussi | persistance sombre après rechargement, aucune erreur console ni hydratation |
| Inspection visuelle | réussi | landing mobile 320 px et desktop sombre contrôlés avec le vrai sélecteur de thème |
| Déploiement Vercel de production | réussi | `dpl_51FWd5SVYVLUjeszzcUqfkEso9G7` est `READY`, cible `production`, créé avant fusion |
| Build et accès Vercel | réussi | build distant réussi ; <https://starter-ia-5-6.vercel.app> accessible |
| Routes et runtime Vercel | réussi | `/`, `/demo` et `/fonctionnalites` répondent HTTP 200 ; une route inconnue répond HTTP 404 ; aucune erreur d’exécution critique détectée dans les données accessibles |

## Revue et corrections de la fondation

- Sous-agents utilisés en lecture seule : architecte technique, UX/UI mobile et accessibilité, QA/tests/risques.
- Cycle 1 utilisé : incompatibilités TypeScript 7 / ESLint 10 corrigées vers TypeScript 5.9.3 / ESLint 9.39.5 ; transmission de ref du bouton et sélecteurs E2E corrigés.
- Cycle 2 utilisé : course de démonstration, débordement d’une chaîne longue, hiérarchie de titres, région accessible, page courante, tailles essentielles, contrastes, contrat Node 24, documentation Playwright et hydratation du thème corrigés puis vérifiés.
- Correction finale : Chromium et les tests E2E sont exécutés par GitHub Actions ; `allowedDevOrigins` autorise `127.0.0.1` pour l’hydratation Playwright avec Next.js 16 ; la cible Vercel, les documents et le SEO correspondent au domaine public de production.

## Production Vercel et GitHub

- La PR nº 2 a été fusionnée en squash dans `main`.
- Déploiement public de production : <https://starter-ia-5-6.vercel.app>.
- Déploiement historique : `dpl_51FWd5SVYVLUjeszzcUqfkEso9G7` ; état `READY` ; cible `production` ; framework Next.js.
- Le projet Vercel est désormais relié à `DevWeb13/starter-ia-5-6`.
- Les branches de travail produisent automatiquement des previews ; les fusions dans `main` produisent les déploiements de production.

## Contrôles phase 2

| Contrôle | État | Preuve |
|---|---|---|
| Lint | réussi | GitHub Actions, run `29154848755` |
| TypeScript | réussi | GitHub Actions, run `29154848755` |
| Tests unitaires | réussi | GitHub Actions, run `29154848755` |
| Build | réussi | GitHub Actions et build Vercel |
| Playwright Chromium | réussi | 7 scénarios E2E, GitHub Actions, run `29154848755` |
| Preview Vercel | réussi | `dpl_9mg9H15ao6gF3nRTUFodqWV6fn8D`, état `READY`, branche `work/02-product-core`, commit `b9f2034`, cible preview |
| Intégration GitHub → Vercel | réussi | chaque push de la PR nº 3 a créé automatiquement une nouvelle preview |

## Blocages connus

Aucun blocage connu pour la PR nº 3. Le contrôle local de Work était limité par les permissions de son cache npm, mais la CI GitHub complète et la Preview Vercel fournissent les preuves distantes attendues.

## Prochaine mission prévue

**Branche :** `work/03-ai-integration`

**Objectif :** intégrer une génération IA véritable, structurée et traçable au-dessus du modèle local stabilisé.

**Prérequis :** PR nº 3 fusionnée ; CI verte ; preview et production automatiques via l’intégration GitHub/Vercel ; décisions de structure et de données validées ; aucun bloquant ou important ouvert.

**Livrables :** abstraction fournisseur, contrats de sortie, génération explicite et annulable, erreurs transparentes, limites de coût et évaluations.

**Critères de réussite :** une génération IA réelle produit une sortie structurée compatible avec le modèle de projet, sans exposer de secret ni masquer les erreurs ; les coûts et limites sont contrôlés ; les tests, la CI et la preview réussissent.

**Risques connus :** coût API, sorties invalides, délais et annulation, exposition de secrets, dépendance fournisseur, injection de prompt, confusion entre génération et validation de marché, élargissement prématuré vers authentification ou paiement.
