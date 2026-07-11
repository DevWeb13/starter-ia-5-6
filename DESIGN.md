# Identité visuelle

Ce document est la source de vérité visuelle de Starter IA 5.6. L’objectif est une interface sobre, premium, moderne, mobile-first et accessible.

## Principes

- Priorité à la lecture et à l’action principale.
- Peu d’éléments, mais une hiérarchie nette.
- Aucun effet décoratif ne doit ralentir ou masquer le contenu.
- Une interface utilisable au pouce, au clavier, au zoom et avec un lecteur d’écran.
- Le thème sombre peut être ajouté plus tard ; la version claire doit d’abord être irréprochable.

## Couleurs

| Rôle | Couleur | Usage |
|---|---|---|
| Fond | `#F8FAFC` | Arrière-plan général |
| Surface | `#FFFFFF` | Cartes, panneaux, champs |
| Texte principal | `#0F172A` | Titres et contenu |
| Texte secondaire | `#475569` | Aides et métadonnées |
| Bordure | `#64748B` | Séparateurs et contours fonctionnels |
| Accent | `#2563EB` | Action principale et liens |
| Accent actif | `#1D4ED8` | Survol, pression, focus renforcé |
| Succès | `#166534` | Validation |
| Avertissement | `#92400E` | Attention non bloquante |
| Erreur | `#B91C1C` | Échec ou champ invalide |

Le contraste du texte doit respecter WCAG AA : au moins 4,5:1 pour le texte courant et 3:1 pour le grand texte et les éléments graphiques. Ne jamais transmettre un état uniquement par la couleur : ajouter une icône, un libellé ou les deux.

## Typographie système

Utiliser la pile native pour limiter le chargement et rester familière sur iPhone :

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

- Corps : `16px`, hauteur de ligne `1.6`.
- Petit texte : `14px`, jamais pour une information essentielle.
- Titre de page : `clamp(2rem, 7vw, 3.5rem)`, graisse `700`.
- Titre de section : `clamp(1.5rem, 5vw, 2.25rem)`, graisse `650` à `700`.
- Ligne de texte : idéalement 45 à 75 caractères.

## Espacements

Échelle de base de 4 px : `4`, `8`, `12`, `16`, `24`, `32`, `48`, `64`.

- Marge mobile : `16px` minimum.
- Espacement entre sections : `48px` sur mobile, jusqu’à `80px` sur grand écran.
- Padding de carte : `20px` sur mobile, `24px` à partir de 640 px.
- Largeur de lecture : `720px` maximum ; contenu global : `1120px` maximum.

## Composants

### Boutons

- Hauteur tactile minimale : `44px` ; viser `48px` pour l’action principale.
- Rayon : `10px`.
- Libellé verbal et précis : « Lancer la mission », pas « OK ».
- États obligatoires : normal, survol, focus visible, pressé, désactivé et chargement.
- Une seule action principale forte par zone.

### Cartes

- Surface blanche, bordure `1px` et ombre très légère.
- Rayon : `16px`.
- Pas de carte imbriquée sans nécessité.

### Champs

- Libellé visible au-dessus ; le placeholder n’est pas un libellé.
- Hauteur minimale : `44px`.
- Message d’aide avant erreur, message correctif après erreur.
- Conserver la saisie lorsqu’une validation échoue.

### Navigation

- Parcours principal visible sans menu complexe sur petit écran.
- Zone tactile de `44 × 44px` minimum.
- Indiquer la page courante autrement que par la couleur seule.

### Code et prompts

- Police monospace système.
- Bouton « Copier » explicite.
- Défilement horizontal dans le bloc, jamais sur toute la page.
- Retour visuel après copie, annoncé aux technologies d’assistance.

### Statuts et erreurs

- Titre court, cause en langage simple, prochaine action précise.
- Ne pas accuser l’utilisateur.
- Distinguer fait et vérifié, partiel, bloqué et non tenté.
- Conserver un moyen de revenir ou de réessayer.

## Responsive

- Concevoir d’abord entre `320px` et `430px`.
- À partir de `640px`, autoriser deux colonnes seulement si l’ordre de lecture reste évident.
- À partir de `960px`, élargir les marges et la grille sans étirer les paragraphes.
- Éviter toute information disponible uniquement au survol.
- Tester zoom à 200 %, orientation paysage, clavier et réduction des animations.

## Mouvement

- Transitions courtes : `120–200ms`.
- Animer l’opacité ou la transformation, pas la mise en page entière.
- Respecter `prefers-reduced-motion`.
- Aucun carrousel automatique ni animation indispensable à la compréhension.

## Erreurs à éviter

- Dégradés décoratifs multiples, glassmorphism peu lisible ou ombres lourdes.
- Texte gris trop pâle, corps inférieur à 16 px ou lignes excessivement longues.
- Boutons uniquement composés d’une icône sans nom accessible.
- Trois actions principales concurrentes.
- Menus cachant le parcours essentiel sur mobile.
- Messages vagues comme « Une erreur est survenue » sans cause ni prochaine étape.
- Copier les conventions visuelles d’une marque tierce au point de créer une confusion d’affiliation.
