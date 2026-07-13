# Feuille de route

La feuille de route distingue l’historique livré de la direction active. Les résultats vérifiés sont consignés dans [`STATUS.md`](STATUS.md).

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

Modèle de projet versionné, dashboard et éditeur locaux, exports et persistance navigateur sans compte ni service distant.

## Direction active

### Étape 3 — Réalignement du starter

**Branche :** `work/03-product-realignment`
**Statut :** terminée, fusionnée via la PR GitHub nº 4 au commit `8ab9507`.

Résultat : mémoire réalignée autour de cinq configurations complémentaires, règles Codex permanentes, guides initiaux et corrections ciblées du cœur local, sans fondation fournisseur.

La configuration Codex sécurisée a ensuite été livrée via la PR GitHub nº 5 au commit `5f8149d`. Cette correction de workflow est terminée ; elle ne constitue pas une nouvelle phase produit.

### Étape 4 — Catalogue et templates

**Branche :** `work/04-catalog-templates`
**Statut :** terminée, fusionnée via la PR GitHub nº 6 au commit `32e917f`.

Résultat : les cinq guides sont reliés aux prompts, briefs, checklists, formation et configuration réellement disponibles, sans fonction applicative inventée.

Critère de sortie atteint : chaque configuration possède un chemin de démarrage court, des ressources réutilisables, des limites vérifiables et un passage de relais clair.

### Étape 5 — Interface alignée sur les ressources

**Branche :** `work/05-interface-resources`
**Statut :** terminée, fusionnée via la PR GitHub nº 7 au commit `54c7b44` et déployée en production le 13 juillet 2026.

Résultat : l’accueil, `/docs`, `/tarifs` et `/fonctionnalites` présentent respectivement la porte d’entrée, les configurations, les ressources et la méthode. La navigation privilégie ces ressources ; la démonstration, le dashboard et l’éditeur locaux restent accessibles comme support historique secondaire.

Critère de sortie atteint : l’interface respecte [`DESIGN.md`](DESIGN.md), les contrôles applicatifs et Playwright réussissent, la production répond, et aucun fournisseur, authentification, paiement ou stockage distant n’a été introduit.

## Après l’étape 5 — Stabilisation

Aucune nouvelle phase produit n’est engagée. La priorité est de maintenir la qualité, recueillir des retours d’usage et n’ajouter une évolution que lorsqu’un besoin concret et vérifiable le justifie.
