# Work + Codex

## Utiliser cette configuration pour

- préparer ou analyser une mission complète dans Work ;
- conserver l’implémentation, Git et les contrôles sur la machine avec Codex ;
- rendre explicite le passage entre décisions cloud et écriture dans le dépôt.

## Démarrage en trois étapes maximum

1. Dans Work, produisez le brief, les décisions, les sources et les critères de réussite avec [`prompts/MASTER-WORK.md`](../../prompts/MASTER-WORK.md).
2. Transmettez ce paquet de relais à Codex sans secret et en nommant les actions déjà autorisées.
3. Dans Codex, vérifiez le dépôt, la branche, `AGENTS.md` et l’état existant avant d’écrire.

## Ressources associées

- [`templates/BRIEF.md`](../../templates/BRIEF.md) pour structurer le paquet de relais ;
- [`WORKFLOW.md`](../../WORKFLOW.md), source de vérité commune ;
- [`AGENTS.md`](../../AGENTS.md) et [`.codex/config.toml`](../../.codex/config.toml) pour la partie locale uniquement ;
- [`QUALITY.md`](../../QUALITY.md) et [`prompts/REVIEW.md`](../../prompts/REVIEW.md) pour la vérification et la revue.

## Limites

Le passage de relais n’est pas automatique. Work ne charge ni les règles locales ni la configuration Codex du dépôt, et Codex ne doit pas supposer qu’une analyse Work a modifié Git ou les fichiers. Chaque environnement doit vérifier ses propres résultats.

## Passage de relais

Codex rapporte à Work le résultat réel, les contrôles, le commit éventuel et les blocages, sans supposer une publication. Revenez à [Work](work.md) pour une nouvelle analyse ou à [Codex local](codex-local.md) pour poursuivre l’exécution dans le dépôt.
