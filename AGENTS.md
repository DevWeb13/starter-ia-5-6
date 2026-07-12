# Consignes permanentes pour les agents Codex

> Codex charge ce fichier dans un dépôt approuvé. Toute mission doit appliquer intégralement [`WORKFLOW.md`](WORKFLOW.md). Work ne charge automatiquement ni `AGENTS.md` ni `.codex/config.toml`.

## Références obligatoires

Avant toute modification structurante, lire intégralement [`PROJECT.md`](PROJECT.md), [`ROADMAP.md`](ROADMAP.md), [`STATUS.md`](STATUS.md), [`DECISIONS.md`](DECISIONS.md), [`ARCHITECTURE.md`](ARCHITECTURE.md), [`DESIGN.md`](DESIGN.md), [`QUALITY.md`](QUALITY.md) et [`WORKFLOW.md`](WORKFLOW.md).

Respecter le brief courant, préserver les changements utilisateur hors périmètre et mettre à jour la mémoire officielle après toute décision ou modification importante.

## Git et écriture

- Ne jamais modifier directement `main` ou `master`.
- Créer et utiliser une branche dédiée avant toute modification.
- Un seul agent écrit dans les fichiers, Git ou les services externes.
- Ne jamais pousser, publier, fusionner ou déployer sans autorisation humaine explicite.
- Ne jamais lire, afficher, committer ou transmettre un secret.

## Sous-agents et qualité

- Ouvrir au maximum trois sous-agents, en lecture seule, avec une profondeur maximale de un.
- Utiliser les sous-agents pour explorer ou effectuer une revue indépendante ; ils ne modifient ni fichiers, ni Git, ni services externes.
- Vérifier le résultat réellement enregistré et les cibles réellement accessibles avant d’annoncer une réussite.
- Effectuer au plus deux cycles complets revue, correction des bloquants/importants, puis nouvelle vérification.
- Arrêter sans fusionner si un problème bloquant ou important subsiste après le second cycle.

## Contrôles minimaux

Adapter les contrôles au périmètre, puis exécuter au minimum :

```sh
git diff --check
git status --short
```

Pour l’application, vérifier aussi les scripts pertinents parmi `npm run lint`, `npm run typecheck`, `npm test`, `npm run test:e2e` et `npm run build`. Ne jamais présenter la démonstration locale comme une IA véritable.

Les configurations Chat, Work, Codex local, Codex Remote et hybrides sont documentées dans [`guides/configurations/`](guides/configurations/README.md). Les détails propres à Ubuntu, iPhone et Remote Control n’appartiennent pas aux règles permanentes de ce fichier.
