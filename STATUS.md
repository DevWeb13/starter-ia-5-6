# État du projet

**Dernière mise à jour :** 14 juillet 2026

## État officiel

- **Mission 11 — recentrage sur les guides et templates : en cours.**
- **Branche :** `work/11-simplify-starter-ia`.
- **Direction active :** site de ressources pratique et kit de démarrage statique.
- **Direction abandonnée :** générateur de starters, ZIP, manifeste automatique et pilote Social Autopilot.

L’état instantané de la branche, de la pull request et des contrôles se vérifie dans GitHub. Ce document décrit le produit et la direction réellement enregistrés.

## Disponible aujourd’hui

### Ressources publiques

- accueil et pages publiques Next.js ;
- comparatif de ChatGPT, Work, Codex local, Codex Remote et Work + Codex ;
- guides de configuration dans `guides/configurations/` ;
- prompts dans `prompts/`, modèle de brief et formation express ;
- kit statique minimal dans `templates/starter-kit/`, consultable et copiable fichier par fichier.

### Démonstration locale historique

Le MVP local version 2 reste implémenté et testé :

- moteur déterministe de six phases et 16 étapes ;
- recommandations fondées sur l’environnement déclaré ;
- Dashboard et espace projet guidé ;
- stockage `localStorage` versionné et migration conservatrice ;
- missions copiables, statuts, preuves et validations humaines ;
- exports Markdown et JSON.

Il n’appelle automatiquement ni ChatGPT, ni Codex, ni un fournisseur IA. Il est conservé comme démonstration utile, accessible depuis les ressources secondaires, sans devenir le parcours principal.

## Kit de démarrage

Le noyau minimal est volontairement limité à :

1. `PROJECT.md` ;
2. `STATUS.md` ;
3. `AGENTS.md` ;
4. `prompts/FIRST-MISSION.md`.

`DECISIONS.md`, `QUALITY.md` et `.codex/config.toml` sont fournis comme options documentées. Aucun ZIP, générateur ou manifeste automatique n’est présent.

## Historique conservé

- les décisions et commits des phases précédentes ;
- le moteur local et ses données navigateur ;
- le parcours en six phases, ses exports et ses tests ;
- les guides Remote et Work avec leurs limites ;
- la documentation de Social Autopilot comme trace historique, sans mission active et sans dépôt pilote modifié.

## Non disponible et non prévu à court terme

- générateur de dossiers ou ZIP ;
- manifeste automatique de fichiers ;
- création de dépôt ou exécution autonome de Codex ;
- API IA, compte, paiement, stockage ou synchronisation distante ;
- pilote Social Autopilot et anciennes Missions C, D ou E du générateur.

## Prochaine action

Terminer l’inventaire et la clarification des ressources, vérifier la cohérence de l’interface et du kit, puis publier un premier guide ou cas d’usage concret avant d’envisager une nouvelle fonction.
