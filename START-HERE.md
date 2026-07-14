# Lancer un projet avec Starter IA

La question de départ est : **« Quel projet voulez-vous lancer ? »**

1. Ouvrez `/demo`.
2. Décrivez le projet et le résultat recherché.
3. Ajoutez facultativement les contraintes ou le contexte existant.
4. Déclarez uniquement le matériel et les fonctions réellement disponibles.
5. Choisissez **Lancer mon projet**.

Le traitement est local, immédiat et déterministe. Aucun fournisseur IA n’est contacté.

## Les six phases

1. **Cadrer** le problème, le résultat, les contraintes et les risques.
2. **Valider** les hypothèses de marché, de cible et de positionnement avec des preuves.
3. **Concevoir** le MVP, le parcours, les contenus et l’architecture.
4. **Construire** avec un écrivain unique, des checkpoints et des garde-fous.
5. **Vérifier** les tests, la sécurité, l’accessibilité, la qualité et la revue.
6. **Lancer et améliorer** après accord humain, avec marketing factuel, mesure et retours.

Le moteur génère 16 étapes. Elles commencent toutes au statut **non tenté**.

## Avancer dans l’espace projet

- ouvrez une seule phase principale à la fois ;
- copiez une mission ChatGPT ou Codex lorsqu’elle existe ;
- consignez une note, un lien ou une preuve ;
- choisissez entre non tenté, partiel, bloqué et fait et vérifié ;
- accordez explicitement une validation humaine lorsqu’elle est obligatoire ;
- ouvrez **« Comprendre cette étape »** pour voir le pourquoi, les rôles, le livrable et la vérification.

Copier une mission ne l’exécute pas. « Fait et vérifié » est toujours une déclaration de l’utilisateur. Une étape sensible ne peut pas recevoir ce statut sans son accord humain.

## Workflow recommandé

Starter IA recommande le chemin le plus simple compatible avec les déclarations :

- iPhone + Codex Remote + Ubuntu si toutes les conditions sont réunies ;
- iPhone + Remote Control sur un autre système si la fonction et une machine active sont déclarées ;
- ChatGPT + Codex local sans Remote Control ;
- ChatGPT + Codex local si le pilotage distant n’est pas fiable ;
- préparation ChatGPT avec installation ou activation de Codex encore nécessaire.

GitHub et Vercel enrichissent la livraison mais ne sont pas obligatoires pour créer un projet.

## Stockage et migration

Les projets restent dans `starter-ia.projects.v2` sur cet appareil. Aucun compte ni synchronisation n’existe. Les anciens projets `ai-project-launcher.projects.v1` sont validés puis migrés sans supprimer la source ; aucune progression ou preuve n’est inventée.

Le Dashboard permet de reprendre, exporter, supprimer ou réinitialiser après confirmation. La réinitialisation sauvegarde d’abord la donnée v2 brute.

## Qui fait quoi

- **ChatGPT** aide à analyser, comparer et rédiger à partir de la mission copiée.
- **Codex** intervient sur les fichiers et contrôles lorsque l’utilisateur lance réellement la mission.
- **Starter IA** prépare localement le parcours et enregistre l’état déclaré.
- **L’humain** approuve fusion, production, suppression, paiement, secret, publication, message et action irréversible.

Les guides [Chat](guides/configurations/chat.md), [Work](guides/configurations/work.md), [Codex local](guides/configurations/codex-local.md), [Codex Remote](guides/configurations/codex-remote.md) et [Work + Codex](guides/configurations/hybrid-work-codex.md) restent des ressources techniques secondaires.
