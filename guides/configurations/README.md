# Choisir entre ChatGPT, Work et Codex

Ces guides partent du besoin et de l’environnement réellement disponible. Ils décrivent des configurations complémentaires, pas des produits concurrents.

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

## Les rôles en une phrase

- **ChatGPT** : réfléchir, cadrer, comparer, rédiger ou contrôler un résultat.
- **Work** : conduire une mission complète dans le cloud lorsque les fichiers et outils requis sont accessibles.
- **Codex** : inspecter, modifier et vérifier un dépôt dans un environnement de code autorisé.

Starter IA fournit les explications et fichiers de départ. Il ne transmet pas automatiquement une mission entre ces environnements et n’exécute aucun outil à votre place.

## Choisir rapidement

| Besoin | Point de départ | Limite clé |
|---|---|---|
| Clarifier une idée ou préparer un brief | [ChatGPT](chat.md) | une réponse ne prouve pas qu’un fichier a changé |
| Réaliser une mission cloud complète | [Work](work.md) | fonctions et outils variables selon le compte |
| Modifier un dépôt sur sa machine | [Codex local](codex-local.md) | dépend des permissions et outils installés |
| Piloter une session locale depuis un autre appareil | [Codex Remote](codex-remote.md) | disponibilité variable et machine locale active |
| Préparer dans Work puis coder localement | [Work + Codex](hybrid-work-codex.md) | passage de relais manuel |

Pour un projet de code courant, la méthode conseillée est :

```text
Cadrer dans ChatGPT
→ exécuter dans Codex
→ contrôler dans ChatGPT
```

Work peut compléter les phases de cadrage ou de contrôle si la mission exige plusieurs fichiers ou outils cloud.

## Préparer Codex

1. Copiez le noyau de [`templates/starter-kit/`](../../templates/starter-kit/README.md).
2. Décrivez la première mission avec [`templates/BRIEF.md`](../../templates/BRIEF.md).
3. Travaillez sur une branche dédiée et vérifiez le diff et les contrôles du dépôt.

La disponibilité de Codex à distance ou de Remote Control dépend du compte, du client, du système, des versions et du déploiement progressif. Elle n’est jamais garantie. Work ne charge pas automatiquement `AGENTS.md` ou `.codex/config.toml` depuis ce dépôt.

## Ressources communes

- [`templates/starter-kit/README.md`](../../templates/starter-kit/README.md) : kit minimal et options ;
- [`templates/BRIEF.md`](../../templates/BRIEF.md) : brief vérifiable ;
- [`WORKFLOW.md`](../../WORKFLOW.md) : workflow interne d’une mission ;
- [`QUALITY.md`](../../QUALITY.md) : niveaux de défaut et décision de livraison ;
- [`prompts/REVIEW.md`](../../prompts/REVIEW.md) : revue indépendante en lecture seule ;
- [`course/FORMATION-EXPRESS.md`](../../course/FORMATION-EXPRESS.md) : formation existante.
