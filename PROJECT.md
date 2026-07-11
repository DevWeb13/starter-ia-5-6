# Cadre du projet

## Identités complémentaires

**Starter IA 5.6** est la méthode et le dépôt open source. Il aide une personne travaillant d’abord sur iPhone à choisir entre Chat, Work et Codex, écrire un brief exploitable, déléguer des analyses en lecture seule et obtenir un livrable vérifié avec peu de friction.

**AI Project Launcher** est le produit SaaS exemple construit dans ce dépôt. Sa promesse provisoire est :

> Transformer une idée de produit en plan clair, technique et commercial prêt à exécuter avec une équipe IA.

Les deux noms ne sont pas interchangeables : le premier désigne la méthode, le second l’application de démonstration.

## Public

- Indépendants qui veulent cadrer un produit avant d’investir dans son développement.
- Petites équipes qui doivent aligner produit, technique et acquisition.
- Débutants qui veulent une méthode immédiatement copiable.
- Développeurs qui pilotent des agents et veulent des décisions vérifiables dans le dépôt.

## Principes stables

- Chat sert aux questions, décisions rapides et brouillons courts.
- Work sert aux missions complètes avec plusieurs étapes, fichiers, plugins et outils.
- Codex est spécialisé dans le développement. Il n’est pas un environnement Codex local autonome sur iPhone ; un éventuel pilotage distant dépend du compte et de l’environnement connecté.
- Sol est recommandé pour l’orchestration complexe.
- Terra est le choix par défaut pour la majorité du travail et les analyses parallèles.
- Luna est recommandé pour les tâches simples, répétitives ou volumineuses.
- Les sous-agents servent surtout à lire, analyser et contrôler.
- Un seul agent est autorisé à modifier les fichiers, GitHub ou Vercel.
- La correction est limitée à deux cycles complets.
- Une réussite doit être vérifiée avant d’être annoncée.

## Historique v0.1

La version 0.1 a livré le parcours iPhone, la méthode, la checklist qualité, trois prompts, un modèle de brief, une formation express, une identité visuelle et une configuration Codex prudente.

Les fichiers documentaires restent des ressources actives. La restriction historique « pas d’application ni de CI » est levée par la mission `work/01-foundation`, qui fait évoluer le dépôt vers un starter SaaS exécutable.

## Périmètre de la phase 01 — Fondation publiable

- Application Next.js moderne déployable sur Vercel.
- Landing, fonctionnalités, tarifs, démonstration, dashboard, documentation et 404.
- Démonstration locale sans IA réelle, compte, base de données ou paiement.
- Thèmes clair et sombre, responsive 320 px, clavier et réduction des animations.
- Vitest, Playwright, GitHub Actions et preview Vercel.
- Mémoire durable et dossier marketing.

## Hors périmètre de cette phase

- Appeler un modèle IA ou promettre la qualité d’une analyse IA.
- Authentifier un utilisateur ou conserver ses projets.
- Traiter un paiement ou commercialiser Free/Pro.
- Inventer clients, résultats, chiffres, avis ou preuves sociales.
- Garantir la disponibilité de Work, GPT-5.6, Sol, Terra, Luna ou Codex sur tous les comptes.

## Livrables durables obligatoires

```text
README.md
START-HERE.md
PROJECT.md
WORKFLOW.md
QUALITY.md
AGENTS.md
DESIGN.md
ROADMAP.md
STATUS.md
DECISIONS.md
ARCHITECTURE.md
CHANGELOG.md
marketing/POSITIONING.md
marketing/PERSONAS.md
marketing/MESSAGING.md
marketing/SEO.md
```

Les ressources historiques `prompts/`, `templates/`, `course/` et `.codex/` sont conservées.

## Sources de vérité

- État et prochaine mission : [`STATUS.md`](STATUS.md)
- Phases : [`ROADMAP.md`](ROADMAP.md)
- Décisions : [`DECISIONS.md`](DECISIONS.md)
- Architecture : [`ARCHITECTURE.md`](ARCHITECTURE.md)
- Processus : [`WORKFLOW.md`](WORKFLOW.md)
- Critères de qualité : [`QUALITY.md`](QUALITY.md)
- Identité visuelle : [`DESIGN.md`](DESIGN.md)
- Consignes agents : [`AGENTS.md`](AGENTS.md) et [`.codex/`](.codex/)

## Définition de fini

Une phase peut être proposée en revue lorsque ses livrables existent, que les scripts applicables réussissent, que la cible réelle accessible a été contrôlée, que la mémoire reflète le résultat, qu’aucun secret n’est commité et qu’aucun problème bloquant ou important connu n’est masqué.
