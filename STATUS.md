# État du projet

**Dernière mise à jour :** 12 juillet 2026
**Étape :** 3 — Réalignement du starter
**Branche :** `work/03-product-realignment`
**Statut réel :** PR brouillon nº 4 ouverte ; les contradictions textuelles importantes trouvées par la revue indépendante GitHub sont corrigées localement et les contrôles réussissent

## Direction active

Starter IA est un starter open source pour cinq configurations : Chat, Work, Codex local avec VS Code, Codex Remote depuis iPhone et Work + Codex. Remote Control est une configuration documentée parmi les autres.

Le projet n’intègre aucun fournisseur IA, appel payant, secret, authentification, paiement ou architecture de SaaS de génération IA.

## Historique livré

- Version 0.1 : méthode, prompts, brief, formation et configuration Codex.
- Phase 1, commit `6819f79` : application Next.js, design system, tests, CI et déploiement historique.
- Phase 2, commit `1026f75` : modèle de projet, démonstration déterministe, dashboard, éditeur, exports et stockage local.
- La PR GitHub nº 3 a fusionné la phase 2 dans `main` au commit `1026f756155a08958ce9ef7322d467b31c30612b`.

## Travail de la branche

- mémoire officielle réalignée autour des cinq configurations ;
- `AGENTS.md` recentré sur les règles permanentes et l’application de `WORKFLOW.md` ;
- détails Remote Control déplacés dans un guide dédié ;
- corrections locales ciblées de `4885bbf` récupérées manuellement, sans cherry-pick ;
- aucun fichier de la fondation abandonnée `src/server/ai` récupéré.
- branche poussée sur `origin/work/03-product-realignment` ; SHA avant la présente correction : `2c71cafb6cceab738c884a3a39eae59208796777` ;
- PR brouillon nº 4 vers `main` : <https://github.com/DevWeb13/starter-ia-5-6/pull/4> ;
- correction en cours de `README.md`, `START-HERE.md` et des copies actives du site, sans modification fonctionnelle du cœur local.

## Contrôles de cette branche

| Contrôle | Résultat |
|---|---|
| `npm run lint` | réussi |
| `npm run typecheck` | réussi |
| `npm test` | réussi — 2 fichiers, 8 tests |
| `npm run build` | réussi — 10 routes ; relancé hors sandbox après une interdiction locale de liaison de port par Turbopack |
| `npm run test:e2e` | réussi — 8 scénarios Chromium |
| `git diff --check` | réussi après correction de revue |

La branche et la PR existent sur GitHub. Aucun déploiement de production manuel n’a été effectué.

## Vérifications distantes avant correction

- CI GitHub Actions, run `29183674019` : réussie sur `2c71cafb6cceab738c884a3a39eae59208796777`.
- Preview Vercel automatique `dpl_HARJRedjerefc4Vtf7qvbLRKYA2W` : état `READY`, statut GitHub Vercel `SUCCESS`.
- Aucun déploiement de production manuel effectué.

## Blocages connus

Aucun blocage applicatif connu. La revue indépendante GitHub de la PR nº 4 a signalé des contradictions importantes entre la direction officielle, les portes d’entrée publiques et certaines copies du site ; cette correction ciblée les réaligne sans modifier les parcours techniques.

Problème connu hors périmètre : le profil actuel `.codex/config.toml` utilise `approval_policy = "on-request"`, ce qui provoque des demandes répétitives en Remote Control. Un profil autonome sécurisé doit être conçu et testé séparément avant toute adoption ; `.codex/config.toml` n’est pas modifié dans cette mission.

## Prochaine mission proposée

Après validation humaine de la PR nº 4, concevoir et tester séparément un profil Remote Control autonome et sécurisé avant toute adoption. Ne pas modifier `.codex/config.toml` ni ajouter de fonctionnalité distante sans brief et décision explicites.
