# Cadre du projet

## Objectif

Starter IA 5.6 aide une personne travaillant d’abord sur iPhone à choisir entre Chat, Work et Codex, écrire un brief exploitable, déléguer des analyses en lecture seule et obtenir un livrable vérifié avec peu de friction.

## Public

- Débutants qui veulent une méthode immédiatement copiable.
- Indépendants et petites équipes qui utilisent ChatGPT pour produire des fichiers ou piloter des outils.
- Développeurs qui veulent préparer une future utilisation de Codex sans alourdir leur dépôt.

## Principes stables

- Chat sert aux questions, décisions rapides et brouillons courts.
- Work sert aux missions complètes avec plusieurs étapes, fichiers, plugins et outils.
- Codex est spécialisé dans le développement. Il n’est pas un environnement Codex local autonome sur iPhone ; un éventuel pilotage distant dépend du compte et de l’environnement connecté.
- Sol est recommandé pour l’orchestration complexe.
- Terra est le choix par défaut pour la majorité du travail et les analyses parallèles.
- Luna est recommandé pour les tâches simples, répétitives ou volumineuses.
- Les sous-agents servent surtout à lire, analyser et contrôler.
- Un seul agent est autorisé à modifier les fichiers ou GitHub.
- La correction est limitée à deux cycles complets.
- Une réussite doit être vérifiée avant d’être annoncée.

## Périmètre de la version 0.1

- Un parcours iPhone de moins de dix minutes.
- Une méthode de travail canonique.
- Une checklist qualité à trois niveaux.
- Trois prompts courts et un modèle de brief.
- Une formation express d’environ trente minutes.
- Une identité visuelle documentée en Markdown.
- Une configuration prudente pour une future utilisation de Codex.

## Hors périmètre

- Fournir un accès à un modèle, un abonnement, un plugin ou un outil.
- Garantir la disponibilité de Work, GPT-5.6, Sol, Terra, Luna ou Codex sur tous les comptes.
- Remplacer une validation humaine pour un paiement, une suppression, une publication externe ou une action irréversible.
- Installer automatiquement la configuration Codex dans Work.
- Construire un framework, une application ou une infrastructure CI dans cette version.

## Sources de vérité

- Processus : [`WORKFLOW.md`](WORKFLOW.md)
- Critères de qualité : [`QUALITY.md`](QUALITY.md)
- Identité visuelle : [`DESIGN.md`](DESIGN.md)
- Consignes Codex futures : [`AGENTS.md`](AGENTS.md) et [`.codex/`](.codex/)

## Définition de fini

La version peut être livrée lorsque tous les fichiers obligatoires existent, que les liens internes et la configuration sont cohérents, qu’aucun problème bloquant ou important ne reste après au plus deux cycles, et que les actions externes annoncées ont été vérifiées sur leur système cible.
