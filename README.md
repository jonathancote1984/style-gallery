# 🎨 UI/UX Style Gallery

Galerie interactive qui présente **76 styles UI/UX** (neumorphism, glassmorphism, claymorphism, brutalism, terminal, pixel, néon, bento, HUD, aquarelle, Bauhaus, candy, gothique, rétro…), chacun avec un **exemple complet de ~35 composants** + une **maquette de page** (nav, hero, pricing, footer), **4-5 palettes de couleurs** commutables (316 au total), un **testeur de police**, une **palette personnalisable**, une **fiche d'information détaillée** (usage, points forts, points de vigilance, typographie, accessibilité), un **aide-mémoire « recette »** et le **code copiable**.

**Aucune dépendance** : c'est du HTML/CSS/JS pur. Ouvrez simplement `index.html` dans un navigateur.

---

## ▶️ Lancer l'app

### Option A — double-clic (le plus simple)
Ouvrez `style-gallery/index.html` directement dans votre navigateur (Chrome, Edge, Firefox…). Le chargement depuis `file://` fonctionne.

### Option B — serveur local (recommandé)
```bash
cd style-gallery
npx serve .          # ou : python -m http.server 8080
# puis ouvrir http://localhost:8080
```

---

## ✨ Styles inclus

| # | Style | Catégorie |
|---|-------|-----------|
| 1 | **Neumorphism** (soft UI) | Douceur |
| 2 | **Glassmorphism** | Douceur |
| 3 | **Claymorphism** | Douceur |
| 4 | **Pastel / Kawaii** | Douceur |
| 5 | **Flat Design** | Plat & épuré |
| 6 | **Minimalisme** | Plat & épuré |
| 7 | **Swiss / Typographique** | Plat & épuré |
| 8 | **Brutalism** | Audacieux |
| 9 | **Memphis Design** | Audacieux |
| 10 | **Y2K / Vaporwave** | Audacieux |
| 11 | **Material Design 3** | Moderne |
| 12 | **Dark / Néo Cyberpunk** | Moderne |
| 13 | **Aurora / Bento Grid** | Moderne |
| 14 | **Holographique / Gradient** | Moderne |
| 15 | **Skeuomorphisme** | Moderne |
| 16 | **Terminal / Retro Code** | Moderne |
| 17 | **Pixel / 8-bit** | Audacieux |
| 18 | **Neon Sign** | Audacieux |
| 19 | **Gradient Mesh** | Douceur |
| 20 | **Sticker / Doodle** | Audacieux |
| 21 | **Paper / Sketch** | Plat & épuré |
| 22 | **Frutiger Aero** | Moderne |
| 23 | **Acid / Rave** | Audacieux |
| 24 | **Bento Grid** | Moderne |
| 25 | **Cyber HUD / Sci-Fi** | Moderne |
| 26 | **Watercolor / Organic** | Douceur |
| 27 | **Bauhaus** | Audacieux |
| 28 | **Frosted Noir** | Moderne |
| 29 | **Candy / Bubble** | Douceur |
| 30 | **Dark Academia / Gothic** | Moderne |
| 31 | **Rétro 70s / Vintage** | Audacieux |
| 32 | **Gaming / Esports** | Moderne |
| 33 | **Editorial / Magazine** | Plat & épuré |
| 34 | **Isometric / 3D** | Moderne |
| 35 | **Retro CRT** | Moderne |
| 36 | **Hand-drawn / Sketch** | Douceur |
| 37 | **Liquid / Blob** | Douceur |
| 38 | **Cyber Glitch** | Moderne |
| 39 | **Retro Web 1.0** | Audacieux |
| 40 | **Doodle / Zentangle** | Plat & épuré |
| 41 | **Chrome / Y2K Metallic** | Moderne |
| 42 | **Desert / Sandstone** | Plat & épuré |
| 43 | **Playful / Cartoon** | Audacieux |
| 44 | **Solar / Sunset** | Moderne |
| 45 | **Typewriter / Mono** | Plat & épuré |
| 46 | **Botanical / Organic** | Douceur |
| 47 | **Ocean Glass / Aqua** | Douceur |
| 48 | **Collage / Paper-cut** | Audacieux |
| 49 | **Minimal Light / Airy** | Plat & épuré |
| 50 | **Comic Book** | Audacieux |
| 51 | **Luxury / Gold** | Moderne |
| 52 | **Bohemian / Boho** | Douceur |
| 53 | **Nordic / Scandi** | Plat & épuré |
| 54 | **Retro Polaroid** | Douceur |
| 55 | **Cyberpunk City** | Moderne |
| 56 | **Terrazzo** | Douceur |
| 57 | **Punk / Zine** | Audacieux |
| 58 | **Retro VHS** | Moderne |
| 59 | **Newspaper** | Plat & épuré |
| 60 | **Risograph** | Audacieux |
| 61 | **Winter Frost** | Douceur |
| 62 | **Marble** | Douceur |
| 63 | **Retro Racing** | Audacieux |
| 64 | **Solarpunk** | Moderne |
| 65 | **Retro Deli** | Audacieux |
| 66 | **Kintsugi / Wabi-sabi** | Douceur |
| 67 | **Retro Space / Apollo** | Moderne |
| 68 | **Papercraft / Origami** | Audacieux |
| 69 | **Lofi / Cozy** | Douceur |
| 70 | **Retro Americana** | Audacieux |
| 71 | **Industrial / Concrete** | Plat & épuré |
| 72 | **Googie / Space Age** | Audacieux |
| 73 | **Iridescent Shimmer** | Moderne |

---

## 🧩 Fonctionnalités

- **Barre latérale en arborescence** : les familles (Douceur, Plat & épuré, Audacieux, Moderne) se replient/déplient d'un clic. Les styles sont **numérotés 1→N** dans l'ordre d'affichage.
- **★ Favoris** : cliquez ☆ sur un style pour le retenir (persistant via localStorage), une famille « Favoris » regroupe vos styles préférés.
- **🔍 Recherche** : filtrez les styles par nom dans la barre latérale.
- **🗺️ Vue d'ensemble (moodboard)** : grille des 49 styles d'un coup d'œil (dégradé + nom + palette), cliquez sur une tuile pour l'ouvrir.
- **🔍 Recherche intelligente** (nom, catégorie, tags « idéal pour ») + **tri** (Nom A–Z, Favoris d'abord).
- **🎨 Palette perso enrichie** : slider de rayon + boutons **Sauvegarder / Charger / Réinitialiser** (persistant via localStorage).
- **Sélecteur de palette** : 4 thèmes de couleurs par style (clairs, sombres, vifs, exotiques…).
- **Exemple complet** de composants pour chaque style : carte, boutons (primaire/ghost/désactivé), boutons à icône, tags, onglets, toggles, cases à cocher, radios, select, slider, interrupteur, input, progression, listes d'activité, alertes, avatar-stack, KPI et toast.
- **Fiche d'information** pour chaque style : cas d'usage, idéal pour, points forts, points de vigilance, typographie recommandée et accessibilité.
- **Testeur de police** : appliquez en direct chacune des polices recommandées du style (chargées depuis Google Fonts à la demande), et revenez à la police par défaut en un clic.
- **Page d'accueil** : une vue d'accueil (stats, familles de styles) affichée au chargement — cliquez sur le logo ou « Accueil » pour y revenir.
- **Mode comparaison multi-panneaux** : affichez **2 à 4 styles** côte à côte (bouton « ＋ Ajouter un panneau », suppression par colonne), chacun avec sa palette + sa police, et un **tableau comparatif** à N colonnes (usage, points forts/faibles, typo, accessibilité, recette, palettes).
- **🌙/☀️ Thème sombre/clair** : basculez chaque style en version sombre ou claire en un clic (persistant via localStorage).
- **Palette personnalisée** : ajustez les couleurs en direct avec des sélecteurs (color pickers) par variable CSS, puis réinitialisez.
- **Maquette de page** : chaque style s'affiche aussi dans un bloc de page réaliste (navigation, hero, cartes de prix, pied de page).
- **Composants avancés** : onglets, toggles, checkbox/radio, select, slider, table, stepper, breadcrumb, dropdown, tooltip, états de formulaire (valid/invalid), avatar avec statut, skeleton, rating, état vide et modale.
- **La recette** : aide-mémoire des règles CSS clés de chaque style pour le réimplémenter.
- **Bouton « Copier le code »** : copie les variables CSS de la palette + le HTML des composants.
- Navigation par flèches **← / →** du clavier et boutons Précédent/Suivant.
- Design réactif (sidebar qui passe au-dessus sur mobile).

---

## 📁 Structure

```
style-gallery/
├── index.html              # Page principale
└── assets/
    ├── styles.css          # Coquille de l'app (layout, sidebar, boutons)
    ├── preview.css         # CSS des 15 styles (mise en scène + composants thémés)
    ├── styles-data.js      # Les 15 styles : métadonnées + palettes de couleurs
    └── app.js              # Logique de rendu (navigation, palettes, copie)
```

---

## 🛠️ Ajouter un style / une palette

Les styles sont des **données** dans `assets/styles-data.js`.

**Ajouter une palette** à un style existant → poussez un objet dans `palettes` :
```js
{ name: "Ma palette", vars: { "--sg-bg": "#…", "--sg-primary": "#…", … } }
```

**Ajouter un nouveau style** :
1. Ajoutez un objet dans `window.DSH_STYLES` avec `id`, `p` (préfixe de classes), `name`, `category`, `tagline`, `desc`, `flavor`, `note`, `tips` et `palettes`.
2. Ajoutez le bloc CSS des composants dans `assets/preview.css` sous `[data-style="<id>"] .<p>-…` (voir les blocs existants).
3. Rechargez la page.

---

## 💡 Principe technique en bref

- Les classes **`.sg-*`** portent la **structure** (grille, carte, bouton…).
- Les classes **`.<préfixe>-*`** portent le **thème** (ombres, bordures, dégradés…).
- La **palette** écrit des **variables CSS** (ex. `--sg-primary`) directement sur la scène : changer de palette = changer de thème sans toucher au HTML.