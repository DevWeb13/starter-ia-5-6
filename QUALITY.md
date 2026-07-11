# Checklist qualité

Ce document est la source de vérité des critères de contrôle.

## Bloquant

Un seul point coché interdit la livraison, la publication ou la fusion.

- [ ] Un livrable obligatoire manque, est vide ou ne s’ouvre pas.
- [ ] Le résultat principal ne répond pas au brief.
- [ ] Une réussite est annoncée sans vérification sur la cible réelle.
- [ ] Une donnée secrète, personnelle inutile ou sensible est exposée.
- [ ] Une suppression, un paiement, une publication externe ou une action irréversible a été exécuté sans autorisation explicite.
- [ ] Plusieurs agents ont modifié le même périmètre sans contrôle d’un écrivain unique.
- [ ] La configuration ou une commande recommandée est invalide et empêche l’usage prévu.
- [ ] Un problème important reste après le deuxième cycle de correction.

## Important

Tous les points applicables doivent être résolus avant livraison ou fusion.

- [ ] Les termes Chat, Work, Codex, Sol, Terra ou Luna se contredisent entre les documents.
- [ ] Le parcours iPhone suppose une fonction qui n’est pas signalée comme dépendante du compte.
- [ ] `AGENTS.md` ou `.codex/` est présenté comme automatiquement chargé par Work.
- [ ] Une instruction est ambiguë pour un débutant ou dépend d’un jargon non défini.
- [ ] Un lien interne, un chemin, un nom de branche ou une URL est incorrect.
- [ ] Une répétition crée deux sources de vérité concurrentes.
- [ ] Le reviewer peut écrire ou l’écrivain n’est pas clairement identifié.
- [ ] Les critères de réussite ne sont pas vérifiables.
- [ ] Une limitation réelle ou un échec d’outil est masqué.
- [ ] Une interface décrite ne respecte pas les exigences mobile-first et d’accessibilité de [`DESIGN.md`](DESIGN.md).

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
