# Codex Remote depuis iPhone

## Utiliser cette configuration pour

- piloter depuis l’iPhone une session Codex qui continue de s’exécuter sur la machine locale ;
- suivre une mission locale lorsque la machine reste allumée, connectée et non suspendue ;
- reprendre le contrôle localement si la connexion distante devient indisponible.

## Démarrage en trois étapes maximum

1. Préparez sur la machine le dépôt approuvé, la branche dédiée et la session Codex ; vérifiez que la fonction est disponible pour le compte et les versions utilisés.
2. Consultez la procédure réellement installée avec `codex --version` puis `codex remote-control --help`.
3. Suivez uniquement les instructions d’association affichées par cette aide, sans transmettre de code d’association, clé ou fichier `.env`.

## Ressources associées

- [`AGENTS.md`](../../AGENTS.md), [`WORKFLOW.md`](../../WORKFLOW.md) et [`QUALITY.md`](../../QUALITY.md), qui restent applicables à la session locale ;
- [`.codex/config.toml`](../../.codex/config.toml) pour les permissions enregistrées dans ce dépôt ;
- [`templates/BRIEF.md`](../../templates/BRIEF.md) pour borner la mission avant le pilotage distant.

## Limites

L’iPhone pilote la session : il n’exécute pas le dépôt, Git ou les processus. Ceux-ci restent sur la machine locale. La fonction et sa procédure peuvent dépendre du compte et des versions. Une perte réseau, la veille, l’arrêt de la machine ou l’expiration de l’association interrompt le pilotage ; une déconnexion ne crée ni commit ni push et ne garantit pas l’arrêt des processus.

## Passage de relais

Revenez à [Codex local](codex-local.md) si l’association distante est absente ou interrompue. Avant de terminer, contrôlez séparément l’état Git et les processus éventuellement lancés sur la machine.
