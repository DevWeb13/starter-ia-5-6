# Direction produit

## Direction active

**Starter IA prépare un environnement de travail prêt pour Codex à partir de la description d’un projet, de l’environnement réel de l’utilisateur et des modules dont il a besoin.**

> Projet communautaire indépendant, non officiel et non affilié à OpenAI.

Le futur cœur produit est un générateur local et déterministe de **starters Codex**. Un starter est un dossier de préparation du travail, téléchargeable et versionnable ; ce n’est ni une application déjà développée, ni une intégration qui exécute Codex.

Le parcours cible est :

```text
Décrire le projet
→ indiquer l’environnement réel
→ sélectionner les besoins facultatifs
→ obtenir un starter Codex prêt à utiliser
→ copier la première mission
```

## Problème prioritaire

Préparer correctement un dépôt pour Codex demande de réunir le contexte, le résultat attendu, les limites, les règles permanentes, les décisions, les agents, les contrôles et une première mission exploitable. Cette préparation est lente, répétitive et facile à rendre inutilement complexe.

Starter IA doit réduire ce délai. L’utilisateur ne doit pas suivre un long parcours avant d’obtenir un résultat utilisable.

## Public initial

- développeurs ;
- freelances et indépendants ;
- petites agences ;
- petites équipes qui utilisent ou souhaitent utiliser Codex sur de vrais dépôts.

Le produit doit rester utile à son propre créateur pour produire des sites et applications clients. Les non-développeurs pourront constituer une direction future, sans imposer de complexité au premier générateur.

## Contrat cible du générateur

Cette section décrit une cible future, pas une fonction disponible.

### Entrées nécessaires

Le générateur demandera uniquement les informations qui influencent réellement le starter, par exemple :

- nom ou description du projet ;
- résultat recherché ;
- projet nouveau ou dépôt existant ;
- système utilisé ;
- utilisation de Codex dans VS Code, en CLI ou à distance ;
- disponibilité réelle de GitHub et Vercel ;
- contraintes principales ;
- modules facultatifs nécessaires.

La liste exacte et les règles de sélection seront définies après validation du starter manuel de référence.

### Sortie principale

La cible future est :

- un aperçu des fichiers retenus ;
- un dossier ou ZIP téléchargeable et versionnable ;
- une première mission fournie sous forme de prompt copiable ;
- des instructions courtes pour démarrer ;
- un manifeste expliquant pourquoi chaque fichier est présent.

Le dossier donne à Codex le contexte, le résultat attendu, les limites, les règles permanentes, les décisions, les agents, les contrôles et la première mission fournie sous forme de prompt copiable. Il ne contient pas une application déjà développée.

### Noyau provisoire à tester

Le noyau suivant est une hypothèse de départ pour la Mission B, pas un contrat définitif :

```text
START-HERE.md
PROJECT.md
STATUS.md
DECISIONS.md
AGENTS.md
QUALITY.md
prompts/FIRST-MISSION.md
.codex/config.toml
.codex/agents/explorer.toml
.codex/agents/reviewer.toml
```

Il devra être utilisé sur un vrai projet afin d’identifier les fichiers utiles, inutiles ou manquants avant toute automatisation.

### Modules conditionnels

Selon le projet, le starter pourra aussi retenir :

```text
ARCHITECTURE.md
DESIGN.md
ROADMAP.md
MARKETING.md
SEO.md
README.md
LICENSE
.github/workflows/ci.yml
pull_request_template.md
configuration Vercel
tests adaptés à la stack
```

Ces éléments ne sont pas tous obligatoires. Chaque ajout doit répondre à un besoin réel et être justifié dans le manifeste ; un petit projet ne doit pas recevoir une documentation lourde par défaut.

## Trois états à ne pas confondre

### Existant vérifié

Le MVP local version 2 est réellement implémenté, local, déterministe et testé. Il organise un projet en six phases et 16 étapes, recommande un workflow selon l’environnement déclaré, conserve les projets dans `localStorage` et propose Dashboard, éditeur, missions copiables, statuts, preuves, validations et exports Markdown/JSON.

Il n’appelle automatiquement ni ChatGPT ni Codex. Il est conservé comme réalisation utilisable et devient secondaire dans la direction produit. Son modèle, son stockage, ses routes et son interface ne sont pas modifiés pendant la Mission A.

### Prochaine expérimentation

La Mission B créera manuellement un starter complet pour un vrai projet et l’utilisera avec Codex. Son objectif est d’éprouver le noyau, les modules et les instructions avant de spécifier un générateur.

### Cible future

Le générateur local déterministe transformera les entrées utiles en sélection de fichiers, contenu, manifeste, aperçu, dossier téléchargeable et première mission. Cette cible n’est pas encore implémentée.

## Workflow interne des missions

Le parcours produit cible ne doit pas être confondu avec la méthode de réalisation d’une mission :

```text
Brief
→ analyses en lecture seule
→ plan
→ écrivain unique
→ vérification
→ revue indépendante
→ correction
→ livraison
```

Les règles détaillées vivent uniquement dans [`WORKFLOW.md`](WORKFLOW.md).

## Sécurité

- un seul agent écrit ;
- spécialistes et reviewers restent en lecture seule ;
- aucune réussite n’est annoncée sans vérification ;
- aucun secret n’est ajouté au dépôt ou au starter ;
- fusion, production, suppression, paiement, publication, message et action irréversible exigent une autorisation humaine explicite.

Les recommandations d’environnement doivent refléter les outils réellement disponibles. Work reste facultatif. Codex à distance et Remote Control ne sont jamais présentés comme universellement disponibles.

## Stratégie économique

La progression envisagée est :

1. produire un starter open source réellement utile ;
2. l’utiliser sur des projets réels ;
3. publier des cas concrets ;
4. tester un service d’installation et d’adaptation du workflow ;
5. envisager un produit hébergé uniquement après validation réelle.

Aucun prix, client, revenu, abonnement ou résultat commercial n’est revendiqué.

## Limites actuelles

- aucun générateur de starter ou de ZIP n’est implémenté ;
- aucun nouveau formulaire ou schéma du générateur n’est défini ;
- aucun SDK IA, secret, compte, paiement ou stockage distant n’est ajouté ;
- aucune publication, fusion ou production automatique n’existe ;
- les détails techniques du futur générateur dépendront du starter manuel de référence.

## Sources de vérité

- direction et contrat produit : [`PROJECT.md`](PROJECT.md) ;
- processus interne : [`WORKFLOW.md`](WORKFLOW.md) ;
- progression : [`ROADMAP.md`](ROADMAP.md) ;
- état réel : [`STATUS.md`](STATUS.md) ;
- décisions : [`DECISIONS.md`](DECISIONS.md) ;
- architectures actuelle et cible : [`ARCHITECTURE.md`](ARCHITECTURE.md) ;
- règles UX : [`DESIGN.md`](DESIGN.md) ;
- critères de qualité : [`QUALITY.md`](QUALITY.md) ;
- configurations : [`guides/configurations/README.md`](guides/configurations/README.md).

## Définition de fini

Une mission est terminée lorsque ses livrables existent, que les contrôles applicables réussissent, que les limites sont explicites, que la mémoire reflète le résultat et qu’aucun problème bloquant ou important connu n’est masqué.
