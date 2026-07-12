# Feuille de route

La feuille de route distingue l’historique livré de la direction active. Les résultats vérifiés sont consignés dans [`STATUS.md`](STATUS.md).

## Historique livré

### Version 0.1 — Méthode documentaire

**Statut :** terminée le 11 juillet 2026.

Méthode iPhone-first, workflow, prompts, brief, formation, identité visuelle et configuration Codex prudente.

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
**Statut :** en cours.

Objectif : faire de Starter IA le point d’entrée cohérent pour cinq configurations complémentaires, sans récupérer la fondation fournisseur abandonnée.

Livrables : mémoire réalignée, règles Codex permanentes, guides minimaux des cinq configurations et corrections de robustesse du cœur local.

Critère de sortie : documentation cohérente, absence de `src/server/ai`, contrôles locaux réussis et aucun bloquant ou important après revue.

### Étape 4 — Catalogue et templates

**Statut :** planifiée.

Objectif : relier les guides aux prompts, briefs, checklists et templates réellement disponibles, sans inventer de fonction applicative.

Critère de sortie : chaque configuration possède un chemin de démarrage court, des ressources réutilisables et des limites vérifiables.

### Étape 5 — Interface alignée sur les ressources

**Statut :** à cadrer.

Objectif : décider quelles pages existantes doivent présenter le catalogue documentaire et lesquelles restent des démonstrations historiques locales.

Critère de sortie : le brief d’interface est validé avant modification, respecte [`DESIGN.md`](DESIGN.md) et n’introduit ni fournisseur, authentification ni paiement.
