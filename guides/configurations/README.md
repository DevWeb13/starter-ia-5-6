# Catalogue des configurations Starter IA

Choisissez la configuration la plus simple qui couvre la mission. Pour une mission structurée, préparez [`templates/BRIEF.md`](../../templates/BRIEF.md) et suivez [`WORKFLOW.md`](../../WORKFLOW.md), source de vérité du processus.

| Configuration | À choisir pour | Commencer en trois étapes maximum | Ressources principales | Limite clé | Passage de relais |
|---|---|---|---|---|---|
| [Chat](chat.md) | réfléchir, décider ou produire un brouillon court | donner le contexte ; demander un résultat précis ; vérifier les hypothèses | [brief](../../templates/BRIEF.md), [formation](../../course/FORMATION-EXPRESS.md) | pas d’environnement de travail complet garanti | [Work](work.md) ou [Codex local](codex-local.md) |
| [Work](work.md) | conduire une mission complète dans un environnement cloud | remplir le brief ; lancer le [prompt maître](../../prompts/MASTER-WORK.md) ; vérifier avec [QUALITY.md](../../QUALITY.md) | [workflow](../../WORKFLOW.md), [prompts](../../prompts/MASTER-WORK.md), [formation](../../course/FORMATION-EXPRESS.md) | outils et fonctions variables selon le compte | [Codex local](codex-local.md) pour modifier un dépôt |
| [Codex local avec VS Code](codex-local.md) | inspecter, modifier et vérifier un dépôt sur la machine | ouvrir le dépôt ; vérifier Git et le brief ; autoriser les contrôles nécessaires | [AGENTS.md](../../AGENTS.md), [workflow](../../WORKFLOW.md), [configuration Codex](../../.codex/config.toml) | agit dans les permissions de la machine et du brief | [Codex Remote](codex-remote.md) ou [Work + Codex](hybrid-work-codex.md) |
| [Codex Remote depuis iPhone](codex-remote.md) | piloter une session Codex qui reste sur la machine locale | préparer la machine ; consulter l’aide installée ; suivre l’association affichée | [guide Remote](codex-remote.md), [AGENTS.md](../../AGENTS.md), [configuration Codex](../../.codex/config.toml) | disponibilité dépendante du compte et machine toujours active | [Codex local](codex-local.md) |
| [Work + Codex](hybrid-work-codex.md) | préparer ou analyser dans Work, puis implémenter dans le dépôt | produire le brief ; transmettre décisions et limites ; vérifier Git avant d’écrire | [brief](../../templates/BRIEF.md), [prompt Work](../../prompts/MASTER-WORK.md), [AGENTS.md](../../AGENTS.md), [revue](../../prompts/REVIEW.md) | le relais n’est pas automatique | [Work](work.md) pour l’analyse ou [Codex local](codex-local.md) pour l’exécution |

## Ressources communes

- [`WORKFLOW.md`](../../WORKFLOW.md) : processus de référence, non recopié dans les guides ;
- [`QUALITY.md`](../../QUALITY.md) : niveaux de défaut et décision de livraison ;
- [`templates/BRIEF.md`](../../templates/BRIEF.md) : brief vérifiable ;
- [`prompts/REVIEW.md`](../../prompts/REVIEW.md) : revue indépendante en lecture seule ;
- [`prompts/AUTOMATION.md`](../../prompts/AUTOMATION.md) : audit GitHub prudent, seulement si l’automatisation et GitHub sont disponibles ;
- [`course/FORMATION-EXPRESS.md`](../../course/FORMATION-EXPRESS.md) : parcours d’apprentissage de 30 minutes.

Ces guides décrivent les rôles et limites des environnements. Ils ne garantissent ni leur disponibilité sur un compte, ni l’accès à un plugin ou à une fonction distante. Vérifiez l’aide et les outils réellement accessibles avant d’agir.
