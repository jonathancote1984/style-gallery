/* ============================================================
   Données des 73 styles — métadonnées + palettes de couleurs.
   Chaque palette définit les variables CSS du style (--sg-* + spécifiques).
   ============================================================ */

window.DSH_STYLES = [
  /* ---------- SOFT ---------- */
  {
    id: "neu", p: "neu", name: "Neumorphism", category: "Soft",
    tagline: "Effet « soft UI » : composants extrudés sur fond uni.",
    desc: "Le néomorphisme (ou soft UI) modèle des composants « doux » à l'aide de doubles ombres portées, claire en haut à gauche et sombre en bas à droite, sur un fond de même tonalité. Il crée un effet 3D souple, sans bordure.",
    flavor: "Neu",
    note: "**Quand l'utiliser ?** Interfaces calmes, dashboards, apps créatives, dark mode. Évitez les tableaux de données denses et les petits textes.",
    tips: ["Fond et surface de la même couleur", "Double ombre + et − pour l'effet extrudé", "Inset shadow pour les éléments « enfoncés »", "Contraste de texte à vérifier (souvent faible)"],
    palettes: [
      { name: "Gris perle", vars: { "--sg-bg": "#e0e5ec", "--sg-surface": "#e0e5ec", "--sg-text": "#4a4d6f", "--sg-muted": "#9aa0b8", "--sg-primary": "#5b5fef", "--sg-primary-2": "#4448cf", "--sg-acc": "#2ec4b6", "--sg-radius": "18px" } },
      { name: "Minuit", vars: { "--sg-bg": "#2a2d3a", "--sg-surface": "#2a2d3a", "--sg-text": "#e7eaf0", "--sg-muted": "#9aa3b5", "--sg-primary": "#7c5cff", "--sg-primary-2": "#6a4bf0", "--sg-acc": "#00d4ff", "--sg-radius": "18px" } },
      { name: "Pastel rose", vars: { "--sg-bg": "#eef2f7", "--sg-surface": "#eef2f7", "--sg-text": "#5b647a", "--sg-muted": "#8a93a8", "--sg-primary": "#ff8fab", "--sg-primary-2": "#ef648d", "--sg-acc": "#7ec1ff", "--sg-radius": "20px" } },
      { name: "Lagune", vars: { "--sg-bg": "#eaf6f5", "--sg-surface": "#eaf6f5", "--sg-text": "#22514d", "--sg-muted": "#7fa7a2", "--sg-primary": "#16a085", "--sg-primary-2": "#0f7d68", "--sg-acc": "#ffb45c", "--sg-radius": "18px" } },
      { name: "Sable", vars: { "--sg-bg": "#ece7dd", "--sg-surface": "#ece7dd", "--sg-text": "#4a4036", "--sg-muted": "#9a8d7d", "--sg-primary": "#c98a4b", "--sg-primary-2": "#a96f35", "--sg-acc": "#7aa08a", "--sg-radius": "18px" } }
    ]
  },
  {
    id: "glass", p: "glass", name: "Glassmorphism", category: "Soft",
    tagline: "Effet « verre dépoli » : transparence + flou d'arrière-plan.",
    desc: "Le glassmorphism empile des panneaux semi-transparents sur un fond coloré, avec backdrop-filter: blur() et de légers reflets. Idéal pour des cartes « flottantes » modernes et aérées.",
    flavor: "Glass",
    note: "**Quand l'utiliser ?** Hero sections, cartes de stats sur photos/gradients, mode sombre. Attention à la lisibilité du texte sur verre clair.",
    tips: ["blur() d'au moins 12px + transparence ~12-25%", "Bordure 1px blanche semi-transparente", "Fond riche en couleurs derrière pour le contraste", "backdrop-filter fonctionne mal dans certains navigateurs"],
    palettes: [
      { name: "Aurore", vars: { "--sg-bg": "linear-gradient(135deg,#667eea,#764ba2,#f093fb)", "--glass-bg": "rgba(255,255,255,.22)", "--glass-border": "rgba(255,255,255,.45)", "--glass-blur": "16px", "--sg-surface": "rgba(255,255,255,.15)", "--sg-text": "#ffffff", "--sg-muted": "rgba(255,255,255,.85)", "--sg-primary": "#ffffff", "--sg-primary-2": "#e9e4ff", "--sg-acc": "#ffe29f", "--sg-radius": "20px" } },
      { name: "Océan", vars: { "--sg-bg": "linear-gradient(135deg,#0f2027,#203a43,#2c5364)", "--glass-bg": "rgba(255,255,255,.12)", "--glass-border": "rgba(255,255,255,.3)", "--glass-blur": "14px", "--sg-surface": "rgba(255,255,255,.1)", "--sg-text": "#ffffff", "--sg-muted": "rgba(255,255,255,.8)", "--sg-primary": "#36d1dc", "--sg-primary-2": "#5b86e5", "--sg-acc": "#f7d794", "--sg-radius": "20px" } },
      { name: "Rose néon", vars: { "--sg-bg": "linear-gradient(135deg,#f7b2d5,#c06cf0,#7a5cf0)", "--glass-bg": "rgba(255,255,255,.25)", "--glass-border": "rgba(255,255,255,.5)", "--glass-blur": "15px", "--sg-surface": "rgba(255,255,255,.2)", "--sg-text": "#3a2b52", "--sg-muted": "rgba(58,43,82,.8)", "--sg-primary": "#7a2ff0", "--sg-primary-2": "#a44ff0", "--sg-acc": "#ff8fab", "--sg-radius": "20px" } },
      { name: "Lagon", vars: { "--sg-bg": "linear-gradient(135deg,#00c9ff,#92fe9d)", "--glass-bg": "rgba(255,255,255,.18)", "--glass-border": "rgba(255,255,255,.42)", "--glass-blur": "15px", "--sg-surface": "rgba(255,255,255,.1)", "--sg-text": "#06202a", "--sg-muted": "rgba(6,32,42,.8)", "--sg-primary": "#00a8ff", "--sg-primary-2": "#0080d0", "--sg-acc": "#ffd166", "--sg-radius": "20px" } },
      { name: "Violet", vars: { "--sg-bg": "linear-gradient(135deg,#7c5cff,#b06ff0,#ff5c9d)", "--glass-bg": "rgba(255,255,255,.16)", "--glass-border": "rgba(255,255,255,.4)", "--glass-blur": "16px", "--sg-surface": "rgba(255,255,255,.12)", "--sg-text": "#ffffff", "--sg-muted": "rgba(255,255,255,.85)", "--sg-primary": "#ffffff", "--sg-primary-2": "#e9e4ff", "--sg-acc": "#ffd166", "--sg-radius": "20px" } }
    ]
  },
  {
    id: "clay", p: "clay", name: "Claymorphism", category: "Soft",
    tagline: "Effet « argile/pâte à modeler » : gonflé et arrondi.",
    desc: "Le claymorphism donne aux composants un aspect de pâte à modeler : très arrondis, dégradés de lumière, ombres portées marquées et reflets internes. Une évolution ludique du neumorphism.",
    flavor: "Clay",
    note: "**Quand l'utiliser ?** Apps enfant, e-commerce fun, onboarding, illustrations. Réservé aux icônes/cartes, pas aux contenus denses.",
    tips: ["Très grands rayons de bordure (24-32px)", "Gradient haut-gauche clair / bas-droite sombre", "Ombre interne (inset) + ombre externe colorée", "Contrastes doux, tons pastel"],
    palettes: [
      { name: "Terre", vars: { "--sg-bg": "#f3e7d8", "--sg-surface": "#f3e7d8", "--sg-text": "#5a4a3a", "--sg-muted": "#9a8b7a", "--sg-primary": "#e1794e", "--sg-primary-2": "#c75f37", "--sg-acc": "#8ac4b0", "--sg-radius": "28px", "--clay-hi": "#fdf6ec", "--clay-lo": "#e7d6bd", "--clay-border": "rgba(255,255,255,.8)", "--clay-shadow": "rgba(160,120,80,.35)" } },
      { name: "Lavande", vars: { "--sg-bg": "#eee9f7", "--sg-surface": "#eee9f7", "--sg-text": "#4c4270", "--sg-muted": "#9a8fbf", "--sg-primary": "#8a6ff0", "--sg-primary-2": "#6a4bd0", "--sg-acc": "#6fd0c0", "--sg-radius": "28px", "--clay-hi": "#faf7ff", "--clay-lo": "#ddd3f0", "--clay-border": "rgba(255,255,255,.85)", "--clay-shadow": "rgba(120,100,200,.35)" } },
      { name: "Menthe", vars: { "--sg-bg": "#e2f3ec", "--sg-surface": "#e2f3ec", "--sg-text": "#2f5546", "--sg-muted": "#73a18f", "--sg-primary": "#2ba884", "--sg-primary-2": "#1d8a6a", "--sg-acc": "#f6b26b", "--sg-radius": "30px", "--clay-hi": "#f4fdf8", "--clay-lo": "#cbe8d9", "--clay-border": "rgba(255,255,255,.85)", "--clay-shadow": "rgba(40,120,90,.35)" } },
      { name: "Sorbet", vars: { "--sg-bg": "#fff0f0", "--sg-surface": "#fff0f0", "--sg-text": "#66333c", "--sg-muted": "#b58a94", "--sg-primary": "#ff8a8a", "--sg-primary-2": "#ef6565", "--sg-acc": "#7ec1ff", "--sg-radius": "30px", "--clay-hi": "#fff8f8", "--clay-lo": "#ffdede", "--clay-border": "rgba(255,255,255,.9)", "--clay-shadow": "rgba(255,120,140,.35)" } },
      { name: "Océan", vars: { "--sg-bg": "#e3f0f3", "--sg-surface": "#e3f0f3", "--sg-text": "#24515c", "--sg-muted": "#7aa0a8", "--sg-primary": "#2aa4b4", "--sg-primary-2": "#1d8391", "--sg-acc": "#ffb45c", "--sg-radius": "30px", "--clay-hi": "#f0fafc", "--clay-lo": "#cbe3ea", "--clay-border": "rgba(255,255,255,.85)", "--clay-shadow": "rgba(30,120,140,.35)" } }
    ]
  },
  {
    id: "kawai", p: "kawai", name: "Pastel / Kawaii", category: "Soft",
    tagline: "Douceur pastel, formes rondes et esprit « mignon ».",
    desc: "Les interfaces kawaii misent sur des tons pastel, des coins très arrondis, des ombres colorées et un hiérarchie lumineuse. Ambiance chaleureuse, rassurante et enfantine.",
    flavor: "Kawaii",
    note: "**Quand l'utiliser ?** Apps bien-être, enfant, réseaux sociaux, e-commerce de produits doux. Gardez un bon contraste pour l'accessibilité.",
    tips: ["Palette pastel 2-3 couleurs", "Grands rayons et bords blancs", "Ombres colorées plutôt que noires", "Communiquer la positivité par les formes"],
    palettes: [
      { name: "Pêche", vars: { "--sg-bg": "#fff0f5", "--sg-surface": "#fffafb", "--sg-text": "#5b3a45", "--sg-muted": "#b58a97", "--sg-primary": "#ff8fab", "--sg-primary-2": "#ef648d", "--sg-acc": "#a6e6d0", "--sg-radius": "24px", "--sg-soft": "rgba(255,143,171,.22)" } },
      { name: "Lavande", vars: { "--sg-bg": "#f3efff", "--sg-surface": "#fdfbff", "--sg-text": "#4c3a70", "--sg-muted": "#a58fc2", "--sg-primary": "#a68bff", "--sg-primary-2": "#8a6ff0", "--sg-acc": "#8fe3d0", "--sg-radius": "26px", "--sg-soft": "rgba(166,139,255,.22)" } },
      { name: "Menthe", vars: { "--sg-bg": "#e8faf2", "--sg-surface": "#f7fffb", "--sg-text": "#2f5b4a", "--sg-muted": "#7fa895", "--sg-primary": "#3fc7a2", "--sg-primary-2": "#2aa88a", "--sg-acc": "#ffb45c", "--sg-radius": "24px", "--sg-soft": "rgba(63,199,162,.22)" } },
      { name: "Bubblegum", vars: { "--sg-bg": "#fdf4ff", "--sg-surface": "#ffffff", "--sg-text": "#4a2b4a", "--sg-muted": "#bd9ac0", "--sg-primary": "#b06ff0", "--sg-primary-2": "#9a52d6", "--sg-acc": "#7fd0ff", "--sg-radius": "28px", "--sg-soft": "rgba(176,111,240,.2)" } }
    ]
  },

  /* ---------- FLAT ---------- */
  {
    id: "flat", p: "flat", name: "Flat Design", category: "Flat",
    tagline: "À plat : aucune ombre, aucune texture, couleurs franches.",
    desc: "Le flat design supprime les effets de profondeur (ombres, dégradés, reflets) au profit de formes simples et de couleurs vives. La hiérarchie repose sur la couleur et la typographie.",
    flavor: "Flat",
    note: "**Quand l'utiliser ?** Produits SaaS, dashboards, sites vitrines. Excellent pour la clarté et la performance sur mobile.",
    tips: ["Pas d'ombres ni de dégradés", "Palette limitée + couleurs franches", "Icônes et formes géométriques simples", "Le feedback par la couleur (ex: état des boutons)"],
    palettes: [
      { name: "Vif", vars: { "--sg-bg": "#f2f4f8", "--sg-surface": "#ffffff", "--sg-text": "#23272f", "--sg-muted": "#6b7280", "--sg-primary": "#ff5c5c", "--sg-primary-2": "#e94b4b", "--sg-acc": "#2ec4b6", "--sg-radius": "12px" } },
      { name: "Indigo", vars: { "--sg-bg": "#eef1f9", "--sg-surface": "#ffffff", "--sg-text": "#1f2733", "--sg-muted": "#5f6b80", "--sg-primary": "#4f6ef7", "--sg-primary-2": "#3b56cd", "--sg-acc": "#22c58b", "--sg-radius": "12px" } },
      { name: "Ardoise sombre", vars: { "--sg-bg": "#1f2430", "--sg-surface": "#2a3040", "--sg-text": "#eef1f6", "--sg-muted": "#8a93a5", "--sg-primary": "#ffb45c", "--sg-primary-2": "#f79b2e", "--sg-acc": "#6ee7b7", "--sg-radius": "12px" } },
      { name: "Tangerine", vars: { "--sg-bg": "#fff4ec", "--sg-surface": "#ffffff", "--sg-text": "#2c1f16", "--sg-muted": "#9a7a66", "--sg-primary": "#ff7a3d", "--sg-primary-2": "#ef5c22", "--sg-acc": "#3ddc97", "--sg-radius": "12px" } }
    ]
  },
  {
    id: "min", p: "min", name: "Minimalisme", category: "Flat",
    tagline: "Le strict nécessaire : espace blanc, typographie, une couleur.",
    desc: "Le minimalisme réduit l'interface à l'essentiel. Beaucoup d'air, une seule couleur d'accent, des lignes fines et une typographie soignée. L'attention est guidée par le vide.",
    flavor: "Minimal",
    note: "**Quand l'utiliser ?** Portfolios, apps de lecture, produits éditoriaux, landing pages haut de gamme.",
    tips: ["Beaucoup d'espace blanc (whitespace)", "Une seule couleur d'accent", "Typographie hiérarchisée et aérée", "Peu d'éléments à l'écran"],
    palettes: [
      { name: "Monochrome", vars: { "--sg-bg": "#ffffff", "--sg-surface": "#ffffff", "--sg-text": "#111111", "--sg-muted": "#888888", "--sg-primary": "#111111", "--sg-primary-2": "#333333", "--sg-acc": "#111111", "--sg-radius": "8px" } },
      { name: "Édition rouge", vars: { "--sg-bg": "#fafafa", "--sg-surface": "#ffffff", "--sg-text": "#1a1a1a", "--sg-muted": "#8a8a8a", "--sg-primary": "#e63329", "--sg-primary-2": "#c4271d", "--sg-acc": "#e63329", "--sg-radius": "8px" } },
      { name: "Froid", vars: { "--sg-bg": "#f5f7f9", "--sg-surface": "#ffffff", "--sg-text": "#16202c", "--sg-muted": "#68727f", "--sg-primary": "#1a6ee0", "--sg-primary-2": "#1157c0", "--sg-acc": "#1a6ee0", "--sg-radius": "8px" } },
      { name: "Sable", vars: { "--sg-bg": "#faf6f0", "--sg-surface": "#ffffff", "--sg-text": "#2a241d", "--sg-muted": "#9a8f80", "--sg-primary": "#2a6b5e", "--sg-primary-2": "#1f554b", "--sg-acc": "#2a6b5e", "--sg-radius": "8px" } }
    ]
  },
  {
    id: "swiss", p: "swiss", name: "Swiss / Typographique", category: "Flat",
    tagline: "Grille, typographie et couleurs primaires — école suisse.",
    desc: "Le style Swiss (International Typographic Style) repose sur la grille, une typographie sans-serif audacieuse (ex. Helvetica), des couleurs primaires et des angles droits. Rigueur et clarté avant tout.",
    flavor: "Swiss",
    note: "**Quand l'utiliser ?** Éditorial, institutions, culture, data-viz, affiches. Excellent pour le design d'information.",
    tips: ["Grille stricte et marges marquées", "Typographie sans-serif, graisses contrastées", "Couleurs primaires et noir", "Pas d'arrondis décoratifs"],
    palettes: [
      { name: "International", vars: { "--sg-bg": "#ffffff", "--sg-surface": "#ffffff", "--sg-text": "#111111", "--sg-muted": "#555555", "--sg-primary": "#e63329", "--sg-primary-2": "#c4271d", "--sg-acc": "#1a6ee0", "--sg-radius": "0px", "--sg-rule": "#111111" } },
      { name: "Bauhaus", vars: { "--sg-bg": "#f4f4f4", "--sg-surface": "#ffffff", "--sg-text": "#1a1a1a", "--sg-muted": "#666666", "--sg-primary": "#1a6ee0", "--sg-primary-2": "#1157c0", "--sg-acc": "#ffb400", "--sg-radius": "0px", "--sg-rule": "#1a1a1a" } },
      { name: "Japon", vars: { "--sg-bg": "#fbf8f0", "--sg-surface": "#ffffff", "--sg-text": "#20150a", "--sg-muted": "#6b5c4a", "--sg-primary": "#c0392b", "--sg-primary-2": "#a23224", "--sg-acc": "#2c3e50", "--sg-radius": "0px", "--sg-rule": "#20150a" } },
      { name: "Néon suisse", vars: { "--sg-bg": "#f2f2f2", "--sg-surface": "#ffffff", "--sg-text": "#111111", "--sg-muted": "#555555", "--sg-primary": "#0aa88a", "--sg-primary-2": "#078a6f", "--sg-acc": "#ff5c5c", "--sg-radius": "0px", "--sg-rule": "#111111" } }
    ]
  },

  /* ---------- BOLD ---------- */
  {
    id: "brut", p: "brut", name: "Brutalism", category: "Bold",
    tagline: "Brut : bordures épaisses, ombres dures, contradictions assumées.",
    desc: "Le (néo-)brutalism assume des couleurs saturées, des bordures 2-3px, des ombres franches sans flou et une typographie massive. Il refuse la discrétion et s'affiche comme un contraste volontaire.",
    flavor: "Brutalist",
    note: "**Quand l'utiliser ?** Portfolio créatif, campagne marketing, apps « hype ». Les ombres dures remplacent le flou.",
    tips: ["Bordures 2-3px + ombres offset 4-6px", "Couleurs saturées et claires", "Typographie gros, uppercase", "Interactions par déplacement (transform)"],
    palettes: [
      { name: "Jaune pop", vars: { "--sg-bg": "#fff3c4", "--sg-surface": "#fff9e6", "--sg-text": "#111111", "--sg-muted": "#333333", "--sg-primary": "#ff5e5e", "--sg-primary-2": "#ff3838", "--sg-acc": "#12c45f", "--sg-radius": "0px" } },
      { name: "Numérique", vars: { "--sg-bg": "#dff5ff", "--sg-surface": "#ffffff", "--sg-text": "#0a0a0a", "--sg-muted": "#222222", "--sg-primary": "#2f6bec", "--sg-primary-2": "#1f52c8", "--sg-acc": "#ffc548", "--sg-radius": "0px" } },
      { name: "Fuchsia", vars: { "--sg-bg": "#ffe3f2", "--sg-surface": "#ffffff", "--sg-text": "#1a1a1a", "--sg-muted": "#333333", "--sg-primary": "#d635c0", "--sg-primary-2": "#b41d9f", "--sg-acc": "#7ce036", "--sg-radius": "0px" } },
      { name: "Mono", vars: { "--sg-bg": "#111111", "--sg-surface": "#1a1a1a", "--sg-text": "#ffffff", "--sg-muted": "#bbbbbb", "--sg-primary": "#ffffff", "--sg-primary-2": "#dddddd", "--sg-acc": "#ff2fd6", "--sg-radius": "0px" } }
    ]
  },
  {
    id: "memphis", p: "memp", name: "Memphis Design", category: "Bold",
    tagline: "Né en 1980 : couleurs vives, formes géométriques, motifs.",
    desc: "Le style Memphis (design des années 80) mélange couleurs vives, formes géométriques (cercles, zigzags, points), bordures épaisses et rotations ludiques. C'est l'anti-fonctionnalisme assumé.",
    flavor: "Memphis",
    note: "**Quand l'utiliser ?** Sites fun, e-commerce de mode, résumés créatifs. Fonctionne très bien sur de grandes surfaces.",
    tips: ["Motifs de points/triangles en arrière-plan", "Bordures 3px + rotations légères", "Couleurs primaires et secondaires vives", "Shapes décoratives dans les coins"],
    palettes: [
      { name: "Rétro", vars: { "--sg-bg": "#ffd94d", "--sg-surface": "#fffdf2", "--sg-text": "#181818", "--sg-muted": "#555555", "--sg-primary": "#ff5e5e", "--sg-primary-2": "#ff3838", "--sg-acc": "#12c4e6", "--sg-radius": "18px" } },
      { name: "Violet funky", vars: { "--sg-bg": "#e7d9ff", "--sg-surface": "#ffffff", "--sg-text": "#241a3d", "--sg-muted": "#5c4a80", "--sg-primary": "#8f5bff", "--sg-primary-2": "#7a3ff0", "--sg-acc": "#07d0b4", "--sg-radius": "18px" } },
      { name: "Citron", vars: { "--sg-bg": "#c8f76b", "--sg-surface": "#fdfff6", "--sg-text": "#16240a", "--sg-muted": "#3c4f1e", "--sg-primary": "#ff7847", "--sg-primary-2": "#ef5c2a", "--sg-acc": "#4a7cf0", "--sg-radius": "18px" } },
      { name: "Bleu pop", vars: { "--sg-bg": "#5ad1f0", "--sg-surface": "#ffffff", "--sg-text": "#06182a", "--sg-muted": "#2a4a66", "--sg-primary": "#ff5c5c", "--sg-primary-2": "#ff3838", "--sg-acc": "#ffd23f", "--sg-radius": "18px" } }
    ]
  },
  {
    id: "vapor", p: "vapor", name: "Y2K / Vaporwave", category: "Bold",
    tagline: "Chrome, néons et pastel — l'esthétique rétro-futuriste.",
    desc: "Le Y2K / Vaporwave revisite l'imaginaire des années 90-2000 : dégradés violets, néons cyan et rose chrome, typographies « glitch » et reflets. Une nostalgie futuriste très reconnaissable.",
    flavor: "Vapor",
    note: "**Quand l'utiliser ?** Gaming, musique, mode, culture pop. Effet de « glow » à doser pour rester lisible.",
    tips: ["Dégradés violet/cyan + texte dégradé", "Glow néon (box-shadow coloré)", "Transparences et reflets chrome", "Alterner gros caractères rétro"],
    palettes: [
      { name: "Classique", vars: { "--sg-bg": "linear-gradient(160deg,#0b0b16,#241a3d)", "--vapor-a": "#ff71ce", "--vapor-b": "#01cdfe", "--vapor-c": "#05ffa1", "--sg-primary": "#b967ff", "--sg-primary-2": "#ff71ce", "--sg-acc": "#01cdfe", "--sg-text": "#ffffff", "--sg-muted": "#d8c8f0", "--sg-radius": "16px" } },
      { name: "Miami", vars: { "--sg-bg": "linear-gradient(160deg,#12001f,#3d0b53)", "--vapor-a": "#ff6ec7", "--vapor-b": "#ffa500", "--vapor-c": "#00e0ff", "--sg-primary": "#ff6ec7", "--sg-primary-2": "#b967ff", "--sg-acc": "#00e0ff", "--sg-text": "#ffffff", "--sg-muted": "#e0c8ff", "--sg-radius": "16px" } },
      { name: "Électro", vars: { "--sg-bg": "linear-gradient(160deg,#08080d,#1a0b2e)", "--vapor-a": "#00f0ff", "--vapor-b": "#7c5cff", "--vapor-c": "#ff2fd6", "--sg-primary": "#00f0ff", "--sg-primary-2": "#7c5cff", "--sg-acc": "#ff2fd6", "--sg-text": "#eaf", "--sg-muted": "#b9c", "--sg-radius": "16px" } },
      { name: "Midnight", vars: { "--sg-bg": "linear-gradient(160deg,#05060c,#120b1e)", "--vapor-a": "#00f0ff", "--vapor-b": "#b967ff", "--vapor-c": "#ff2fd6", "--sg-primary": "#00f0ff", "--sg-primary-2": "#7c5cff", "--sg-acc": "#ff2fd6", "--sg-text": "#dff", "--sg-muted": "#9a9abf", "--sg-radius": "16px" } },
      { name: "Chrome", vars: { "--sg-bg": "linear-gradient(160deg,#0d0d14,#1c163a)", "--vapor-a": "#ff71ce", "--vapor-b": "#00e3ff", "--vapor-c": "#b967ff", "--sg-primary": "#ff71ce", "--sg-primary-2": "#b967ff", "--sg-acc": "#00e3ff", "--sg-text": "#ffffff", "--sg-muted": "#c9c2e0", "--sg-radius": "16px" } }
    ]
  },

  /* ---------- MODERN ---------- */
  {
    id: "mat", p: "mat", name: "Material Design 3", category: "Modern",
    tagline: "De Google : élévation, mouvement et surfaces « matérielles ».",
    desc: "Material Design (Google) encode élévation par des ombres proportionnelles, surfaces colorées, ripple et composants adaptatifs. Le MD3 pousse vers des formes plus expressives et des tons dynamiques.",
    flavor: "Material",
    note: "**Quand l'utiliser ?** Apps Android, produits Google, interfaces riches. L'élévation guide la hiérarchie spatiale.",
    tips: ["Ombres d'élévation (2 niveaux +)", "Le bouton principal est « rempli », le second « tonal »", "Suivre les tokens de couleur", "Ripple au clic pour le feedback"],
    palettes: [
      { name: "Violet", vars: { "--sg-bg": "#e8e4f5", "--sg-surface": "#f7f5ff", "--sg-text": "#1b1b2b", "--sg-muted": "#6b6b83", "--sg-primary": "#6552e0", "--sg-primary-2": "#4f3bd0", "--sg-acc": "#00bfa5", "--sg-radius": "16px", "--sg-primary-soft": "rgba(101,82,224,.1)" } },
      { name: "Bleu", vars: { "--sg-bg": "#e3edf7", "--sg-surface": "#f4f8ff", "--sg-text": "#13203a", "--sg-muted": "#5f6f8a", "--sg-primary": "#2c6fd6", "--sg-primary-2": "#1f5bb8", "--sg-acc": "#f59e0b", "--sg-radius": "16px", "--sg-primary-soft": "rgba(44,111,214,.1)", "--sg-accent-grad": "linear-gradient(135deg,#2c6fd6,#00bfa5)" } },
      { name: "Sombre", vars: { "--sg-bg": "#121212", "--sg-surface": "#1c1c1e", "--sg-text": "#f0f0f0", "--sg-muted": "#9a9aa2", "--sg-primary": "#7c5cff", "--sg-primary-2": "#6a4bf0", "--sg-acc": "#00d4ff", "--sg-radius": "16px", "--sg-primary-soft": "rgba(124,92,255,.2)", "--sg-shadow": "0 8px 20px rgba(0,0,0,.5)" } },
      { name: "Forêt", vars: { "--sg-bg": "#e6f2ec", "--sg-surface": "#f4faf6", "--sg-text": "#16301f", "--sg-muted": "#5a7a66", "--sg-primary": "#2f9e6f", "--sg-primary-2": "#1f8158", "--sg-acc": "#f6c453", "--sg-radius": "16px", "--sg-primary-soft": "rgba(47,158,111,.1)" } },
      { name: "Brique", vars: { "--sg-bg": "#f5ece7", "--sg-surface": "#fbf5f1", "--sg-text": "#3a2a24", "--sg-muted": "#9a8278", "--sg-primary": "#c1663a", "--sg-primary-2": "#9c4d2a", "--sg-acc": "#4a7de0", "--sg-radius": "16px", "--sg-primary-soft": "rgba(193,102,58,.1)" } }
    ]
  },
  {
    id: "dark", p: "dark", name: "Dark / Néo Cyberpunk", category: "Modern",
    tagline: "Fond sombre, néons auréolés, accents lumineux.",
    desc: "Le dark mode « cyberpunk » associe fonds très sombres, couleurs néon saturées (violet, cyan) et effets de lueur (glow). Les accents deviennent des sources de lumière.",
    flavor: "Neon",
    note: "**Quand l'utiliser ?** Gaming, apps tech, dark mode par défaut. Contraindre le glow pour ne pas fatiguer l'œil.",
    tips: ["Fond #0a-0f, surface légèrement plus claire", "2 couleurs néon max (primaire + accent)", "Glow contrôlé sur le texte/boutons", "Éviter le blanc pur (préférer #e7eaf0)"],
    palettes: [
      { name: "Cyber", vars: { "--sg-bg": "#0a0a0f", "--sg-surface": "#12121a", "--sg-text": "#e7eaf0", "--sg-muted": "#9aa3b5", "--sg-primary": "#7c5cff", "--sg-primary-2": "#5a49e8", "--sg-acc": "#00d4ff", "--sg-radius": "16px", "--sg-primary-glow": "rgba(124,92,255,.45)" } },
      { name: "Ember", vars: { "--sg-bg": "#0c0a09", "--sg-surface": "#171210", "--sg-text": "#f5ece6", "--sg-muted": "#a8998d", "--sg-primary": "#ff6b3d", "--sg-primary-2": "#e8491f", "--sg-acc": "#ffb45c", "--sg-radius": "16px", "--sg-primary-glow": "rgba(255,107,61,.45)" } },
      { name: "Acid", vars: { "--sg-bg": "#07090a", "--sg-surface": "#10161a", "--sg-text": "#dff6ff", "--sg-muted": "#7fa8b5", "--sg-primary": "#00ff88", "--sg-primary-2": "#00d76c", "--sg-acc": "#00d4ff", "--sg-radius": "16px", "--sg-primary-glow": "rgba(0,255,136,.4)" } },
      { name: "Ambre cyber", vars: { "--sg-bg": "#0b0806", "--sg-surface": "#150f0b", "--sg-text": "#f5e6d6", "--sg-muted": "#a89583", "--sg-primary": "#ff8a3d", "--sg-primary-2": "#e86a1f", "--sg-acc": "#ffd166", "--sg-radius": "16px", "--sg-primary-glow": "rgba(255,138,61,.45)" } },
      { name: "Xénon", vars: { "--sg-bg": "#070709", "--sg-surface": "#100f14", "--sg-text": "#e7e6f0", "--sg-muted": "#8a8a9d", "--sg-primary": "#b06ff0", "--sg-primary-2": "#9a52d6", "--sg-acc": "#3ddc97", "--sg-radius": "16px", "--sg-primary-glow": "rgba(176,111,240,.45)" } }
    ]
  },
  {
    id: "aurora", p: "aur", name: "Aurora / Bento Grid", category: "Modern",
    tagline: "Cartes vitrées sur fond aurore, grille « bento ».",
    desc: "Inspiré des bento grids, ce style superpose des tuiles vitrées en transparence sur un fond « aurore » dégradé. Moderne, ludique et très utilisé dans les landing pages récentes.",
    flavor: "Aurora",
    note: "**Quand l'utiliser ?** Landing pages, dashboards, SaaS. Le fond en dégradé radial crée la profondeur.",
    tips: ["Fond aurore (radial gradient multi-couches)", "Tuiles rgba(255,255,255,.08) + blur", "Bordure 1px rgba(255,255,255,.15)", "Grille asymétrique (bento)"],
    palettes: [
      { name: "Aurora", vars: { "--sg-bg": "radial-gradient(120% 120% at 20% 20%,#7c5cff 0%,#3b2f8f 45%,#0b0b16 100%)", "--sg-surface": "transparent", "--sg-text": "#ffffff", "--sg-muted": "rgba(255,255,255,.8)", "--sg-primary": "#00d4ff", "--sg-primary-2": "#7c5cff", "--sg-acc": "#3ddc97", "--sg-radius": "24px" } },
      { name: "Sunset", vars: { "--sg-bg": "radial-gradient(120% 120% at 80% 10%,#ff7a59 0%,#d94a7e 40%,#381b5e 100%)", "--sg-surface": "transparent", "--sg-text": "#ffffff", "--sg-muted": "rgba(255,255,255,.8)", "--sg-primary": "#ffd166", "--sg-primary-2": "#ff8fab", "--sg-acc": "#7c5cff", "--sg-radius": "24px" } },
      { name: "Émeraude", vars: { "--sg-bg": "radial-gradient(120% 120% at 20% 80%,#0ba360 0%,#0f6b52 45%,#06121d 100%)", "--sg-surface": "transparent", "--sg-text": "#ffffff", "--sg-muted": "rgba(255,255,255,.82)", "--sg-primary": "#3ddc97", "--sg-primary-2": "#0ba360", "--sg-acc": "#00d4ff", "--sg-radius": "24px" } },
      { name: "Bleu nuit", vars: { "--sg-bg": "radial-gradient(120% 120% at 70% 20%,#1e5fff 0%,#132a6b 45%,#060a17 100%)", "--sg-surface": "transparent", "--sg-text": "#ffffff", "--sg-muted": "rgba(255,255,255,.8)", "--sg-primary": "#5ad1f0", "--sg-primary-2": "#3a7bd5", "--sg-acc": "#ffb45c", "--sg-radius": "24px" } },
      { name: "Corail", vars: { "--sg-bg": "radial-gradient(120% 120% at 80% 10%,#ff7a59 0%,#d94a7e 40%,#381b5e 100%)", "--sg-surface": "transparent", "--sg-text": "#ffffff", "--sg-muted": "rgba(255,255,255,.8)", "--sg-primary": "#ffd166", "--sg-primary-2": "#ff8fab", "--sg-acc": "#7c5cff", "--sg-radius": "24px" } }
    ]
  },
  {
    id: "holo", p: "holo", name: "Holographique / Gradient", category: "Modern",
    tagline: "Dégradés iridescents animés et reflets « chrome ».",
    desc: "Le style holographique applique des dégradés multicolores (rose, violet, cyan, vert) en texte, tenue et surfaces. Les fonds de dégradé animés donnent une impression de reflet changeant, très « tech » et premium.",
    flavor: "Holo",
    note: "**Quand l'utiliser ?** Finance, SaaS premium, produits tech. Le dégradé animé attire l'œil — à réserver aux éléments clés.",
    tips: ["Dégradés à 4-5 teintes", "background-clip: text pour les titres", "Animation lente du fond", "Ombres colorées douces"],
    palettes: [
      { name: "Irisé", vars: { "--sg-bg": "#f4f1ff", "--sg-surface": "#ffffff", "--sg-text": "#2b2440", "--sg-muted": "#8379a0", "--sg-primary": "#7c5cff", "--sg-primary-2": "#5a49e8", "--sg-acc": "#00d4ff", "--sg-radius": "16px" } },
      { name: "Pastel", vars: { "--sg-bg": "#fff4fb", "--sg-surface": "#ffffff", "--sg-text": "#3a2340", "--sg-muted": "#a37aa3", "--sg-primary": "#ff5c9d", "--sg-primary-2": "#e84a84", "--sg-acc": "#7c5cff", "--sg-radius": "18px" } },
      { name: "Minuit", vars: { "--sg-bg": "#12121c", "--sg-surface": "#1b1b2b", "--sg-text": "#f0ecff", "--sg-muted": "#9a93bd", "--sg-primary": "#00d4ff", "--sg-primary-2": "#7c5cff", "--sg-acc": "#ff5c9d", "--sg-radius": "16px" } },
      { name: "Néon pastel", vars: { "--sg-bg": "#151022", "--sg-surface": "#1d1830", "--sg-text": "#f0ecff", "--sg-muted": "#9a8fc0", "--sg-primary": "#ff8fab", "--sg-primary-2": "#7c5cff", "--sg-acc": "#00e3ff", "--sg-radius": "16px" } },
      { name: "Iris", vars: { "--sg-bg": "#101014", "--sg-surface": "#191920", "--sg-text": "#ececff", "--sg-muted": "#9a98c0", "--sg-primary": "#00e3ff", "--sg-primary-2": "#7c5cff", "--sg-acc": "#ff5c9d", "--sg-radius": "16px" } }
    ]
  },
  {
    id: "skeuo", p: "skeuo", name: "Skeuomorphisme", category: "Modern",
    tagline: "Imite la matière réelle : cuir, bois, métal brossé.",
    desc: "Le skeuomorphisme reproduit des objets physiques (cuir, bois, métal) pour rendre l'interface familière. Dégradés réalistes, reliefs, coutures éventuelles : l'interface devient tactile.",
    flavor: "Skeuomorphic",
    note: "**Quand l'utiliser ?** Apps « réalistes », jeux, interfaces de lecture, produits premium. Exige de soigner la texture et la lumière.",
    tips: ["Dégradés qui simulent la matière", "Reflet + ombre interne pour le relief", "Bords biseautés / coutures", "Rare aujourd'hui — à doser"],
    palettes: [
      { name: "Cuir", vars: { "--sg-bg": "#54452f", "--sg-surface": "#7a5a32", "--sg-text": "#f2e4c8", "--sg-muted": "#e0cfae", "--sg-primary": "#7bc67b", "--sg-primary-2": "#3f8f45", "--sg-acc": "#c9a227", "--sg-radius": "14px", "--skeuo-hi": "#8a6a3d", "--skeuo-lo": "#5a4124", "--skeuo-border": "#4a3418", "--skeuo-text": "#f2e4c8" } },
      { name: "Métal brossé", vars: { "--sg-bg": "#3b3f46", "--sg-surface": "#4a4f5a", "--sg-text": "#e6e8ee", "--sg-muted": "#b9bdc8", "--sg-primary": "#5b86e5", "--sg-primary-2": "#3a5fc0", "--sg-acc": "#c9cfdb", "--sg-radius": "12px", "--skeuo-hi": "#5b606c", "--skeuo-lo": "#3a3e48", "--skeuo-border": "#2b2f3a", "--skeuo-text": "#e6e8ee" } },
      { name: "Bois", vars: { "--sg-bg": "#8a6a3d", "--sg-surface": "#a5824a", "--sg-text": "#3a2712", "--sg-muted": "#6b4e28", "--sg-primary": "#c1663a", "--sg-primary-2": "#9c4d2a", "--sg-acc": "#c9a227", "--sg-radius": "12px", "--skeuo-hi": "#c9a86a", "--skeuo-lo": "#8a6a3d", "--skeuo-border": "#6b4e28", "--skeuo-text": "#3a2712" } },
      { name: "Ardoise", vars: { "--sg-bg": "#2b3138", "--sg-surface": "#3a414b", "--sg-text": "#e6e9ef", "--sg-muted": "#aab3bf", "--sg-primary": "#6ec6ff", "--sg-primary-2": "#2f9bd8", "--sg-acc": "#c9cfdb", "--sg-radius": "12px", "--skeuo-hi": "#4a5260", "--skeuo-lo": "#2e343c", "--skeuo-border": "#20262d", "--skeuo-text": "#e6e9ef" } }
    ]
  },

  /* ---------- EXTRA ---------- */
  {
    id: "term", p: "term", name: "Terminal / Retro Code", category: "Modern",
    tagline: "Style « TTY » : monospace, vert néon sur fond sombre.",
    desc: "L'esthétique terminal reproduit une console : typographie monospace, texte lumineux sur fond sombre, bordures fines et lueur phosphorescente. Appréciée pour un rendu « hacker » ou technique.",
    flavor: "Terminal",
    note: "**Quand l'utiliser ?** Apps dev, intégrations CLI, documentation technique, portefeuilles « geek ». La police monospace est essentielle.",
    tips: ["Police monospace (Consolas / JetBrains Mono)", "Fond très sombre + accentnéon", "Légère lueur (text-shadow / box-shadow)", "Angles droits, bordures 1px"],
    palettes: [
      { name: "Phosphore", vars: { "--sg-bg": "#060d06", "--sg-surface": "#0b120b", "--sg-text": "#c8ffd0", "--sg-muted": "#7fbf8a", "--sg-primary": "#33ff77", "--sg-acc": "#00ffcc", "--sg-radius": "6px", "--term-glow": "rgba(51,255,119,.25)", "--term-on": "#0f2a16" } },
      { name: "Ambre", vars: { "--sg-bg": "#0d0a05", "--sg-surface": "#120e08", "--sg-text": "#ffe8c0", "--sg-muted": "#c9b389", "--sg-primary": "#ffb347", "--sg-acc": "#ff7a45", "--sg-radius": "6px", "--term-glow": "rgba(255,179,71,.25)", "--term-on": "#2a1c0f" } },
      { name: "Cyan", vars: { "--sg-bg": "#040d10", "--sg-surface": "#081317", "--sg-text": "#c8f7ff", "--sg-muted": "#7fc3d0", "--sg-primary": "#2fd4ff", "--sg-acc": "#7c5cff", "--sg-radius": "6px", "--term-glow": "rgba(47,212,255,.25)", "--term-on": "#0f2530" } },
      { name: "Rouge", vars: { "--sg-bg": "#0b0505", "--sg-surface": "#120808", "--sg-text": "#ffd0d0", "--sg-muted": "#c08a8a", "--sg-primary": "#ff4d4d", "--sg-acc": "#ffb347", "--sg-radius": "6px", "--term-glow": "rgba(255,77,77,.25)", "--term-on": "#2a0f0f" } },
      { name: "Rose", vars: { "--sg-bg": "#0d060b", "--sg-surface": "#140912", "--sg-text": "#ffd6ec", "--sg-muted": "#c986a8", "--sg-primary": "#ff4d9d", "--sg-acc": "#ffb347", "--sg-radius": "6px", "--term-glow": "rgba(255,77,157,.25)", "--term-on": "#2a0f20" } }
    ]
  },
  {
    id: "pix", p: "pix", name: "Pixel / 8-bit", category: "Bold",
    tagline: "Esthétique rétro jeu vidéo : blocs, bordures épaisses.",
    desc: "Le pixel art revisite les jeux rétro : couleurs franches, bords épais et carrés, ombres « dures » décalées. Une direction ludique qui rappelle les consoles 8-bit.",
    flavor: "8-bit",
    note: "**Quand l'utiliser ?** Games, sites rétro, communautés gaming, e-commerce « arcade ». Évitez le texte fin.",
    tips: ["Bordures 3-4px + coins droits", "Ombres 3-6px sans flou", "Couleurs saturées type console", "Grille d'arrière-plan discrète"],
    palettes: [
      { name: "Console", vars: { "--sg-bg": "#f4f48f", "--sg-surface": "#fffef0", "--sg-text": "#222222", "--sg-muted": "#555555", "--sg-primary": "#e23b3b", "--sg-acc": "#1f7ae0", "--sg-radius": "0px" } },
      { name: "Gameboy", vars: { "--sg-bg": "#c7f77b", "--sg-surface": "#e3ffb0", "--sg-text": "#1a2a0a", "--sg-muted": "#4a5a2a", "--sg-primary": "#2c8a2c", "--sg-acc": "#1c6bb0", "--sg-radius": "0px" } },
      { name: "Arcade", vars: { "--sg-bg": "#3a2a5a", "--sg-surface": "#4a3566", "--sg-text": "#ffffff", "--sg-muted": "#b9a7d0", "--sg-primary": "#ffd23f", "--sg-acc": "#ff6ec7", "--sg-radius": "0px" } },
      { name: "Néon 8-bit", vars: { "--sg-bg": "#1a1a2e", "--sg-surface": "#232342", "--sg-text": "#e8e8ff", "--sg-muted": "#9a9ac0", "--sg-primary": "#ff6ec7", "--sg-acc": "#00e3ff", "--sg-radius": "0px" } }
    ]
  },
  {
    id: "neon", p: "neon", name: "Neon Sign", category: "Bold",
    tagline: "Enseigne au néon : lueurs et couleurs électriques.",
    desc: "Le style enseigne néon utilise des contours et textes lumineux sur fond très sombre, avec des ombres colorées « glow ». Une ambiance nocturne urbaine et électrique.",
    flavor: "Neon",
    note: "**Quand l'utiliser ?** Apps nocturnes, musique, marques urbaines. Maîtrisez le glow pour la lisibilité.",
    tips: ["Fond quasi noir", "2 couleurs néon max", "text-shadow + box-shadow colorés", "Boutons en « pill » outline"],
    palettes: [
      { name: "Rose", vars: { "--sg-bg": "#0c0110", "--sg-surface": "#17021e", "--sg-text": "#ffe0f2", "--sg-muted": "#c58bb0", "--sg-primary": "#ff2fd6", "--sg-acc": "#01cdfe", "--sg-radius": "16px", "--neon-glow": "rgba(255,47,214,.55)", "--neon-glow-2": "rgba(1,205,254,.5)" } },
      { name: "Bleu électrique", vars: { "--sg-bg": "#010810", "--sg-surface": "#04101c", "--sg-text": "#dff4ff", "--sg-muted": "#7fb3c9", "--sg-primary": "#00e3ff", "--sg-acc": "#a45cff", "--sg-radius": "16px", "--neon-glow": "rgba(0,227,255,.5)", "--neon-glow-2": "rgba(164,92,255,.5)" } },
      { name: "Vert uranium", vars: { "--sg-bg": "#030a04", "--sg-surface": "#07130a", "--sg-text": "#dfffd9", "--sg-muted": "#86c080", "--sg-primary": "#39ff14", "--sg-acc": "#ffe14d", "--sg-radius": "16px", "--neon-glow": "rgba(57,255,20,.45)", "--neon-glow-2": "rgba(255,225,77,.4)" } },
      { name: "Ambre", vars: { "--sg-bg": "#0d0600", "--sg-surface": "#170c02", "--sg-text": "#ffe0b0", "--sg-muted": "#c9a880", "--sg-primary": "#ffae2f", "--sg-acc": "#ff5c5c", "--sg-radius": "16px", "--neon-glow": "rgba(255,174,47,.5)", "--neon-glow-2": "rgba(255,92,92,.45)" } },
      { name: "Violet", vars: { "--sg-bg": "#0a0110", "--sg-surface": "#150221", "--sg-text": "#f0e0ff", "--sg-muted": "#c39ab5", "--sg-primary": "#b06ff0", "--sg-acc": "#00e3ff", "--sg-radius": "16px", "--neon-glow": "rgba(176,111,240,.5)", "--neon-glow-2": "rgba(0,227,255,.5)" } }
    ]
  },
  {
    id: "mesh", p: "mesh", name: "Gradient Mesh", category: "Soft",
    tagline: "Fond de dégradés radiaux superposés, cartes claires.",
    desc: "Le gradient mesh empile des taches de couleur floues en arrière-plan pour un effet organique et doux, tandis que les cartes restent claires et lisibles. Très fréquent dans le design moderne.",
    flavor: "Mesh",
    note: "**Quand l'utiliser ?** Landing pages, SaaS, produits créatifs. Les dégradés en arrière-plan structurent la profondeur.",
    tips: ["Taches radiales semi-transparentes", "Cartes claires (90% opacité)", "Titres en dégradé", "Backdrop-blur léger sur les cartes"],
    palettes: [
      { name: "Aurore", vars: { "--sg-bg": "#5b3bd0", "--sg-surface": "#ffffff", "--sg-text": "#2b1a4a", "--sg-muted": "#7a6a9a", "--sg-primary": "#8a5cff", "--sg-acc": "#00d4ff", "--sg-radius": "20px", "--mesh-a": "#8a5cff", "--mesh-b": "#00d4ff", "--mesh-c": "#ff5c9d", "--mesh-d": "#a44ff0", "--mesh-e": "#7c3aed" } },
      { name: "Tropical", vars: { "--sg-bg": "#ff4d8d", "--sg-surface": "#ffffff", "--sg-text": "#3a1a2a", "--sg-muted": "#9a6a7a", "--sg-primary": "#ff8fab", "--sg-acc": "#2ec4a8", "--sg-radius": "20px", "--mesh-a": "#ff8fab", "--mesh-b": "#ffb45c", "--mesh-c": "#2ec4a8", "--mesh-d": "#ff5c8a", "--mesh-e": "#ff8a5c" } },
      { name: "Océan", vars: { "--sg-bg": "#0b2740", "--sg-surface": "#ffffff", "--sg-text": "#10303f", "--sg-muted": "#5a7a8a", "--sg-primary": "#1f9bd8", "--sg-acc": "#20e3b2", "--sg-radius": "20px", "--mesh-a": "#1f9bd8", "--mesh-b": "#20e3b2", "--mesh-c": "#7c5cff", "--mesh-d": "#0f4f7a", "--mesh-e": "#0b3a5c" } },
      { name: "Bonbon", vars: { "--sg-bg": "#5a2a7a", "--sg-surface": "#ffffff", "--sg-text": "#3a1a4a", "--sg-muted": "#8a5aa0", "--sg-primary": "#ff5c9d", "--sg-acc": "#ffd166", "--sg-radius": "20px", "--mesh-a": "#ff5c9d", "--mesh-b": "#ffd166", "--mesh-c": "#7c5cff", "--mesh-d": "#d44ff0", "--mesh-e": "#a44ff0" } }
    ]
  },
  {
    id: "stick", p: "stick", name: "Sticker / Doodle", category: "Bold",
    tagline: "Autocollants : bordures épaisses, ombres solides, légère rotation.",
    desc: "Le style sticker/doodle donne l'impression d'autocollants posés sur la page : bordures 2-3px, ombre « offset » solide sans flou, coins très arrondis et légères rotations. Ludique et artisanal.",
    flavor: "Sticker",
    note: "**Quand l'utiliser ?** Marques fun, réseaux sociaux, landing créatives. La rotation légère invite au jeu.",
    tips: ["Bordure épaisse + ombre offset 3-4px", "Rotation de 1-3°", "Coins très arrondis", "Couleurs vives et contrastées"],
    palettes: [
      { name: "Kawaii", vars: { "--sg-bg": "#fff3f7", "--sg-surface": "#fffdfa", "--sg-text": "#4a2b3a", "--sg-muted": "#b58a9a", "--sg-primary": "#ff8fab", "--sg-acc": "#a6e6d0", "--sg-radius": "20px", "--stick-s": "#ffcdd6" } },
      { name: "Citron", vars: { "--sg-bg": "#fff9c9", "--sg-surface": "#fffef5", "--sg-text": "#3a320a", "--sg-muted": "#a09550", "--sg-primary": "#ffb02f", "--sg-acc": "#6fd56f", "--sg-radius": "20px", "--stick-s": "#ffd76b" } },
      { name: "Bleuet", vars: { "--sg-bg": "#e7f0ff", "--sg-surface": "#ffffff", "--sg-text": "#1a2e55", "--sg-muted": "#7a8fb5", "--sg-primary": "#4a7de0", "--sg-acc": "#7fe0c0", "--sg-radius": "20px", "--stick-s": "#b8d0ff" } },
      { name: "Fraise", vars: { "--sg-bg": "#ffe8ee", "--sg-surface": "#ffffff", "--sg-text": "#5a2b3a", "--sg-muted": "#b58a9a", "--sg-primary": "#ff5c7a", "--sg-acc": "#ffd166", "--sg-radius": "20px", "--stick-s": "#ffd0dc" } }
    ]
  },
  {
    id: "paper", p: "paper", name: "Paper / Sketch", category: "Flat",
    tagline: "Effet papier/carnet : contours irréguliers, lignes, crayon.",
    desc: "Le style paper/sketch imite le papier et le carnet : fond crème, lignes de cahier, contours légèrement irréguliers et couleurs « crayon ». Un rendu manuel et éditorial.",
    flavor: "Paper",
    note: "**Quand l'utiliser ?** Blog, notes, moodboard, marques artisanales. Restez sur des tons doux.",
    tips: ["Fond papier + lignes de carnet", "Border-radius irréguliers (2px/14px…)", "Couleurs type crayon", "Ombre très légère, fine ligne"],
    palettes: [
      { name: "Cahier", vars: { "--sg-bg": "#fbf7ec", "--sg-surface": "#fffdf6", "--sg-text": "#4a4038", "--sg-muted": "#9a8f82", "--sg-primary": "#e07a5f", "--sg-acc": "#3d8a70", "--sg-radius": "10px" } },
      { name: "Encre", vars: { "--sg-bg": "#f6f6f2", "--sg-surface": "#ffffff", "--sg-text": "#2a2a2a", "--sg-muted": "#8a8a8a", "--sg-primary": "#2a4ad0", "--sg-acc": "#d0912f", "--sg-radius": "10px" } },
      { name: "Pastel", vars: { "--sg-bg": "#fdf1f4", "--sg-surface": "#ffffff", "--sg-text": "#5a3a4a", "--sg-muted": "#b08a9a", "--sg-primary": "#e58a8a", "--sg-acc": "#8ab0e0", "--sg-radius": "10px" } },
      { name: "Coton", vars: { "--sg-bg": "#f4f6f4", "--sg-surface": "#ffffff", "--sg-text": "#33333a", "--sg-muted": "#8a8f96", "--sg-primary": "#6a7a8a", "--sg-acc": "#8aa8c9", "--sg-radius": "10px" } }
    ]
  },
  {
    id: "aero", p: "aero", name: "Frutiger Aero", category: "Modern",
    tagline: "Années 2000 : chrome, bulles, dégradés bleus brillants.",
    desc: "Le Frutiger Aero (2000s) mélange dégradés bleu-cyan, effets « vitreux », reflets chrome et bulles. Un look optimiste, brillant et technologique très reconnaissable.",
    flavor: "Aero",
    note: "**Quand l'utiliser ?** Nostalgie Y2K, produits tech « futuristes » d'époque, niches rétro. Effet « glossy » à doser.",
    tips: ["Dégradé haut-clair / bas-sombre", "Reflet blanc en haut (inset)", "Boutons en « pill » brillants", "Bulles et fond bleu ciel"],
    palettes: [
      { name: "Ciel", vars: { "--sg-bg": "linear-gradient(180deg,#8bd2ff,#4a9fe0)", "--sg-surface": "#f2faff", "--sg-surface-2": "#d6ebfa", "--sg-text": "#0a3555", "--sg-muted": "#4a88b0", "--sg-primary": "#1e7fd0", "--sg-primary-2": "#0e5aa8", "--sg-acc": "#6ec6ff", "--sg-radius": "20px" } },
      { name: "Menthe", vars: { "--sg-bg": "linear-gradient(180deg,#a4f0ce,#4ab0a0)", "--sg-surface": "#f2fdf8", "--sg-surface-2": "#d6f0e4", "--sg-text": "#0b3a30", "--sg-muted": "#4a8a7a", "--sg-primary": "#17a589", "--sg-primary-2": "#0d7a64", "--sg-acc": "#a9f0d8", "--sg-radius": "20px" } },
      { name: "Lave", vars: { "--sg-bg": "linear-gradient(180deg,#ffc39b,#ef7a4a)", "--sg-surface": "#fff6ef", "--sg-surface-2": "#ffd8bd", "--sg-text": "#5a2a10", "--sg-muted": "#a0785c", "--sg-primary": "#e85d2a", "--sg-primary-2": "#c53a12", "--sg-acc": "#ffc39b", "--sg-radius": "20px" } },
      { name: "Bubblegum", vars: { "--sg-bg": "linear-gradient(180deg,#ffb6d5,#ff7fb0)", "--sg-surface": "#fff4f9", "--sg-surface-2": "#ffd6ea", "--sg-text": "#5a1030", "--sg-muted": "#a05a80", "--sg-primary": "#e83f9b", "--sg-primary-2": "#c2277f", "--sg-acc": "#ffb6d5", "--sg-radius": "20px" } }
    ]
  },
  {
    id: "acid", p: "acid", name: "Acid / Rave", category: "Bold",
    tagline: "Psychédélique : couleurs saturées, rayures, dégradés vifs.",
    desc: "Le style acid/rave assume des couleurs ultra-saturées, des rayures en diagonale, des dégradés flashy et des bordures marquées. Une énergie festive et underground.",
    flavor: "Acid",
    note: "**Quand l'utiliser ?** Événements, mode, culture club, affiches. Le contraste saturé est volontairement agressif.",
    tips: ["Couleurs saturées + rayures", "Bordures 2-3px + ombre solide", "Titres en dégradé", "Formes « pill » et rondes"],
    palettes: [
      { name: "Pop", vars: { "--sg-bg": "#f4ff5a", "--sg-surface": "#fffef0", "--sg-text": "#1a1a1a", "--sg-muted": "#444444", "--sg-primary": "#ff2f8a", "--sg-acc": "#2f9bff", "--sg-radius": "18px", "--acid-s": "#b8c900" } },
      { name: "UV", vars: { "--sg-bg": "#12002e", "--sg-surface": "#1e0a44", "--sg-text": "#ffffff", "--sg-muted": "#c9a8ff", "--sg-primary": "#ff00c8", "--sg-acc": "#00ffd0", "--sg-radius": "18px", "--acid-s": "#00ffd0" } },
      { name: "Solaire", vars: { "--sg-bg": "#ffd23f", "--sg-surface": "#fffef5", "--sg-text": "#2a1a00", "--sg-muted": "#8a6a20", "--sg-primary": "#ff6b2f", "--sg-acc": "#2a9bd8", "--sg-radius": "18px", "--acid-s": "#d89a00" } },
      { name: "Sour", vars: { "--sg-bg": "#a8ff2f", "--sg-surface": "#fdfff2", "--sg-text": "#1a2a00", "--sg-muted": "#5a7a20", "--sg-primary": "#2f9bff", "--sg-acc": "#ff2f8a", "--sg-radius": "18px", "--acid-s": "#8ad900" } }
    ]
  },

  /* ---------- EXTRA 2 ---------- */
  {
    id: "bento", p: "bento", name: "Bento Grid", category: "Modern",
    tagline: "Grille « bento » : tuiles arrondies et espacées.",
    desc: "Le bento grid organise des tuiles arrondies, largement espacées, sur un fond clair. Chaque tuile expose un petit module (métrique, visuel, action). Moderne, aéré et très utilisé dans les landing pages.",
    flavor: "Bento",
    note: "**Quand l'utiliser ?** Landing pages, dashboards, pages produits. La grille apporte structure et équilibre.",
    tips: ["Grands rayons + espaces généreux", "Une tuile « hero » plus grande", "Fond neutre, tuiles claires", "Dégradés doux pour la tuile accent"],
    palettes: [
      { name: "Ciel", vars: { "--sg-bg": "#eef2f7", "--sg-surface": "#ffffff", "--sg-surface-2": "#f2f6fb", "--sg-text": "#1a2333", "--sg-muted": "#7a8598", "--sg-primary": "#4f7df7", "--sg-primary-2": "#3457d5", "--sg-acc": "#22c58b", "--sg-radius": "26px", "--sg-shadow-soft": "rgba(20,30,60,.08)" } },
      { name: "Lavande", vars: { "--sg-bg": "#f2eef9", "--sg-surface": "#ffffff", "--sg-surface-2": "#f5f1fc", "--sg-text": "#30214a", "--sg-muted": "#9484b5", "--sg-primary": "#7c5cff", "--sg-primary-2": "#5f42d8", "--sg-acc": "#e85dff", "--sg-radius": "26px", "--sg-shadow-soft": "rgba(60,30,120,.08)" } },
      { name: "Tropical", vars: { "--sg-bg": "#fff4ea", "--sg-surface": "#ffffff", "--sg-surface-2": "#fff6f0", "--sg-text": "#3a2a1a", "--sg-muted": "#a08a75", "--sg-primary": "#ff7a3d", "--sg-primary-2": "#ef5c22", "--sg-acc": "#22b8a8", "--sg-radius": "26px", "--sg-shadow-soft": "rgba(180,80,0,.08)" } },
      { name: "Émeraude", vars: { "--sg-bg": "#e7f2ee", "--sg-surface": "#ffffff", "--sg-surface-2": "#eef8f4", "--sg-text": "#17342a", "--sg-muted": "#6f9885", "--sg-primary": "#149d6b", "--sg-primary-2": "#087a50", "--sg-acc": "#7cc4ff", "--sg-radius": "26px", "--sg-shadow-soft": "rgba(0,90,60,.08)" } },
      { name: "Soleil", vars: { "--sg-bg": "#fff8e8", "--sg-surface": "#ffffff", "--sg-surface-2": "#fffaf0", "--sg-text": "#3a2a12", "--sg-muted": "#a09070", "--sg-primary": "#f79b2e", "--sg-primary-2": "#d97f1f", "--sg-acc": "#22b8a8", "--sg-radius": "26px", "--sg-shadow-soft": "rgba(200,120,0,.1)" } }
    ]
  },
  {
    id: "hud", p: "hud", name: "Cyber HUD / Sci-Fi", category: "Modern",
    tagline: "Interface futuriste : scanlines, coins HUD, néon cyan.",
    desc: "Le style cyber HUD évoque les écrans de vaisseau : police monospace, scanlines, coins en équerre, néon et lueur. Technique, immersif et très « sci-fi ». Se distingue du terminal par son ambiance HUD.",
    flavor: "HUD",
    note: "**Quand l'utiliser ?** Apps tech, jeux, tableaux de bord futuristes, projets « IoT ». La police monospace renforce l'effet.",
    tips: ["Police monospace + uppercase", "Coins d'équerre (corners)", "Scanlines sur le fond", "Glow néon, bordure 1px"],
    palettes: [
      { name: "Cyan", vars: { "--sg-bg": "#04161e", "--sg-surface": "#07242f", "--sg-text": "#c8f4ff", "--sg-muted": "#5f9aab", "--sg-primary": "#00e3ff", "--sg-acc": "#00ff9d", "--sg-radius": "8px", "--hud-glow": "rgba(0,227,255,.28)" } },
      { name: "Ambre", vars: { "--sg-bg": "#160c04", "--sg-surface": "#241207", "--sg-text": "#ffe0c0", "--sg-muted": "#b08a60", "--sg-primary": "#ffb02f", "--sg-acc": "#ff6b3d", "--sg-radius": "8px", "--hud-glow": "rgba(255,176,47,.3)" } },
      { name: "Vert", vars: { "--sg-bg": "#04140a", "--sg-surface": "#07271a", "--sg-text": "#c8ffd9", "--sg-muted": "#5aa878", "--sg-primary": "#2fd47a", "--sg-acc": "#7c5cff", "--sg-radius": "8px", "--hud-glow": "rgba(47,212,122,.28)" } },
      { name: "Bleu", vars: { "--sg-bg": "#051020", "--sg-surface": "#081a33", "--sg-text": "#c8e4ff", "--sg-muted": "#5f88b5", "--sg-primary": "#4f8fff", "--sg-acc": "#7c5cff", "--sg-radius": "8px", "--hud-glow": "rgba(79,143,255,.28)" } }
    ]
  },
  {
    id: "paint", p: "paint", name: "Watercolor / Organic", category: "Soft",
    tagline: "Aquarelle : taches de couleur douces, formes organiques.",
    desc: "Le style aquarelle applique des taches de couleur floues et organiques derrière des cartes claires, avec des contours irréguliers et des rayons variés. Doux, naturel et poétique.",
    flavor: "Watercolor",
    note: "**Quand l'utiliser ?** Art, bien-être, éducation, marques naturelles. Restez doux pour préserver la lisibilité.",
    tips: ["Taches floues (blur) derrière les cartes", "Border-radius organiques/asymétriques", "Couleurs pastel", "Cartes claires et lisibles"],
    palettes: [
      { name: "Rose", vars: { "--sg-bg": "#ffeef2", "--sg-surface": "#ffffff", "--sg-text": "#5a2b3a", "--sg-muted": "#b58a9a", "--sg-primary": "#ff8fab", "--sg-primary-2": "#ef648d", "--sg-acc": "#7ec1ff", "--sg-radius": "22px", "--paint-shadow": "rgba(200,80,120,.12)" } },
      { name: "Sauge", vars: { "--sg-bg": "#ecf5ef", "--sg-surface": "#ffffff", "--sg-text": "#2f5546", "--sg-muted": "#7fa695", "--sg-primary": "#58b08a", "--sg-primary-2": "#3a9070", "--sg-acc": "#f6b26b", "--sg-radius": "22px", "--paint-shadow": "rgba(40,120,90,.12)" } },
      { name: "Pêche", vars: { "--sg-bg": "#fdf2e7", "--sg-surface": "#ffffff", "--sg-text": "#5a3a26", "--sg-muted": "#b08a6a", "--sg-primary": "#f09b6b", "--sg-primary-2": "#d97f4f", "--sg-acc": "#9bb0f0", "--sg-radius": "22px", "--paint-shadow": "rgba(200,120,50,.12)" } },
      { name: "Airelle", vars: { "--sg-bg": "#f0eef6", "--sg-surface": "#ffffff", "--sg-text": "#3a2a5a", "--sg-muted": "#948ab5", "--sg-primary": "#8a6ff0", "--sg-primary-2": "#6a4bd0", "--sg-acc": "#6fd0c0", "--sg-radius": "22px", "--paint-shadow": "rgba(80,60,150,.12)" } }
    ]
  },
  {
    id: "bau", p: "bau", name: "Bauhaus", category: "Bold",
    tagline: "Géométrie, couleurs primaires, lignes noires fortes.",
    desc: "Le style Bauhaus (école des années 1920) combine formes géométriques élémentaires, couleurs primaires, typographie sans-serif et lignes noires. Rigueur constructiviste et audace graphique.",
    flavor: "Bauhaus",
    note: "**Quand l'utiliser ?** Design éditorial, affiches, institutions culturelles, logos. L'angle droit et le noir dominent.",
    tips: ["Formes élémentaires (cercle, carré, triangle)", "Couleurs primaires + noir", "Bordures 2-3px, angle droit", "Motif de points en arrière-plan"],
    palettes: [
      { name: "Primaire", vars: { "--sg-bg": "#f2f0ea", "--sg-surface": "#ffffff", "--sg-text": "#141414", "--sg-muted": "#444444", "--sg-primary": "#e63329", "--sg-primary-2": "#c4271d", "--sg-acc": "#1a6ee0", "--sg-radius": "0px", "--bau-accent": "#1a6ee0" } },
      { name: "Cobalt", vars: { "--sg-bg": "#eae8e0", "--sg-surface": "#ffffff", "--sg-text": "#161616", "--sg-muted": "#444444", "--sg-primary": "#1a6ee0", "--sg-primary-2": "#1157c0", "--sg-acc": "#ffb400", "--sg-radius": "0px", "--bau-accent": "#ffb400" } },
      { name: "Sorbet", vars: { "--sg-bg": "#f4f0e8", "--sg-surface": "#ffffff", "--sg-text": "#181818", "--sg-muted": "#444444", "--sg-primary": "#38b26a", "--sg-primary-2": "#2a8f52", "--sg-acc": "#ff5c5c", "--sg-radius": "0px", "--bau-accent": "#ff5c5c" } },
      { name: "Violet", vars: { "--sg-bg": "#efeae6", "--sg-surface": "#ffffff", "--sg-text": "#171717", "--sg-muted": "#444444", "--sg-primary": "#8a5cff", "--sg-primary-2": "#6a3ff0", "--sg-acc": "#ffb45c", "--sg-radius": "0px", "--bau-accent": "#ffb45c" } }
    ]
  },
  {
    id: "noir", p: "noir", name: "Frosted Noir", category: "Modern",
    tagline: "Verre dépoli sombre : élégance et profondeur.",
    desc: "Le « frosted noir » applique le glassmorphism sur fond très sombre : tuiles semi-opaques floutées, bordure subtile, ombre profonde. Luxueux, sobre et moderne.",
    flavor: "Noir",
    note: "**Quand l'utiliser ?** Apps premium, dark mode raffiné, finance, produits de luxe. Le contraste du texte doit rester fort.",
    tips: ["Fond quasi noir + tuiles vitrées", "Blur + bordure rgba(255,255,255,.12)", "Accent lumineux discret", "Typographie fine et espacée"],
    palettes: [
      { name: "Onyx & violet", vars: { "--sg-bg": "#05060a", "--sg-surface": "#0c0e14", "--sg-text": "#eceaf2", "--sg-muted": "#8a8a9c", "--sg-primary": "#8a5cff", "--sg-primary-2": "#6a4bd0", "--sg-acc": "#00d4ff", "--sg-radius": "16px", "--noir-bg": "rgba(20,20,30,.5)", "--noir-border": "rgba(255,255,255,.12)", "--noir-blur": "18px", "--noir-glow": "rgba(138,92,255,.4)" } },
      { name: "Ardoise & cyan", vars: { "--sg-bg": "#080a0f", "--sg-surface": "#0e1118", "--sg-text": "#e8f2f7", "--sg-muted": "#7f97a3", "--sg-primary": "#22b8e0", "--sg-primary-2": "#0f83a8", "--sg-acc": "#7c5cff", "--sg-radius": "16px", "--noir-bg": "rgba(16,22,30,.5)", "--noir-border": "rgba(255,255,255,.12)", "--noir-blur": "18px", "--noir-glow": "rgba(34,184,224,.4)" } },
      { name: "Minuit & or", vars: { "--sg-bg": "#07070a", "--sg-surface": "#0f0e12", "--sg-text": "#efe9df", "--sg-muted": "#9a927e", "--sg-primary": "#d9c27a", "--sg-primary-2": "#b39a52", "--sg-acc": "#7c5cff", "--sg-radius": "16px", "--noir-bg": "rgba(20,18,24,.5)", "--noir-border": "rgba(255,255,255,.12)", "--noir-blur": "18px", "--noir-glow": "rgba(217,194,122,.35)" } },
      { name: "Braise", vars: { "--sg-bg": "#0a0708", "--sg-surface": "#141011", "--sg-text": "#f4e8e8", "--sg-muted": "#a08a8a", "--sg-primary": "#ff5c5c", "--sg-primary-2": "#d83a3a", "--sg-acc": "#ffb45c", "--sg-radius": "16px", "--noir-bg": "rgba(24,16,16,.5)", "--noir-border": "rgba(255,255,255,.12)", "--noir-blur": "18px", "--noir-glow": "rgba(255,92,92,.4)" } },
      { name: "Bleu nuit", vars: { "--sg-bg": "#050a10", "--sg-surface": "#0b1420", "--sg-text": "#e2eefb", "--sg-muted": "#7f97ae", "--sg-primary": "#2a7fd0", "--sg-primary-2": "#1a5fa0", "--sg-acc": "#3ddc97", "--sg-radius": "16px", "--noir-bg": "rgba(14,24,36,.5)", "--noir-border": "rgba(255,255,255,.12)", "--noir-blur": "18px", "--noir-glow": "rgba(42,127,208,.4)" } }
    ]
  },
  {
    id: "candy", p: "candy", name: "Candy / Bubble", category: "Soft",
    tagline: "Bonbon brillant : pastel vif et reflet « glossy ».",
    desc: "Le style candy applique des couleurs de bonbon, des boutons très arrondis et brillants, avec un reflet lumineux en haut. Gourmand, joyeux et optimiste.",
    flavor: "Candy",
    note: "**Quand l'utiliser ?** Apps enfants, e-commerce gourmand, réseaux sociaux. Les reflets « glossy » donnent de la profondeur.",
    tips: ["Pastels vifs + blanc", "Boutons très arrondis avec reflet", "Ombre colorée douce", "Burgery en dégradé radial"],
    palettes: [
      { name: "Fraise", vars: { "--sg-bg": "#ffe9f0", "--sg-surface": "#ffffff", "--sg-text": "#5a2b3a", "--sg-muted": "#bd8a9c", "--sg-primary": "#ff7da3", "--sg-primary-2": "#f05588", "--sg-acc": "#7ec1ff", "--sg-radius": "26px", "--candy-shadow": "rgba(230,80,130,.25)" } },
      { name: "Myrtille", vars: { "--sg-bg": "#eae9ff", "--sg-surface": "#ffffff", "--sg-text": "#2b2a5a", "--sg-muted": "#8a8abd", "--sg-primary": "#7c8ff0", "--sg-primary-2": "#5a6fd8", "--sg-acc": "#ffd166", "--sg-radius": "26px", "--candy-shadow": "rgba(90,100,220,.25)" } },
      { name: "Menthe", vars: { "--sg-bg": "#e7f7f0", "--sg-surface": "#ffffff", "--sg-text": "#1f5546", "--sg-muted": "#7aa898", "--sg-primary": "#3dc79a", "--sg-primary-2": "#1ba57c", "--sg-acc": "#ffb45c", "--sg-radius": "26px", "--candy-shadow": "rgba(30,160,120,.25)" } },
      { name: "Citron", vars: { "--sg-bg": "#fff7e0", "--sg-surface": "#ffffff", "--sg-text": "#5a4a12", "--sg-muted": "#bdab6a", "--sg-primary": "#f7c948", "--sg-primary-2": "#d9ad2a", "--sg-acc": "#ff8fab", "--sg-radius": "26px", "--candy-shadow": "rgba(220,170,40,.25)" } }
    ]
  },
  {
    id: "goth", p: "goth", name: "Dark Academia / Gothic", category: "Modern",
    tagline: "Sombre & élégant : serif, or, profondeur académique.",
    desc: "Le dark academia combine fonds sombres profonds, typographie serif, accents dorés et liserés fins. Élégant, littéraire et raffiné — idéal pour un ton sérieux et premium.",
    flavor: "Gothic",
    note: "**Quand l'utiliser ?** Culture, édition, mode, contenus « premium ». La police serif est essentielle à l'ambiance.",
    tips: ["Police serif (Georgia / Garamond)", "Fond sombre + or", "Bordure intérieure fine (double cadre)", "Textures douces, ombres profondes"],
    palettes: [
      { name: "Bibliothèque", vars: { "--sg-bg": "#141018", "--sg-surface": "#1d1725", "--sg-surface-2": "#161020", "--sg-text": "#e8dfe6", "--sg-muted": "#9a8da3", "--sg-primary": "#d9c27a", "--sg-primary-2": "#b39a52", "--sg-acc": "#7c5cff", "--sg-radius": "4px", "--goth-gold": "#d9c27a", "--goth-border": "#4a3f52" } },
      { name: "Émeraude sombre", vars: { "--sg-bg": "#0f1414", "--sg-surface": "#172022", "--sg-surface-2": "#10191b", "--sg-text": "#dfeae6", "--sg-muted": "#8aa39c", "--sg-primary": "#7ac9a0", "--sg-primary-2": "#4f9a78", "--sg-acc": "#d9c27a", "--sg-radius": "4px", "--goth-gold": "#d9c27a", "--goth-border": "#2f4a44" } },
      { name: "Pourpre", vars: { "--sg-bg": "#160f18", "--sg-surface": "#201425", "--sg-surface-2": "#180f1b", "--sg-text": "#e8dfe0", "--sg-muted": "#a08a94", "--sg-primary": "#c26a9a", "--sg-primary-2": "#a04a7c", "--sg-acc": "#ffd166", "--sg-radius": "4px", "--goth-gold": "#ffd166", "--goth-border": "#4a2f3f" } },
      { name: "Lune", vars: { "--sg-bg": "#10141a", "--sg-surface": "#182028", "--sg-surface-2": "#121820", "--sg-text": "#e2e8ee", "--sg-muted": "#8aa0b2", "--sg-primary": "#c9d4e0", "--sg-primary-2": "#a0b0c0", "--sg-acc": "#d9c27a", "--sg-radius": "4px", "--goth-gold": "#d9c27a", "--goth-border": "#303c4a" } }
    ]
  },
  {
    id: "retro", p: "retro", name: "Rétro 70s / Vintage", category: "Bold",
    tagline: "Tons terreux, groovy, chrome et arc-en-ciel seventies.",
    desc: "Le style rétro 70s revisite les couleurs terreuses (terre, orange, avocat), les typographies grasses, les dégradés arc-en-ciel et les formes rondes. Chaleureux et nostalgique.",
    flavor: "Retro",
    note: "**Quand l'utiliser ?** Marques vintage, mode, culture pop, packaging. L'effet « groovy » s'exprime par les couleurs.",
    tips: ["Tons terreux (orange, avocat, ocre)", "Dégradés arc-en-ciel / conic", "Ombres offset solides", "Typographie grasse uppercase"],
    palettes: [
      { name: "Braise", vars: { "--sg-bg": "#f2e3c8", "--sg-surface": "#fff8ec", "--sg-text": "#3a2410", "--sg-muted": "#9a7a52", "--sg-primary": "#e2662a", "--sg-primary-2": "#c04e1a", "--sg-acc": "#c9a227", "--sg-radius": "18px", "--retro-shadow": "#a97b4a" } },
      { name: "Avocat", vars: { "--sg-bg": "#e8e6cf", "--sg-surface": "#fdfcf0", "--sg-text": "#2a3212", "--sg-muted": "#7a8050", "--sg-primary": "#7a9a3d", "--sg-primary-2": "#5f7f2a", "--sg-acc": "#e07a3d", "--sg-radius": "18px", "--retro-shadow": "#6f7d3a" } },
      { name: "Océan 70", vars: { "--sg-bg": "#e6eeea", "--sg-surface": "#f8fcf9", "--sg-text": "#16302e", "--sg-muted": "#6a9a92", "--sg-primary": "#2a8a80", "--sg-primary-2": "#1a6a60", "--sg-acc": "#e0a83d", "--sg-radius": "18px", "--retro-shadow": "#2f7a70" } },
      { name: "Sunset", vars: { "--sg-bg": "#f7e3d3", "--sg-surface": "#fff6ee", "--sg-text": "#4a2414", "--sg-muted": "#b08a6a", "--sg-primary": "#ff6b4a", "--sg-primary-2": "#e04a2a", "--sg-acc": "#f7c948", "--sg-radius": "18px", "--retro-shadow": "#cf7a4a" } }
    ]
  },
  {
    id: "game", p: "game", name: "Gaming / Esports", category: "Modern",
    tagline: "Ambiance esports : néons, grille, énergie compétitive.",
    desc: "Le style gaming/esports joue sur fonds sombres, grilles néon et dégradés vifs. Parfait pour les plateformes de jeu, tournois et contenus compétitifs.",
    flavor: "Gaming",
    note: "**Quand l'utiliser ?** Plateformes gaming, esports, apps communautaires, dashboards. Les grilles néon renforcent l'énergie.",
    tips: ["Grille discrète en arrière-plan", "Dégradé violet/cyan", "Glow sur les éléments clés", "Couleurs saturées"],
    palettes: [
      { name: "Violet néon", vars: { "--sg-bg": "#0b0818", "--sg-surface": "#14101f", "--sg-text": "#e9e6ff", "--sg-muted": "#9a90bd", "--sg-primary": "#8a5cff", "--sg-primary-2": "#6a3ff0", "--sg-acc": "#00e3ff", "--sg-radius": "16px", "--game-glow": "rgba(138,92,255,.4)" } },
      { name: "Cyan esports", vars: { "--sg-bg": "#041016", "--sg-surface": "#0a1b24", "--sg-text": "#dff5fb", "--sg-muted": "#6fa3b5", "--sg-primary": "#00c9ff", "--sg-primary-2": "#00a2e0", "--sg-acc": "#ff5ca8", "--sg-radius": "16px", "--game-glow": "rgba(0,201,255,.4)" } },
      { name: "Rouge faction", vars: { "--sg-bg": "#160a0a", "--sg-surface": "#221112", "--sg-text": "#ffe9e9", "--sg-muted": "#a97575", "--sg-primary": "#ff5c5c", "--sg-primary-2": "#e23b3b", "--sg-acc": "#ffd166", "--sg-radius": "16px", "--game-glow": "rgba(255,92,92,.4)" } },
      { name: "Lime", vars: { "--sg-bg": "#0a140e", "--sg-surface": "#122118", "--sg-text": "#eafff0", "--sg-muted": "#7fa899", "--sg-primary": "#3ddc97", "--sg-primary-2": "#1ba57c", "--sg-acc": "#00e3ff", "--sg-radius": "16px", "--game-glow": "rgba(61,220,151,.4)" } },
      { name: "Or esports", vars: { "--sg-bg": "#0d0b07", "--sg-surface": "#171410", "--sg-text": "#f5ecd8", "--sg-muted": "#a89878", "--sg-primary": "#ffbf3d", "--sg-primary-2": "#e8a11f", "--sg-acc": "#ff5c5c", "--sg-radius": "16px", "--game-glow": "rgba(255,191,61,.4)" } }
    ]
  },
  {
    id: "edit", p: "edit", name: "Editorial / Magazine", category: "Flat",
    tagline: "Éditorial : serif, grille, noir & blanc, accent fort.",
    desc: "Le style éditorial revisite la presse : typographie serif, mise en page structurée, beaucoup de blanc et un accent graphique. Élégant et orienté contenu.",
    flavor: "Editorial",
    note: "**Quand l'utiliser ?** Blogs, médias, essais, newsletters, portails culturels. La typographie serif est essentielle.",
    tips: ["Serif + beaucoup de blanc", "Une seule couleur d'accent", "Titres en majuscules", "Bords droits, pas d'arrondis"],
    palettes: [
      { name: "Pigment", vars: { "--sg-bg": "#f6f6f4", "--sg-surface": "#ffffff", "--sg-text": "#111111", "--sg-muted": "#555555", "--sg-primary": "#c0392b", "--sg-primary-2": "#a23224", "--sg-acc": "#f4a261", "--sg-radius": "0px" } },
      { name: "Nuit éditoriale", vars: { "--sg-bg": "#111111", "--sg-surface": "#1a1a1a", "--sg-text": "#eae6df", "--sg-muted": "#9a948a", "--sg-primary": "#d4af37", "--sg-primary-2": "#b3922b", "--sg-acc": "#c0392b", "--sg-radius": "0px" } },
      { name: "Bleu encre", vars: { "--sg-bg": "#f4f7fb", "--sg-surface": "#ffffff", "--sg-text": "#14213d", "--sg-muted": "#5f6b8a", "--sg-primary": "#1a4fa0", "--sg-primary-2": "#123a78", "--sg-acc": "#e07a5f", "--sg-radius": "0px" } },
      { name: "Kraft", vars: { "--sg-bg": "#efe7d8", "--sg-surface": "#f8f3e8", "--sg-text": "#3a2c1a", "--sg-muted": "#8a7560", "--sg-primary": "#4a5d3a", "--sg-primary-2": "#37482a", "--sg-acc": "#c1663a", "--sg-radius": "0px" } },
      { name: "Typographique", vars: { "--sg-bg": "#f4f4f4", "--sg-surface": "#ffffff", "--sg-text": "#111111", "--sg-muted": "#555555", "--sg-primary": "#1a1a1a", "--sg-primary-2": "#333333", "--sg-acc": "#c0392b", "--sg-radius": "0px" } }
    ]
  },
  {
    id: "iso", p: "iso", name: "Isometric / 3D", category: "Modern",
    tagline: "Cartes en relief : ombres « extrudées » et profondeur.",
    desc: "Le style isométrique donne du relief aux composants grâce à des ombres épaisses décalées et des surfaces en dégradé. Un effet 3D « layering » moderne et tactile.",
    flavor: "Isometric",
    note: "**Quand l'utiliser ?** Apps gamifiées, dashboards, portfolios, produits illustratifs. Les ombres épaisses simulent la profondeur.",
    tips: ["Ombre décalée 3-8px (effet extrudé)", "Dégradé clair → surface", "Léger soulèvement au clic", "Coins arrondis et relief"],
    palettes: [
      { name: "Nuage", vars: { "--sg-bg": "#eef2f6", "--sg-surface": "#ffffff", "--sg-surface-2": "#f2f6fa", "--sg-text": "#16202c", "--sg-muted": "#5f6f82", "--sg-primary": "#4f6ef7", "--sg-primary-2": "#3457d5", "--sg-acc": "#22c58b", "--sg-radius": "18px", "--iso-edge": "rgba(30,45,70,.16)" } },
      { name: "Rose", vars: { "--sg-bg": "#fdeef3", "--sg-surface": "#ffffff", "--sg-surface-2": "#fdf2f6", "--sg-text": "#4a2b3a", "--sg-muted": "#b58a9c", "--sg-primary": "#ff7da3", "--sg-primary-2": "#e85a88", "--sg-acc": "#7ec1ff", "--sg-radius": "18px", "--iso-edge": "rgba(200,60,120,.18)" } },
      { name: "Lavande", vars: { "--sg-bg": "#f0eef9", "--sg-surface": "#ffffff", "--sg-surface-2": "#f4f1fc", "--sg-text": "#2f2547", "--sg-muted": "#9689b8", "--sg-primary": "#7c5cff", "--sg-primary-2": "#5c3fd8", "--sg-acc": "#00c2a8", "--sg-radius": "18px", "--iso-edge": "rgba(90,50,160,.18)" } },
      { name: "Minuit", vars: { "--sg-bg": "#0e1116", "--sg-surface": "#161b22", "--sg-surface-2": "#1b222b", "--sg-text": "#e6edf3", "--sg-muted": "#8a97a8", "--sg-primary": "#2fb3ff", "--sg-primary-2": "#178ad8", "--sg-acc": "#3ddc97", "--sg-radius": "18px", "--iso-edge": "rgba(0,0,0,.5)" } },
      { name: "Cobalt", vars: { "--sg-bg": "#e9eef6", "--sg-surface": "#ffffff", "--sg-surface-2": "#eef3fa", "--sg-text": "#13203a", "--sg-muted": "#5f6f8a", "--sg-primary": "#2c6fd6", "--sg-primary-2": "#1f5bb8", "--sg-acc": "#f59e0b", "--sg-radius": "18px", "--iso-edge": "rgba(20,60,140,.18)" } }
    ]
  }
,
  {
    id: "crt", p: "crt", name: "Retro CRT", category: "Modern",
    tagline: "Écran cathodique : scanlines, phosphore, monospace.",
    desc: "Le style Retro CRT imite un écran cathodique : scanlines, lueur phosphorescente, monospace et coins « tube ». Nostalgie néon du jeu vidéo rétro.",
    flavor: "CRT",
    note: "**Quand l'utiliser ?** Jeux rétro, interfaces « vieil écran », hommages arcade. Le monospace + la lueur sont essentiels.",
    tips: ["Scanlines sur le fond", "Lueur phosphorescente (glow)", "Police monospace VT323", "Reflet « tube » en haut"],
    palettes: [
      { name: "Phosphore", vars: { "--sg-bg": "#0b120b", "--sg-surface": "#112011", "--sg-text": "#c8ffd0", "--sg-muted": "#7fbf8a", "--sg-primary": "#33ff77", "--sg-acc": "#00ffcc", "--sg-radius": "14px", "--crt-glow": "rgba(51,255,119,.35)" } },
      { name: "Ambre", vars: { "--sg-bg": "#140d04", "--sg-surface": "#1f150a", "--sg-text": "#ffe8c0", "--sg-muted": "#c9a878", "--sg-primary": "#ffb347", "--sg-acc": "#ff8a5c", "--sg-radius": "14px", "--crt-glow": "rgba(255,179,71,.35)" } },
      { name: "Cyan", vars: { "--sg-bg": "#04141a", "--sg-surface": "#0a2029", "--sg-text": "#c8f4ff", "--sg-muted": "#6fa3b5", "--sg-primary": "#2fe0ff", "--sg-acc": "#ffb45c", "--sg-radius": "14px", "--crt-glow": "rgba(47,224,255,.35)" } },
      { name: "Magenta", vars: { "--sg-bg": "#140812", "--sg-surface": "#201120", "--sg-text": "#ffd6f0", "--sg-muted": "#c47fa8", "--sg-primary": "#ff5cc8", "--sg-acc": "#7c5cff", "--sg-radius": "14px", "--crt-glow": "rgba(255,92,200,.35)" } },
      { name: "Vert menthe", vars: { "--sg-bg": "#061410", "--sg-surface": "#0c211a", "--sg-text": "#cfffe9", "--sg-muted": "#7fb39a", "--sg-primary": "#2fe0a0", "--sg-acc": "#2fd4ff", "--sg-radius": "14px", "--crt-glow": "rgba(47,224,160,.35)" } }
    ]
  },
  {
    id: "draw", p: "draw", name: "Hand-drawn / Sketch", category: "Soft",
    tagline: "Croquis fait main : contours irréguliers, crayon.",
    desc: "Le style sketch imite un dessin à main levée : contours tremblés, couleurs crayon, rotations légères. Ludique, chaleureux et artisanal.",
    flavor: "Sketched",
    note: "**Quand l'utiliser ?** Marques artisanales, cahiers, illustrations, contenus fun. Les polices manuscrites renforcent l'effet.",
    tips: ["Border-radius asymétriques/irréguliers", "Rotation légère (-1° à +1°)", "Police manuscrite", "Ombres « crayon » décalées"],
    palettes: [
      { name: "Crayon", vars: { "--sg-bg": "#fbf6ec", "--sg-surface": "#fffdf7", "--sg-text": "#4a3b2a", "--sg-muted": "#9a8a72", "--sg-primary": "#e07a5f", "--sg-primary-2": "#c75f3f", "--sg-acc": "#5aa87a", "--sg-radius": "0px" } },
      { name: "Fusain", vars: { "--sg-bg": "#f6f6f2", "--sg-surface": "#ffffff", "--sg-text": "#2a2a2a", "--sg-muted": "#8a8a8a", "--sg-primary": "#2a4ad0", "--sg-primary-2": "#1f3aa8", "--sg-acc": "#d0912f", "--sg-radius": "0px" } },
      { name: "Aquarelle", vars: { "--sg-bg": "#f4f0f8", "--sg-surface": "#ffffff", "--sg-text": "#4a3a5a", "--sg-muted": "#9a8ab0", "--sg-primary": "#8a6ff0", "--sg-primary-2": "#6a4bd0", "--sg-acc": "#6fd0c0", "--sg-radius": "0px" } },
      { name: "Fuchsia", vars: { "--sg-bg": "#fdf0f4", "--sg-surface": "#ffffff", "--sg-text": "#5a2b3a", "--sg-muted": "#b58a9c", "--sg-primary": "#e05a8a", "--sg-primary-2": "#c0356a", "--sg-acc": "#7ec1ff", "--sg-radius": "0px" } },
      { name: "Ocre", vars: { "--sg-bg": "#f8f1e3", "--sg-surface": "#fff9ee", "--sg-text": "#6b4a24", "--sg-muted": "#b09a70", "--sg-primary": "#c98a2a", "--sg-primary-2": "#a86d1f", "--sg-acc": "#6a8a4a", "--sg-radius": "0px" } }
    ]
  },
  {
    id: "liquid", p: "liquid", name: "Liquid / Blob", category: "Soft",
    tagline: "Blobs organiques, dégradés fluides, carte vitrée.",
    desc: "Le style liquid empile des formes organiques floues derrière des cartes claires « vitrées », avec des dégradés fluides. Doux, organique et très moderne.",
    flavor: "Liquid",
    note: "**Quand l'utiliser ?** Landing pages créatives, apps bien-être, produits organiques. Les blobs flous donnent la profondeur.",
    tips: ["Blobs flous (blur) en arrière-plan", "Cartes claires semi-transparentes", "Titre en dégradé", "Coins très arrondis"],
    palettes: [
      { name: "Aurore", vars: { "--sg-bg": "#eadcff", "--sg-surface": "#ffffff", "--sg-text": "#2b1a4a", "--sg-muted": "#8a74a8", "--sg-primary": "#8a5cff", "--sg-primary-2": "#6a3ff0", "--sg-acc": "#00d4ff", "--sg-radius": "0px" } },
      { name: "Pêche", vars: { "--sg-bg": "#ffe9d6", "--sg-surface": "#ffffff", "--sg-text": "#5a2f1a", "--sg-muted": "#b08a64", "--sg-primary": "#ff8a4a", "--sg-primary-2": "#ef6a2a", "--sg-acc": "#ff5c8a", "--sg-radius": "0px" } },
      { name: "Menthe", vars: { "--sg-bg": "#d9f5ec", "--sg-surface": "#ffffff", "--sg-text": "#1f5546", "--sg-muted": "#6fa898", "--sg-primary": "#2bbd94", "--sg-primary-2": "#149d78", "--sg-acc": "#7ec1ff", "--sg-radius": "0px" } },
      { name: "Framboise", vars: { "--sg-bg": "#ffe9f2", "--sg-surface": "#ffffff", "--sg-text": "#5a1f3a", "--sg-muted": "#b56a8a", "--sg-primary": "#ff5c9d", "--sg-primary-2": "#e83a80", "--sg-acc": "#8a5cff", "--sg-radius": "0px" } },
      { name: "Océan", vars: { "--sg-bg": "#dceeff", "--sg-surface": "#ffffff", "--sg-text": "#12304a", "--sg-muted": "#5a86a8", "--sg-primary": "#2a8fe0", "--sg-primary-2": "#1a6fb8", "--sg-acc": "#3ddc97", "--sg-radius": "0px" } }
    ]
  }
,
  { id: "glitch", p: "glitch", name: "Cyber Glitch", category: "Modern", tagline: "Glitch & scanlines : décalages RGB, énergie SDF.", desc: "Le style Cyber Glitch provoque des décalages de canaux RGB, des scanlines et des textes « hachés ». Une énergie hacker, numérique et disruptive.", flavor: "Glitch", note: "**Quand l'utiliser ?** Apps digitales, tech « cyber », culture internet, contenus expérimentaux.", tips: ["Décalage RGB sur les titres","Scanlines","Bordures néon","Couleurs saturées"], palettes: [
    { name: "Neon rainbow", vars: { "--sg-bg": "#04060a", "--sg-surface": "#0c0f16", "--sg-text": "#dff1ff", "--sg-muted": "#7f93a8", "--sg-primary": "#00e3ff", "--sg-primary-2": "#007fb8", "--sg-acc": "#ff2fd6", "--sg-radius": "6px", "--glitch-glow": "rgba(0,227,255,.3)" } },
    { name: "Rouge transit", vars: { "--sg-bg": "#0a0406", "--sg-surface": "#140a0d", "--sg-text": "#ffd9d9", "--sg-muted": "#b58a8f", "--sg-primary": "#ff3b3b", "--sg-primary-2": "#d41f2f", "--sg-acc": "#00dcff", "--sg-radius": "6px", "--glitch-glow": "rgba(255,59,59,.3)" } },
    { name: "Vert matrix", vars: { "--sg-bg": "#030a05", "--sg-surface": "#07120a", "--sg-text": "#c8ffd4", "--sg-muted": "#6aa07a", "--sg-primary": "#2fff8a", "--sg-primary-2": "#1ac86b", "--sg-acc": "#ff2fd6", "--sg-radius": "6px", "--glitch-glow": "rgba(47,255,138,.3)" } },
    { name: "Violet", vars: { "--sg-bg": "#07040f", "--sg-surface": "#100a1c", "--sg-text": "#e0d5ff", "--sg-muted": "#9184b5", "--sg-primary": "#a45cff", "--sg-primary-2": "#7c3ff0", "--sg-acc": "#00e3ff", "--sg-radius": "6px", "--glitch-glow": "rgba(164,92,255,.3)" } }
  ] },
  { id: "web1", p: "web1", name: "Retro Web 1.0", category: "Bold", tagline: "Nostalgie 90s : bevels, liens soulignés, Times New Roman.", desc: "Le style Retro Web revisite les sites des années 90 : fonds colorés à dégradés, boutons en relief « bevel », liens soulignés et police serif. Délicieusement désuet.", flavor: "Web 1.0", note: "**Quand l'utiliser ?** Hommages rétro, projets « microsite », contenus nostalgiques. Le serif et les bevels sont essentiels.", tips: ["Boutons en relief (bevel)","Liens soulignés","Police Times New Roman","Fonds à dégradés"], palettes: [
    { name: "Azzurro", vars: { "--sg-bg": "#e0eaff", "--sg-surface": "#ffffff", "--sg-text": "#1a1f4a", "--sg-muted": "#5f6b95", "--sg-primary": "#2f5cd0", "--sg-primary-2": "#2145a8", "--sg-acc": "#e0a12f", "--sg-radius": "6px" } },
    { name: "Pourpre", vars: { "--sg-bg": "#f0e0ff", "--sg-surface": "#ffffff", "--sg-text": "#2a1a4a", "--sg-muted": "#8a74b0", "--sg-primary": "#7c4fd0", "--sg-primary-2": "#5c2fa8", "--sg-acc": "#2fa0c0", "--sg-radius": "6px" } },
    { name: "Vert", vars: { "--sg-bg": "#e0f5e8", "--sg-surface": "#ffffff", "--sg-text": "#12321f", "--sg-muted": "#5f8468", "--sg-primary": "#1f8f55", "--sg-primary-2": "#146a3d", "--sg-acc": "#e07a3d", "--sg-radius": "6px" } },
    { name: "Ardoise", vars: { "--sg-bg": "#e6e9ee", "--sg-surface": "#ffffff", "--sg-text": "#1a222c", "--sg-muted": "#5f6b78", "--sg-primary": "#2f6f9f", "--sg-primary-2": "#1f5480", "--sg-acc": "#c05a2f", "--sg-radius": "6px" } }
  ] },
  { id: "doodle", p: "doodle", name: "Doodle / Zentangle", category: "Flat", tagline: "Motifs et traits : zine, monochrome, main levée.", desc: "Le style doodle envahit le fond de motifs (points, cercles) et trace des contours tremblés. Un esprit « zine » artisanal et monochrome.", flavor: "Doodle", note: "**Quand l'utiliser ?** Zines, carnets, illustrations, affiches graphiques. Le monochrome + motifs donnent le ton.", tips: ["Motif de points en fond","Contours tremblés","Monochrome + un accent","Police manuscrite"], palettes: [
    { name: "Encre", vars: { "--sg-bg": "#f6f6f2", "--sg-surface": "#ffffff", "--sg-text": "#1a1a1a", "--sg-muted": "#666666", "--sg-primary": "#e23b3b", "--sg-primary-2": "#c4271d", "--sg-acc": "#2f6fd0", "--sg-radius": "0px", "--doodle-dot": "rgba(0,0,0,.12)" } },
    { name: "Crayon rouge", vars: { "--sg-bg": "#fbf1ee", "--sg-surface": "#ffffff", "--sg-text": "#4a241a", "--sg-muted": "#a08276", "--sg-primary": "#c0392b", "--sg-primary-2": "#a23224", "--sg-acc": "#f4a261", "--sg-radius": "0px", "--doodle-dot": "rgba(120,40,20,.12)" } },
    { name: "Sky", vars: { "--sg-bg": "#eef6fb", "--sg-surface": "#ffffff", "--sg-text": "#1c3d4f", "--sg-muted": "#6f97a8", "--sg-primary": "#2a8fb0", "--sg-primary-2": "#1f6f8f", "--sg-acc": "#e07a3d", "--sg-radius": "0px", "--doodle-dot": "rgba(30,110,140,.12)" } },
    { name: "Violet doodle", vars: { "--sg-bg": "#f2eef8", "--sg-surface": "#ffffff", "--sg-text": "#2a1f45", "--sg-muted": "#8a7fa5", "--sg-primary": "#7c5cff", "--sg-primary-2": "#5c3fd8", "--sg-acc": "#3ddc97", "--sg-radius": "0px", "--doodle-dot": "rgba(90,60,160,.12)" } }
  ] },
  { id: "chrome", p: "chrome", name: "Chrome / Y2K Metallic", category: "Modern", tagline: "Métal chromé : réflets argentés, Y2K glossy.", desc: "Le style Chrome applique des dégradés métalliques argentés, des reflets brillants et des boutons en « pill » chromé. Un look Y2K glossy et futuriste.", flavor: "Chrome", note: "**Quand l'utiliser ?** Y2K, tech rétro, produits « futuristes », mode. Les reflets métalliques définissent le style.", tips: ["Dégradés métalliques argentés","Reflet blanc en haut","Boutons en « pill » chromé","Texte en dégradé chrome"], palettes: [
    { name: "Argent", vars: { "--sg-bg": "#dfe3ea", "--sg-surface": "#eef0f6", "--sg-text": "#2a2e38", "--sg-muted": "#6a7180", "--sg-primary": "#3a3f4a", "--sg-primary-2": "#2a2e38", "--sg-acc": "#7a8090", "--sg-radius": "14px" } },
    { name: "Bleu chrome", vars: { "--sg-bg": "#e0e8f0", "--sg-surface": "#f0f4f8", "--sg-text": "#1f3348", "--sg-muted": "#5f7a94", "--sg-primary": "#2f6fd0", "--sg-primary-2": "#1f5aa8", "--sg-acc": "#9aa0b0", "--sg-radius": "14px" } },
    { name: "Rose chrome", vars: { "--sg-bg": "#f7e6ee", "--sg-surface": "#fdf2f6", "--sg-text": "#4a2438", "--sg-muted": "#a58094", "--sg-primary": "#e05a9a", "--sg-primary-2": "#c03a7a", "--sg-acc": "#aab0c0", "--sg-radius": "14px" } },
    { name: "Or chrome", vars: { "--sg-bg": "#f6efe2", "--sg-surface": "#fdf8ee", "--sg-text": "#4a3a1f", "--sg-muted": "#a08a64", "--sg-primary": "#c9a03f", "--sg-primary-2": "#a8842a", "--sg-acc": "#9aa0b0", "--sg-radius": "14px" } }
  ] },
  { id: "desert", p: "desert", name: "Desert / Sandstone", category: "Flat", tagline: "Terre & sable : tons chauds, formes douces.", desc: "Le style désert s'inspire des paysages arides : tons sable, terre cuite, cactus. Doux, chaleureux et apaisant.", flavor: "Desert", note: "**Quand l'utiliser ?** Bien-être, nature, e-commerce de produits naturels, apps calmes. Les tons chauds apaisent.", tips: ["Palette terre/sable","Formes arrondies","Shadows chauds","Accent cactus/terracotta"], palettes: [
    { name: "Sable", vars: { "--sg-bg": "#f2e6d6", "--sg-surface": "#fbf4e8", "--sg-text": "#4a3420", "--sg-muted": "#9a8264", "--sg-primary": "#c98a4b", "--sg-primary-2": "#a86d35", "--sg-acc": "#6a8a4a", "--sg-radius": "18px" } },
    { name: "Oasis", vars: { "--sg-bg": "#e8f0e4", "--sg-surface": "#f7fbf4", "--sg-text": "#2f4a2a", "--sg-muted": "#6f8a68", "--sg-primary": "#4a8a4a", "--sg-primary-2": "#356f35", "--sg-acc": "#c9a24b", "--sg-radius": "18px" } },
    { name: "Terracotta", vars: { "--sg-bg": "#f4e4da", "--sg-surface": "#fbf0ea", "--sg-text": "#5a2f24", "--sg-muted": "#b08a7a", "--sg-primary": "#d06a4a", "--sg-primary-2": "#a84a2f", "--sg-acc": "#4a8a80", "--sg-radius": "18px" } },
    { name: "Dune", vars: { "--sg-bg": "#efe4d1", "--sg-surface": "#f9f2e4", "--sg-text": "#3a2f20", "--sg-muted": "#9a8870", "--sg-primary": "#b09a5a", "--sg-primary-2": "#8a754a", "--sg-acc": "#c96a4a", "--sg-radius": "18px" } }
  ] },
  { id: "play", p: "play", name: "Playful / Cartoon", category: "Bold", tagline: "Cartoon : couleurs vives, ombres solides, rotation.", desc: "Le style cartoon assume des couleurs vives, des bordures épaisses, des ombres dures et de légères rotations. Ludique, joyeux et très expressif.", flavor: "Playful", note: "**Quand l'utiliser ?** Apps enfants, jeux, marques fun, produits colorés. Les ombres dures + rotations donnent le ton.", tips: ["Bordures 2-3px + ombres dures","Rotation 1°","Couleurs vives","Coins très arrondis"], palettes: [
    { name: "Bonbon", vars: { "--sg-bg": "#fff0f6", "--sg-surface": "#ffffff", "--sg-text": "#5a2b3f", "--sg-muted": "#bd8aa0", "--sg-primary": "#ff5c9d", "--sg-primary-2": "#e83a80", "--sg-acc": "#7ec1ff", "--sg-radius": "22px" } },
    { name: "Limonade", vars: { "--sg-bg": "#fff7d6", "--sg-surface": "#ffffff", "--sg-text": "#5a4a12", "--sg-muted": "#b0a06a", "--sg-primary": "#f7c948", "--sg-primary-2": "#d9ad2a", "--sg-acc": "#2fd4a0", "--sg-radius": "22px" } },
    { name: "Bleuet", vars: { "--sg-bg": "#e8f0ff", "--sg-surface": "#ffffff", "--sg-text": "#1f3a63", "--sg-muted": "#7a95b5", "--sg-primary": "#4a7de0", "--sg-primary-2": "#1f5ab8", "--sg-acc": "#ff8fab", "--sg-radius": "22px" } },
    { name: "Kiwi", vars: { "--sg-bg": "#eef8e4", "--sg-surface": "#ffffff", "--sg-text": "#2f4a1f", "--sg-muted": "#8aa878", "--sg-primary": "#6abf3d", "--sg-primary-2": "#4a9a2a", "--sg-acc": "#ff9d5c", "--sg-radius": "22px" } }
  ] }
,
  { id: "solar", p: "solar", name: "Solar / Sunset", category: "Modern", tagline: "Coucher de soleil : dégradés chauds, verre", desc: "Le style Solar évoque un coucher de soleil : dégradés orange/rose/violet, cartes vitrées et couleur chaude ambiante. Moderne et chaleureux.", flavor: "Solar", note: "**Quand l'utiliser ?** Landing pages chaleureuses, apps créatives, voyages, soirées. Le gradient de fond est essentiel.", tips: ["Fond en dégradé chaud","Cartes vitrées","Boutons en dégradé","Texte clair par-dessus"], palettes: [
    { name: "Coucher", vars: { "--sg-bg": "linear-gradient(120deg,#ff6b4a,#ff5c9d,#7c5cff)", "--sg-primary": "#ff6b4a", "--sg-acc": "#ffd166", "--sg-radius": "22px" } },
    { name: "Lave", vars: { "--sg-bg": "linear-gradient(120deg,#ff4d4d,#ff8a3d,#ffb45c)", "--sg-primary": "#ff4d4d", "--sg-acc": "#ffd166", "--sg-radius": "22px" } },
    { name: "Pêche", vars: { "--sg-bg": "linear-gradient(120deg,#ff9a7a,#ffb45c,#ffd9a0)", "--sg-primary": "#ff8a5c", "--sg-acc": "#ff5c9d", "--sg-radius": "22px" } },
    { name: "Aurore", vars: { "--sg-bg": "linear-gradient(120deg,#ff5c9d,#7c5cff,#5ad1f0)", "--sg-primary": "#ff5c9d", "--sg-acc": "#5ad1f0", "--sg-radius": "22px" } },
    { name: "Ambre", vars: { "--sg-bg": "linear-gradient(120deg,#ffb45c,#ff6b4a,#4a2a3a)", "--sg-primary": "#ffd166", "--sg-acc": "#ff6b4a", "--sg-radius": "22px" } }
  ] },
  { id: "type", p: "type", name: "Typewriter / Mono", category: "Flat", tagline: "Machine à écrire : monospace, encre", desc: "Le style typewriter imite une feuille tapée à la machine : monospace, encre noire/rouge, bordures fines. Éditorial et littéraire.", flavor: "Typewriter", note: "**Quand l'utiliser ?** Essais, poésie, contenus littéraires, journaux. Le monospace est essentiel.", tips: ["Monospace (Courier)","Encre noire + accent rouge","Bords droits","Ombres fines"], palettes: [
    { name: "Encre", vars: { "--sg-bg": "#f6f3ec", "--sg-surface": "#fffdf8", "--sg-text": "#2a2a2a", "--sg-muted": "#8a8a8a", "--sg-primary": "#c0392b", "--sg-primary-2": "#a23224", "--sg-acc": "#2a6b8a", "--sg-radius": "0px" } },
    { name: "Nuit", vars: { "--sg-bg": "#14131a", "--sg-surface": "#1c1b24", "--sg-text": "#e8e6ea", "--sg-muted": "#9a98a5", "--sg-primary": "#e0a03f", "--sg-primary-2": "#c0842a", "--sg-acc": "#8a5cff", "--sg-radius": "0px" } },
    { name: "Océan d'encre", vars: { "--sg-bg": "#eef3f6", "--sg-surface": "#fff", "--sg-text": "#1c2a3a", "--sg-muted": "#5f7a92", "--sg-primary": "#1f7a9f", "--sg-primary-2": "#145c80", "--sg-acc": "#c0392b", "--sg-radius": "0px" } },
    { name: "Sépia", vars: { "--sg-bg": "#efe6d8", "--sg-surface": "#faf3e8", "--sg-text": "#4a3a24", "--sg-muted": "#9a8a6a", "--sg-primary": "#8a6a2a", "--sg-primary-2": "#6a4f1f", "--sg-acc": "#a04a2a", "--sg-radius": "0px" } },
    { name: "Violet", vars: { "--sg-bg": "#f2edf6", "--sg-surface": "#fff", "--sg-text": "#2a1f3a", "--sg-muted": "#8a7f9a", "--sg-primary": "#6a3fa0", "--sg-primary-2": "#522f80", "--sg-acc": "#c0392b", "--sg-radius": "0px" } }
  ] },
  { id: "botan", p: "botan", name: "Botanical / Organic", category: "Soft", tagline: "Végétal : verts doux, formes organiques", desc: "Le style botanical s'inspire de la nature : tons verts doux, feuilles, formes organiques. Apaisant, écologique et frais.", flavor: "Botanical", note: "**Quand l'utiliser ?** Bien-être, nature, éco, santé, mobilité douce. Les tons verts apaisent.", tips: ["Palette verte","Formes organiques","Ombres douces","Feuilles en décor"], palettes: [
    { name: "Sauge", vars: { "--sg-bg": "#eef4ec", "--sg-surface": "#fff", "--sg-text": "#2f4a2c", "--sg-muted": "#7fa07a", "--sg-primary": "#4a8a4a", "--sg-primary-2": "#356f35", "--sg-acc": "#8ac4a0", "--sg-radius": "24px", "--botan-shadow": "rgba(60,110,60,.16)" } },
    { name: "Feuille", vars: { "--sg-bg": "#e6f3ea", "--sg-surface": "#fff", "--sg-text": "#1f4429", "--sg-muted": "#6f9a76", "--sg-primary": "#2f9f57", "--sg-primary-2": "#1f7f42", "--sg-acc": "#f6b26b", "--sg-radius": "24px", "--botan-shadow": "rgba(40,110,60,.16)" } },
    { name: "Forêt", vars: { "--sg-bg": "#dce9df", "--sg-surface": "#fff", "--sg-text": "#12301d", "--sg-muted": "#5f8a6a", "--sg-primary": "#1f6f3d", "--sg-primary-2": "#14592e", "--sg-acc": "#c9a24b", "--sg-radius": "24px", "--botan-shadow": "rgba(20,90,50,.18)" } },
    { name: "Agrumes", vars: { "--sg-bg": "#f0f4e6", "--sg-surface": "#fff", "--sg-text": "#3a3a1f", "--sg-muted": "#8a9a6a", "--sg-primary": "#7aa03f", "--sg-primary-2": "#5c7f2a", "--sg-acc": "#e07a3d", "--sg-radius": "24px", "--botan-shadow": "rgba(90,120,50,.16)" } },
    { name: "Olivier", vars: { "--sg-bg": "#eff0e4", "--sg-surface": "#fff", "--sg-text": "#3a3a24", "--sg-muted": "#8a8a64", "--sg-primary": "#6a7a3d", "--sg-primary-2": "#4f5f2a", "--sg-acc": "#c9a24b", "--sg-radius": "24px", "--botan-shadow": "rgba(90,100,50,.16)" } }
  ] },
  { id: "ocean", p: "ocean", name: "Ocean Glass / Aqua", category: "Soft", tagline: "Sous l'eau : verre bleu, reflets aqua", desc: "Le style ocean glass évoque un monde sous-marin : fonds bleus profonds, cartes en verre aqua et reflets. Frais et immersif.", flavor: "Ocean", note: "**Quand l'utiliser ?** Voyage, plongée, apps nautiques, univers marins. Le verre bleu crée l'immersion.", tips: ["Fond bleu océan","Verre bleuté","Reflets aqua","Bloom lumineux"], palettes: [
    { name: "Lagon", vars: { "--sg-bg": "#0a3a52", "--sg-surface": "#103447", "--sg-text": "#dff5fc", "--sg-muted": "#7fb3c4", "--sg-primary": "#2fd0e0", "--sg-primary-2": "#1aa8c0", "--sg-acc": "#3ddc97", "--sg-radius": "20px", "--ocean-bg": "rgba(20,70,95,.35)", "--ocean-border": "rgba(180,240,255,.25)" } },
    { name: "Abysse", vars: { "--sg-bg": "#061726", "--sg-surface": "#0c2036", "--sg-text": "#d5ecff", "--sg-muted": "#5f8fb5", "--sg-primary": "#37a8ff", "--sg-primary-2": "#1f8ae0", "--sg-acc": "#2fd0e0", "--sg-radius": "20px", "--ocean-bg": "rgba(10,40,70,.35)", "--ocean-border": "rgba(160,220,255,.22)" } },
    { name: "Turquoise", vars: { "--sg-bg": "#0a4a4a", "--sg-surface": "#103c40", "--sg-text": "#d9fff5", "--sg-muted": "#7fb3ad", "--sg-primary": "#2fd4a0", "--sg-primary-2": "#1aa87f", "--sg-acc": "#37a8ff", "--sg-radius": "20px", "--ocean-bg": "rgba(20,80,80,.35)", "--ocean-border": "rgba(180,255,230,.25)" } },
    { name: "Ondine", vars: { "--sg-bg": "#12304a", "--sg-surface": "#142a44", "--sg-text": "#e0f0ff", "--sg-muted": "#8ab3d5", "--sg-primary": "#4a7de0", "--sg-primary-2": "#2f5ab8", "--sg-acc": "#3ddc97", "--sg-radius": "20px", "--ocean-bg": "rgba(30,60,100,.35)", "--ocean-border": "rgba(180,220,255,.25)" } },
    { name: "Marée", vars: { "--sg-bg": "#0a2036", "--sg-surface": "#102a44", "--sg-text": "#d5ecf5", "--sg-muted": "#6f9ab0", "--sg-primary": "#2fd0d0", "--sg-primary-2": "#1aa8a8", "--sg-acc": "#ffb45c", "--sg-radius": "20px", "--ocean-bg": "rgba(20,60,85,.35)", "--ocean-border": "rgba(180,240,240,.25)" } }
  ] },
  { id: "collage", p: "collage", name: "Collage / Paper-cut", category: "Bold", tagline: "Papier découpé : collage, coupures presse", desc: "Le style collage mélange papiers découpés, morceaux de presse et formes irrégulières. Artisanal, éditorial et graphique.", flavor: "Collage", note: "**Quand l'utiliser ?** Fanzines, éditorial créatif, affiches, contenus « handmade ». Les découpes donnent le ton.", tips: ["Bordures irrégulières","Serif + géo","Rotations légères","Ombres « décalées »"], palettes: [
    { name: "Presse", vars: { "--sg-bg": "#f2ede0", "--sg-surface": "#fffdf6", "--sg-text": "#1a1a1a", "--sg-muted": "#666", "--sg-primary": "#c0392b", "--sg-primary-2": "#a23224", "--sg-acc": "#2a6b8a", "--sg-radius": "0px" } },
    { name: "Magazine", vars: { "--sg-bg": "#efe9ec", "--sg-surface": "#fff", "--sg-text": "#2a1a2a", "--sg-muted": "#8a7482", "--sg-primary": "#a02f7a", "--sg-primary-2": "#82235f", "--sg-acc": "#e0a03f", "--sg-radius": "0px" } },
    { name: "Vintage", vars: { "--sg-bg": "#efe4d0", "--sg-surface": "#faf3e4", "--sg-text": "#4a3a24", "--sg-muted": "#9a8870", "--sg-primary": "#c97a3d", "--sg-primary-2": "#a85f2a", "--sg-acc": "#5a7a4a", "--sg-radius": "0px" } },
    { name: "Street", vars: { "--sg-bg": "#f2e9e6", "--sg-surface": "#fff", "--sg-text": "#2a1f1f", "--sg-muted": "#8a7472", "--sg-primary": "#e04a4a", "--sg-primary-2": "#c02f2f", "--sg-acc": "#3a6f8a", "--sg-radius": "0px" } },
    { name: "Éco", vars: { "--sg-bg": "#eff2e6", "--sg-surface": "#fff", "--sg-text": "#2a3a24", "--sg-muted": "#7f8a70", "--sg-primary": "#3f8a3d", "--sg-primary-2": "#2f6f2f", "--sg-acc": "#c9a24b", "--sg-radius": "0px" } }
  ] },
  { id: "light", p: "light", name: "Minimal Light / Airy", category: "Flat", tagline: "Lumineux : blanc, typographie aérée", desc: "Le style Minimal Light assume une interface très claire : fond blanc, grandes typographies, beaucoup d'air. Épuré, haut de gamme et lumineux.", flavor: "Light", note: "**Quand l'utiliser ?** Produits premium, portfolios, SaaS, notes. L'espace blanc et la typo sont essentiels.", tips: ["Fond blanc","Beaucoup d'espace","Grande typographie","Un seul accent"], palettes: [
    { name: "Nuage", vars: { "--sg-bg": "#ffffff", "--sg-surface": "#ffffff", "--sg-text": "#1a1a1a", "--sg-muted": "#8a8a8a", "--sg-primary": "#2a2a2a", "--sg-primary-2": "#4a4a4a", "--sg-acc": "#5a9ad0", "--sg-radius": "16px" } },
    { name: "Coton", vars: { "--sg-bg": "#fafafa", "--sg-surface": "#ffffff", "--sg-text": "#2a2a2a", "--sg-muted": "#9a9a9a", "--sg-primary": "#1a1a1a", "--sg-primary-2": "#3a3a3a", "--sg-acc": "#c95a5a", "--sg-radius": "16px" } },
    { name: "Crémeux", vars: { "--sg-bg": "#fdfaf4", "--sg-surface": "#fffdf8", "--sg-text": "#3a2f22", "--sg-muted": "#9a8f80", "--sg-primary": "#2a2115", "--sg-primary-2": "#4a3f2f", "--sg-acc": "#c98a4b", "--sg-radius": "16px" } },
    { name: "Minuit clair", vars: { "--sg-bg": "#f6f7f9", "--sg-surface": "#ffffff", "--sg-text": "#1f2530", "--sg-muted": "#7a8595", "--sg-primary": "#1f2530", "--sg-primary-2": "#3a4452", "--sg-acc": "#2f6f9f", "--sg-radius": "16px" } },
    { name: "Rose poudré", vars: { "--sg-bg": "#fdf6f8", "--sg-surface": "#fff", "--sg-text": "#3a242c", "--sg-muted": "#a08890", "--sg-primary": "#2a1a20", "--sg-primary-2": "#4a3038", "--sg-acc": "#c0577a", "--sg-radius": "16px" } }
  ] },
  { id: "comic", p: "comic", name: "Comic Book", category: "Bold", tagline: "Bandes dessinées : halftone, contours, POP !", desc: "Le style Comic Book s'inspire des BD : fond à points (halftone), contours noirs épais, couleurs vives et ombres dures. POW ! BAM !", flavor: "Comic", note: "**Quand l'utiliser ?** Sites fun, jeux, marques kids, contenus « super-héros ». Les points + contours donnent le ton.", tips: ["Motif halftone en fond","Contours 2-3px noirs","Couleurs vives","Ombres dures"], palettes: [
    { name: "Pop", vars: { "--sg-bg": "#fff3b0", "--sg-surface": "#fffdf2", "--sg-text": "#1a1a1a", "--sg-muted": "#555555", "--sg-primary": "#ff5e5e", "--sg-primary-2": "#ff3838", "--sg-acc": "#2ec4e6", "--sg-radius": "8px" } },
    { name: "Pow", vars: { "--sg-bg": "#b0e6ff", "--sg-surface": "#ffffff", "--sg-text": "#1a2a3a", "--sg-muted": "#55718a", "--sg-primary": "#2f8fe0", "--sg-primary-2": "#1f6fb8", "--sg-acc": "#ffd23f", "--sg-radius": "8px" } },
    { name: "Zap", vars: { "--sg-bg": "#ffe8a8", "--sg-surface": "#fffdf2", "--sg-text": "#4a3a12", "--sg-muted": "#8a7a50", "--sg-primary": "#ff9d2e", "--sg-primary-2": "#e88a1f", "--sg-acc": "#e23b8a", "--sg-radius": "8px" } },
    { name: "Bam", vars: { "--sg-bg": "#d9a8ff", "--sg-surface": "#ffffff", "--sg-text": "#2a1f4a", "--sg-muted": "#8a7aa8", "--sg-primary": "#8a3fe0", "--sg-primary-2": "#6f2fb8", "--sg-acc": "#2fd4a0", "--sg-radius": "8px" } }
  ] },
  { id: "luxe", p: "luxe", name: "Luxury / Gold", category: "Modern", tagline: "Prestige : fond sombre, or, serif", desc: "Le style Luxury s'inspire du haut de gamme : fonds sombres profonds, accents dorés, typographie serif et liserés fins. Élégant et raffiné.", flavor: "Luxury", note: "**Quand l'utiliser ?** Finance privée, mode, produits premium, hôtellerie. Le serif + l'or définissent le prestige.", tips: ["Fond sombre + or","Serif","Double cadre fin","Ombres profondes"], palettes: [
    { name: "Onyx Or", vars: { "--sg-bg": "#0c0b10", "--sg-surface": "#15131c", "--sg-surface-2": "#1b1823", "--sg-text": "#eae6dd", "--sg-muted": "#948d82", "--sg-primary": "#d4af37", "--sg-primary-2": "#b3922b", "--sg-acc": "#c9b37a", "--sg-radius": "6px", "--luxe-line": "rgba(212,175,55,.35)" } },
    { name: "Minuit Platine", vars: { "--sg-bg": "#0a0c12", "--sg-surface": "#131722", "--sg-surface-2": "#18202c", "--sg-text": "#e6edf3", "--sg-muted": "#8a97a8", "--sg-primary": "#c0c8d0", "--sg-primary-2": "#a0aab8", "--sg-acc": "#d4af37", "--sg-radius": "6px", "--luxe-line": "rgba(200,208,224,.25)" } },
    { name: "Émeraude", vars: { "--sg-bg": "#0a0f0d", "--sg-surface": "#131a16", "--sg-surface-2": "#18231c", "--sg-text": "#e2eee6", "--sg-muted": "#8aa896", "--sg-primary": "#2fb08a", "--sg-primary-2": "#1f8f6f", "--sg-acc": "#d4af37", "--sg-radius": "6px", "--luxe-line": "rgba(47,176,138,.35)" } },
    { name: "Rubis", vars: { "--sg-bg": "#120709", "--sg-surface": "#1c0e12", "--sg-surface-2": "#241418", "--sg-text": "#f2e2e2", "--sg-muted": "#a88484", "--sg-primary": "#c0392b", "--sg-primary-2": "#9c2b20", "--sg-acc": "#d4af37", "--sg-radius": "6px", "--luxe-line": "rgba(192,57,43,.4)" } }
  ] },
  { id: "boho", p: "boho", name: "Bohemian / Boho", category: "Soft", tagline: "Bohème : terre, motifs organiques", desc: "Le style bohème mêle tons terreux, motifs organiques et formes douces. Chaleureux, artisanal et libre.", flavor: "Boho", note: "**Quand l'utiliser ?** Lifestyle, artisanat, bien-être, déco. Les tons terreux apaisent.", tips: ["Palette terre","Formes organiques","Motifs discrets","Ombres douces"], palettes: [
    { name: "Terracotta", vars: { "--sg-bg": "#f5e7d8", "--sg-surface": "#fcf3e9", "--sg-text": "#5a3428", "--sg-muted": "#b08a78", "--sg-primary": "#d06a4a", "--sg-primary-2": "#a84f33", "--sg-acc": "#5a8a5a", "--sg-radius": "20px", "--boho-shadow": "rgba(160,80,40,.18)" } },
    { name: "Sauge", vars: { "--sg-bg": "#e9f0e4", "--sg-surface": "#f7fbf4", "--sg-text": "#2f4a2a", "--sg-muted": "#7aa070", "--sg-primary": "#5a8a4a", "--sg-primary-2": "#467037", "--sg-acc": "#d0a24f", "--sg-radius": "20px", "--boho-shadow": "rgba(70,110,60,.16)" } },
    { name: "Ocre", vars: { "--sg-bg": "#f2e8d6", "--sg-surface": "#fbf4e8", "--sg-text": "#5a4424", "--sg-muted": "#a89470", "--sg-primary": "#c98a2a", "--sg-primary-2": "#a86d1f", "--sg-acc": "#d06a4a", "--sg-radius": "20px", "--boho-shadow": "rgba(170,110,30,.16)" } },
    { name: "Lavande", vars: { "--sg-bg": "#ece8f5", "--sg-surface": "#f8f6fc", "--sg-text": "#3a2f55", "--sg-muted": "#9387ae", "--sg-primary": "#8a6ff0", "--sg-primary-2": "#6f54cd", "--sg-acc": "#d0a24f", "--sg-radius": "20px", "--boho-shadow": "rgba(90,60,160,.15)" } }
  ] },
  { id: "nordic", p: "nordic", name: "Nordic / Scandi", category: "Flat", tagline: "Scandinave : pastel feutré, hygge", desc: "Le style nordique est sobre et apaisant : pastels feutrés, formes douces, beaucoup de blanc. Hygge et minimal.", flavor: "Nordic", note: "**Quand l'utiliser ?** Lifestyle, déco, bien-être, e-commerce épuré. Les tons feutrés rassurent.", tips: ["Pastels feutrés","Formes douces","Beaucoup de blanc","Ombres légères"], palettes: [
    { name: "Hygge", vars: { "--sg-bg": "#f4f1ec", "--sg-surface": "#ffffff", "--sg-text": "#3a3734", "--sg-muted": "#928d87", "--sg-primary": "#a8b8b0", "--sg-primary-2": "#8aa29a", "--sg-acc": "#c9b28a", "--sg-radius": "16px", "--nordic-shadow": "rgba(60,55,50,.1)" } },
    { name: "Fjord", vars: { "--sg-bg": "#eef2f5", "--sg-surface": "#ffffff", "--sg-text": "#2f3f4f", "--sg-muted": "#7fa0b8", "--sg-primary": "#7ab0d0", "--sg-primary-2": "#5f97b5", "--sg-acc": "#d0c2a0", "--sg-radius": "16px", "--nordic-shadow": "rgba(50,80,100,.1)" } },
    { name: "Sauge", vars: { "--sg-bg": "#eef1ea", "--sg-surface": "#ffffff", "--sg-text": "#33402f", "--sg-muted": "#86a08a", "--sg-primary": "#9ab89a", "--sg-primary-2": "#7f9f82", "--sg-acc": "#d8b88a", "--sg-radius": "16px", "--nordic-shadow": "rgba(60,90,60,.1)" } },
    { name: "Brun", vars: { "--sg-bg": "#f2eee7", "--sg-surface": "#ffffff", "--sg-text": "#403932", "--sg-muted": "#9a9088", "--sg-primary": "#b09a82", "--sg-primary-2": "#978172", "--sg-acc": "#c9a96a", "--sg-radius": "16px", "--nordic-shadow": "rgba(80,60,40,.1)" } }
  ] },
  { id: "polaroid", p: "polaroid", name: "Retro Polaroid", category: "Soft", tagline: "Photos polaroid : cadre blanc, incliné", desc: "Le style Polaroid imite de vieilles photos instantanées : cadres blancs épais, léger tilt, ombres douces. Nostalgique et organique.", flavor: "Polaroid", note: "**Quand l'utiliser ?** Albums, souvenirs, lifestyle, portfolios photo. Le cadre blanc + tilt font le charme.", tips: ["Cadre blanc épais","Léger tilt (-2° à +2°)","Ombres douces","Serif manuscrite"], palettes: [
    { name: "Papier", vars: { "--sg-bg": "#f2ede2", "--sg-surface": "#ffffff", "--sg-text": "#4a4238", "--sg-muted": "#a8a08f", "--sg-primary": "#e07a5f", "--sg-primary-2": "#c75f43", "--sg-acc": "#5aa87a", "--sg-radius": "0px" } },
    { name: "Menthe", vars: { "--sg-bg": "#e6f0ec", "--sg-surface": "#ffffff", "--sg-text": "#2f5548", "--sg-muted": "#7aa88f", "--sg-primary": "#4aa88a", "--sg-primary-2": "#358a70", "--sg-acc": "#ff8fab", "--sg-radius": "0px" } },
    { name: "Ciel", vars: { "--sg-bg": "#e8f2fb", "--sg-surface": "#ffffff", "--sg-text": "#1f3f5f", "--sg-muted": "#6f9ab5", "--sg-primary": "#4a8fd0", "--sg-primary-2": "#3474ad", "--sg-acc": "#ffb45c", "--sg-radius": "0px" } },
    { name: "Rose", vars: { "--sg-bg": "#fdeef2", "--sg-surface": "#ffffff", "--sg-text": "#5a2b3f", "--sg-muted": "#b58a9c", "--sg-primary": "#e05a8a", "--sg-primary-2": "#c03a6f", "--sg-acc": "#7ec1ff", "--sg-radius": "0px" } }
  ] },
  { id: "cybercity", p: "cybercity", name: "Cyberpunk City", category: "Modern", tagline: "Nuit néon : ville cyberpunk", desc: "Le style Cyberpunk City évoque une mégapole nocturne : fond presque noir, néons cyan/rose, grilles et lueur. Immersif et futuriste.", flavor: "Cyberpunk", note: "**Quand l'utiliser ?** Gaming, tech, musique, culture urbaine. Les néons sur fond sombre donnent l'ambiance.", tips: ["Fond quasi noir","Néons cyan/rose","Grille verticale","Glow sur les éléments"], palettes: [
    { name: "Néon Ville", vars: { "--sg-bg": "#0a0714", "--sg-surface": "#151026", "--sg-text": "#eadcff", "--sg-muted": "#93888f", "--sg-primary": "#ff2fd6", "--sg-primary-2": "#d41fb0", "--sg-acc": "#00e3ff", "--sg-radius": "14px", "--cyber-glow": "rgba(255,47,214,.35)" } },
    { name: "Bleu Nuit", vars: { "--sg-bg": "#050d18", "--sg-surface": "#0d1a2e", "--sg-text": "#d5ecff", "--sg-muted": "#5f8fb5", "--sg-primary": "#2fa8ff", "--sg-primary-2": "#1f8ae0", "--sg-acc": "#ff5c9d", "--sg-radius": "14px", "--cyber-glow": "rgba(47,168,255,.4)" } },
    { name: "Corail", vars: { "--sg-bg": "#120a12", "--sg-surface": "#1e1520", "--sg-text": "#ffdadf", "--sg-muted": "#c48a90", "--sg-primary": "#ff5c7a", "--sg-primary-2": "#e23a5a", "--sg-acc": "#00ffd0", "--sg-radius": "14px", "--cyber-glow": "rgba(255,92,122,.4)" } },
    { name: "Volt", vars: { "--sg-bg": "#07140f", "--sg-surface": "#0f221a", "--sg-text": "#d5ffeb", "--sg-muted": "#7ab598", "--sg-primary": "#2fff8a", "--sg-primary-2": "#1ac86b", "--sg-acc": "#ff2fd6", "--sg-radius": "14px", "--cyber-glow": "rgba(47,255,138,.35)" } }
  ] },
  { id: "terrazzo", p: "terrazzo", name: "Terrazzo", category: "Soft", tagline: "Terrazzo : éclats de pierre colorés", desc: "Le style Terrazzo s'inspire du revêtement en terrazzo : un fond constellé d'éclats colorés, avec des cartes claires. Ludique et minéral.", flavor: "Terrazzo", note: "**Quand l'utiliser ?** Décoration, lifestyle, e-commerce, produits artisanaux. Les éclats donnent la texture.", tips: ["Fond en éclats (radial)","Cartes claires","Couleurs vives","Coins arrondis"], palettes: [
    { name: "Sable", vars: { "--sg-bg": "#f2ece0", "--sg-surface": "#fbf7ee", "--sg-text": "#4a4136", "--sg-muted": "#9a917f", "--sg-primary": "#c98a4b", "--sg-primary-2": "#a86d35", "--sg-acc": "#5a8a6a", "--sg-radius": "18px" } },
    { name: "Rose", vars: { "--sg-bg": "#f4e6e8", "--sg-surface": "#fdf7f8", "--sg-text": "#5a3842", "--sg-muted": "#b0919c", "--sg-primary": "#d06a8a", "--sg-primary-2": "#b04f6f", "--sg-acc": "#8aa8d0", "--sg-radius": "18px" } },
    { name: "Mer", vars: { "--sg-bg": "#e4edf1", "--sg-surface": "#f7fbfd", "--sg-text": "#2f4652", "--sg-muted": "#7fa0ad", "--sg-primary": "#3f8fad", "--sg-primary-2": "#2f7490", "--sg-acc": "#e0a24f", "--sg-radius": "18px" } },
    { name: "Citron", vars: { "--sg-bg": "#f2f0e0", "--sg-surface": "#fbfaf2", "--sg-text": "#46422f", "--sg-muted": "#9a9472", "--sg-primary": "#a8a23f", "--sg-primary-2": "#8a844f", "--sg-acc": "#d0704a", "--sg-radius": "18px" } }
  ] },
  { id: "punk", p: "punk", name: "Punk / Zine", category: "Bold", tagline: "Zine underground : noir, rouge, collage", desc: "Le style Punk s'inspire des fanzines : noir et blanc tranchants, accents rouges, textes en monospace et collage brut. Subversif et direct.", flavor: "Punk", note: "**Quand l'utiliser ?** Culture, musique, mode, contenus engagés. Le monospace + le rouge donnent l'énergie.", tips: ["Noir/blanc tranchants","Accent rouge","Monospace","Rotations & collages"], palettes: [
    { name: "Rouge", vars: { "--sg-bg": "#f2e8e6", "--sg-surface": "#ffffff", "--sg-text": "#1a1a1a", "--sg-muted": "#666666", "--sg-primary": "#c0392b", "--sg-primary-2": "#a23224", "--sg-acc": "#2a2a2a", "--sg-radius": "0px" } },
    { name: "Noir", vars: { "--sg-bg": "#141414", "--sg-surface": "#1e1e1e", "--sg-text": "#eaeaea", "--sg-muted": "#9a9a9a", "--sg-primary": "#e23b3b", "--sg-primary-2": "#c4271d", "--sg-acc": "#f2f2f2", "--sg-radius": "0px" } },
    { name: "Toxic", vars: { "--sg-bg": "#e8f0e0", "--sg-surface": "#ffffff", "--sg-text": "#1a2a12", "--sg-muted": "#5f8a4a", "--sg-primary": "#4a8a2a", "--sg-primary-2": "#356f1f", "--sg-acc": "#2a2a2a", "--sg-radius": "0px" } },
    { name: "Mauve", vars: { "--sg-bg": "#eee4ef", "--sg-surface": "#ffffff", "--sg-text": "#2a1a2a", "--sg-muted": "#8a747f", "--sg-primary": "#a02f7a", "--sg-primary-2": "#82235f", "--sg-acc": "#1a1a1a", "--sg-radius": "0px" } }
  ] },
  { id: "vhs", p: "vhs", name: "Retro VHS", category: "Modern", tagline: "Cassette vidéo : lignes de tracking, PLAY", desc: "Le style VHS évoque une vieille cassette : bandes de tracking, code temporel, monospace et lueur. Nostalgie média rétro.", flavor: "VHS", note: "**Quand l'utiliser ?** Nostalgie, médias, contenus « found footage », culture pop. Les lignes + monospace donnent le ton.", tips: ["Lignes de tracking","▶ PLAY","Monospace","Lueur rétro"], palettes: [
    { name: "Cassette", vars: { "--sg-bg": "#0d0b12", "--sg-surface": "#17131f", "--sg-text": "#e6e0ff", "--sg-muted": "#93879f", "--sg-primary": "#b06ff0", "--sg-primary-2": "#924fd6", "--sg-acc": "#2fd0e0", "--sg-radius": "8px" } },
    { name: "Betamax", vars: { "--sg-bg": "#0a0f12", "--sg-surface": "#141a1f", "--sg-text": "#d5f0ff", "--sg-muted": "#7fa0b5", "--sg-primary": "#2fa8d0", "--sg-primary-2": "#1f87ab", "--sg-acc": "#e07a5f", "--sg-radius": "8px" } },
    { name: "Séance", vars: { "--sg-bg": "#0b0a10", "--sg-surface": "#15141b", "--sg-text": "#e0dfff", "--sg-muted": "#8a88a5", "--sg-primary": "#8a5cff", "--sg-primary-2": "#6a3fdb", "--sg-acc": "#ff5c9d", "--sg-radius": "8px" } },
    { name: "Démo", vars: { "--sg-bg": "#090b0d", "--sg-surface": "#131619", "--sg-text": "#dff5f0", "--sg-muted": "#7fae9f", "--sg-primary": "#2fb08a", "--sg-primary-2": "#1f8f6f", "--sg-acc": "#ffd166", "--sg-radius": "8px" } }
  ] },
  { id: "news", p: "news", name: "Newspaper", category: "Flat", tagline: "Presse : colonnes, serif, noir & blanc", desc: "Le style Newspaper imite la une d'un journal : typographie serif, colonnes, rangées fines. Éditorial et authentique.", flavor: "Newspaper", note: "**Quand l'utiliser ?** Médias, journaux, éditorial, portails d'information. Le serif + colonnes donnent le format.", tips: ["Serif (Times)","Colonnes","Bords droits","Accent rouge"], palettes: [
    { name: "Le Journal", vars: { "--sg-bg": "#f6f3ec", "--sg-surface": "#fffdf8", "--sg-text": "#2a2a2a", "--sg-muted": "#666666", "--sg-primary": "#c0392b", "--sg-primary-2": "#a23224", "--sg-acc": "#2a6b8a", "--sg-radius": "0px" } },
    { name: "Bleu Édition", vars: { "--sg-bg": "#eef0f4", "--sg-surface": "#ffffff", "--sg-text": "#1c2a3a", "--sg-muted": "#5f7a92", "--sg-primary": "#1a4fa0", "--sg-primary-2": "#123a78", "--sg-acc": "#c0392b", "--sg-radius": "0px" } },
    { name: "Vert Presse", vars: { "--sg-bg": "#eef2ec", "--sg-surface": "#ffffff", "--sg-text": "#2f4029", "--sg-muted": "#7f8a72", "--sg-primary": "#2f6f4a", "--sg-primary-2": "#1f5540", "--sg-acc": "#c0392b", "--sg-radius": "0px" } },
    { name: "Nuit Journal", vars: { "--sg-bg": "#141618", "--sg-surface": "#1e2124", "--sg-text": "#e6e2da", "--sg-muted": "#9a958c", "--sg-primary": "#d4c08a", "--sg-primary-2": "#b39a5c", "--sg-acc": "#c0392b", "--sg-radius": "0px" } }
  ] },
  { id: "riso", p: "riso", name: "Risograph", category: "Bold", tagline: "Impression riso : couleurs spot, grain", desc: "Le style Risograph imite une impression riso : 2-3 couleurs spot en surimpression, grain léger et décalages de registre. Artisanal et graphique.", flavor: "Riso", note: "**Quand l'utiliser ?** Affiches, éditorial, culture, zines. Les couleurs spot + le grain donnent l'effet.", tips: ["Couleurs spot (2-3)","Grain léger","Décalage de registre","Bords droits"], palettes: [
    { name: "Bleu/Rouge", vars: { "--sg-bg": "#eef0f2", "--sg-surface": "#ffffff", "--sg-text": "#1a1a2a", "--sg-muted": "#666666", "--sg-primary": "#1a6ee0", "--sg-primary-2": "#8f39a5", "--sg-acc": "#e23b3b", "--sg-radius": "0px" } },
    { name: "Rose/Vert", vars: { "--sg-bg": "#f4f0f2", "--sg-surface": "#ffffff", "--sg-text": "#2a1a2a", "--sg-muted": "#8a6a7a", "--sg-primary": "#d02f7a", "--sg-primary-2": "#a02f8a", "--sg-acc": "#4a8f5a", "--sg-radius": "0px" } },
    { name: "Jaune/Bleu", vars: { "--sg-bg": "#f6f2e8", "--sg-surface": "#ffffff", "--sg-text": "#2a241a", "--sg-muted": "#8a7a5f", "--sg-primary": "#e0a03a", "--sg-primary-2": "#b36a2a", "--sg-acc": "#1f6fb5", "--sg-radius": "0px" } },
    { name: "Green/Orange", vars: { "--sg-bg": "#f0f2ec", "--sg-surface": "#ffffff", "--sg-text": "#1f2a1f", "--sg-muted": "#6a8a6a", "--sg-primary": "#2f7f4a", "--sg-primary-2": "#4a5f2a", "--sg-acc": "#e07a3a", "--sg-radius": "0px" } }
  ] },
  { id: "frost", p: "frost", name: "Winter Frost", category: "Soft", tagline: "Hiver : glace, verre bleuté, froid", desc: "Le style Winter Frost évoque l'hiver : verre givré bleuté, blancs froids, légèreté. Frais, calme et élégant.", flavor: "Frost", note: "**Quand l'utiliser ?** Hiver, saisonnier, bien-être, produits froids. Le verre bleuté donne la fraîcheur.", tips: ["Verre givré bleuté","Blancs froids","Blur léger","Palette glacée"], palettes: [
    { name: "Glace", vars: { "--sg-bg": "#dcecf5", "--sg-surface": "#ffffff", "--sg-text": "#2f4a5f", "--sg-muted": "#7fa0b8", "--sg-primary": "#5ab5e0", "--sg-primary-2": "#3f97c0", "--sg-acc": "#c9e0f0", "--sg-radius": "22px", "--frost-bg": "rgba(255,255,255,.5)", "--frost-border": "rgba(200,230,250,.7)" } },
    { name: "Cristal", vars: { "--sg-bg": "#e8f0f8", "--sg-surface": "#ffffff", "--sg-text": "#23405a", "--sg-muted": "#6f9ab3", "--sg-primary": "#3f9fd0", "--sg-primary-2": "#2a83b3", "--sg-acc": "#ffb45c", "--sg-radius": "22px", "--frost-bg": "rgba(255,255,255,.55)", "--frost-border": "rgba(210,235,250,.7)" } },
    { name: "Neige", vars: { "--sg-bg": "#eef2f6", "--sg-surface": "#ffffff", "--sg-text": "#2f3a4a", "--sg-muted": "#8a98a8", "--sg-primary": "#7fa8c9", "--sg-primary-2": "#6f97b5", "--sg-acc": "#d0a8c9", "--sg-radius": "22px", "--frost-bg": "rgba(255,255,255,.6)", "--frost-border": "rgba(220,230,240,.7)" } },
    { name: "Lago gelé", vars: { "--sg-bg": "#dcebe6", "--sg-surface": "#ffffff", "--sg-text": "#24534a", "--sg-muted": "#7aa89a", "--sg-primary": "#2f9f8a", "--sg-primary-2": "#1f8a70", "--sg-acc": "#e0a03f", "--sg-radius": "22px", "--frost-bg": "rgba(255,255,255,.5)", "--frost-border": "rgba(200,235,220,.7)" } }
  ] },
  { id: "marble", p: "marble", name: "Marble", category: "Soft", tagline: "Marbre : pierre, veines, luxe sobre", desc: "Le style Marble imite la pierre : surfaces veinées, reflets doux, élégance minérale. Sobre et raffiné.", flavor: "Marble", note: "**Quand l'utiliser ?** Produits premium, déco, architecture, matériaux. Le veinage donne la matière.", tips: ["Veines (dégradés)","Reflets doux","Élégance minérale","Cartes claires"], palettes: [
    { name: "Blanc", vars: { "--sg-bg": "#eef0f5", "--sg-surface": "#f7f8fb", "--sg-text": "#2f3340", "--sg-muted": "#8a92a5", "--sg-primary": "#4a5a78", "--sg-primary-2": "#3a4a66", "--sg-acc": "#c9a24b", "--sg-radius": "18px" } },
    { name: "Vert", vars: { "--sg-bg": "#e9efe8", "--sg-surface": "#f5f8f4", "--sg-text": "#2c4034", "--sg-muted": "#7a9686", "--sg-primary": "#3f8a6a", "--sg-primary-2": "#2f6f55", "--sg-acc": "#e0c08a", "--sg-radius": "18px" } },
    { name: "Rose", vars: { "--sg-bg": "#f2e9ec", "--sg-surface": "#faf6f8", "--sg-text": "#4a3640", "--sg-muted": "#a08a92", "--sg-primary": "#c77a9a", "--sg-primary-2": "#a85f80", "--sg-acc": "#8aa8c9", "--sg-radius": "18px" } },
    { name: "Nuit", vars: { "--sg-bg": "#181c26", "--sg-surface": "#222834", "--sg-text": "#e0e6f0", "--sg-muted": "#8a97a8", "--sg-primary": "#7f97bf", "--sg-primary-2": "#6f87ab", "--sg-acc": "#c9a24b", "--sg-radius": "18px" } }
  ] },
  { id: "racing", p: "racing", name: "Retro Racing", category: "Bold", tagline: "Motorsport : liseré, italique, énergie", desc: "Le style Racing s'inspire de la course : liseré coloré en haut, typographie italique grasse, contrastes francs. Énergie et vitesse.", flavor: "Racing", note: "**Quand l'utiliser ?** Sport, auto/moto, événements, marques dynamiques. Le liseré + l'italique donnent l'énergie.", tips: ["Liseré coloré en haut","Typo grasse italique","Contrastes francs","Ombres dures"], palettes: [
    { name: "Rouge", vars: { "--sg-bg": "#f2e8e2", "--sg-surface": "#ffffff", "--sg-text": "#2a1d16", "--sg-muted": "#8a7568", "--sg-primary": "#c0392b", "--sg-primary-2": "#9c2b20", "--sg-acc": "#2a2a2a", "--sg-radius": "10px" } },
    { name: "Bleu", vars: { "--sg-bg": "#e6ecf2", "--sg-surface": "#ffffff", "--sg-text": "#1f2c3f", "--sg-muted": "#6f7f95", "--sg-primary": "#1f5fb0", "--sg-primary-2": "#16487f", "--sg-acc": "#c0392b", "--sg-radius": "10px" } },
    { name: "Vert", vars: { "--sg-bg": "#e6efe8", "--sg-surface": "#ffffff", "--sg-text": "#1f2f28", "--sg-muted": "#6f8a7f", "--sg-primary": "#1f8f6a", "--sg-primary-2": "#146a4f", "--sg-acc": "#e07a3a", "--sg-radius": "10px" } },
    { name: "Noir", vars: { "--sg-bg": "#141416", "--sg-surface": "#1f1f22", "--sg-text": "#eaeaea", "--sg-muted": "#9a9a9a", "--sg-primary": "#e23b3b", "--sg-primary-2": "#c4271d", "--sg-acc": "#f2f2f2", "--sg-radius": "10px" } }
  ] },
  { id: "solarpunk", p: "solarpunk", name: "Solarpunk", category: "Modern", tagline: "Éco-tech : vert, soleil, futur durable", desc: "Le style Solarpunk imagine un futur écologique : verts, lumière solaire, technologie propre. Optimiste et durable.", flavor: "Solarpunk", note: "**Quand l'utiliser ?** Éco, énergie, tech durable, mobilité verte. Les verts + la lumière donnent l'espoir.", tips: ["Verts + lumineux","Énergie propre","Futur optimiste","Ombres douces"], palettes: [
    { name: "Bio", vars: { "--sg-bg": "#e6f0e6", "--sg-surface": "#ffffff", "--sg-text": "#24402a", "--sg-muted": "#6f9a7a", "--sg-primary": "#2f8f4a", "--sg-primary-2": "#1f7a3d", "--sg-acc": "#ffd166", "--sg-radius": "18px", "--solarpun-shadow": "rgba(50,120,60,.16)" } },
    { name: "Fer", vars: { "--sg-bg": "#e6eef2", "--sg-surface": "#ffffff", "--sg-text": "#20303d", "--sg-muted": "#6f8a9a", "--sg-primary": "#3f8fad", "--sg-primary-2": "#2f7a95", "--sg-acc": "#7ac96a", "--sg-radius": "18px", "--solarpun-shadow": "rgba(50,90,120,.15)" } },
    { name: "Verre", vars: { "--sg-bg": "#f0f2ec", "--sg-surface": "#ffffff", "--sg-text": "#2f3929", "--sg-muted": "#7f8a74", "--sg-primary": "#5f8a3a", "--sg-primary-2": "#4a7a2f", "--sg-acc": "#3f9fd0", "--sg-radius": "18px", "--solarpun-shadow": "rgba(60,90,40,.14)" } },
    { name: "Océan", vars: { "--sg-bg": "#e4eef2", "--sg-surface": "#ffffff", "--sg-text": "#1f3a48", "--sg-muted": "#5f8aa5", "--sg-primary": "#1f8ab0", "--sg-primary-2": "#146f95", "--sg-acc": "#3f9f8a", "--sg-radius": "18px", "--solarpun-shadow": "rgba(30,90,110,.15)" } }
  ] },
  { id: "deli", p: "deli", name: "Retro Deli", category: "Bold", tagline: "Delicatessen : papier boucherie, rouge", desc: "Le style Deli imite les étiquettes de charcuterie : papier kraft/butcher, accents rouges, typographie serif. Rétro et gourmand.", flavor: "Deli", note: "**Quand l'utiliser ?** Alimentation, e-commerce food, marques artisanales. Le rouge + le kraft donnent l'appétit.", tips: ["Papier kraft/butcher","Accents rouges","Serif inscrit","Bordures nettes"], palettes: [
    { name: "Charcuterie", vars: { "--sg-bg": "#f6efe6", "--sg-surface": "#fdf8f0", "--sg-text": "#3a2a1e", "--sg-muted": "#9a8570", "--sg-primary": "#c0392b", "--sg-primary-2": "#a22f24", "--sg-acc": "#2a6b8a", "--sg-radius": "4px" } },
    { name: "Boucher", vars: { "--sg-bg": "#f2ece4", "--sg-surface": "#fbf6ee", "--sg-text": "#3a2418", "--sg-muted": "#a08a70", "--sg-primary": "#b02f24", "--sg-primary-2": "#8f241a", "--sg-acc": "#e0a03a", "--sg-radius": "4px" } },
    { name: "Épicerie", vars: { "--sg-bg": "#eef2ea", "--sg-surface": "#f8fbf4", "--sg-text": "#2f3a26", "--sg-muted": "#7f8a70", "--sg-primary": "#4a8a3a", "--sg-primary-2": "#366f2a", "--sg-acc": "#c0392b", "--sg-radius": "4px" } },
    { name: "Papier", vars: { "--sg-bg": "#f2ede2", "--sg-surface": "#fbf7ee", "--sg-text": "#4a4238", "--sg-muted": "#9a9080", "--sg-primary": "#c96a3a", "--sg-primary-2": "#a8552a", "--sg-acc": "#4a8a6a", "--sg-radius": "4px" } }
  ] },
  { id: "kintsugi", p: "kintsugi", name: "Kintsugi / Wabi-sabi", category: "Soft", tagline: "Céramique réparée : or, fissures, sérénité", desc: "Le style Kintsugi s'inspire de l'art japonais de réparer la céramique à l'or : surfaces mates, fissures dorées, beauté de l'imparfait.", flavor: "Kintsugi", note: "**Quand l'utiliser ?** Bien-être, art, artisanat, produits premium. Les fissures dorées donnent la poésie.", tips: ["Surface céramique mate","Fissures dorées","Tons neutres","Beauté imparfaite"], palettes: [
    { name: "Céramique", vars: { "--sg-bg": "#efe9e0", "--sg-surface": "#f8f4ec", "--sg-surface-2": "#efe9db", "--sg-text": "#3a332c", "--sg-muted": "#8a8172", "--sg-primary": "#c9a24b", "--sg-primary-2": "#a58a3f", "--sg-acc": "#6a8a6a", "--sg-radius": "18px", "--kint-line": "rgba(201,162,75,.4)" } },
    { name: "Voile", vars: { "--sg-bg": "#edeae4", "--sg-surface": "#f7f5f0", "--sg-surface-2": "#eeece4", "--sg-text": "#37352f", "--sg-muted": "#8a877e", "--sg-primary": "#c9b28a", "--sg-primary-2": "#a89a78", "--sg-acc": "#9a8fb5", "--sg-radius": "18px", "--kint-line": "rgba(201,178,138,.4)" } },
    { name: "Bleu Céladon", vars: { "--sg-bg": "#e6efe9", "--sg-surface": "#f4f9f5", "--sg-surface-2": "#e9f1ea", "--sg-text": "#2f4238", "--sg-muted": "#6f8a7a", "--sg-primary": "#5aa88a", "--sg-primary-2": "#478d73", "--sg-acc": "#c9a24b", "--sg-radius": "18px", "--kint-line": "rgba(90,168,138,.4)" } },
    { name: "Minuit", vars: { "--sg-bg": "#1a1c22", "--sg-surface": "#232630", "--sg-surface-2": "#1e212a", "--sg-text": "#e2e4ea", "--sg-muted": "#8a8f9c", "--sg-primary": "#c9a24b", "--sg-primary-2": "#a58a3f", "--sg-acc": "#7f97bf", "--sg-radius": "18px", "--kint-line": "rgba(201,162,75,.4)" } }
  ] },
  { id: "space", p: "space", name: "Retro Space / Apollo", category: "Modern", tagline: "Course à l'espace : bleu nuit, orange", desc: "Le style Space s'inspire de l'ère Apollo : fonds nuit, accents orange, badges de mission. Rétro-futuriste et aventureux.", flavor: "Space", note: "**Quand l'utiliser ?** Aéro, science, jeux, contenus « mission ». Le bleu nuit + l'orange donnent le ton.", tips: ["Bleu nuit","Accents orange","Badges de mission","Uppercase"], palettes: [
    { name: "Apollo", vars: { "--sg-bg": "#0a1226", "--sg-surface": "#101832", "--sg-text": "#e0eaff", "--sg-muted": "#7a9ab8", "--sg-primary": "#ff8a3d", "--sg-primary-2": "#e56a1f", "--sg-acc": "#38c7ff", "--sg-radius": "14px" } },
    { name: "Mars", vars: { "--sg-bg": "#0c0f14", "--sg-surface": "#15181f", "--sg-text": "#e8e6e0", "--sg-muted": "#8a8a85", "--sg-primary": "#ff5c3d", "--sg-primary-2": "#d43b1f", "--sg-acc": "#ffb45c", "--sg-radius": "14px" } },
    { name: "Nébuleuse", vars: { "--sg-bg": "#0f0c1e", "--sg-surface": "#181530", "--sg-text": "#e0d9ff", "--sg-muted": "#7f76a8", "--sg-primary": "#a45cff", "--sg-primary-2": "#7c3ff0", "--sg-acc": "#00e3ff", "--sg-radius": "14px" } },
    { name: "Orbite", vars: { "--sg-bg": "#071226", "--sg-surface": "#0c1a30", "--sg-text": "#d5ecff", "--sg-muted": "#6f9ec5", "--sg-primary": "#2f8fe0", "--sg-primary-2": "#1f6fb8", "--sg-acc": "#ffd166", "--sg-radius": "14px" } }
  ] },
  { id: "origami", p: "origami", name: "Papercraft / Origami", category: "Bold", tagline: "Papier plié : géométrie, plis", desc: "Le style Origami imite le papier plié : formes géométriques, coins pliés, dégradés de papier. Graphique et artisanal.", flavor: "Origami", note: "**Quand l'utiliser ?** Créatif, édition, culture, papercraft. Les plis donnent le relief.", tips: ["Coins pliés","Formes géométriques","Dégradés papier","Ombres nettes"], palettes: [
    { name: "Papier", vars: { "--sg-bg": "#f4f0e6", "--sg-surface": "#fffdf8", "--sg-surface-2": "#efeadd", "--sg-text": "#3a332a", "--sg-muted": "#8a8172", "--sg-primary": "#c98a4a", "--sg-primary-2": "#a86d35", "--sg-acc": "#8aa8c9", "--sg-radius": "0px" } },
    { name: "Encre", vars: { "--sg-bg": "#eef0f2", "--sg-surface": "#ffffff", "--sg-surface-2": "#e9ecef", "--sg-text": "#2a2f38", "--sg-muted": "#6f7a88", "--sg-primary": "#3a55a8", "--sg-primary-2": "#2f437f", "--sg-acc": "#e07a3a", "--sg-radius": "0px" } },
    { name: "Sakura", vars: { "--sg-bg": "#f2ecf0", "--sg-surface": "#ffffff", "--sg-surface-2": "#efe8ec", "--sg-text": "#4a3540", "--sg-muted": "#9a8590", "--sg-primary": "#c75f8a", "--sg-primary-2": "#a84870", "--sg-acc": "#7fc0a0", "--sg-radius": "0px" } },
    { name: "Minuit", vars: { "--sg-bg": "#14161a", "--sg-surface": "#1e2128", "--sg-surface-2": "#171a20", "--sg-text": "#e6e6e0", "--sg-muted": "#8a8a80", "--sg-primary": "#d4c08a", "--sg-primary-2": "#b3a06a", "--sg-acc": "#8898b0", "--sg-radius": "0px" } }
  ] },
  { id: "lofi", p: "lofi", name: "Lofi / Cozy", category: "Soft", tagline: "Cosy : tons chauds, feutrés, chill", desc: "Le style Lofi évoque une ambiance cosy et chill : tons chauds feutrés, douceur, beaucoup de confort. Idéal pour l'écoute, la détente.", flavor: "Lofi", note: "**Quand l'utiliser ?** Bien-être, musique, podcasts, apps de focus. Les tons chauds apaisent.", tips: ["Tons chauds feutrés","Douceur","Confort","Ombres douces"], palettes: [
    { name: "Room", vars: { "--sg-bg": "#f2eee6", "--sg-surface": "#fbf8f2", "--sg-text": "#3a352e", "--sg-muted": "#9a9487", "--sg-primary": "#b58a5a", "--sg-primary-2": "#9a7245", "--sg-acc": "#8aa898", "--sg-radius": "16px", "--lofi-shadow": "rgba(90,70,45,.14)" } },
    { name: "Cozy", vars: { "--sg-bg": "#efe8dd", "--sg-surface": "#f9f4ea", "--sg-text": "#4a3e2f", "--sg-muted": "#a09079", "--sg-primary": "#a85f4a", "--sg-primary-2": "#8a4a36", "--sg-acc": "#5f8a7a", "--sg-radius": "16px", "--lofi-shadow": "rgba(100,60,40,.14)" } },
    { name: "Violet", vars: { "--sg-bg": "#ede9f0", "--sg-surface": "#f8f6fa", "--sg-text": "#423a50", "--sg-muted": "#948a9c", "--sg-primary": "#98a0c0", "--sg-primary-2": "#8089ad", "--sg-acc": "#d0a8c0", "--sg-radius": "16px", "--lofi-shadow": "rgba(80,70,110,.13)" } },
    { name: "Nuit", vars: { "--sg-bg": "#1c1e24", "--sg-surface": "#262830", "--sg-text": "#e4e4e4", "--sg-muted": "#8a8a8a", "--sg-primary": "#a89888", "--sg-primary-2": "#8a8078", "--sg-acc": "#6e9ab8", "--sg-radius": "16px", "--lofi-shadow": "rgba(0,0,0,.4)" } }
  ] },
  { id: "americana", p: "americana", name: "Retro Americana", category: "Bold", tagline: "Vintage USA : crème, rouge, blue jeans", desc: "Le style Americana évoque l'Amérique vintage : tons crème, rouge brique, denim, étiquettes rétro. Chaleureux et patriotique.", flavor: "Americana", note: "**Quand l'utiliser ?** Nourriture, vêtements, road trip, marques vintage. Les tons rétro donnent le style.", tips: ["Crème + rouge + denim","Étiquettes rétro","Serif","Bordures nettes"], palettes: [
    { name: "Route 66", vars: { "--sg-bg": "#f2ece0", "--sg-surface": "#fbf7ee", "--sg-text": "#3a2f24", "--sg-muted": "#9a8f80", "--sg-primary": "#c0392b", "--sg-primary-2": "#9c2b20", "--sg-acc": "#2a6b8a", "--sg-radius": "8px" } },
    { name: "Bleu", vars: { "--sg-bg": "#e6ecf2", "--sg-surface": "#ffffff", "--sg-text": "#1f2c3f", "--sg-muted": "#6f7f95", "--sg-primary": "#c0392b", "--sg-primary-2": "#9c2b20", "--sg-acc": "#1f5fb0", "--sg-radius": "8px" } },
    { name: "Diner", vars: { "--sg-bg": "#f2efe8", "--sg-surface": "#fbf9f3", "--sg-text": "#3a3830", "--sg-muted": "#9a968b", "--sg-primary": "#1f8f6a", "--sg-primary-2": "#146f4f", "--sg-acc": "#c0392b", "--sg-radius": "8px" } },
    { name: "Nuit", vars: { "--sg-bg": "#191a1e", "--sg-surface": "#232429", "--sg-text": "#e8e8e8", "--sg-muted": "#9a9a9a", "--sg-primary": "#e04a4a", "--sg-primary-2": "#c0392b", "--sg-acc": "#e6b45c", "--sg-radius": "8px" } }
  ] },
  { id: "industrial", p: "industrial", name: "Industrial / Concrete", category: "Flat", tagline: "Béton : brut, gris, sobre", desc: "Le style Industrial imite le béton brut : surfaces grises, angles droits, typographie technique. Sobre, solide et urbain.", flavor: "Industrial", note: "**Quand l'utiliser ?** Architecture, design, tech brute, intérieurs. Le béton donne la matière.", tips: ["Béton/gris","Angles droits","Typo technique","Uppercase"], palettes: [
    { name: "Béton", vars: { "--sg-bg": "#e6e8ea", "--sg-surface": "#f0f2f4", "--sg-surface-2": "#e2e4e8", "--sg-text": "#2c323a", "--sg-muted": "#7a8494", "--sg-primary": "#5a6675", "--sg-primary-2": "#49535f", "--sg-acc": "#c9902f", "--sg-radius": "4px" } },
    { name: "Graphite", vars: { "--sg-bg": "#14161a", "--sg-surface": "#1e2126", "--sg-surface-2": "#171a1f", "--sg-text": "#e4e6e8", "--sg-muted": "#8a8f96", "--sg-primary": "#8890a0", "--sg-primary-2": "#6f7888", "--sg-acc": "#d4af37", "--sg-radius": "4px" } },
    { name: "Acier", vars: { "--sg-bg": "#dfe3e6", "--sg-surface": "#eef1f3", "--sg-surface-2": "#e0e4e7", "--sg-text": "#2a323a", "--sg-muted": "#74828f", "--sg-primary": "#4f78a8", "--sg-primary-2": "#3f5f88", "--sg-acc": "#c9902f", "--sg-radius": "4px" } },
    { name: "Marine", vars: { "--sg-bg": "#1c2430", "--sg-surface": "#26303e", "--sg-surface-2": "#202936", "--sg-text": "#dfe8f0", "--sg-muted": "#7f95a8", "--sg-primary": "#4a8fd0", "--sg-primary-2": "#3a74ad", "--sg-acc": "#d4af37", "--sg-radius": "4px" } }
  ] },
  { id: "googie", p: "googie", name: "Googie / Space Age", category: "Bold", tagline: "Années 60 : starburst, diner, chrome", desc: "Le style Googie évoque l'architecte américaine des années 60 : starbursts, formes arrondies, diners, optimisme spatial. Faites pop !", flavor: "Googie", note: "**Quand l'utiliser ?** Rétro 60s, diners, motels, affiches. Les starbursts donnent l'énergie.", tips: ["Starbursts","Formes arrondies","Couleurs diner","Chrome"], palettes: [
    { name: "Turquoise", vars: { "--sg-bg": "#e8f2f0", "--sg-surface": "#ffffff", "--sg-text": "#1f3f3a", "--sg-muted": "#6f9d94", "--sg-primary": "#2f9f8a", "--sg-primary-2": "#1f8a70", "--sg-acc": "#ffd166", "--sg-radius": "0px" } },
    { name: "Or", vars: { "--sg-bg": "#f6efe0", "--sg-surface": "#fffdf6", "--sg-text": "#4a3a1a", "--sg-muted": "#9a8a60", "--sg-primary": "#c98a2a", "--sg-primary-2": "#a86d1f", "--sg-acc": "#2f7ab0", "--sg-radius": "0px" } },
    { name: "Rose", vars: { "--sg-bg": "#f0e4ea", "--sg-surface": "#ffffff", "--sg-text": "#4a2f40", "--sg-muted": "#9a7f8f", "--sg-primary": "#d05f8a", "--sg-primary-2": "#a84a70", "--sg-acc": "#3f8fa0", "--sg-radius": "0px" } },
    { name: "Nuit", vars: { "--sg-bg": "#11131a", "--sg-surface": "#1a1d27", "--sg-text": "#e6e6f0", "--sg-muted": "#8a8fa0", "--sg-primary": "#e0a03a", "--sg-primary-2": "#b37a2a", "--sg-acc": "#3fd0e0", "--sg-radius": "0px" } }
  ] },
  { id: "shimmer", p: "shimmer", name: "Iridescent Shimmer", category: "Modern", tagline: "Iridescent : reflets changeants, brillance", desc: "Le style Shimmer est iridescent : dégradés qui changent, reflets qui glissent, titres brillants. Moderne et premium.", flavor: "Shimmer", note: "**Quand l'utiliser ?** Finance, tech premium, cosmétiques. Le reflet animé attire l'œil.", tips: ["Dégradé iridescent","Reflet qui glisse","Titre brillant","Animation douce"], palettes: [
    { name: "Aurore", vars: { "--sg-bg": "#f4f0ff", "--sg-surface": "#ffffff", "--sg-text": "#2b2450", "--sg-muted": "#8a80b0", "--sg-primary": "#a45cff", "--sg-primary-2": "#7c3ff0", "--sg-acc": "#00e3ff", "--sg-radius": "18px" } },
    { name: "Pastel", vars: { "--sg-bg": "#fff4fa", "--sg-surface": "#ffffff", "--sg-text": "#3a2340", "--sg-muted": "#a37aa3", "--sg-primary": "#ff5c9d", "--sg-primary-2": "#e84a84", "--sg-acc": "#7ec1ff", "--sg-radius": "18px" } },
    { name: "Océan", vars: { "--sg-bg": "#eef6fb", "--sg-surface": "#ffffff", "--sg-text": "#13304a", "--sg-muted": "#5f8ab3", "--sg-primary": "#2fb3ff", "--sg-primary-2": "#178ad8", "--sg-acc": "#3ddc97", "--sg-radius": "18px" } },
    { name: "Minuit", vars: { "--sg-bg": "#14141c", "--sg-surface": "#1d1d2b", "--sg-text": "#ececff", "--sg-muted": "#9a93b5", "--sg-primary": "#00e3ff", "--sg-primary-2": "#7c5cff", "--sg-acc": "#ff5c9d", "--sg-radius": "18px" } }
  ] },

];

/* ============================================================
   Fiches d'information par style (usage, points forts, ...)
   ============================================================ */
window.DSH_META = {
  neu: { usage: "Dashboards, apps créatives, interfaces calmes qui veulent un rendu doux et tactile.", bestFor: ["Dashboard","App créative","Dark mode","Composants statiques"], pros: ["Rendu doux et moderne","Très bon pour les icônes et boutons","Effet 3D sans bordures"], cons: ["Contraste de texte souvent faible","Peu adapté aux tableaux denses","Difficile sur fonds imagés"], fonts: ["Sans-serif doux (Nunito, Quicksand, Inter)"], accessibility: "Vérifiez le ratio de contraste des petits textes ; approfondissez les ombres pour faire percevoir les éléments interactifs." },
  glass: { usage: "Hero sections, cartes de stats sur photos/dégradés, lancements de produit.", bestFor: ["Landing","Hero","Cartes","Mode sombre"], pros: ["Rendu verre moderne et aéré","Superbe sur fonds riches","Allège la densité visuelle"], cons: ["Lisibilité du texte à surveiller","backdrop-filter coûteux sur mobile","Contraste parfois insuffisant"], fonts: ["Sans-serif moderne (Inter, SF Pro, Rubik)"], accessibility: "Renforcez l'opacité du fond pour garder un bon contraste ; testez le flou sur mobile." },
  clay: { usage: "Apps enfant, e-commerce fun, onboarding, icônes illustrées.", bestFor: ["App enfant","Onboarding","Icônes","Illustration"], pros: ["Très arrondi et ludique","Fort relief pâte à modeler","Attire l'œil"], cons: ["Réservé à peu de contenu","Peut vite paraître chargé","Ombres colorées à doser"], fonts: ["Rond et amical (Baloo, Fredoka, Quicksand)"], accessibility: "Gardez des textes assez grands ; évitez les pastels trop clairs sur fond clair." },
  kawai: { usage: "Apps bien-être, enfant, communautés, produits doux.", bestFor: ["Bien-être","Enfant","Réseau social","E-commerce doux"], pros: ["Ambiance chaleureuse et rassurante","Tons pastel agréables","Formes rondes incarnées"], cons: ["Risque d'infantiliser","Contraste parfois mou","Peu adapté à du contenu dense"], fonts: ["Arrondi et doux (Quicksand, Comfortaa, Fredoka)"], accessibility: "Choisissez un accent assez saturé pour le texte ; préservez la taille des contrôles." },
  flat: { usage: "Produits SaaS, dashboards, sites vitrines, interfaces claires.", bestFor: ["SaaS","Dashboard","Site vitrine","Mobile"], pros: ["Clarté et lisibilité","Performance (pas d'ombre)","Très simple à mettre en œuvre"], cons: ["Peu de profondeur","Moins expressif","Nécessite des icônes soignées"], fonts: ["Sans-serif (Inter, Roboto, Helvetica)"], accessibility: "Excellente de base — le contraste est maîtrisable via la couleur d'accent." },
  min: { usage: "Portfolios, apps de lecture, produits éditoriaux, landing haut de gamme.", bestFor: ["Portfolio","Lecture","Éditorial","Premium"], pros: ["Élégance et aération","Hiérarchie claire","Met en valeur le contenu"], cons: ["Peu d'éléments — exigeant en design","Peut paraître froid","Une seule couleur d'accent"], fonts: ["Sans-serif élégante (Inter, Helvetica, Lato)"], accessibility: "Le fort contraste noir/blanc est un atout ; soignez les espacements." },
  swiss: { usage: "Éditorial, institutions, culture, data-viz, affiches.", bestFor: ["Éditorial","Culture","Data-viz","Affiche"], pros: ["Rigueur et clarté","Grille et typographie fortes","Très lisible"], cons: ["Peut être austère","Moins « chaleureux »","Exige une vraie maîtrise de la grille"], fonts: ["Grotesque (Helvetica, Inter, Roboto)"], accessibility: "Très bon de base ; respectez les tailles et graisses hiérarchisées." },
  brut: { usage: "Portfolio créatif, campagne marketing, app « hype », événements.", bestFor: ["Portfolio","Campagne","Événement","App hype"], pros: ["Personnalité et audace","Ombres dures sans flou","Très mémorable"], cons: ["Peut être agressif","Moins « sérieux »","Ombres dures sur tous éléments"], fonts: ["Grosse sans-serif (Archivo Black, Montserrat)"], accessibility: "Le fort contraste est bon ; évitez de flouter les ombres pour garder la signature." },
  memphis: { usage: "Sites fun, e-commerce de mode, contenus créatifs, résumés.", bestFor: ["Fun","Mode","Landing créative","Événement"], pros: ["Couleurs vives, ludique","Motifs et formes","Très reconnaissable"], cons: ["Chargé visuellement","Peut nuire à la lisibilité","Contraste secondaire à doser"], fonts: ["Ronde et vive (Baloo, Nunito, Poppins)"], accessibility: "Séparez bien texte et motifs de fond ; gardez les boutons contrastés." },
  vapor: { usage: "Gaming, musique, mode, culture pop, contenus rétro-futuristes.", bestFor: ["Gaming","Musique","Mode","Pop culture"], pros: ["Nostalgie Y2K forte","Néons et dégradés","Très identifiable"], cons: ["Peut être criard","Lisibilité du texte à surveiller","Glow à doser"], fonts: ["Techno rétro (Orbitron, Audiowide, sans-serif)"], accessibility: "Choisissez des fonds assez sombres pour que le texte reste lisible." },
  mat: { usage: "Apps Android, produits Google, interfaces riches.", bestFor: ["Android","Produit Google","App riche"], pros: ["Élévation cohérente","Motion et composants riches","Écosystème documenté"], cons: ["Besoin de suivre les tokens","Ripple et motion à implémenter","Un peu « lourd » visuellement"], fonts: ["Sans-serif (Roboto, Inter)"], accessibility: "L'élévation et l'espacement aident la hiérarchie ; les couleurs primaires sont accessibles." },
  dark: { usage: "Gaming, apps tech, dark mode par défaut, produits immersifs.", bestFor: ["Gaming","Tech","Dark mode","Immersion"], pros: ["Néon et lueur","Économise l'attention","Ambiance tech"], cons: ["Fatigue si trop de glow","Contraste à ajuster","Peu adapté au texte long"], fonts: ["Sans-serif (Inter, Rubik)"], accessibility: "Évitez le blanc pur ; utilisez des teintes claires #e7eaf0 et limitez le glow." },
  aurora: { usage: "Landing pages, dashboards, SaaS, contenus visuels modernes.", bestFor: ["Landing","SaaS","Dashboard","Visuel"], pros: ["Fond aurore saisissant","Tuiles vitrées","Moderne et frais"], cons: ["Fond riche à équilibrer","Backdrop-filter sur mobile","Lisibilité à veiller"], fonts: ["Sans-serif (Inter, Plus Jakarta Sans)"], accessibility: "Les tuiles vitrées doivent garder un contraste suffisant ; texte blanc sur fond sombre." },
  holo: { usage: "Finance, SaaS premium, produits tech, éléments clés à mettre en avant.", bestFor: ["Finance","SaaS premium","Tech","CTA"], pros: ["Dégradés iridescents","Reflet changeant","Premium et tech"], cons: ["Animation à doser","Peut fatiguer","Accord de couleurs délicat"], fonts: ["Sans-serif (Inter, Space Grotesk)"], accessibility: "Réservez le dégradé animé aux titres/CTA ; gardez le texte en couleur stable." },
  skeuo: { usage: "Apps réalistes, jeux, interfaces de lecture, produits premium.", bestFor: ["App réaliste","Jeu","Lecture","Premium"], pros: ["Réaliste et tactile","Familiarité","Texture soignée"], cons: ["Coûteux à produire","Dense visuellement","Désuet si mal exécuté"], fonts: ["Selon la matière (serif pour le cuir, sans-serif pour le métal)"], accessibility: "Évitez les textures qui réduisent le contraste ; testez les petites tailles." },
  term: { usage: "Apps dev, intégrations CLI, documentation technique, portefeuilles geek.", bestFor: ["Dev","CLI","Doc technique","Geek"], pros: ["Esthétique console","Monospace et lueur","Très identifiable"], cons: ["Peu adapté au grand public","Monospace = moins lisible en long","Fond sombre uniquement"], fonts: ["Monospace (JetBrains Mono, Consolas)"], accessibility: "Le contraste vert/ambre sur noir est correct ; évitez les textes trop petits." },
  pix: { usage: "Games, sites rétro, communautés gaming, e-commerce arcade.", bestFor: ["Game","Rétro","Gaming","Arcade"], pros: ["Esthétique 8-bit","Bordures épaisses","Ludique"], cons: ["Angles droits partout","Peu de textes fins","Image-rendering à soigner"], fonts: ["Pixel press-start (Press Start 2P, VT323)"], accessibility: "Évitez le texte fin ; le fort contraste aide, mais les pixels fatiguent sur du long." },
  neon: { usage: "Apps nocturnes, musique, marques urbaines, ambiances électriques.", bestFor: ["Nocturne","Musique","Marque urbaine","Ambiance"], pros: ["Enseigne au néon","Glow coloré","Très mémorable"], cons: ["Glow à maîtriser","Fond quasi noir uniquement","Peu adapté au texte long"], fonts: ["Techno (Orbitron, Audiowide)"], accessibility: "Utilisez le glow sur les titres/CTA, pas sur le corps de texte." },
  mesh: { usage: "Landing pages, SaaS, produits créatifs, fonds organiques.", bestFor: ["Landing","SaaS","Créatif","Fond"], pros: ["Fond organique doux","Cartes claires lisibles","Dégradés élégants"], cons: ["Accord de taches à doser","Peut être chargé","Nécessite un bon équilibre"], fonts: ["Sans-serif (Inter, Poppins)"], accessibility: "Gardez les cartes opaques pour un texte bien lisible sur fond coloré." },
  stick: { usage: "Marques fun, réseaux sociaux, landing créatives, stickers.", bestFor: ["Fun","Social","Landing créative","Sticker"], pros: ["Autocollant ludique","Rotation et contours","Amical"], cons: ["Rotation à doser","Pas pour du sérieux","Contrainte sur l'alignement"], fonts: ["Ronde (Baloo, Fredoka, Comic Sans — avec parcimonie)"], accessibility: "Les rotations légères gardent la lisibilité ; évitez de déformer le texte." },
  paper: { usage: "Blog, notes, moodboards, marques artisanales, éditorial doux.", bestFor: ["Blog","Note","Moodboard","Artisanal"], pros: ["Fait « main »","Papier et carnet","Chaleureux"], cons: ["Moins « pro »","Contours irréguliers","Peu adapté au dense"], fonts: ["Serif + manuscrite (Caveat, Patrick Hand, Georgia)"], accessibility: "Assurez-vous que les fautes de style ne réduisent pas la lisibilité." },
  aero: { usage: "Nostalgie Y2K, produits tech rétro, niches 2000s, objets brillants.", bestFor: ["Y2K","Tech rétro","Niche 2000","Objet brillant"], pros: ["Glossy iconique","Chrome et bulles","Optimiste"], cons: ["Souvent désuet","Reflets à doser","Contraste parfois faible"], fonts: ["Sans-serif (Verdana, Trebuchet, Arial)"], accessibility: "Le reflet blanc aide les boutons ; veillez au contraste du texte." },
  acid: { usage: "Événements, mode, culture club, affiches, contenus festifs.", bestFor: ["Événement","Mode","Club","Affiche"], pros: ["Couleurs saturées","Rayures et dégradés","Énergie festive"], cons: ["Volontairement agressif","Peu de lecture longue","Contraste à équilibrer"], fonts: ["Sans-serif lourde (Archivo, Montserrat)"], accessibility: "Réservez le saturé aux titres ; le corps de texte doit rester contrasté." },
  bento: { usage: "Landing pages, dashboards, pages produits, vitrines modernes.", bestFor: ["Landing","Dashboard","Produit","Vitrine"], pros: ["Grille structurée","Tuiles arrondies","Moderne et lisible"], cons: ["Nécessite un bon contenu par tuile","Peut devenir répétitif","Sur mobile, la grille à adapter"], fonts: ["Sans-serif (Inter, Plus Jakarta Sans)"], accessibility: "Grille claire et textes contrastés ; adaptez la hiérarchie sur mobile." },
  hud: { usage: "Apps tech, jeux, tableaux de bord futuristes, projets IoT.", bestFor: ["Tech","Jeu","Dashboard futuriste","IoT"], pros: ["HUD immersive","Coins d'équerre et scanlines","Monospace scientifique"], cons: ["Très spécifique","Fond sombre uniquement","Moins lisible pour grand public"], fonts: ["Monospace techy (JetBrains Mono, Orbitron)"], accessibility: "Contraste élevé ; mais le monospace fatigue sur du long texte." },
  paint: { usage: "Art, bien-être, éducation, marques naturelles, poétique.", bestFor: ["Art","Bien-être","Éducation","Marque naturelle"], pros: ["Aquarelle douce","Formes organiques","Poétique"], cons: ["Taches à doser","Peu adapté au sérieux","Lisibilité à veiller"], fonts: ["Manuscrite + serif (Caveat, Cormorant, Nunito)"], accessibility: "Gardez les cartes opaques ; les taches restent en arrière-plan." },
  bau: { usage: "Design éditorial, affiches, institutions culturelles, logos.", bestFor: ["Éditorial","Affiche","Institution","Logo"], pros: ["Géométrie et couleurs primaires","Audace graphique","Très identitaire"], cons: ["Angles droits stricts","Peu de finesse","Contraste secondaire à équilibrer"], fonts: ["Sans-serif géométrique (Bauhaus 93, Futura, Inter)"], accessibility: "Les couleurs primaires + noir donnent un bon contraste de base." },
  noir: { usage: "Apps premium, dark mode raffiné, finance, produits de luxe.", bestFor: ["Premium","Finance","Dark mode","Luxe"], pros: ["Verre sombre élégant","Profondeur discrète","Sobre et raffiné"], cons: ["Fond très sombre","Contraste du texte à soigner","Flou coûteux sur mobile"], fonts: ["Sans-serif fine (Inter, SF Pro, Manrope)"], accessibility: "Le texte clair sur verre sombre doit rester contrasté ; évitez les gris trop bas." },
  candy: { usage: "Apps enfant, e-commerce gourmand, réseaux sociaux, produits joyeux.", bestFor: ["Enfant","E-commerce gourmand","Social","Joyeux"], pros: ["Bonbon brillant","Reflet glossy","Très accueillant"], cons: ["Sentiment enfantine","Peut vite être trop","Pastels clairs à surveiller"], fonts: ["Ronde (Baloo, Fredoka, Quicksand)"], accessibility: "Le reflet aide la perception ; choisissez des accents assez vifs pour le texte." },
  goth: { usage: "Culture, édition, mode, contenus premium, ambiance littéraire.", bestFor: ["Culture","Édition","Mode","Premium"], pros: ["Serif élégant","Or et profondeur","Raffiné et sérieux"], cons: ["Ton sombre prononcé","Peu de couleurs","Serif moins lisible en long"], fonts: ["Serif (Georgia, Garamond, EB Garamond)"], accessibility: "Le texte serif doit rester assez grand ; contraste or/fond à équilibrer." },
  retro: { usage: "Marques vintage, mode, culture pop, packaging, nostalgie 70s.", bestFor: ["Vintage","Mode","Pop culture","Packaging"], pros: ["Tons terreux chaleureux","Groovy et rond","Très nostalgique"], cons: ["Peut être daté","Couleurs désaturées","Peu moderne"], fonts: ["Sans-serif grasse (Montserrat, Archivo, Gill Sans)"], accessibility: "Les tons terreux sont mous — gardez les textes assez sombres pour le contraste." },
  game: { usage: "Plateformes gaming, esports, tournois, dashboards communautaires.", bestFor: ["Gaming","Esports","Tournoi","Communauté"], pros: ["Énergie compétitive","Grilles & néons","Identifiable"], cons: ["Fond sombre uniquement","Peut être intense","Texte long à éviter"], fonts: ["Techno/condensée (Orbitron, Chakra Petch, Rajdhani)"], accessibility: "Fonds sombres + texte clair à contraste élevé ; évitez le glow sur le corps de texte." },
  edit: { usage: "Blogs, médias, essais, newsletters, portails culturels.", bestFor: ["Blog","Média","Essai","Newsletter"], pros: ["Serif élégant","Axé contenu","Très lisible"], cons: ["Moins « fun »","Peu de couleurs","Colonnes à maîtriser"], fonts: ["Serif (Georgia, Playfair Display, EB Garamond)"], accessibility: "Excellent contraste noir/blanc ; soignez l'interligne pour le texte long." },
  iso: { usage: "Apps gamifiées, dashboards, portfolios, produits illustratifs.", bestFor: ["Gamifié","Dashboard","Portfolio","Produit"], pros: ["Relief en 3D","Tactile","Ludique"], cons: ["Ombres épaisses à doser","Peu adapté au dense","Peut paraître lourd"], fonts: ["Sans-serif (Inter, Plus Jakarta Sans)"], accessibility: "Les ombres épaisses délimitent bien les zones ; gardez un texte contrasté." }
,
  crt: { usage: "Jeux rétro, interfaces « vieil écran », hommages arcade, nostalgie CRT.", bestFor: ["Rétro","Arcade","Jeu","Nostalgie"], pros: ["Très identifiable","Scanlines & phosphore","Monospace rétro"], cons: ["Fond sombre uniquement","Monospace moins lisible en long","Glow à doser"], fonts: ["Monospace rétro (VT323, Press Start 2P, JetBrains Mono)"], accessibility: "Contraste élevé, mais monospace fatigant sur du long texte." },
  draw: { usage: "Marques artisanales, cahiers, illustrations, contenus fun.", bestFor: ["Artisanal","Cahier","Illustration","Fun"], pros: ["Fait main chaleureux","Contours organiques","Ludique"], cons: ["Peu « pro »","Rotations à doser","Pas pour du sérieux"], fonts: ["Manuscrite (Patrick Hand, Caveat, Comic Sans)"], accessibility: "Les contours irréguliers restent lisibles ; gardez le texte contrasté." },
  liquid: { usage: "Landing créatives, apps bien-être, produits organiques.", bestFor: ["Landing","Bien-être","Organique","Créatif"], pros: ["Blobs organiques","Vitré & fluide","Très moderne"], cons: ["Blobs à doser","backdrop blur sur mobile","Lisibilité à veiller"], fonts: ["Sans-serif ronde (Poppins, Nunito, Plus Jakarta Sans)"], accessibility: "Gardez les cartes assez opaques pour le texte." }
,
  glitch: { usage: "Apps digitales, tech cyber, culture internet, contenus expérimentaux.", bestFor: ["Cyber","Digital","Internet","Expérimental"], pros: ["Très identifiable","Scanlines & RGB","Énergie"], cons: ["Peu lisible en long","Fond sombre","Glitch à doser"], fonts: ["Techno (Orbitron, Chakra Petch)"], accessibility: "Décalages sur les titres uniquement ; gardez le corps de texte stable." },
  web1: { usage: "Hommages rétro, microsites, contenus nostalgiques.", bestFor: ["Rétro","Microsite","Nostalgie","Parodie"], pros: ["Très nostalgique","Bevels reconnaissables","Amusant"], cons: ["Désuet","Serif peu moderne","Peu accessible"], fonts: ["Serif (Times New Roman, Georgia)"], accessibility: "Contraste correct mais polices de réseau ; soignez les liens soulignés." },
  doodle: { usage: "Zines, carnets, illustrations, affiches graphiques.", bestFor: ["Zine","Carnet","Illustration","Affiche"], pros: ["Artisanal","Motifs & traits","Graphique"], cons: ["Monochrome","Peu adapté au dense","Peut être chargé"], fonts: ["Manuscrite (Patrick Hand, Caveat)"], accessibility: "Monochrome à fort contraste ; gardez les motifs en arrière-plan." },
  chrome: { usage: "Y2K, tech rétro, produits futuristes, mode.", bestFor: ["Y2K","Tech rétro","Futuriste","Mode"], pros: ["Métallique brillant","Réflets chrome","Glossy"], cons: ["Désuet","Reflets à doser","Contraste moyen"], fonts: ["Sans-serif (Arial, Verdana, Orbitron)"], accessibility: "Le texte doit rester foncé sur chrome clair." },
  desert: { usage: "Bien-être, nature, e-commerce de produits naturels, apps calmes.", bestFor: ["Bien-être","Nature","Produit naturel","Calme"], pros: ["Tons chauds apaisants","Chaleureux","Doux"], cons: ["Peu contrasté","Moins dynamique","Pastels mous"], fonts: ["Sans-serif (Inter, Poppins)"], accessibility: "Contrastes chauds à vérifier ; gardez le texte assez sombre." },
  play: { usage: "Apps enfants, jeux, marques fun, produits colorés.", bestFor: ["Enfant","Jeu","Marque fun","Produit"], pros: ["Couleurs vives","Ombres dures","Ludique"], cons: ["Rotation à doser","Peut être chargé","Pas pour du sérieux"], fonts: ["Ronde (Baloo, Fredoka, Nunito)"], accessibility: "Fort contraste ; les rotations légères restent lisibles." }
,
  solar: { usage: "Landing pages chaleureuses, apps créatives, voyages, soirées.", bestFor: ["Landing","Créatif","Voyage","Soirée"], pros: ["Chaleureux","Dégradés sunset","Vitré"], cons: ["Fond sombre/coloré","Texte clair à doser","Backdrop mobile"], fonts: ["Sans-serif (Inter, Plus Jakarta Sans)"], accessibility: "Texte clair sur verre ; gardez un contraste suffisant." },
  type: { usage: "Essais, poésie, contenus littéraires, journaux.", bestFor: ["Essai","Poésie","Littéraire","Journal"], pros: ["Monospace éditorial","Élégant","Axé texte"], cons: ["Monospace moins lisible en long","Fond clair","Peu de couleurs"], fonts: ["Monospace (Courier, JetBrains Mono)"], accessibility: "Monospace petit à éviter ; interligne généreux." },
  botan: { usage: "Bien-être, nature, éco, santé, mobilité douce.", bestFor: ["Bien-être","Nature","Éco","Santé"], pros: ["Vert apaisant","Organique","Fraîcheur"], cons: ["Contraste doux","Peu dynamique","Pastels"], fonts: ["Sans-serif ronde (Nunito, Poppins)"], accessibility: "Verts doux → gardez le texte assez foncé." },
  ocean: { usage: "Voyage, plongée, apps nautiques, univers marins.", bestFor: ["Voyage","Plongée","Nautique","Marin"], pros: ["Immersif","Verre bleu","Frais"], cons: ["Fond sombre","Texte sur verre","Backdrop mobile"], fonts: ["Sans-serif (Inter, Rubik)"], accessibility: "Texte clair sur verre bleu ; renforcez le contraste." },
  collage: { usage: "Fanzines, éditorial créatif, affiches, contenus handmade.", bestFor: ["Fanzine","Éditorial","Affiche","Handmade"], pros: ["Artisanal","Découpes","Graphique"], cons: ["Peu lisible en long","Rotations à doser","Dense"], fonts: ["Serif + géo (Georgia, Archivo)"], accessibility: "Découpes décoratives ; gardez le texte droit." },
  light: { usage: "Produits premium, portfolios, SaaS, notes.", bestFor: ["Premium","Portfolio","SaaS","Notes"], pros: ["Épuré","Lumineux","Haut de gamme"], cons: ["Très simple","Peu expressif","Accent limité"], fonts: ["Sans-serif (Inter, Helvetica)"], accessibility: "Excellent contraste ; soignez l'interligne." }
,
  comic: { usage: "Sites fun, jeux, marques kids, contenus super-héros.", bestFor: ["Fun","Jeu","Kids","Super-héros"], pros: ["Halftone & contours","Couleurs vives","POP !"], cons: ["Très chargé","Contours épais partout","Pas pour du sérieux"], fonts: ["Sans-serif lourde (Archivo, Montserrat)"], accessibility: "Fort contraste ; les halftones restent en fond." },
  luxe: { usage: "Finance privée, mode, produits premium, hôtellerie.", bestFor: ["Finance","Mode","Premium","Hôtellerie"], pros: ["Or & serif","Double cadre","Raffiné"], cons: ["Fond sombre uniquement","Serif moins lisible en long","Peu de couleurs"], fonts: ["Serif (Georgia, Playfair Display, EB Garamond)"], accessibility: "Contraste or/fond à équilibrer ; texte assez grand." },
  boho: { usage: "Lifestyle, artisanat, bien-être, déco.", bestFor: ["Lifestyle","Artisanat","Bien-être","Déco"], pros: ["Terreux & chaleureux","Organique","Artisanal"], cons: ["Contraste doux","Moins dynamique","Pastels"], fonts: ["Sans-serif ronde (Nunito, Poppins)"], accessibility: "Tons terreux mous ; gardez le texte assez sombre." },
  nordic: { usage: "Lifestyle, déco, bien-être, e-commerce épuré.", bestFor: ["Lifestyle","Déco","Bien-être","Épuré"], pros: ["Hygge apaisant","Pastels feutrés","Minimal"], cons: ["Peu contrasté","Peu expressif","Accent discret"], fonts: ["Sans-serif (Inter, Lato)"], accessibility: "Beaucoup de blanc ; texte assez foncé pour le contraste." },
  polaroid: { usage: "Albums, souvenirs, lifestyle, portfolios photo.", bestFor: ["Album","Souvenir","Lifestyle","Portfolio"], pros: ["Cadre blanc + tilt","Nostalgique","Organique"], cons: ["Tilt à doser","Peu adapté au dense","Serif manuscrite"], fonts: ["Serif/manuscrite (Georgia, Caveat)"], accessibility: "Cadres blancs sur fond pastel ; contraste correct." },
  cybercity: { usage: "Gaming, tech, musique, culture urbaine.", bestFor: ["Gaming","Tech","Musique","Urbain"], pros: ["Néons & grilles","Immersion","Glow"], cons: ["Fond sombre","Glow à doser","Peu lisible en long"], fonts: ["Techno (Orbitron, Chakra Petch)"], accessibility: "Fond sombre + texte clair ; limitez le glow." },
  terrazzo: { usage: "Décoration, lifestyle, e-commerce, produits artisanaux.", bestFor: ["Déco","Lifestyle","E-commerce","Artisanal"], pros: ["Éclats colorés","Minéral","Ludique"], cons: ["Fond chargé","Cartes à équilibrer","Peut distraire"], fonts: ["Sans-serif (Inter, Poppins)"], accessibility: "Éclats en arrière-plan ; cartes claires pour le texte." },
  punk: { usage: "Culture, musique, mode, contenus engagés.", bestFor: ["Culture","Musique","Mode","Engagé"], pros: ["Noir/blanc tranchant","Rouge & monospace","Subversif"], cons: ["Agressif","Monospace moins lisible","Pas accessible grand public"], fonts: ["Monospace + serif (Courier New, Archivo)"], accessibility: "Fort contraste ; monospace petit à éviter." }
,
  vhs: { usage: "Nostalgie, médias, contenus found footage, culture pop.", bestFor: ["Nostalgie","Médias","Found footage","Pop culture"], pros: ["Lignes tracking","▶ PLAY","Monospace rétro"], cons: ["Fond sombre","Monospace moins lisible","Lueur à doser"], fonts: ["Monospace (Courier, JetBrains Mono)"], accessibility: "Monospace petit à éviter ; contraste élevé souhaité." },
  news: { usage: "Médias, journaux, éditorial, portails d'information.", bestFor: ["Média","Journal","Éditorial","Information"], pros: ["Serif & colonnes","Authentique","Très lisible"], cons: ["Peu « moderne »","Peu de couleurs","Dense"], fonts: ["Serif (Georgia, Times New Roman)"], accessibility: "Excellent contraste ; soignez les colonnes." },
  riso: { usage: "Affiches, éditorial, culture, zines.", bestFor: ["Affiche","Éditorial","Culture","Zine"], pros: ["Couleurs spot","Grain & registre","Graphique"], cons: ["Peu de composants","Décalages à doser","Pas pour du dense"], fonts: ["Sans-serif + serif (Archivo, Georgia)"], accessibility: "Couleurs spot à fort contraste ; grain léger en fond." },
  frost: { usage: "Hiver, saisonnier, bien-être, produits froids.", bestFor: ["Hiver","Saisonnier","Bien-être","Produit froid"], pros: ["Verre givré","Blancs froids","Frais & calme"], cons: ["Peu contrasté","Backdrop mobile","Pastels froids"], fonts: ["Sans-serif (Inter, Poppins)"], accessibility: "Texte assez foncé sur le verre clair." },
  marble: { usage: "Produits premium, déco, architecture, matériaux.", bestFor: ["Premium","Déco","Architecture","Matériaux"], pros: ["Veinage minéral","Reflets doux","Sobre"], cons: ["Peu dynamique","Varie selon palette","Contraste à doser"], fonts: ["Sans-serif (Inter, Helvetica)"], accessibility: "Surfaces claires ; texte assez foncé." },
  racing: { usage: "Sport, auto/moto, événements, marques dynamiques.", bestFor: ["Sport","Auto/Moto","Événement","Dynamique"], pros: ["Liseré & italique","Énergie","Contrastes francs"], cons: ["Peut être chargé","Épaissit","Pas pour du sérieux"], fonts: ["Sans-serif grasse (Montserrat, Archivo)"], accessibility: "Italique grasse à garder lisible en long." },
  solarpunk: { usage: "Éco, énergie, tech durable, mobilité verte.", bestFor: ["Éco","Énergie","Tech durable","Mobilité verte"], pros: ["Vert optimiste","Lumineux","Futur durable"], cons: ["Peu contrasté","Vert à doser","Douceur"], fonts: ["Sans-serif (Inter, Plus Jakarta Sans)"], accessibility: "Verts clairs ; texte assez foncé." },
  deli: { usage: "Alimentation, e-commerce food, marques artisanales.", bestFor: ["Alimentation","Food","Artisanal","Rétro"], pros: ["Kraft & rouge","Appétissant","Rétro"], cons: ["Peu « tech »","Fond kraft","Série stre..."], fonts: ["Serif (Georgia, Playfair Display)"], accessibility: "Rouge sur kraft à fort contraste." }
,
  kintsugi: { usage: "Bien-être, art, artisanat, produits premium.", bestFor: ["Bien-être","Art","Artisanat","Premium"], pros: ["Poétique","Fissures dorées","Serein"], cons: ["Peu contrasté","Fissures à doser","Minimal"], fonts: ["Serif fin (Cormorant Garamond, EB Garamond)"], accessibility: "Tons mates ; texte assez foncé." },
  space: { usage: "Aéro, science, jeux, contenus « mission ».", bestFor: ["Aéro","Science","Jeu","Mission"], pros: ["Bleu nuit + orange","Aventureux","Identifiable"], cons: ["Fond sombre","Peu lisible en long","Glow à doser"], fonts: ["Techno/condensée (Orbitron, Archivo)"], accessibility: "Fond sombre + texte clair à fort contraste." },
  origami: { usage: "Créatif, édition, culture, papercraft.", bestFor: ["Créatif","Édition","Culture","Papercraft"], pros: ["Coins pliés","Géométrie","Artisanal"], cons: ["Angles droits","Peu adapté au dense","Plis à doser"], fonts: ["Sans-serif + serif (Archivo, Georgia)"], accessibility: "Coins pliés décoratifs ; texte droit." },
  lofi: { usage: "Bien-être, musique, podcasts, apps de focus.", bestFor: ["Bien-être","Musique","Podcast","Focus"], pros: ["Cosy & chaleureux","Feutré","Confort"], cons: ["Peu contrasté","Peu dynamique","Tons mous"], fonts: ["Sans-serif (Inter, Lato)"], accessibility: "Tons chauds doux ; texte assez foncé." },
  americana: { usage: "Nourriture, vêtements, road trip, marques vintage.", bestFor: ["Nourriture","Vêtements","Road trip","Vintage"], pros: ["Crème + rouge + denim","Étiquettes rétro","Chaleureux"], cons: ["Peu moderne","Serif largue","Rouge à doser"], fonts: ["Serif (Georgia, Playfair Display)"], accessibility: "Contraste rouge/crème à équilibrer." },
  industrial: { usage: "Architecture, design, tech brute, intérieurs.", bestFor: ["Architecture","Design","Tech brute","Intérieur"], pros: ["Béton brut","Sobre","Urbain"], cons: ["Gris morose","Peu expressif","Angles droits"], fonts: ["Sans-serif (Inter, Roboto)"], accessibility: "Gris à contraste correct ; texte assez foncé." },
  googie: { usage: "Rétro 60s, diners, motels, affiches.", bestFor: ["Rétro 60s","Diner","Motel","Affiche"], pros: ["Starbursts","Food & fun","Optimiste"], cons: ["Très rétro","Peu lisible en long","Formes rondes à doser"], fonts: ["Sans-serif ronde (Poppins, Nunito)"], accessibility: "Contrastes vifs ; texte droit." },
  shimmer: { usage: "Finance, tech premium, cosmétiques.", bestFor: ["Finance","Tech premium","Cosmétique","Premium"], pros: ["Iridescent","Reflet animé","Premium"], cons: ["Animation à doser","Peu adapté au dense","Accord délicat"], fonts: ["Sans-serif (Inter, Space Grotesk)"], accessibility: "Reflets sur titres ; corps de texte stable." }

};
/* ============================================================
   Aide-mémoire « recette » par style (règles CSS clés)
   ============================================================ */
window.DSH_RECIPE = {
  neu: ["fond = surface (même couleur)", "double ombre : claire haut-gauche / sombre bas-droite", "éléments actifs : inset shadow"],
  glass: ["rgba(255,255,255,.15) + blur(16px)", "bordure 1px rgba(255,255,255,.4)", "fond coloré derrière pour la profondeur"],
  clay: ["grand rayon 24-32px", "dégradé clair haut-gauche → foncé bas-droite", "ombre portée + reflet interne"],
  kawai: ["pastel + coins très arrondis", "ombre colorée + bords blancs", "accent assorti au pastel"],
  flat: ["aucune ombre, aucun dégradé", "formes géométriques simples", "hiérarchie par couleur / typographie"],
  min: ["beaucoup d'espace blanc", "une seule couleur d'accent", "typographie fine et espacée"],
  swiss: ["grille stricte", "sans-serif grasse, uppercase", "une couleur primaire + noir"],
  brut: ["bordure 2-3px + ombre offset 4-6px sans flou", "couleurs saturées", "interactions par déplacement"],
  memphis: ["motif de points en fond", "bordures 3px + légères rotations", "formes géo + couleurs vives"],
  vapor: ["dégradé violet/cyan", "glow néon sur texte", "reflets chromés"],
  mat: ["élévation par ombres", "bouton primaire rempli + secondaire tonal", "ripple au clic"],
  dark: ["fond très sombre", "2 couleurs néon max", "glow contrôlé"],
  aurora: ["fond radial multi-couches", "tuiles rgba(255,255,255,.08) + blur", "grille bento"],
  holo: ["dégradé 4-5 teintes", "background-clip: text", "animation lente du fond"],
  skeuo: ["dégradé qui simule la matière", "reflet + ombre interne", "bords biseautés"],
  term: ["monospace + uppercase", "accentnéon sur fond noir", "légère lueur"],
  pix: ["bordures 3-4px carrées", "ombres dures 3-6px", "grille d'arrière-plan"],
  neon: ["quasi-noir + glow", "bordure / texte néon", "boutons en outline 'pill'"],
  mesh: ["taches radiales floues", "cartes claires opaques", "titre en dégradé"],
  stick: ["bordure épaisse + ombre offset 3-4px", "rotation 1-3°", "coins très arrondis"],
  paper: ["fond papier + lignes de carnet", "border-radius irréguliers", "couleurs crayon"],
  aero: ["dégradé haut-clair → bas-sombre", "reflet blanc en haut (inset)", "boutons 'pill' brillants"],
  acid: ["couleurs saturées + rayures", "bordures 2-3px + ombre solide", "titre en dégradé"],
  bento: ["tuiles arrondies 24-28px espacées", "fond neutre + tuile accent dégradée", "une tuile hero plus grande"],
  hud: ["monospace + scanlines", "coins d'équerre (corners)", "glow cyan, bordure 1px"],
  paint: ["taches floues organiques", "border-radius asymétriques", "pastel et douceur"],
  bau: ["formes primaires + noir", "bordures 2-3px, angle droit", "motif de points"],
  noir: ["verre sombre rgba(20,20,30,.5)", "blur 18px + bordure rgba(255,255,255,.12)", "accent lumineux discret"],
  candy: ["pastel vif + blanc", "boutons très arrondis avec reflet", "ombre colorée douce"],
  goth: ["serif + or", "double cadre fin", "fond sombre profond"],
  retro: ["tons terreux", "dégradé arc-en-ciel / conic", "ombre offset + formes rondes"],
  game: ["grille néon en fond", "dégradé violet/cyan", "glow sur les éléments", "uppercase"],
  edit: ["serif + beaucoup de blanc", "un accent fort", "titres en majuscules", "bords droits"],
  iso: ["ombre décalée 3-8px", "dégradé clair → surface", "soulèvement au clic", "coins arrondis"]
,
  crt: ["scanlines en fond", "lueur phosphorescente", "monospace VT323", "reflet tube"],
  draw: ["coins irréguliers", "rotation légère", "police manuscrite", "ombre décalée"],
  liquid: ["blobs flous en fond", "carte vitrée claire", "titre dégradé", "coins très arrondis"]
,
  glitch: ["décalage RGB sur titres", "scanlines", "bordure néon", "couleurs saturées"],
  web1: ["boutons bevel", "liens soulignés", "Times New Roman", "fonds dégradés"],
  doodle: ["motif de points", "contours tremblés", "monochrome + accent", "police manuscrite"],
  chrome: ["dégradé métallique", "reflet blanc en haut", "pill chromé", "texte dégradé chrome"],
  desert: ["tons terre/sable", "formes arrondies", "ombres chaudes", "accent terracotta"],
  play: ["bordures 2-3px + ombres dures", "rotation 1°", "couleurs vives", "coins très arrondis"]
,
  solar: ["fond dégradé chaud", "cartes vitrées", "boutons en dégradé", "texte clair"],
  type: ["monospace (Courier)", "encre noire + accent", "bords droits", "ombres fines"],
  botan: ["palette verte", "formes organiques", "ombres douces", "feuilles en décor"],
  ocean: ["fond bleu océan", "verre bleuté", "reflets aqua", "bloom lumineux"],
  collage: ["bordures irrégulières", "serif + géo", "rotations légères", "ombres décalées"],
  light: ["fond blanc", "beaucoup d'espace", "grande typographie", "un seul accent"]
,
  comic: ["motif halftone en fond", "contours 2-3px noirs", "couleurs vives", "ombres dures"],
  luxe: ["fond sombre + or", "serif", "double cadre fin", "ombres profondes"],
  boho: ["palette terre", "formes organiques", "motifs discrets", "ombres douces"],
  nordic: ["pastels feutrés", "formes douces", "beaucoup de blanc", "ombres légères"],
  polaroid: ["cadre blanc épais", "léger tilt (-2° à +2°)", "ombres douces", "serif manuscrite"],
  cybercity: ["fond quasi noir", "néons cyan/rose", "grille verticale", "glow sur éléments"],
  terrazzo: ["fond en éclats (radial)", "cartes claires", "couleurs vives", "coins arrondis"],
  punk: ["noir/blanc tranchants", "accent rouge", "monospace", "rotations & collages"]
,
  vhs: ["lignes de tracking", "▶ PLAY", "monospace", "lueur rétro"],
  news: ["serif (Times)", "colonnes", "bords droits", "accent rouge"],
  riso: ["couleurs spot (2-3)", "grain léger", "décalage de registre", "bords droits"],
  frost: ["verre givré bleuté", "blancs froids", "blur léger", "palette glacée"],
  marble: ["veines (dégradés)", "reflets doux", "élégance minérale", "cartes claires"],
  racing: ["liseré coloré en haut", "typo grasse italique", "contrastes francs", "ombres dures"],
  solarpunk: ["verts + lumineux", "énergie propre", "futur optimiste", "ombres douces"],
  deli: ["papier kraft/butcher", "accents rouges", "serif inscrit", "bordures nettes"]
,
  kintsugi: ["surface céramique mate", "fissures dorées", "tons neutres", "beauté imparfaite"],
  space: ["bleu nuit", "accents orange", "badges de mission", "uppercase"],
  origami: ["coins pliés", "formes géométriques", "dégradés papier", "ombres nettes"],
  lofi: ["tons chauds feutrés", "douceur", "confort", "ombres douces"],
  americana: ["crème + rouge + denim", "étiquettes rétro", "serif", "bordures nettes"],
  industrial: ["béton/gris", "angles droits", "typo technique", "uppercase"],
  googie: ["starbursts", "formes arrondies", "couleurs diner", "chrome"],
  shimmer: ["dégradé iridescent", "reflet qui glisse", "titre brillant", "animation douce"]

};
