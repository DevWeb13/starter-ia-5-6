# Configurations techniques Starter IA

Ces guides aident à décrire l’environnement réel qui devra influencer un starter Codex. Ils restent des références techniques secondaires, pas cinq produits concurrents ni le parcours principal.

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

## Rôle dans la nouvelle direction

Le MVP actuel recommande déjà un parcours selon l’environnement déclaré. Le futur générateur devra réutiliser ce principe pour sélectionner la configuration du starter la plus simple réellement compatible avec le système, l’accès local ou distant à Codex et la disponibilité de GitHub ou Vercel. Cette recommandation intégrée au starter et le générateur ne sont pas encore implémentés.

La disponibilité de Codex à distance ou de Remote Control dépend du compte, du client, du système, des versions et du déploiement progressif. Elle n’est jamais garantie pour tous les utilisateurs. Work reste facultatif.

## Guides disponibles

| Guide | Usage utile | Limite clé |
|---|---|---|
| [Chat](chat.md) | préparer ou clarifier une mission | ne prouve pas qu’un fichier ou service a changé |
| [Codex local](codex-local.md) | travailler sur un dépôt local | dépend des permissions et outils présents |
| [Codex Remote](codex-remote.md) | piloter une session locale depuis un autre appareil | disponibilité variable et machine locale active |
| [Work](work.md) | réaliser une mission cloud lorsque la fonction est disponible | ressource facultative, non chargée automatiquement depuis ce dépôt |
| [Work + Codex](hybrid-work-codex.md) | organiser un passage de relais explicite | relais non automatique |

Le parcours iPhone + Ubuntu reste documenté lorsqu’il est réellement disponible, mais il n’est ni obligatoire ni universel.

## Ressources communes

- [`templates/BRIEF.md`](../../templates/BRIEF.md) : brief vérifiable ;
- [`WORKFLOW.md`](../../WORKFLOW.md) : workflow interne d’une mission ;
- [`QUALITY.md`](../../QUALITY.md) : niveaux de défaut et décision de livraison ;
- [`prompts/REVIEW.md`](../../prompts/REVIEW.md) : revue indépendante en lecture seule ;
- [`prompts/MASTER-WORK.md`](../../prompts/MASTER-WORK.md) : ressource facultative pour Work ;
- [`course/FORMATION-EXPRESS.md`](../../course/FORMATION-EXPRESS.md) : formation existante.

Ces guides ne garantissent ni disponibilité, ni plugin, ni fonction distante. Vérifiez toujours les outils réellement accessibles avant d’agir.
