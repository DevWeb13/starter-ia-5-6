# État du projet

**Dernière mise à jour :** 12 juillet 2026
**Étape :** 3 — Réalignement du starter
**Branche :** `work/03-product-realignment`
**Statut réel :** réalignement documentaire, corrections locales et cycle 1 de revue terminés et vérifiés sans bloquant ni important restant

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

## Contrôles de cette branche

| Contrôle | Résultat |
|---|---|
| `npm run lint` | réussi |
| `npm run typecheck` | réussi |
| `npm test` | réussi — 2 fichiers, 8 tests |
| `npm run build` | réussi — 10 routes ; relancé hors sandbox après une interdiction locale de liaison de port par Turbopack |
| `npm run test:e2e` | réussi — 8 scénarios Chromium |
| `git diff --check` | réussi après correction de revue |

Aucun push, déploiement ou contrôle externe n’a été effectué.

## Blocages connus

Aucun blocage connu. La revue indépendante a signalé deux importants : copies actives encore orientées SaaS/IA et mémoire indiquant une revue en attente. Le cycle 1 les a corrigés ; l’amélioration de copie dans la démonstration est reportée.

## Prochaine mission proposée

Après validation locale, relier les guides aux prompts et templates existants, puis cadrer séparément l’alignement de l’interface. Ne pas ajouter de fonctionnalité distante sans nouvelle décision explicite.
