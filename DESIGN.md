# Identité visuelle

Ce document est la source de vérité visuelle de Starter IA 5.6 et de son produit exemple AI Project Launcher. L’interface est sobre, premium, moderne, mobile-first et accessible.

## Principes

- Priorité à la lecture et à l’action principale.
- Peu d’éléments, mais une hiérarchie nette.
- Un seul accent bleu, sans accumulation de dégradés ou d’effets décoratifs.
- Aucun effet ne doit ralentir ou masquer le contenu.
- Interface utilisable au pouce, au clavier, au zoom et avec un lecteur d’écran.
- Parité fonctionnelle et contraste AA dans les thèmes clair et sombre.
- AI Project Launcher est le produit ; « Démonstration de Starter IA 5.6 » précise le lien sans confondre les identités.

## Couleurs claires

| Rôle | Couleur | Usage |
|---|---|---|
| Fond | `#F8FAFC` | Arrière-plan général |
| Surface | `#FFFFFF` | Cartes, panneaux, champs |
| Texte principal | `#0F172A` | Titres et contenu |
| Texte secondaire | `#475569` | Aides et métadonnées |
| Bordure | `#64748B` | Séparateurs et contours fonctionnels |
| Accent | `#2563EB` | Action principale et liens |
| Accent actif | `#1D4ED8` | Survol, pression et focus |
| Succès | `#166534` | Validation |
| Avertissement | `#92400E` | Attention non bloquante |
| Erreur | `#B91C1C` | Échec ou champ invalide |

## Couleurs sombres

| Rôle | Couleur | Usage |
|---|---|---|
| Fond | `#090F1C` | Arrière-plan général |
| Surface | `#111A2B` | Cartes, panneaux, champs |
| Texte principal | `#F8FAFC` | Titres et contenu |
| Texte secondaire | `#CBD5E1` | Aides et métadonnées |
| Bordure | `#94A3B8` | Séparateurs et contours fonctionnels |
| Accent | `#60A5FA` | Action principale et liens |
| Focus | `#93C5FD` | Anneau de focus |
| Succès | `#86EFAC` | Validation |
| Avertissement | `#FCD34D` | Attention non bloquante |
| Erreur | `#FCA5A5` | Échec ou champ invalide |

Le contraste respecte WCAG AA : au moins 4,5:1 pour le texte courant et 3:1 pour le grand texte et les éléments graphiques. Un état associe toujours couleur, icône et libellé.

## Typographie système

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

- Corps : `16px`, hauteur de ligne `1.6`.
- Petit texte : `14px`, jamais pour une information essentielle.
- Titre de page : `clamp(2.35rem, 8vw, 4.75rem)`, graisse forte.
- Titre de section : `clamp(1.75rem, 5vw, 2.5rem)`.
- Ligne de texte : idéalement 45 à 75 caractères.
- Police monospace système pour identifiants, code et numérotation.

## Espacements et grilles

Échelle de base : `4`, `8`, `12`, `16`, `24`, `32`, `48`, `64`, `80` px.

- Marge mobile : `16px` minimum, contenu utile de `288px` à 320 px.
- Sections : `56px` sur mobile, jusqu’à `80px` sur grand écran.
- Carte : `20px` sur mobile, `24px` à partir de 640 px.
- Lecture : `720px` maximum ; contenu global : `1120px` maximum.
- Une seule colonne à 320 px ; deux colonnes à partir de 640 px seulement si l’ordre reste évident.

## Composants

### Boutons

- Cible tactile minimale : `44 × 44px`, `48px` pour l’action principale.
- Rayon : `10px`.
- Libellé verbal et précis.
- États : normal, survol, focus visible, pressé, désactivé et chargement.
- Une seule action principale forte par zone.

### Cartes

- Surface, bordure `1px`, ombre très légère, rayon `16px`.
- Pas de carte imbriquée sans nécessité.
- Contenu empilé à 320 px sans débordement.

### Champs

- Libellé visible ; le placeholder n’est pas un libellé.
- Hauteur minimale `44px`, texte `16px`.
- Aide avant erreur, message correctif après erreur.
- Saisie conservée après validation échouée.
- `aria-invalid` et `aria-describedby` lorsque pertinent.

### Navigation

- CTA essentiel répété dans le hero, même si le menu mobile est fermé.
- Déclencheur mobile `44 × 44px`, `aria-expanded`, `aria-controls` et nom accessible.
- Échap ferme le menu et rend le focus au déclencheur.
- Page courante signalée avec `aria-current` et un soulignement, pas uniquement par couleur.

### Démonstration

- Mention « Démonstration locale » près du formulaire et du résultat.
- États vide, erreur, chargement et succès.
- Chargement avec texte ; skeletons décoratifs masqués aux lecteurs d’écran.
- Succès annoncé brièvement, puis focus déplacé vers le titre du résultat.
- Résultat en six sections et hypothèses explicitement à valider.

### Statuts et erreurs

- Titre court, cause en langage simple, prochaine action précise.
- Ne pas accuser l’utilisateur.
- Distinguer vérifié, partiel, bloqué, non tenté et données d’exemple.
- Conserver un moyen de revenir ou de réessayer.

## Responsive et accessibilité

- Concevoir et contrôler d’abord à `320px`, puis `375px` et `430px`.
- Aucun débordement horizontal global ; seuls les blocs de code peuvent défiler.
- Tester zoom 200 %, paysage, clavier, focus visible et page courante.
- Lien d’évitement avant la navigation.
- Structure `header`, `nav`, `main`, `footer`, un `h1` descriptif par page.
- Liens de texte soulignés ; icônes décoratives `aria-hidden`.
- Prendre en charge `forced-colors` sans supprimer les indicateurs de focus.

## Mouvement

- Transitions de `120–200ms` au maximum.
- Animer opacité ou transformation, pas la mise en page entière.
- `prefers-reduced-motion: reduce` désactive smooth scroll, rotation et pulsation non essentielles.
- Aucun carrousel automatique ni animation indispensable.

## Interdits

- Clients, avis, logos, métriques, gains ou résultats inventés.
- Présenter IA, authentification, sauvegarde, sécurité, RGPD ou paiement comme disponibles avant preuve.
- Faux prix barrés, urgence ou CTA vers un checkout inexistant.
- Glassmorphism, ombres lourdes, texte trop pâle ou corps inférieur à 16 px.
- Bouton icône sans nom accessible ou information disponible uniquement au survol.
- Copier l’identité visuelle d’une marque tierce ou suggérer une affiliation à OpenAI.
