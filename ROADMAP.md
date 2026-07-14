# Feuille de route

La feuille de route conserve l’historique livré et distingue les réalisations, la mission active et les étapes futures non spécifiées. Les résultats vérifiés sont consignés dans [`STATUS.md`](STATUS.md).

## Historique livré

### Version 0.1 — Méthode documentaire

**Statut :** terminée le 11 juillet 2026.

Méthode iPhone-first, workflow, prompts, brief, formation, identité visuelle et première configuration Codex.

### Phase 1 — Fondation publiable

**Branche :** `work/01-foundation`

**Statut :** terminée, fusionnée dans `main` au commit `6819f79`.

Application Next.js accessible, démonstration locale déterministe, design system, tests, CI et déploiement historique.

### Phase 2 — Cœur produit local

**Branche :** `work/02-product-core`

**Statut :** terminée, fusionnée dans `main` au commit `1026f75`.

Modèle de projet versionné, Dashboard et éditeur locaux, exports et persistance navigateur sans compte ni service distant.

### Étapes 3 à 6 — Ressources et consolidation

- étape 3, PR nº 4 au commit `8ab9507` : réalignement du starter ;
- configuration Codex, PR nº 5 au commit `5f8149d` ;
- étape 4, PR nº 6 au commit `32e917f` : catalogue et templates ;
- étape 5, PR nº 7 au commit `54c7b44` : interface alignée sur les ressources ;
- étape 6, PR nº 8 au commit `06718299fa2cea6a8341d9e2d799305ca897739d` : clôture post-fusion.

Ces orientations historiques sont conservées dans le journal des décisions.

### Étape 7 — Orchestrateur de projet complet

**Branche :** `work/07-definitive-product-realignment`

**Statut :** terminée, fusionnée par squash via la PR nº 9 au commit `aeb1e9bfaf4f6b9da1d8daadf3726069a82296d3`.

Cette étape a défini le parcours complet en six phases ensuite implémenté à l’étape 8. La Mission A remplace cette direction comme priorité future sans supprimer sa réalisation.

### Étape 8 — MVP local du projet complet

**Branches :** `work/08-complete-project-mvp`, puis `work/08-human-first-ux`

**Statut :** terminée. PR nº 10 fusionnée au commit `5ca3a6fdd510dc7d1a11382d086c0113c78975ee`, puis PR nº 11 fusionnée au commit `1615b8b95305b6b4b3242040d98e5d438c3802cf`.

Résultat vérifié : modèle local version 2, migration conservatrice, moteur déterministe de six phases et 16 étapes, recommandations d’environnement, espace guidé, Dashboard, exports Markdown/JSON, rapport, textes simplifiés et contrôles applicatifs. Aucun appel ChatGPT, Codex ou fournisseur IA n’est exécuté automatiquement.

### Anciennes étapes 9 et 10

Les anciennes étapes **9 — Exécution guidée** et **10 — Lancement démontré** ont été remplacées avant implémentation. Elles ne constituent plus la suite active. Les idées encore utiles devront être réévaluées dans la nouvelle direction, sans automatisme.

## Progression active

### Mission A — Recentrage documentaire

**Branche :** `work/09-codex-starter-realignment`

**Statut :** en cours.

Aligner direction, contrat du starter, sources de vérité et feuille de route. Aucune modification fonctionnelle.

### Mission B — Starter manuel de référence

**Statut :** prochaine mission après fusion de la Mission A.

Créer manuellement un starter complet pour un vrai projet et l’utiliser avec Codex afin d’identifier les fichiers utiles, inutiles ou manquants.

### Mission C — Spécification du générateur

**Statut :** future, dépend de la Mission B.

Définir les champs d’entrée, les règles de sélection, le schéma, le manifeste, les contenus, les erreurs, le format ZIP et les tests. Aucun choix technique détaillé n’est arrêté avant le retour d’usage de la Mission B.

### Mission D — Générateur local minimal

**Statut :** future, dépend des Missions B et C.

Transformer le parcours principal pour générer, prévisualiser et télécharger un starter. Le périmètre d’implémentation sera fixé par la spécification validée.

### Mission E — Validation réelle et commerciale

**Statut :** future.

Utiliser le générateur sur un projet réel, mesurer sa valeur et tester un service d’installation personnalisé, sans inventer de résultat commercial.

## Veille future

Une veille OpenAI pourra être préparée dans une mission distincte à partir de sources officielles. Elle ne modifiera jamais automatiquement le produit et exigera une validation humaine avant toute adaptation. Elle n’existe pas encore.
