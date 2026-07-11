# Commencer sur iPhone en moins de dix minutes

Objectif : lancer une première mission sûre dans l’app ChatGPT et obtenir un résultat concret, réellement vérifié.

## 0–2 min — Ouvrir le bon espace

1. Ouvrez l’app ChatGPT à jour sur votre iPhone.
2. Créez un Projet nommé `Starter IA` ou ouvrez un Projet existant.
3. Vérifiez que **Work** est disponible pour lancer une mission en plusieurs étapes.

Si Work n’apparaît pas, le parcours est bloqué sur ce compte pour le moment. Utilisez Chat pour préparer le brief, sans prétendre avoir exécuté la mission.

## 2–4 min — Ajouter les règles du Projet

Copiez ceci dans les instructions du Projet :

```text
Pour chaque mission : clarifie le résultat attendu sans me questionner si une hypothèse sûre suffit. Tu es l’orchestrateur et l’unique écrivain. Utilise au maximum trois sous-agents, surtout en lecture seule, pour analyser et contrôler. Présente un plan avant toute modification. Vérifie chaque résultat annoncé. Limite-toi à deux cycles revue → correction → vérification. Demande mon accord avant suppression, paiement, publication externe ou action irréversible, sauf autorisation explicite déjà donnée dans mon brief. Termine avec le statut : fait et vérifié, partiel, bloqué ou non tenté.
```

Ces instructions appartiennent au Projet ChatGPT. Work ne charge pas automatiquement les fichiers `AGENTS.md` ou `.codex/` de ce dépôt.

## 4–6 min — Choisir simplement

- Choisissez **Terra** par défaut.
- Prenez **Sol** si la mission comporte plusieurs dépendances difficiles à coordonner.
- Prenez **Luna** pour une tâche simple, répétitive ou volumineuse.

Le modèle ne remplace ni un brief clair ni une vérification.

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

La première mission est réussie seulement si :

- le résultat concret demandé existe ;
- il s’ouvre et contient toutes les parties annoncées ;
- les informations manquantes ou non vérifiables sont signalées ;
- aucune publication ou action sensible n’a été exécutée sans autorisation ;
- le rapport utilise un statut honnête.

Statuts possibles :

- **Fait et vérifié** : tout le résultat demandé existe et les contrôles ont réussi.
- **Partiel** : une partie utile est prête, mais il manque un élément identifié.
- **Bloqué** : une dépendance ou une autorisation empêche de continuer.
- **Non tenté** : l’action n’a pas été exécutée.

## Ensuite

Remplacez l’exemple par votre besoin avec [`templates/BRIEF.md`](templates/BRIEF.md), puis suivez [`WORKFLOW.md`](WORKFLOW.md). Pour apprendre la méthode pas à pas, ouvrez [`course/FORMATION-EXPRESS.md`](course/FORMATION-EXPRESS.md).
