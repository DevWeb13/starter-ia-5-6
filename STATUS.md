# État du projet

**Dernière mise à jour :** 12 juillet 2026
**Étape :** 3 — Réalignement du starter
**Branche :** `work/03-product-realignment`
**Statut réel :** branche créée depuis `main` au commit `1026f756155a08958ce9ef7322d467b31c30612b` ; réalignement documentaire et récupération ciblée des correctifs locaux en cours

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

Les résultats de lint, TypeScript, Vitest, build, Playwright et `git diff --check` seront consignés ici après leur exécution. Aucun push, déploiement ou contrôle externe n’est prévu dans cette mission.

## Blocages connus

Aucun blocage documentaire connu avant vérification. Les contrôles applicatifs et la revue finale restent à effectuer.

## Prochaine mission proposée

Après validation locale, relier les guides aux prompts et templates existants, puis cadrer séparément l’alignement de l’interface. Ne pas ajouter de fonctionnalité distante sans nouvelle décision explicite.
