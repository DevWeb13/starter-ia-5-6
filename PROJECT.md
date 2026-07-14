# Direction produit

## Proposition active

**Starter IA est un site de ressources et un kit de démarrage pour mieux utiliser ChatGPT, Work et Codex.**

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

Le produit aide à comprendre les rôles, choisir une configuration réaliste, préparer un dépôt pour Codex et copier des modèles ou prompts utiles. Un service humain facultatif peut installer et adapter ce socle dans un dépôt. Starter IA privilégie des pages lisibles et des fichiers statiques versionnés plutôt qu’un SaaS, un orchestrateur autonome ou un générateur de dossiers.

## À qui il sert

- développeurs, freelances et petites équipes qui découvrent ou structurent leur usage de Codex ;
- personnes qui préparent une mission dans ChatGPT ou Work avant de la confier à Codex ;
- utilisateurs qui veulent des règles prudentes, des exemples concrets et un point de départ léger.

Le contenu doit rester accessible à un débutant sans masquer les limites réelles des outils.

## Résultats recherchés

Starter IA doit permettre de :

1. distinguer ChatGPT, Work et Codex ;
2. choisir une configuration adaptée au matériel et aux fonctions réellement disponibles ;
3. préparer un projet pour Codex sans multiplier les documents inutiles ;
4. consulter et copier des guides, prompts et modèles ;
5. appliquer une méthode simple et vérifiable ;
6. apprendre grâce à des exemples et retours d’expérience factuels ;
7. demander, si nécessaire, une installation humaine bornée sans transformer le site en SaaS.

## Rôles des outils

- **ChatGPT** aide à réfléchir, cadrer, comparer, rédiger et contrôler un résultat.
- **Work** peut prendre en charge une mission complète dans le cloud lorsque ses fichiers, outils ou plugins sont disponibles. Il reste facultatif.
- **Codex** inspecte, modifie et vérifie un dépôt dans le périmètre autorisé.
- **Starter IA** explique comment les utiliser et fournit le kit ; il ne les pilote pas automatiquement.

Les disponibilités dépendent du compte, du client et de l’environnement. Work ne charge pas automatiquement les règles locales d’un dépôt. Codex Remote et Remote Control ne sont jamais présentés comme universellement disponibles.

## Méthode conseillée

```text
Réfléchir et cadrer dans ChatGPT
→ exécuter sur le dépôt avec Codex
→ contrôler le résultat dans ChatGPT
```

Work peut remplacer ou compléter la première et la dernière étape pour une mission cloud complète. Le passage de relais reste explicite : une réponse copiée ne prouve ni exécution, ni modification de fichiers.

## Kit de démarrage

Le kit statique vit dans [`templates/starter-kit/`](templates/starter-kit/README.md). Son noyau minimal contient :

```text
PROJECT.md
STATUS.md
AGENTS.md
prompts/FIRST-MISSION.md
```

- `PROJECT.md` explique le but et les limites durables ;
- `STATUS.md` donne l’état réel et la prochaine action ;
- `AGENTS.md` fixe les règles de travail de Codex dans le dépôt ;
- `FIRST-MISSION.md` fournit une première mission petite et vérifiable.

Les fichiers `DECISIONS.md`, `QUALITY.md` et `.codex/config.toml` sont facultatifs. Ils deviennent utiles lorsque les décisions s’accumulent, que plusieurs critères doivent être contrôlés ou qu’une configuration locale prudente doit être partagée. Le kit n’impose pas treize fichiers et n’ajoute aucun manifeste automatique.

## Offre pilote d’accompagnement

L’offre « Installation et adaptation Starter IA » est un service humain facultatif affiché à **390 € TTC** pendant sa phase pilote. Elle couvre l’analyse du projet et du dépôt, le choix d’une configuration réaliste, l’adaptation du kit minimal, la préparation d’une première mission Codex et la définition des contrôles et limites.

Elle ne comprend ni développement complet du produit, ni abonnement tiers, ni gestion de secrets, ni disponibilité illimitée, ni fusion ou mise en production automatique. La demande passe par le site public LaReponseDev ; Starter IA n’ajoute aucun formulaire, paiement intégré, compte ou stockage distant. L’offre reste une hypothèse commerciale tant qu’une première vente réelle n’a pas été observée.

## Ce qui existe réellement

- une application Next.js publique présentant les ressources ;
- une page d’accompagnement présentant l’offre pilote et renvoyant vers LaReponseDev ;
- cinq guides de configuration : ChatGPT, Work, Codex local, Codex Remote et Work + Codex ;
- des prompts, un modèle de brief, une formation courte et le kit statique ;
- un MVP local déterministe de six phases et 16 étapes avec stockage navigateur, missions copiables et exports Markdown/JSON.

Le MVP local reste disponible comme démonstration historique utile. Il ne constitue plus la porte d’entrée ni la prochaine direction produit et n’appelle automatiquement aucun fournisseur IA.

## Direction abandonnée

Ne font plus partie de la direction active :

- générateur complexe de starters, manifeste automatique ou ZIP comme cœur du produit ;
- Missions B à E centrées sur Social Autopilot et ce générateur ;
- création ou pilotage automatique de dépôts ;
- exécution automatique de Codex ;
- API IA, authentification, paiement ou stockage distant.

Ces idées restent dans l’historique des décisions lorsqu’elles expliquent le projet. Elles ne doivent plus être présentées comme la prochaine priorité ni comme des fonctions disponibles.

## Principes de réalisation

- réutiliser les pages, composants et ressources existants ;
- ajouter une fonction seulement après un besoin observé ;
- préférer un fichier statique copiable à une automatisation prématurée ;
- fonder la progression économique sur des ventes et retours réels, jamais sur une validation supposée ;
- distinguer disponible, démonstration historique, abandonné et prochaine étape ;
- ne jamais exposer de secret ni promettre une capacité non vérifiée.

## Sources de vérité

- direction : [`PROJECT.md`](PROJECT.md) ;
- état réel : [`STATUS.md`](STATUS.md) ;
- suite proportionnée : [`ROADMAP.md`](ROADMAP.md) ;
- décisions : [`DECISIONS.md`](DECISIONS.md) ;
- processus interne : [`WORKFLOW.md`](WORKFLOW.md) ;
- architecture : [`ARCHITECTURE.md`](ARCHITECTURE.md) ;
- règles UX : [`DESIGN.md`](DESIGN.md) ;
- qualité : [`QUALITY.md`](QUALITY.md) ;
- configurations : [`guides/configurations/README.md`](guides/configurations/README.md).

## Définition de fini

Une mission est terminée lorsque les livrables existent, les contrôles applicables réussissent, les limites sont explicites, la mémoire officielle reflète le résultat et aucun problème bloquant ou important connu n’est masqué.
