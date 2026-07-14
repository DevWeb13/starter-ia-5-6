# Formation express — 30 minutes

Objectif : comprendre les rôles de ChatGPT, Work et Codex, préparer un dépôt léger et livrer une première mission vérifiée.

Chaque partie suit la même logique : une notion, une action et un point de contrôle.

## 1. Choisir le bon environnement — 5 min

### Notion

- **ChatGPT** aide à réfléchir, décider, rédiger et contrôler.
- **Work** peut conduire une mission cloud complète avec les fichiers et outils réellement disponibles.
- **Codex** travaille sur un environnement de code et un dépôt dans le périmètre autorisé.

### Action

Classez ces besoins :

1. clarifier le résultat attendu d’une fonctionnalité : ChatGPT ;
2. produire et relire plusieurs documents cloud : Work si les sources y sont disponibles ;
3. modifier une application et lancer ses tests : Codex.

### Point de contrôle

Vous savez expliquer le choix sans confondre outil, modèle et agent.

## 2. Préparer le noyau du projet — 6 min

### Notion

Codex agit mieux avec un contexte court, un état réel, des règles permanentes et une première mission précise. Une pile de documents vides n’aide pas.

### Action

Copiez depuis [`templates/starter-kit/`](../templates/starter-kit/README.md) :

1. `PROJECT.md` ;
2. `STATUS.md` ;
3. `AGENTS.md` ;
4. `prompts/FIRST-MISSION.md`.

Ajoutez une option seulement si son besoin est présent.

### Point de contrôle

Chaque fichier contient une information utile et actuelle ; aucun secret n’y apparaît.

## 3. Écrire une première mission — 5 min

### Notion

Une bonne mission décrit un résultat observable, le contexte utile, les limites et les contrôles de réussite.

### Action

Adaptez [`templates/BRIEF.md`](../templates/BRIEF.md) ou `prompts/FIRST-MISSION.md`. Préférez une petite amélioration vérifiable à une reconstruction complète.

### Point de contrôle

Une autre personne peut répondre à trois questions : que produire, avec quelles limites et comment prouver que c’est fini ?

## 4. Passer de ChatGPT à Codex — 5 min

### Notion

Le passage de relais n’est pas automatique. ChatGPT prépare le cadre ; Codex doit relire l’état du dépôt, ses règles et la mission avant d’écrire.

### Action

1. Cadrez le besoin dans ChatGPT.
2. Enregistrez les décisions utiles dans les fichiers du projet.
3. Confiez la mission bornée à Codex sur une branche dédiée.

### Point de contrôle

Codex dispose du résultat attendu, des exclusions et des commandes de contrôle autorisées.

## 5. Vérifier puis contrôler — 5 min

### Notion

- **Vérifier** : confirmer que le résultat existe et fonctionne sur sa cible.
- **Contrôler** : relire le résultat avec le brief et chercher les défauts ou affirmations non prouvées.

### Action

1. Faites exécuter à Codex les contrôles pertinents.
2. Relisez le diff et le résultat réel.
3. Utilisez ChatGPT ou [`prompts/REVIEW.md`](../prompts/REVIEW.md) pour une revue indépendante.

### Point de contrôle

Le rapport distingue preuves, limites et suppositions. Un problème bloquant ou important est corrigé avant livraison.

## 6. Aller plus loin sans alourdir — 4 min

Ajoutez :

- `DECISIONS.md` si plusieurs choix durables doivent être expliqués ;
- `QUALITY.md` si les critères dépassent quelques lignes dans la mission ;
- `.codex/config.toml` si l’équipe partage une configuration Codex prudente ;
- Work si une mission cloud complète apporte une valeur claire.

Ne construisez pas une automatisation, un générateur ou un stockage distant avant d’avoir observé un besoin réel.

## Fin de la formation

Vous savez maintenant choisir l’environnement, préparer quatre fichiers utiles, passer un brief à Codex et contrôler le résultat dans ChatGPT.
