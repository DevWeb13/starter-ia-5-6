# Consignes pour les agents Codex

> Ce fichier prépare une future utilisation de Codex. Work ne charge automatiquement ni `AGENTS.md` ni `.codex/config.toml`. Codex ne charge la configuration locale du projet que dans un dépôt approuvé.

## Priorités

1. Respecter le brief courant.
2. Lire [`PROJECT.md`](PROJECT.md), [`WORKFLOW.md`](WORKFLOW.md), [`QUALITY.md`](QUALITY.md), [`STATUS.md`](STATUS.md), [`DECISIONS.md`](DECISIONS.md) et [`ARCHITECTURE.md`](ARCHITECTURE.md) avant une modification structurante.
3. Utiliser [`DESIGN.md`](DESIGN.md) comme unique référence visuelle.
4. Préserver tout changement utilisateur hors périmètre.
5. Mettre à jour la mémoire officielle après toute décision ou modification importante.
6. Ne jamais annoncer une action sans preuve.

## Organisation

- L’agent racine est l’orchestrateur et l’unique écrivain.
- Ouvrir au maximum trois threads de sous-agents.
- Limiter la profondeur à un : les sous-agents ne délèguent pas à leur tour.
- Utiliser `explorer` pour collecter des faits et `reviewer` pour un contrôle indépendant.
- Les sous-agents restent en lecture seule et ne modifient ni fichiers, ni Git, ni GitHub.
- Les choix de permissions actifs dans le client parent peuvent primer sur les fichiers d’agent ; l’orchestrateur doit donc contrôler le mode réel avant délégation.

## Modifications

- Travailler sur une branche dédiée lorsque GitHub est dans le périmètre.
- Un seul agent crée les commits, ouvre la PR, applique les corrections et fusionne.
- Demander une approbation humaine avant suppression, paiement, publication externe ou action irréversible, sauf autorisation explicite déjà donnée dans le brief courant.
- Ne jamais lire, imprimer, committer ou transmettre des secrets.

## Boucle qualité

1. Écrire.
2. Vérifier les fichiers réellement enregistrés.
3. Faire effectuer une revue indépendante en lecture seule.
4. Corriger les bloquants et importants.
5. Vérifier de nouveau.

Deux cycles complets maximum. S’il reste un bloquant ou un important après le second, arrêter sans fusionner et signaler le blocage.

## Vérifications minimales

Adapter les commandes au projet, puis au minimum :

```sh
git diff --check
git status --short
```

Pour l’application, contrôler aussi :

```sh
npm ci
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
```

Contrôler également :

- la présence de tous les fichiers listés dans `PROJECT.md` ;
- les liens Markdown relatifs ;
- la validité TOML de `.codex/config.toml` et `.codex/agents/*.toml` ;
- l’absence de contradictions selon `QUALITY.md` ;
- le contenu relu depuis GitHub avant et après fusion lorsque GitHub est utilisé.
- le responsive à 320 px, le clavier, les thèmes et `prefers-reduced-motion` ;
- la preview et les logs accessibles lorsqu’un déploiement Vercel est dans le périmètre ;
- l’absence de secret, de `.env` et de `.vercel/` dans le commit ;
- la cohérence de `ROADMAP.md`, `STATUS.md`, `DECISIONS.md`, `ARCHITECTURE.md` et `CHANGELOG.md`.

## Rapport final

Indiquer seulement ce qui a été réellement fait : fichiers changés, contrôles exécutés, sous-agents utilisés, URL vérifiées et blocages restants.
