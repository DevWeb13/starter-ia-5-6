# Formation express — 30 minutes

Objectif : savoir choisir le bon espace, écrire un brief, utiliser des sous-agents et livrer un résultat vérifié depuis l’iPhone.

Chaque partie suit la même logique : une notion, une action et un point de contrôle.

## 1. Comprendre Chat, Work et Codex — 4 min

### Notion

- **Chat** répond vite à une question, aide à décider ou rédige un texte court.
- **Work** exécute une mission complète avec plusieurs étapes, fichiers, plugins ou outils.
- **Codex** est spécialisé dans le développement sur un environnement de code et un dépôt.

Sur iPhone, le parcours de ce starter utilise Chat et Work. Codex n’y constitue pas un environnement local autonome ; un pilotage distant peut exister selon le compte et l’environnement connecté.

### Action

Classez ces besoins :

1. Reformuler un SMS : Chat.
2. Produire trois documents, les vérifier et les livrer : Work.
3. Modifier une application, lancer les tests et préparer une PR : Codex dans un environnement compatible.

### Point de contrôle

Vous savez expliquer le choix en une phrase sans confondre outil, modèle et agent.

## 2. Configurer le Projet sur iPhone — 5 min

### Notion

Un Projet regroupe le contexte et les instructions durables d’un même sujet. Il ne charge pas automatiquement `AGENTS.md` ou `.codex/`.

### Action

1. Créez un Projet `Starter IA` dans l’app ChatGPT.
2. Ajoutez les instructions courtes de [`START-HERE.md`](../START-HERE.md).
3. Choisissez Terra par défaut, Sol pour une orchestration complexe ou Luna pour une tâche simple, répétitive ou volumineuse.

### Point de contrôle

Relisez les instructions du Projet : elles doivent nommer un seul écrivain, trois sous-agents maximum, deux cycles maximum et les actions sensibles soumises à accord.

## 3. Écrire un bon brief — 5 min

### Notion

Un bon brief décrit un résultat observable. Il donne le contexte utile sans noyer l’agent et précise comment vérifier la réussite.

### Action

Transformez :

```text
Aide-moi avec mon offre.
```

En :

```text
Compare mes deux offres dans un tableau d’une page pour des indépendants. Fais apparaître prix, contenu, limites et recommandation. N’invente aucune donnée manquante. La mission est réussie si chaque critère est renseigné ou marqué « à confirmer ». Ne publie rien.
```

Créez ensuite votre brief avec [`templates/BRIEF.md`](../templates/BRIEF.md).

### Point de contrôle

Une autre personne doit pouvoir répondre à trois questions : que produire, avec quelles limites et comment prouver que c’est fini ?

## 4. Utiliser les sous-agents — 5 min

### Notion

Un sous-agent est un assistant chargé d’un angle précis. En lecture seule, il analyse sans modifier. Plusieurs avis sont utiles seulement s’ils sont distincts.

### Action

Pour un dossier commercial, déléguez au maximum :

- un contrôle de clarté pour un débutant ;
- un contrôle des affirmations et informations manquantes ;
- un contrôle de cohérence et de complexité.

L’orchestrateur synthétise. L’agent écrivain reste seul à modifier le dossier.

### Point de contrôle

Chaque sous-agent a un objectif borné, aucun n’écrit, et le total ne dépasse pas trois.

## 5. Appliquer la boucle qualité — 6 min

### Notion

- **Vérifier** : confirmer que le résultat existe et fonctionne sur sa cible.
- **Revoir** : chercher indépendamment les défauts.
- **Corriger** : faire modifier le résultat par l’écrivain.

Un cycle est : revue → correction → vérification. Deux cycles maximum. Un bloquant ou important restant interdit de déclarer la mission réussie.

### Action

1. Ouvrez le livrable réel.
2. Appliquez [`QUALITY.md`](../QUALITY.md).
3. Demandez la revue avec [`prompts/REVIEW.md`](../prompts/REVIEW.md).
4. Faites corriger par l’écrivain.
5. Vérifiez de nouveau le fichier ou le service cible.

### Point de contrôle

Le rapport distingue les preuves des suppositions et indique le nombre de cycles utilisés.

## 6. Créer une automatisation — 5 min

### Notion

Une automatisation répète une mission à une cadence définie. Elle doit être plus prudente qu’une mission interactive : elle ne peut pas compter sur une réponse immédiate de l’utilisateur.

### Action

1. Ouvrez la fonction d’automatisation si elle est disponible sur votre compte.
2. Planifiez un audit hebdomadaire.
3. Copiez [`prompts/AUTOMATION.md`](../prompts/AUTOMATION.md).
4. Vérifiez que le prompt interdit les doublons, limite l’écriture à une issue réelle et n’autorise aucune modification du dépôt.
5. Contrôlez les premières exécutions et désactivez la tâche si elle produit du bruit.

### Point de contrôle

L’automatisation ne publie rien quand aucune correction bloquante ou importante n’est nécessaire.

## Fin de la formation

Vous savez maintenant choisir Chat, Work ou Codex, configurer un Projet iPhone, écrire un brief, déléguer jusqu’à trois lectures, appliquer deux cycles de qualité au maximum et planifier un audit prudent.

Prochaine étape : copiez [`prompts/MASTER-WORK.md`](../prompts/MASTER-WORK.md) et remplacez les champs par une mission réelle.
