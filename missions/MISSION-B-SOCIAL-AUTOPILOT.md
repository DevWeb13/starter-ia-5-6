# Mission B — Starter manuel de référence pour Social Autopilot

## But de la mission

Valider le futur contrat de sortie de Starter IA avant de programmer le générateur.

La mission doit créer manuellement un dossier de préparation réellement utilisable par Codex pour le projet pilote **Social Autopilot**, puis mesurer ce qui est utile, redondant ou manquant.

Cette mission ne transforme pas encore l’application Starter IA.

## Projet pilote

Social Autopilot est un projet personnel destiné à vérifier si ChatGPT peut utiliser une application MCP pour lire puis, plus tard, gérer certaines interactions d’un réseau social.

Le pilote technique commence sans réseau social réel :

- aucun compte connecté ;
- aucun jeton ;
- aucune requête vers Bluesky, Threads ou X ;
- aucune publication ;
- aucune réponse automatique ;
- aucune dépense.

Le premier objectif est uniquement de vérifier qu’un starter préparé par Starter IA permet à Codex de commencer un projet proprement, avec des limites comprises et respectées.

## Hypothèses à tester

La Mission B doit apporter des faits sur les questions suivantes :

1. Quels fichiers Codex lit-il réellement avant de commencer ?
2. Certains documents sont-ils redondants ?
3. Quelles informations manquent au premier démarrage ?
4. La première mission est-elle suffisamment claire pour éviter une longue série de questions ?
5. Les frontières de sécurité empêchent-elles les connexions ou écritures prématurées ?
6. Le même dossier reste-t-il compréhensible depuis VS Code et la CLI ?
7. Combien de temps la préparation manuelle prend-elle ?
8. Quels éléments devront être toujours générés et lesquels devront devenir facultatifs ?

## Organisation générale

La Mission B est séparée en deux portes. La seconde ne commence pas automatiquement lorsque la première est terminée.

### Porte B1 — Préparer le starter

Créer manuellement le dossier de préparation, sans code applicatif.

### Porte B2 — Utiliser le starter

Après revue humaine du dossier, exécuter une première mission Codex volontairement petite et sans réseau réel.

## Dépôt cible

Nom provisoire :

```text
chatgpt-social-autopilot
```

Règles :

- dépôt séparé de Starter IA ;
- dépôt privé au départ ;
- aucune publication publique pendant la Mission B ;
- branche dédiée pour chaque mission ;
- `main` jamais modifiée directement ;
- aucun secret commité.

La création du dépôt et le passage à la Porte B2 doivent rester des actions visibles et vérifiées.

## Arborescence manuelle de référence

Le premier starter doit contenir au minimum :

```text
chatgpt-social-autopilot/
├── START-HERE.md
├── PROJECT.md
├── STATUS.md
├── DECISIONS.md
├── ARCHITECTURE.md
├── AGENTS.md
├── QUALITY.md
├── SECURITY.md
├── EVALUATION.md
├── prompts/
│   └── FIRST-MISSION.md
└── .codex/
    ├── config.toml
    └── agents/
        ├── explorer.toml
        └── reviewer.toml
```

Cette liste est une hypothèse de travail, pas encore le contrat définitif du générateur.

## Rôle attendu de chaque fichier

### `START-HERE.md`

Donner l’ordre de lecture et les commandes de démarrage en moins d’une page.

### `PROJECT.md`

Décrire le problème, le résultat attendu, le périmètre du MVP, les exclusions et les utilisateurs visés.

### `STATUS.md`

Présenter uniquement l’état réel : ce qui existe, ce qui n’existe pas, la mission active et la prochaine action vérifiable.

### `DECISIONS.md`

Journal append-only des décisions importantes et de leur justification.

### `ARCHITECTURE.md`

Décrire l’architecture envisagée sans présenter les hypothèses non testées comme des faits : serveur MCP TypeScript, outils en lecture et écriture, stockage d’état et futures API sociales.

### `AGENTS.md`

Définir les règles de travail : un seul écrivain, spécialistes en lecture seule, branche dédiée, contrôles réels et autorisation humaine pour les actions sensibles.

### `QUALITY.md`

Définir les niveaux bloquant, important et amélioration, ainsi que les contrôles minimaux du projet TypeScript.

### `SECURITY.md`

Centraliser les limites : secrets, permissions, journalisation, révocation, anti-doublon, absence de publication réelle pendant le pilote et validation humaine avant toute écriture externe.

### `EVALUATION.md`

Consigner le retour d’usage du starter : fichiers consultés, questions posées, ambiguïtés, documents inutiles, informations manquantes et temps de préparation.

### `prompts/FIRST-MISSION.md`

Contenir une mission Codex directement copiable, petite, vérifiable et strictement limitée.

### `.codex/config.toml`

Appliquer une configuration prudente : écriture limitée au workspace, approbation à la demande et accès réseau désactivé pour le premier test.

### Agents Explorer et Reviewer

- Explorer inspecte et collecte les faits sans modifier les fichiers.
- Reviewer effectue une revue indépendante et classe les défauts sans corriger lui-même.

## Contenu produit minimal de Social Autopilot

### Problème

Tester si une tâche ChatGPT peut, à terme, utiliser une application MCP pour lire des interactions sociales, conserver un état anti-doublon et effectuer des actions contrôlées.

### Résultat futur envisagé

Un prototype personnel mono-compte pouvant éventuellement :

- lire les publications du compte ;
- lire les mentions et réponses ;
- créer une publication textuelle ;
- répondre à une interaction ;
- conserver les identifiants déjà traités ;
- journaliser les actions et erreurs ;
- désactiver immédiatement toute écriture.

Ces capacités futures ne sont pas considérées comme disponibles pendant la Mission B.

### Premier réseau envisagé après le pilote local

Bluesky est le premier candidat technique. Threads pourra être étudié ensuite. X reste reporté.

Aucune intégration réseau n’est incluse dans la première mission Codex.

## Fonctionnalités hors périmètre

- plusieurs comptes ou utilisateurs ;
- plusieurs réseaux simultanés ;
- interface graphique ;
- tableau de bord ;
- paiement ou abonnement ;
- statistiques avancées ;
- génération d’images ou de vidéos ;
- likes, abonnements ou republications automatiques ;
- messages privés ;
- croissance artificielle ;
- produit public ;
- soumission dans un répertoire d’applications ;
- intégration X ;
- appel à l’API OpenAI depuis le serveur.

## Contraintes techniques initiales

- TypeScript et Node.js ;
- serveur MCP minimal ;
- Vitest pour les tests ;
- fonctionnement déterministe ;
- données simulées stockées dans le dépôt pour la première mission ;
- aucune dépendance à une machine personnelle toujours allumée comme exigence produit finale ;
- aucun réseau pendant le premier test ;
- aucune clé dans GitHub ;
- journalisation sans contenu sensible ;
- erreurs explicites et non destructives.

## Contraintes de sécurité

- ne jamais demander ou stocker le mot de passe d’un réseau social ;
- limiter les permissions au strict nécessaire ;
- prévoir la révocation future des jetons ;
- empêcher les doublons avant toute future écriture ;
- prévoir un interrupteur d’arrêt global ;
- ne jamais publier d’information privée ;
- ne jamais automatiser l’engagement artificiel ;
- ne pas affirmer qu’une boucle autonome est possible avant vérification réelle dans ChatGPT ;
- exiger une validation humaine avant la première écriture sur un service externe.

## Porte B1 — Livrables

La préparation du starter est terminée seulement lorsque :

- tous les fichiers de l’arborescence existent ;
- les fichiers se citent correctement par liens relatifs ;
- aucune contradiction active n’existe entre eux ;
- l’état réel indique clairement qu’aucun code n’existe ;
- le premier prompt n’autorise ni réseau ni publication ;
- la configuration Codex bloque le réseau ;
- les agents spécialisés sont en lecture seule ;
- les actions sensibles sont explicitement réservées à l’humain ;
- `EVALUATION.md` contient une grille prête à être remplie.

## Porte B2 — Première mission Codex

### Branche prévue

```text
work/01-mcp-readonly-foundation
```

### Titre de pull request prévu

```text
feat: add the read-only MCP foundation
```

### Mission

Créer une fondation TypeScript minimale pour un serveur MCP local contenant un seul outil de lecture nommé par exemple :

```text
get_recent_posts_mock
```

L’outil doit :

- lire un petit jeu de données simulées versionné dans le dépôt ;
- retourner une structure stable et documentée ;
- ne modifier aucune donnée ;
- ne faire aucune requête réseau ;
- ne charger aucun secret ;
- inclure des tests unitaires ;
- inclure les commandes de développement et de test ;
- rester assez petit pour permettre une revue complète.

### Interdictions de la première mission

- aucune API Bluesky, Threads ou X ;
- aucun outil `create_post` ou `reply_to_post` ;
- aucun OAuth ;
- aucune base distante ;
- aucun déploiement ;
- aucune tâche planifiée ChatGPT ;
- aucune interface ;
- aucune dépendance non nécessaire ;
- aucune modification du dépôt Starter IA.

### Contrôles attendus

- installation reproductible ;
- lint ;
- TypeScript ;
- tests unitaires ;
- build ;
- test manuel local de l’outil de lecture si l’environnement le permet ;
- revue indépendante ;
- `git diff --check`.

## Grille d’évaluation du starter

Après la première mission, renseigner pour chaque fichier :

| Fichier | Lu par Codex | Utile | Redondant | Informations manquantes | Action proposée |
|---|---|---|---|---|---|
| `START-HERE.md` | À mesurer | À mesurer | À mesurer | À mesurer | Conserver, modifier ou retirer |
| `PROJECT.md` | À mesurer | À mesurer | À mesurer | À mesurer | Conserver, modifier ou retirer |
| `STATUS.md` | À mesurer | À mesurer | À mesurer | À mesurer | Conserver, modifier ou retirer |
| `DECISIONS.md` | À mesurer | À mesurer | À mesurer | À mesurer | Conserver, modifier ou retirer |
| `ARCHITECTURE.md` | À mesurer | À mesurer | À mesurer | À mesurer | Toujours ou conditionnel |
| `AGENTS.md` | À mesurer | À mesurer | À mesurer | À mesurer | Conserver, modifier ou retirer |
| `QUALITY.md` | À mesurer | À mesurer | À mesurer | À mesurer | Conserver, modifier ou retirer |
| `SECURITY.md` | À mesurer | À mesurer | À mesurer | À mesurer | Toujours ou conditionnel |
| `EVALUATION.md` | À mesurer | À mesurer | À mesurer | À mesurer | Réservé aux projets pilotes ou généraliser |
| `FIRST-MISSION.md` | À mesurer | À mesurer | À mesurer | À mesurer | Conserver, modifier ou retirer |
| configuration Codex | À mesurer | À mesurer | À mesurer | À mesurer | Paramétrer ou simplifier |
| agents Codex | À mesurer | À mesurer | À mesurer | À mesurer | Toujours ou conditionnels |

Ajouter également :

- durée de préparation manuelle ;
- nombre de questions de clarification posées par Codex ;
- erreurs dues à un manque de contexte ;
- règles ignorées ou difficiles à comprendre ;
- fichiers jamais consultés ;
- éléments qui auraient dû être générés automatiquement.

## Critères de réussite de la Mission B

La Mission B réussit si :

1. un dépôt privé séparé contient un starter cohérent et sans secret ;
2. Codex peut commencer la première mission à partir de ce dossier ;
3. le premier outil MCP simulé est petit, testé et sans réseau ;
4. aucune publication ni connexion sociale n’est effectuée ;
5. le retour d’usage distingue clairement noyau permanent et modules facultatifs ;
6. les ambiguïtés et redondances sont consignées honnêtement ;
7. la Mission C peut définir le générateur à partir de faits plutôt que d’intuition.

## Échec utile

La Mission B reste utile même si le starter est trop lourd ou si Codex demande beaucoup de précisions. Ces résultats doivent être enregistrés et utilisés pour réduire ou corriger le futur contrat de génération.

## Actions nécessitant une validation humaine explicite

- création du dépôt cible si sa visibilité ou son propriétaire est ambigu ;
- passage du dépôt de privé à public ;
- connexion à un compte social réel ;
- ajout d’un secret ou jeton dans un hébergeur ;
- activation de l’accès réseau de Codex ;
- ajout d’un outil d’écriture externe ;
- première publication ou réponse réelle ;
- achat ou activation d’un service payant ;
- déploiement public ;
- fusion d’une pull request ;
- suppression de données, de branches ou de dépôts.

## Fin de mission

À la fin de la Mission B, ne pas commencer automatiquement la Mission C.

Produire d’abord un rapport factuel contenant :

- le starter réellement utilisé ;
- le résultat de la première mission ;
- les contrôles exécutés ;
- les fichiers utiles, inutiles ou manquants ;
- les changements recommandés pour le contrat du générateur ;
- les décisions qui nécessitent encore un arbitrage humain.
