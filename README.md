# Starter IA 5.6

Starter iPhone-first pour utiliser ChatGPT Work, GPT-5.6 et les agents avec un minimum de friction.

Ce dépôt propose une méthode courte : donner un résultat précis à produire, déléguer les contrôles sans multiplier les écrivains, vérifier les faits, puis livrer avec un statut honnête.

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

## La promesse

En moins de dix minutes, depuis l’app ChatGPT sur iPhone, vous pouvez lancer une première mission complète et sûre : un brief, jusqu’à trois analyses en lecture seule, un seul agent qui écrit, une vérification et une livraison claire.

Prérequis : une app à jour et les fonctions Projet, Work, modèles, outils ou plugins nécessaires visibles sur votre compte. Leur disponibilité peut varier.

## Démarrer sur iPhone

1. Ouvrez [`START-HERE.md`](START-HERE.md).
2. Créez ou ouvrez un Projet dans l’app ChatGPT.
3. Copiez les règles courtes proposées dans les instructions du Projet.
4. Choisissez **Terra** si vous hésitez.
5. Copiez le brief d’exemple et lancez la mission dans **Work**.
6. Contrôlez le livrable et le statut final : fait et vérifié, partiel, bloqué ou non tenté.

Le parcours détaillé est conçu pour tenir en moins de dix minutes.

## Chat, Work ou Codex ?

| Outil | À utiliser pour | Exemple |
|---|---|---|
| **Chat** | Comprendre, décider rapidement ou rédiger un brouillon court. | Comparer deux noms ou reformuler un message. |
| **Work** | Exécuter une mission complète avec plusieurs étapes, fichiers, plugins ou outils. | Transformer un brief en dossier, le faire contrôler et livrer les fichiers. |
| **Codex** | Travailler sur du code et un dépôt : modifier, tester, revoir et préparer une pull request. | Corriger une application et lancer ses tests. |

Codex est spécialisé dans le développement. Sur iPhone, il n’est pas un environnement local autonome ni un choix direct dans le parcours de ce starter. Un pilotage distant peut être proposé selon l’app, le compte et le déploiement, mais l’exécution repose alors sur un environnement connecté.

## Sol, Terra ou Luna ?

Ce sont des repères de choix, pas des garanties automatiques de résultat.

| Choix | Quand l’utiliser |
|---|---|
| **Terra** | Par défaut, pour la majorité du travail et les analyses parallèles. |
| **Sol** | Pour une mission complexe qui exige de coordonner plusieurs dépendances et contrôles. |
| **Luna** | Pour une tâche simple, répétitive ou volumineuse. |

Si vous hésitez, choisissez **Terra**. La qualité dépend surtout du brief, des outils disponibles et des vérifications demandées.

## Le workflow complet

**Brief → sous-agents en lecture seule → plan → agent écrivain → vérification → revue indépendante → correction → livraison**

- Un seul agent modifie les fichiers ou GitHub.
- Trois sous-agents maximum, principalement pour lire, analyser et contrôler.
- Deux cycles de correction maximum.
- Après le deuxième cycle, tout problème bloquant ou important restant bloque la livraison ou la fusion.
- Une autorisation humaine explicite est nécessaire avant suppression, paiement, publication externe ou action irréversible.
- Une réussite n’est jamais annoncée sans preuve de vérification.

La procédure de référence se trouve dans [`WORKFLOW.md`](WORKFLOW.md). Les critères de décision sont dans [`QUALITY.md`](QUALITY.md).

## Exemples concrets

### Préparer un dossier

Dans Work, demandez un document à partir de vos notes. Un sous-agent vérifie les oublis, un autre la clarté, puis l’agent écrivain produit et contrôle le fichier final.

### Auditer un dépôt

Dans un environnement compatible avec Codex, demandez une lecture du dépôt, un plan de correction, une modification sur une seule branche, les tests, puis une pull request. La fusion reste interdite si un défaut bloquant ou important subsiste.

### Automatiser un contrôle utile

Planifiez un audit hebdomadaire de la branche par défaut. Il recherche les problèmes réels et les doublons ouverts avant de créer au maximum une issue consolidée. S’il n’y a rien à corriger, il ne publie rien. Le prompt est dans [`prompts/AUTOMATION.md`](prompts/AUTOMATION.md).

## Parcours du dépôt

- Commencer : [`START-HERE.md`](START-HERE.md)
- Comprendre le cadre : [`PROJECT.md`](PROJECT.md)
- Exécuter : [`WORKFLOW.md`](WORKFLOW.md)
- Contrôler : [`QUALITY.md`](QUALITY.md)
- Copier un brief : [`templates/BRIEF.md`](templates/BRIEF.md)
- Se former en 30 minutes : [`course/FORMATION-EXPRESS.md`](course/FORMATION-EXPRESS.md)
- Préparer une future utilisation de Codex : [`AGENTS.md`](AGENTS.md) et [`.codex/`](.codex/)

## Limites honnêtes

- Work, GPT-5.6, Sol, Terra, Luna, les sous-agents, les plugins et les automatisations peuvent dépendre du compte, de l’app et du déploiement en cours.
- Une configuration demandant `gpt-5.6` ne donne pas accès au modèle si le compte ou le client Codex ne le propose pas.
- Work ne charge pas automatiquement `AGENTS.md` ni `.codex/config.toml`.
- Un outil externe peut échouer, demander une connexion ou ne pas proposer l’action voulue.
- « Poursuis jusqu’au bout » n’autorise jamais une action sensible qui n’a pas été explicitement approuvée.
- Ne collez jamais de mot de passe, token, clé privée ou donnée inutilement sensible dans un brief.

## Licence

Distribué sous licence MIT. Voir [`LICENSE`](LICENSE).
