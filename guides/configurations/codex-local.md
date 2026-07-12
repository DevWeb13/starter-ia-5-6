# Codex local avec VS Code

## Utiliser cette configuration pour

- inspecter un dépôt approuvé ;
- modifier des fichiers sur une branche dédiée ;
- exécuter les contrôles locaux autorisés et préparer des changements vérifiables.

## Démarrage en trois étapes maximum

1. Ouvrez le dépôt dans VS Code, puis vérifiez la branche et l’arbre Git.
2. Donnez un brief borné avec [`templates/BRIEF.md`](../../templates/BRIEF.md).
3. Autorisez les contrôles nécessaires et relisez le diff enregistré.

## Ressources associées

- [`AGENTS.md`](../../AGENTS.md) pour les règles permanentes du dépôt ;
- [`WORKFLOW.md`](../../WORKFLOW.md) et [`QUALITY.md`](../../QUALITY.md) pour le processus et les contrôles ;
- [`.codex/config.toml`](../../.codex/config.toml) pour la configuration Codex enregistrée ;
- [`prompts/REVIEW.md`](../../prompts/REVIEW.md) pour une revue indépendante en lecture seule.

## Limites

Les fichiers et processus restent sur la machine. Les actions externes, le réseau et les commandes dépendent du brief, des permissions actives et des outils installés. La configuration du dépôt ne remplace pas une autorisation humaine exigée par la mission.

## Passage de relais

Pour piloter la même session depuis un iPhone, utilisez [Codex Remote](codex-remote.md). Pour préparer ou analyser la mission dans Work avant l’implémentation, utilisez [Work + Codex](hybrid-work-codex.md).
