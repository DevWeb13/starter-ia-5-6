# Choisir entre ChatGPT, Work et Codex

Ces guides partent du besoin et de l’environnement réellement disponible. Ils décrivent des configurations complémentaires, pas des produits concurrents.

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

## Les rôles en une phrase

- **ChatGPT** : réfléchir, cadrer, comparer, rédiger, auditer ou contrôler avec les outils réellement disponibles dans la session.
- **Work** : conduire une mission complète dans le cloud lorsque les fichiers et outils requis sont accessibles.
- **Codex** : travailler directement dans un environnement de développement et un dépôt dans le périmètre autorisé.

Starter IA fournit les explications et les templates de référence. Il ne prétend pas qu'un passage de relais est automatique lorsqu'il ne l'est pas.

## Choisir rapidement

| Besoin | Point de départ | Limite clé |
|---|---|---|
| Clarifier une idée ou préparer un brief | [ChatGPT](chat.md) | une réponse ne prouve pas qu’un fichier a changé |
| Réaliser une mission cloud complète | [Work](work.md) | fonctions et outils variables selon le compte |
| Modifier un dépôt sur sa machine | [Codex local](codex-local.md) | dépend des permissions et outils installés |
| Piloter une session locale depuis un autre appareil | [Codex Remote](codex-remote.md) | disponibilité variable et machine locale active |
| Préparer dans Work puis coder localement | [Work + Codex](hybrid-work-codex.md) | passage de relais manuel |

Le principe général est de choisir le minimum d'outils nécessaires puis de vérifier le résultat réel.

## Apprendre progressivement

1. Commencez par les fondamentaux dans [`course/README.md`](../../course/README.md).
2. Utilisez le vrai template Core : [`DevWeb13/starter-ia-qwik`](https://github.com/DevWeb13/starter-ia-qwik).
3. Étudiez la variante Advanced seulement lorsque les agents, skills, hooks ou gates répondent à un besoin réel : [`DevWeb13/starter-ia-qwik-advanced`](https://github.com/DevWeb13/starter-ia-qwik-advanced).

Le Core Qwik est la source de vérité technique. Ce dépôt pédagogique ne maintient pas une copie concurrente du template.

## Préparer un projet Core

1. Créez un dépôt à partir de `starter-ia-qwik`.
2. Ouvrez-le dans l'environnement Codex réellement disponible.
3. Donnez une description claire du projet.
4. Demandez à Codex d'appliquer `prompts/INITIALIZE.md`.
5. Vérifiez les documents initialisés, la première mission et les contrôles avant de développer davantage.

La disponibilité de Codex à distance ou de Remote Control dépend du compte, du client, du système, des versions et du déploiement progressif. Elle n’est jamais garantie. Work ne charge pas automatiquement `AGENTS.md` ou `.codex/config.toml` depuis un dépôt.

## Ressources communes

- [`course/README.md`](../../course/README.md) : architecture du parcours pédagogique ;
- [`course/FORMATION-EXPRESS.md`](../../course/FORMATION-EXPRESS.md) : introduction rapide ;
- [`templates/BRIEF.md`](../../templates/BRIEF.md) : brief vérifiable ;
- [`WORKFLOW.md`](../../WORKFLOW.md) : workflow interne d’une mission ;
- [`QUALITY.md`](../../QUALITY.md) : niveaux de défaut et décision de livraison ;
- [`prompts/REVIEW.md`](../../prompts/REVIEW.md) : revue indépendante en lecture seule.
