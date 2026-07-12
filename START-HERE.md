# Parcours Work sur iPhone en moins de dix minutes

Ce guide décrit **la configuration Work sur iPhone**, l’une des cinq configurations Starter IA. Si votre mission relève plutôt d’un échange court, d’un dépôt local, de Remote Control ou d’un passage de relais, commencez par le [sélecteur des configurations](guides/configurations/README.md).

Objectif : lancer une première mission Work sûre dans l’app ChatGPT et obtenir un résultat concret, réellement vérifié.

## 0–2 min — Vérifier Work

1. Ouvrez l’app ChatGPT à jour sur votre iPhone.
2. Créez un Projet nommé `Starter IA` ou ouvrez un Projet existant.
3. Vérifiez que **Work** est disponible pour lancer une mission en plusieurs étapes.

Si Work n’apparaît pas, seule cette configuration est indisponible sur ce compte. Utilisez [Chat](guides/configurations/chat.md) pour réfléchir ou préparer un brief, [Codex local](guides/configurations/codex-local.md) pour agir sur un dépôt, ou [Codex Remote](guides/configurations/codex-remote.md) si une session locale est accessible depuis l’iPhone.

## 2–4 min — Ajouter les règles du Projet

Copiez ceci dans les instructions du Projet :

```text
Pour chaque mission : clarifie le résultat attendu sans me questionner si une hypothèse sûre suffit. Tu es l’orchestrateur et l’unique écrivain. Utilise au maximum trois sous-agents, tous en lecture seule, pour analyser et contrôler. Présente un plan avant toute modification. Vérifie chaque résultat annoncé. Limite-toi à deux cycles revue → correction → vérification. Demande mon accord avant suppression, paiement, publication externe ou action irréversible, sauf autorisation explicite déjà donnée dans mon brief. Termine avec le statut : fait et vérifié, partiel, bloqué ou non tenté.
```

Ces instructions appartiennent au Projet ChatGPT. Work ne charge pas automatiquement les fichiers `AGENTS.md` ou `.codex/` de ce dépôt.

## 4–6 min — Choisir simplement

- Choisissez le modèle généraliste disponible par défaut.
- Utilisez un modèle plus capable si la mission comporte plusieurs dépendances difficiles.
- Préférez un modèle plus léger pour une tâche simple, répétitive ou volumineuse.

Les noms et disponibilités de modèles évoluent selon le compte. Le modèle ne remplace ni un brief clair ni une vérification.

## 6–9 min — Lancer une première mission

Copiez ce brief dans Work :

```text
Transforme mes notes en un plan d’action d’une page.

Résultat attendu : un document clair avec objectif, priorités, prochaines actions et points à vérifier.
Méthode : utilise au maximum deux sous-agents en lecture seule, l’un pour les oublis et l’autre pour la clarté. Tu es le seul écrivain.
Qualité : vérifie que chaque partie demandée existe, corrige les problèmes bloquants ou importants, puis relis le fichier réellement enregistré.
Limites : ne publie rien, ne supprime rien et n’invente aucune information manquante ; signale-la.
Livraison : donne le fichier et un rapport de quatre lignes maximum avec le statut réel.

Mes notes :
[COLLEZ VOS NOTES ICI]
```

## 9–10 min — Vérifier la livraison

La mission est réussie seulement si le résultat existe, s’ouvre, contient les parties annoncées, signale les informations non vérifiables et n’a déclenché aucune action sensible non autorisée.

- **Fait et vérifié** : tout le résultat demandé existe et les contrôles ont réussi.
- **Partiel** : une partie utile est prête, avec un manque identifié.
- **Bloqué** : une dépendance propre à cette mission empêche de continuer.
- **Non tenté** : l’action n’a pas été exécutée.

## Ensuite

Remplacez l’exemple par votre besoin avec [`templates/BRIEF.md`](templates/BRIEF.md), puis suivez [`WORKFLOW.md`](WORKFLOW.md). Pour un passage de relais vers un dépôt, utilisez le guide [Work + Codex](guides/configurations/hybrid-work-codex.md).
