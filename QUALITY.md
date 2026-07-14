# Checklist qualité

Ce document est la source de vérité des critères de contrôle.

## Bloquant

Un seul point coché interdit la livraison, la publication ou la fusion.

- [ ] Un livrable obligatoire manque, est vide ou ne s’ouvre pas.
- [ ] Le résultat principal ne répond pas au brief.
- [ ] Une réussite est annoncée sans vérification sur la cible réelle.
- [ ] Une donnée secrète, personnelle inutile ou sensible est exposée.
- [ ] Une action sensible a été exécutée sans autorisation humaine explicite : suppression, paiement, utilisation, modification ou transmission d’un secret, publication externe, envoi de message ou d’email, fusion dans `main`, déploiement en production ou autre action irréversible.
- [ ] Plusieurs agents ont modifié le même périmètre sans contrôle d’un écrivain unique.
- [ ] La configuration ou une commande recommandée est invalide et empêche l’usage prévu.
- [ ] Une page, un parcours principal, un script obligatoire ou le build de production échoue.
- [ ] La démonstration est présentée comme une véritable IA ou déclenche une requête externe non documentée.
- [ ] Le produit est présenté comme intégrant un fournisseur IA, une authentification ou un paiement alors que ces capacités sont hors périmètre.
- [ ] Un secret, fichier `.env` ou configuration locale Vercel est commité.
- [ ] Une fonction absente, notamment un générateur, un ZIP ou une exécution automatique, est présentée comme disponible.
- [ ] Un problème important reste après le deuxième cycle de correction.

### Kit de démarrage

- [ ] Un fichier annoncé dans le noyau minimal manque, est vide ou illisible.
- [ ] Un secret, jeton ou valeur locale est inclus dans un template.
- [ ] Le kit impose un fichier facultatif sans expliquer son utilité.
- [ ] La démonstration locale est cassée par le recentrage des pages publiques.

## Important

Tous les points applicables doivent être résolus avant livraison ou fusion.

- [ ] Les rôles de ChatGPT, Work et Codex se contredisent entre les documents ou dépendent d’un nom temporaire de modèle.
- [ ] Les guides de configuration se contredisent ou ne permettent pas de choisir un point de départ.
- [ ] Le cycle global du projet est confondu avec le workflow interne d’une mission.
- [ ] Le parcours iPhone suppose une fonction qui n’est pas signalée comme dépendante du compte.
- [ ] `AGENTS.md` ou `.codex/` est présenté comme automatiquement chargé par Work.
- [ ] Une instruction est ambiguë pour un débutant ou dépend d’un jargon non défini.
- [ ] Un lien interne, un chemin, un nom de branche ou une URL est incorrect.
- [ ] Une répétition crée deux sources de vérité concurrentes.
- [ ] Le reviewer peut écrire ou l’écrivain n’est pas clairement identifié.
- [ ] Les critères de réussite ne sont pas vérifiables.
- [ ] Une limitation réelle ou un échec d’outil est masqué.
- [ ] Une interface décrite ne respecte pas les exigences mobile-first et d’accessibilité de [`DESIGN.md`](DESIGN.md).
- [ ] L’interface déborde à 320 px, le clavier ne permet pas le parcours principal ou le thème masque une information.
- [ ] Les données fictives, l’offre future ou l’absence de sauvegarde ne sont pas clairement indiquées.
- [ ] La mémoire officielle ne reflète pas l’architecture, les contrôles, blocages ou prochaine mission réels.

### Site de ressources et kit

- [ ] Le premier prompt ne contient pas le contexte nécessaire pour commencer la mission.
- [ ] Le noyau minimal, les options et leurs cas d’usage ne sont pas distingués.
- [ ] La navigation masque les configurations, le kit, les prompts ou le point de départ.
- [ ] Une ressource annoncée n’est pas consultable depuis son lien public.

## Amélioration

Ces points renforcent le résultat mais ne bloquent pas une version valide.

- [ ] Une phrase peut être raccourcie sans perdre d’information.
- [ ] Un exemple concret supplémentaire aiderait le public visé.
- [ ] Une navigation ou un renvoi interne peut être plus direct.
- [ ] Une préférence visuelle peut être mieux documentée.
- [ ] Une optimisation future est identifiée avec un bénéfice réel.

## Décision

- **Valide** : aucun bloquant ni important ; les preuves de vérification existent.
- **À corriger** : au moins un important et un cycle reste disponible.
- **Bloqué** : au moins un bloquant, ou un important subsiste après deux cycles.
- **Améliorations reportées** : seules des améliorations non essentielles restent.

## Rapport minimal de contrôle

```text
Statut : fait et vérifié | partiel | bloqué | non tenté
Contrôles réussis : [preuves courtes]
Problèmes restants : [aucun ou liste]
Cycles utilisés : 0 | 1 | 2
```
