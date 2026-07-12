# État du projet

**Dernière mise à jour :** 12 juillet 2026
**Étape :** 4 — Catalogue et templates
**Branche :** `work/04-catalog-templates`
**Statut réel :** étape 4 terminée et vérifiée

## Direction active

Starter IA est un starter open source pour cinq configurations : Chat, Work, Codex local avec VS Code, Codex Remote depuis iPhone et Work + Codex. Le [catalogue des configurations](guides/configurations/README.md) relie chaque usage aux ressources réellement présentes dans le dépôt.

Le projet n’intègre aucun fournisseur IA, appel payant, secret, authentification, paiement ou architecture de SaaS de génération IA. L’application Next.js des phases 1 et 2 reste un support démonstratif historique local.

## Historique livré

- Version 0.1 : méthode, prompts, brief, formation et première configuration Codex.
- Phase 1, commit `6819f79` : application Next.js, design system, tests, CI et déploiement historique.
- Phase 2, commit `1026f75` : modèle de projet, démonstration déterministe, dashboard, éditeur, exports et stockage local.
- Étape 3 terminée et fusionnée via la PR GitHub nº 4 ; commit de réalignement `8ab9507da76d1fae9994371a1dbe197746322ad6`.
- Configuration Codex sécurisée terminée et fusionnée via la PR GitHub nº 5.

Le commit de `main` au début de l’étape 4 est `5f8149da0116b96444efdc2a1428be0bcc8fa531`.

## Configuration Codex active

- sandbox limité au dépôt en mode `workspace-write` ;
- demandes d’autorisation soumises à `auto_review` ;
- accès réseau désactivé dans le sandbox.

La configuration enregistrée reste dans [`.codex/config.toml`](.codex/config.toml). Work ne charge pas automatiquement ce fichier ni `AGENTS.md`.

## Résultat de l’étape 4

- le sélecteur des cinq configurations a été transformé en catalogue de ressources ;
- chaque guide a reçu un démarrage en trois étapes maximum, des ressources, des limites et un passage de relais ;
- l’absence de restes commités issus des essais de permissions a été vérifiée ;
- `WORKFLOW.md` a été préservé comme source unique du processus.

## Blocages connus

Aucun blocage applicatif connu. Aucune ancienne pull request n’est en attente.

## Prochaine étape

Cadrer l’étape 5 avant toute modification de l’interface historique.
