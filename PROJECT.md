# Direction produit

## Proposition active

**Starter IA est un site de ressources et un parcours pédagogique pour mieux utiliser ChatGPT, Work et Codex, appuyé sur des templates techniques de référence.**

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

Le produit aide à comprendre les rôles, choisir une configuration réaliste, préparer un dépôt pour Codex et apprendre progressivement comment fonctionne une configuration Core puis Advanced. Un service humain facultatif peut installer et adapter ce socle dans un dépôt. Starter IA privilégie des pages lisibles, des exemples versionnés et des dépôts de référence plutôt qu’un SaaS, un orchestrateur autonome ou un générateur de dossiers.

## À qui il sert

- développeurs, freelances et petites équipes qui découvrent ou structurent leur usage de Codex ;
- personnes qui veulent comprendre les fichiers, permissions, agents, skills et garde-fous qu'elles utilisent ;
- personnes qui préparent une mission dans ChatGPT ou Work avant de la confier à Codex ;
- utilisateurs qui veulent des règles prudentes, des exemples concrets et un point de départ léger.

Le contenu doit rester accessible à un débutant sans masquer les limites réelles des outils.

## Résultats recherchés

Starter IA doit permettre de :

1. distinguer ChatGPT, Work et Codex ;
2. comprendre les fondamentaux d'un dépôt préparé pour Codex ;
3. utiliser et comprendre le template Starter IA Qwik Core ;
4. progresser ensuite vers la variante Advanced sans commencer par sa complexité ;
5. comprendre pourquoi chaque fichier, agent, skill, hook, permission ou gate existe ;
6. distinguer les mécanismes officiels OpenAI des choix propres à Starter IA ;
7. consulter et copier des guides, prompts et modèles ;
8. appliquer une méthode simple et vérifiable ;
9. apprendre grâce à des exemples et retours d’expérience factuels ;
10. demander, si nécessaire, une installation humaine bornée sans transformer le site en SaaS.

## Rôles des outils

- **ChatGPT** aide à réfléchir, cadrer, comparer, rédiger, auditer et contrôler un résultat avec les outils réellement disponibles dans la session.
- **Work** peut prendre en charge une mission complète dans le cloud lorsque ses fichiers, outils ou plugins sont disponibles. Il reste facultatif.
- **Codex** travaille directement dans un environnement de développement et un dépôt dans le périmètre autorisé.
- **Starter IA** explique comment choisir, configurer et combiner ces outils ; il ne prétend pas qu'un passage de relais est automatique lorsqu'il ne l'est pas.

Les disponibilités dépendent du compte, du client et de l’environnement. Work ne charge pas automatiquement les règles locales d’un dépôt. Codex Remote et Remote Control ne sont jamais présentés comme universellement disponibles.

## Sources techniques de référence

Starter IA ne doit plus maintenir deux versions concurrentes du Core.

- **Core Qwik** : `https://github.com/DevWeb13/starter-ia-qwik`
- **Advanced Qwik** : `https://github.com/DevWeb13/starter-ia-qwik-advanced`
- **Documentation, cours et ressources publiques** : ce dépôt `starter-ia-5-6`

Le dépôt Core est la source de vérité technique de la configuration Core. Le dépôt Advanced est la source de vérité technique de la variante Advanced. Ce dépôt explique ces configurations et peut fournir des exemples pédagogiques, mais ne doit pas conserver un second template technique divergent.

## Parcours pédagogique

Le parcours suit trois niveaux.

### 1. Fondamentaux

Expliquer simplement le rôle de `PROJECT.md`, `STATUS.md`, `AGENTS.md`, `.codex/config.toml` et d'une mission petite, bornée et vérifiable. Ce niveau est pédagogique et ne constitue pas un second template.

### 2. Starter IA Qwik Core

Expliquer le véritable template `starter-ia-qwik` et ses briques de référence :

```text
AGENTS.md
PROJECT.md
STATUS.md
QUALITY.md
prompts/INITIALIZE.md
.codex/config.toml
.github/workflows/ci.yml
```

Le point d'entrée du template est `prompts/INITIALIZE.md`. Il transforme le template générique en projet précis puis prépare la première mission limitée.

### 3. Starter IA Qwik Advanced

Partir du Core et expliquer progressivement agents, skills, permissions, sandbox, hooks, gates humains, artefacts et orchestration, puis documenter les agents, skills et pipelines réellement présents dans `starter-ia-qwik-advanced`.

L'architecture détaillée du cours vit dans [`course/README.md`](course/README.md).

## Méthode conseillée

Starter IA ne force pas un outil par principe. Le besoin et les capacités réellement disponibles déterminent le chemin le plus simple. Pour un projet de code local courant, le parcours reste souvent : cadrage ou audit dans ChatGPT, exécution dans l'environnement de développement avec Codex lorsque nécessaire, puis contrôle du résultat réel.

Une réponse copiée ne prouve jamais une exécution ou une modification de fichiers.

## Offre pilote d’accompagnement

L’offre « Installation et adaptation Starter IA » reste un service humain facultatif affiché à **390 € TTC** pendant sa phase pilote. Elle couvre l’analyse du projet et du dépôt, le choix d’une configuration réaliste, l’adaptation du socle pertinent, la préparation d’une première mission et la définition des contrôles et limites.

Elle ne comprend ni développement complet du produit, ni abonnement tiers, ni gestion de secrets, ni disponibilité illimitée, ni fusion ou mise en production automatique. La demande passe par le site public LaReponseDev ; Starter IA n’ajoute aucun formulaire, paiement intégré, compte ou stockage distant. L’offre reste une hypothèse commerciale tant qu’une première vente réelle n’a pas été observée.

## Ce qui existe réellement

- une application Next.js publique présentant les ressources ;
- une page d’accompagnement présentant l’offre pilote et renvoyant vers LaReponseDev ;
- cinq guides de configuration : ChatGPT, Work, Codex local, Codex Remote et Work + Codex ;
- des prompts, un modèle de brief et une formation courte désormais réalignée comme introduction ;
- le dépôt `starter-ia-qwik`, Core Qwik réellement construit et versionné ;
- le dépôt `starter-ia-qwik-advanced`, fondation Advanced réellement construite et versionnée ;
- un parcours pédagogique défini dans `course/README.md` ;
- un MVP local déterministe de six phases et 16 étapes avec stockage navigateur, missions copiables et exports Markdown/JSON.

L'ancien `templates/starter-kit/` a été retiré : il ne constitue plus une seconde source technique du Core.

Le MVP local reste disponible comme démonstration historique utile. Il ne constitue plus la porte d’entrée ni la prochaine direction produit et n’appelle automatiquement aucun fournisseur IA.

## Direction abandonnée

Ne font plus partie de la direction active :

- maintenir un second Core technique dans ce dépôt ;
- générateur complexe de starters, manifeste automatique ou ZIP comme cœur du produit ;
- Missions B à E centrées sur Social Autopilot et ce générateur ;
- création ou pilotage automatique de dépôts comme fonction du site ;
- API IA, authentification, paiement ou stockage distant par défaut.

Ces idées restent dans l’historique des décisions lorsqu’elles expliquent le projet. Elles ne doivent plus être présentées comme la prochaine priorité ni comme des fonctions disponibles.

## Principes de réalisation

- réutiliser les pages, composants et ressources existants ;
- ajouter une fonction seulement après un besoin observé ;
- garder une seule source technique de vérité par variante ;
- distinguer clairement capacité officielle, choix Starter IA et état réel du template ;
- enseigner du simple vers le complexe ;
- vérifier les dépôts de référence avant toute affirmation susceptible d'avoir changé ;
- préférer une progression cliquable à une documentation massive affichée d'un seul bloc ;
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
- architecture pédagogique : [`course/README.md`](course/README.md) ;
- règles UX : [`DESIGN.md`](DESIGN.md) ;
- qualité : [`QUALITY.md`](QUALITY.md) ;
- configurations : [`guides/configurations/README.md`](guides/configurations/README.md).

## Définition de fini

Une mission est terminée lorsque les livrables existent, les contrôles applicables réussissent, les limites sont explicites, la mémoire officielle reflète le résultat et aucun problème bloquant ou important connu n’est masqué.
