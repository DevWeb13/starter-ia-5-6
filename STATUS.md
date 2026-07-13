# État du projet

**Dernière mise à jour :** 12 juillet 2026
**Étape :** 5 — Interface alignée sur les ressources
**Branche :** `work/05-interface-resources`
**Statut réel :** étape 5 terminée et vérifiée localement

## Direction active

Starter IA est un starter open source pour cinq configurations : Chat, Work, Codex local avec VS Code, Codex Remote depuis iPhone et Work + Codex. L’interface publique donne désormais la priorité au catalogue, aux ressources réellement présentes et à la méthode commune.

L’application Next.js des phases 1 et 2 reste une démonstration locale historique secondaire. Elle n’intègre aucun fournisseur IA, appel payant, secret, authentification, paiement ou stockage distant.

## Historique livré

- Version 0.1 : méthode, prompts, brief, formation et première configuration Codex.
- Phase 1, commit `6819f79` : application Next.js, design system, tests, CI et déploiement historique.
- Phase 2, commit `1026f75` : modèle de projet, démonstration déterministe, dashboard, éditeur, exports et stockage local.
- Étape 3 fusionnée via la PR GitHub nº 4 au commit `8ab9507da76d1fae9994371a1dbe197746322ad6`.
- Configuration Codex sécurisée fusionnée via la PR GitHub nº 5.
- Étape 4 fusionnée via la PR GitHub nº 6 au commit `32e917fbe789bd52821be694b0d62b0025541051`.

## Résultat de l’étape 5

- l’accueil présente les cinq configurations, le workflow, les ressources, les limites et la démo historique secondaire ;
- `/docs` est le catalogue détaillé des cinq configurations et renvoie vers leurs guides GitHub ;
- `/tarifs` conserve son URL mais porte uniquement l’identité visible « Ressources » ;
- `/fonctionnalites` conserve son URL mais explique désormais la « Méthode » commune ;
- la navigation et le pied de page privilégient Configurations, Ressources et Méthode ;
- le Dashboard reste accessible depuis la démonstration et les projets locaux, pas depuis la navigation globale ;
- la démo, le dashboard, l’éditeur, le stockage local et leurs tests fonctionnels sont préservés.

## Contrôles locaux

- `git diff --check` ;
- `npm run lint` ;
- `npm run typecheck` ;
- `npm test` : 8 tests réussis ;
- `npm run build` : 10 routes générées ;
- `npm run test:e2e` : 10 scénarios Playwright réussis ;
- inspection Chromium de l’accueil en 1440 px et 320 px.

## Blocages connus

Aucun blocage applicatif connu.

## Prochaine étape

Faire relire la pull request de l’étape 5 sans la fusionner automatiquement, puis décider séparément de toute évolution ultérieure.
