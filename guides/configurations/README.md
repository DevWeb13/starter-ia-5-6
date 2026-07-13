# Configurations techniques Starter IA

Le point de départ de Starter IA n’est plus le choix d’une configuration. L’utilisateur décrit le projet à lancer ; Starter IA organise le cycle complet et recommande ensuite le parcours compatible avec son matériel.

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

## Parcours principal

Le workflow principal est **ChatGPT + Codex** : ChatGPT aide à cadrer, rechercher, décider, rédiger et piloter ; Codex agit sur les fichiers et les contrôles autorisés. Le cycle complet est décrit dans [`PROJECT.md`](../../PROJECT.md) et le processus d’une mission dans [`WORKFLOW.md`](../../WORKFLOW.md).

Starter IA doit recommander le parcours le plus simple parmi :

- ChatGPT + Codex local sur Ubuntu/Linux ;
- ChatGPT + Codex sur Windows ;
- ChatGPT + Codex sur macOS ;
- ChatGPT sur iPhone + Codex Remote lorsque la fonction est disponible ;
- parcours local sans Remote Control si la fonction est absente.

La disponibilité dépend du compte, du client, du système, des versions et du déploiement progressif.

## Workflow phare documenté

Le parcours **ChatGPT sur iPhone + Codex Remote + Ubuntu** est prioritaire et différenciant. L’iPhone pilote ; Ubuntu conserve le dépôt, Git, Codex et les processus. La machine doit rester active, connectée et non suspendue. Une déconnexion ne crée ni commit ni push et ne prouve pas l’arrêt des processus. Voir [Codex Remote depuis iPhone](codex-remote.md).

## Guides secondaires

Ces guides restent des références techniques. Ils ne sont pas cinq produits indépendants.

| Guide | Rôle dans le parcours | Limite clé |
|---|---|---|
| [Chat](chat.md) | cadrer, réfléchir et préparer une mission | ne prouve pas qu’un fichier ou service a été modifié |
| [Codex local](codex-local.md) | inspecter, modifier et vérifier un dépôt | dépend des permissions et outils locaux |
| [Codex Remote](codex-remote.md) | piloter une session locale depuis iPhone | disponibilité variable et machine locale active |
| [Work](work.md) | ressource cloud optionnelle | non obligatoire et fonctions variables selon le compte |
| [Work + Codex](hybrid-work-codex.md) | passage de relais optionnel | relais non automatique |

Work conserve ses guides et son historique, mais ne définit plus l’architecture du produit ni son démarrage principal.

## Ressources communes

- [`templates/BRIEF.md`](../../templates/BRIEF.md) : brief vérifiable ;
- [`QUALITY.md`](../../QUALITY.md) : niveaux de défaut et décision de livraison ;
- [`prompts/REVIEW.md`](../../prompts/REVIEW.md) : revue indépendante en lecture seule ;
- [`prompts/MASTER-WORK.md`](../../prompts/MASTER-WORK.md) : ressource optionnelle pour Work ;
- [`course/FORMATION-EXPRESS.md`](../../course/FORMATION-EXPRESS.md) : formation existante.

Ces guides ne garantissent ni disponibilité, ni plugin, ni fonction distante. Vérifiez toujours les outils réellement accessibles avant d’agir.
