# Codex Remote depuis iPhone

Codex Remote Control permet de piloter depuis l’app ChatGPT sur iPhone une session Codex qui continue de s’exécuter sur la machine Ubuntu. Le dépôt, Git, les fichiers, permissions et processus restent sur Ubuntu.

## Prérequis

- Ubuntu allumé, connecté et non suspendu ;
- dépôt local approuvé, ouvert sur une branche dédiée ;
- Codex CLI et app ChatGPT iOS à jour, connectés au compte autorisé ;
- fonction disponible pour ce compte et cette version.

## Vérifier la procédure installée

La fonction est expérimentale et ses commandes peuvent évoluer. Commencez toujours par :

```sh
codex --version
codex remote-control --help
```

Suivez ensuite uniquement les commandes et instructions d’association affichées par cette aide. Ne recopiez jamais dans un prompt un code d’association, une clé ou un fichier `.env`.

## Limites

- aucun port entrant, serveur SSH ou clé API OpenAI n’est requis par le principe de Remote Control ;
- une perte réseau, la veille, l’arrêt de la machine ou l’expiration de l’association interrompt le pilotage ;
- une déconnexion ne crée ni commit ni push et ne garantit pas l’arrêt des processus ;
- les règles de [`../../AGENTS.md`](../../AGENTS.md), permissions locales et validations humaines restent applicables.

Avant de terminer, contrôlez séparément Git et les processus éventuellement lancés. Revenez à [Codex local](codex-local.md) si l’association distante n’est pas disponible.
