/* ============================================================
   UI/UX Style Gallery — logique de rendu
   ============================================================ */
(function () {
  const STYLES = window.DSH_STYLES || [];
  const CAT_LABEL = { Soft: "Douceur", Flat: "Plat & épuré", Bold: "Audacieux", Modern: "Moderne" };
  const CATS = ["Soft", "Flat", "Bold", "Modern"];
  const CAT_COLOR = { Soft: "#7c5cff", Flat: "#00c2a8", Bold: "#ff5c9d", Modern: "#00d4ff" };

  const $nav = document.getElementById("nav");
  const $title = document.getElementById("styleTitle");
  const $desc = document.getElementById("styleDesc");
  const $paletteBar = document.getElementById("paletteBar");
  const $stage = document.getElementById("stage");
  const $codePre = document.getElementById("codePre");
  const $noteBox = document.getElementById("noteBox");
  const $copyBtn = document.getElementById("copyBtn");
  const $prev = document.getElementById("prevStyle");
  const $next = document.getElementById("nextStyle");

  /* ---- Page d'accueil ---- */
  const $homeView = document.getElementById("homeView");
  const $styleView = document.getElementById("styleView");
  const $brand = document.getElementById("brandHome");
  const $homeCats = document.getElementById("homeCats");
  const $homeStart = document.getElementById("homeStart");
  const $moodView = document.getElementById("moodboardView");
  const $moodGrid = document.getElementById("moodGrid");
  const $homeMood = document.getElementById("homeMood");
  const $sortSelect = document.getElementById("sortSelect");
  const $menuToggle = document.getElementById("menuToggle");
  const $drawerScrim = document.getElementById("drawerScrim");
  function setDrawer(open) {
    document.body.classList.toggle("drawer-open", open);
    if ($menuToggle) {
      $menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      $menuToggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    }
  }
  function closeDrawer() { setDrawer(false); }
  if ($menuToggle) $menuToggle.addEventListener("click", function() { setDrawer(!document.body.classList.contains("drawer-open")); });
  if ($drawerScrim) $drawerScrim.addEventListener("click", closeDrawer);
  function showHome(on) {
    if (on) {
      compareOn = false; document.body.classList.remove("compare-active"); if (typeof $compareWrap !== "undefined" && $compareWrap) $compareWrap.hidden = true; if (typeof setCompareUI === "function") setCompareUI(false);
      $homeView.hidden = false; $moodView.hidden = true; $styleView.hidden = true;
      $nav.querySelectorAll(".nav-item").forEach(function(b){ b.classList.remove("active"); });
    } else {
      $homeView.hidden = true; $moodView.hidden = true; $styleView.hidden = false;
    }
  }
  function showMood() {
    compareOn = false; document.body.classList.remove("compare-active"); if (typeof $compareWrap !== "undefined" && $compareWrap) $compareWrap.hidden = true; if (typeof setCompareUI === "function") setCompareUI(false);
    $homeView.hidden = true; $moodView.hidden = false; $styleView.hidden = true;
    renderMoodboard();
    $nav.querySelectorAll(".nav-item").forEach(function(b){ b.classList.remove("active"); });
  }
  function renderMoodboard() {
    let html = "";
    STYLES.forEach(function(s, i) {
      const v = s.palettes[0].vars;
      const bg = (v["--sg-bg"] && v["--sg-bg"].charAt(0) === "#") ? v["--sg-bg"] : "#2a2a3a";
      const pr = v["--sg-primary"] || "#7c5cff";
      const ac = v["--sg-acc"] || "#00d4ff";
      const tx = v["--sg-text"] || "#ffffff";
      html += '<button class="mood-tile" data-i="' + i + '">';
      html += '<div class="mood-head" style="background:linear-gradient(120deg,' + bg + ',' + pr + ',' + ac + ')"><i style="background:' + pr + '"></i><i style="background:' + ac + '"></i></div>';
      html += '<div class="mood-body"><div class="mood-name">' + s.name + '</div><div class="mood-cat">' + CAT_LABEL[s.category] + '</div><div class="mood-dots">';
      [bg, pr, ac, tx].forEach(function(c){ html += '<i style="background:' + c + '"></i>'; });
      html += '</div></div></button>';
    });
    $moodGrid.innerHTML = html;
    $moodGrid.querySelectorAll(".mood-tile").forEach(function(t) {
      t.addEventListener("click", function() { closeDrawer(); current = +t.dataset.i; currentPalette = 0; showHome(false); render(); });
    });
  }
  function populateHome() {
    const styles = STYLES.length;
    const pal = STYLES.reduce(function(n, s){ return n + s.palettes.length; }, 0);
    document.getElementById("homeStyles").textContent = styles;
    document.getElementById("homePalettes").textContent = pal;
    document.getElementById("homeComponents").textContent = "~60";
    let html = '<span class="plabel">Commencer par une famille</span>';
    CATS.forEach(function(cat) {
      html += '<button class="home-cat" data-cat="' + cat + '">' + CAT_LABEL[cat] + '</button>';
    });
    $homeCats.innerHTML = html;
    $homeCats.querySelectorAll(".home-cat").forEach(function(b) {
      b.addEventListener("click", function() {
        const idx = STYLES.findIndex(function(s){ return s.category === b.dataset.cat; });
        if (idx >= 0) { closeDrawer(); current = idx; currentPalette = 0; showHome(false); render(); }
      });
    });
  }
  $brand.addEventListener("click", function(){ closeDrawer(); showHome(true); });
  $homeStart.addEventListener("click", function(){ closeDrawer(); current = 0; currentPalette = 0; showHome(false); render(); });


  let current = 0;
  let currentPalette = 0;
  let currentFont = -1;
  let currentStyleId = "";
  let darkMode = false;
  const DARK_OVERRIDES = { "--sg-bg":"#0d1117", "--sg-surface":"#161b22", "--sg-surface-2":"#1c232d", "--sg-text":"#e6edf3", "--sg-muted":"#8b98a8", "--sg-border":"rgba(255,255,255,.1)", "--sg-shadow":"0 12px 30px rgba(0,0,0,.5)" };
  function applyTheme(stageEl, p) {
    for (const k in DARK_OVERRIDES) {
      if (darkMode) stageEl.style.setProperty(k, DARK_OVERRIDES[k]);
      else stageEl.style.setProperty(k, (p && p.vars[k]) || "");
    }
  }
  const $darkToggle = document.getElementById("darkToggle");
  const $fontBar = document.getElementById("fontBar");
  const FONT_LIB = {
    "Inter": { css: "'Inter', system-ui, sans-serif", google: "Inter:wght@400;700" },
    "Nunito": { css: "'Nunito', sans-serif", google: "Nunito:wght@400;700" },
    "Quicksand": { css: "'Quicksand', sans-serif", google: "Quicksand:wght@400;700" },
    "Plus Jakarta Sans": { css: "'Plus Jakarta Sans', sans-serif", google: "Plus+Jakarta+Sans:wght@400;700" },
    "Rubik": { css: "'Rubik', sans-serif", google: "Rubik:wght@400;700" },
    "Baloo 2": { css: "'Baloo 2', sans-serif", google: "Baloo+2:wght@400;700" },
    "Fredoka": { css: "'Fredoka', sans-serif", google: "Fredoka:wght@400;700" },
    "Comfortaa": { css: "'Comfortaa', sans-serif", google: "Comfortaa:wght@400;700" },
    "Roboto": { css: "'Roboto', sans-serif", google: "Roboto:wght@400;700" },
    "Helvetica": { css: "'Helvetica', 'Arial', sans-serif" },
    "Arial": { css: "'Arial', sans-serif" },
    "Lato": { css: "'Lato', sans-serif", google: "Lato:wght@400;700" },
    "Archivo": { css: "'Archivo', sans-serif", google: "Archivo:wght@400;700" },
    "Montserrat": { css: "'Montserrat', sans-serif", google: "Montserrat:wght@400;700" },
    "Poppins": { css: "'Poppins', sans-serif", google: "Poppins:wght@400;700" },
    "Orbitron": { css: "'Orbitron', sans-serif", google: "Orbitron:wght@400;700" },
    "Audiowide": { css: "'Audiowide', sans-serif", google: "Audiowide" },
    "Space Grotesk": { css: "'Space Grotesk', sans-serif", google: "Space+Grotesk:wght@400;700" },
    "Georgia": { css: "'Georgia', serif" },
    "EB Garamond": { css: "'EB Garamond', serif", google: "EB+Garamond:wght@400;700" },
    "Cormorant Garamond": { css: "'Cormorant Garamond', serif", google: "Cormorant+Garamond:wght@400;700" },
    "JetBrains Mono": { css: "'JetBrains Mono', monospace", google: "JetBrains+Mono:wght@400;700" },
    "Consolas": { css: "'Consolas', monospace" },
    "Press Start 2P": { css: "'Press Start 2P', monospace", google: "Press+Start+2P" },
    "VT323": { css: "'VT323', monospace", google: "VT323" },
    "Caveat": { css: "'Caveat', cursive", google: "Caveat:wght@400;700" },
    "Patrick Hand": { css: "'Patrick Hand', cursive", google: "Patrick+Hand" },
    "Verdana": { css: "'Verdana', sans-serif" },
    "Trebuchet MS": { css: "'Trebuchet MS', sans-serif" },
    "Manrope": { css: "'Manrope', sans-serif", google: "Manrope:wght@400;700" },
    "Gill Sans": { css: "'Gill Sans', 'Trebuchet MS', sans-serif" },
    "Playfair Display": { css: "'Playfair Display', serif", google: "Playfair+Display:wght@400;700" }
  };
  const FONT_OPTIONS = {
    neu: ["Nunito", "Quicksand", "Inter"], glass: ["Inter", "Plus Jakarta Sans", "Rubik"],
    clay: ["Baloo 2", "Fredoka", "Quicksand"], kawai: ["Quicksand", "Comfortaa", "Fredoka"],
    flat: ["Inter", "Roboto", "Helvetica"], min: ["Inter", "Helvetica", "Lato"],
    swiss: ["Helvetica", "Inter", "Roboto"], brut: ["Archivo", "Montserrat"],
    memphis: ["Baloo 2", "Nunito", "Poppins"], vapor: ["Orbitron", "Audiowide"],
    mat: ["Roboto", "Inter"], dark: ["Inter", "Rubik"],
    aurora: ["Inter", "Plus Jakarta Sans"], holo: ["Inter", "Space Grotesk"],
    skeuo: ["Georgia", "EB Garamond", "Cormorant Garamond"], term: ["JetBrains Mono", "Consolas"],
    pix: ["Press Start 2P", "VT323"], neon: ["Orbitron", "Audiowide"],
    mesh: ["Inter", "Poppins"], stick: ["Baloo 2", "Fredoka"],
    paper: ["Caveat", "Patrick Hand", "Georgia"], aero: ["Verdana", "Trebuchet MS", "Arial"],
    acid: ["Archivo", "Montserrat"], bento: ["Inter", "Plus Jakarta Sans"],
    hud: ["JetBrains Mono", "Orbitron"], paint: ["Caveat", "Cormorant Garamond", "Nunito"],
    bau: ["Archivo", "Inter", "Montserrat"], noir: ["Inter", "Manrope", "Space Grotesk"],
    candy: ["Baloo 2", "Fredoka", "Quicksand"], goth: ["Georgia", "EB Garamond", "Cormorant Garamond"],
    retro: ["Montserrat", "Archivo", "Gill Sans"],
    game: ["Orbitron", "Archivo", "Montserrat"],
    edit: ["Georgia", "EB Garamond", "Cormorant Garamond"],
    iso: ["Inter", "Plus Jakarta Sans", "Space Grotesk"],
    crt: ["VT323", "JetBrains Mono", "Press Start 2P"],
    draw: ["Caveat", "Patrick Hand", "Nunito"],
    liquid: ["Poppins", "Nunito", "Plus Jakarta Sans"],
    glitch: ["Orbitron", "Archivo", "Montserrat"],
    web1: ["Georgia", "EB Garamond", "Cormorant Garamond"],
    doodle: ["Patrick Hand", "Caveat", "Nunito"],
    chrome: ["Orbitron", "Arial", "Archivo"],
    desert: ["Inter", "Poppins", "Plus Jakarta Sans"],
    play: ["Baloo 2", "Fredoka", "Nunito"],
    solar: ["Inter", "Plus Jakarta Sans", "Poppins"],
    type: ["JetBrains Mono", "Consolas", "VT323"],
    botan: ["Nunito", "Poppins", "Plus Jakarta Sans"],
    ocean: ["Inter", "Rubik", "Plus Jakarta Sans"],
    collage: ["Georgia", "Archivo", "EB Garamond"],
    light: ["Inter", "Helvetica", "Space Grotesk"],
    comic: ["Archivo", "Montserrat"],
    luxe: ["Georgia", "EB Garamond", "Cormorant Garamond"],
    boho: ["Nunito", "Poppins", "Plus Jakarta Sans"],
    nordic: ["Inter", "Lato", "Nunito"],
    polaroid: ["Georgia", "Caveat", "Patrick Hand"],
    cybercity: ["Orbitron", "Archivo", "Montserrat"],
    terrazzo: ["Inter", "Poppins", "Plus Jakarta Sans"],
    punk: ["JetBrains Mono", "Consolas", "Archivo"],
    vhs: ["JetBrains Mono", "Consolas", "VT323"],
    news: ["Georgia", "EB Garamond", "Cormorant Garamond"],
    riso: ["Archivo", "Georgia", "Montserrat"],
    frost: ["Inter", "Poppins", "Plus Jakarta Sans"],
    marble: ["Inter", "Helvetica", "Space Grotesk"],
    racing: ["Montserrat", "Archivo", "Orbitron"],
    solarpunk: ["Inter", "Plus Jakarta Sans", "Poppins"],
    deli: ["Georgia", "EB Garamond", "Cormorant Garamond"],
    kintsugi: ["Cormorant Garamond", "EB Garamond", "Georgia"],
    space: ["Orbitron", "Archivo", "Montserrat"],
    origami: ["Archivo", "Georgia", "Montserrat"],
    lofi: ["Inter", "Lato", "Nunito"],
    americana: ["Georgia", "Playfair Display", "EB Garamond"],
    industrial: ["Inter", "Roboto", "Archivo"],
    googie: ["Poppins", "Nunito", "Baloo 2"],
    shimmer: ["Inter", "Space Grotesk", "Plus Jakarta Sans"]
  };
  const loadedFonts = {};

  function fontCss(name) {
    if (FONT_LIB[name]) return FONT_LIB[name].css;
    return "'" + name + "', sans-serif";
  }
  function ensureFont(name) {
    const g = FONT_LIB[name] && FONT_LIB[name].google;
    if (!g || loadedFonts[g]) return;
    loadedFonts[g] = true;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=" + g + "&display=swap";
    const head = document.head || document.getElementsByTagName("head")[0];
    if (head) head.appendChild(link);
  }
  function renderFonts(s) {
    const names = (FONT_OPTIONS[s.id] || []).slice(0, 5);
    let html = '<span class="plabel">Police</span>';
    html += '<button class="palette' + (currentFont === -1 ? " active" : "") + '" data-f="-1">Par défaut</button>';
    names.forEach(function(n, i) {
      html += '<button class="palette' + (currentFont === i ? " active" : "") + '" data-f="' + i + '" style="font-family:' + fontCss(n) + '">' + n + '</button>';
    });
    $fontBar.innerHTML = html;
    $fontBar.querySelectorAll(".palette").forEach(function(b) {
      b.addEventListener("click", function() {
        currentFont = parseInt(b.dataset.f, 10);
        renderFonts(STYLES[current]);
        applyFont(STYLES[current]);
      });
    });
  }
  function applyFont(s) {
    if (currentFont === -1) { $stage.style.fontFamily = ""; return; }
    const names = (FONT_OPTIONS[s.id] || []);
    const n = names[currentFont];
    if (!n) return;
    ensureFont(n);
    $stage.style.fontFamily = fontCss(n);
  }

  /* (fonction de contraste WCAG retirée) */

  /* ---- Palette personnalisée ---- */
  let customOpen = false;
  let customBase = null;
  let customKey = "";
  const $customPanel = document.getElementById("customPanel");
  const $customToggle = document.getElementById("customToggle");
  function isColorVal(v) {
    if (typeof v !== "string") return false;
    v = v.trim();
    return v.charAt(0) === "#" || v.indexOf("rgb(") === 0 || v.indexOf("rgba(") === 0;
  }
  function toHex(c) {
    const rgb = colorToRgb(c);
    if (!rgb) return "#000000";
    function h(x){ x=Math.round(x); let s=x.toString(16); return s.length===1?"0"+s:s; }
    return "#" + h(rgb[0]) + h(rgb[1]) + h(rgb[2]);
  }
  function captureCustomBase(s, pIdx) {
    const key = s.id + ":" + pIdx;
    if (key !== customKey) {
      customKey = key;
      try { customBase = JSON.parse(JSON.stringify(s.palettes[pIdx].vars)); } catch(e) { customBase = null; }
    }
  }
  function renderCustom(s, p) {
    if (!customOpen || !p) { $customPanel.hidden = true; return; }
    let items = "";
    for (const k in p.vars) {
      if (!isColorVal(p.vars[k])) continue;
      items += '<label class="cp-item"><span>' + k.replace("--sg-", "") + '</span><input type="color" data-var="' + k + '" value="' + toHex(p.vars[k]) + '" /></label>';
    }
    let extras = "";
    if (p.vars["--sg-radius"]) {
      const rd = parseInt(p.vars["--sg-radius"], 10) || 16;
      extras += '<label class="cp-item"><span>--sg-radius</span><input type="range" class="cp-range" data-var="--sg-radius" min="0" max="32" value="' + rd + '" />' + rd + 'px</label>';
    }
    const saved = getCustomSaved(s.id);
    let html = '<div class="cp-title">Palette personnalisée — cliquez puis ajustez</div><div class="cp-grid">' + items + extras + '</div>';
    html += '<div class="cp-btns"><button class="chip cp-reset" id="customReset">↺ Réinitialiser</button>';
    html += '<button class="chip" id="customSave">💾 Sauvegarder</button>';
    if (saved) html += '<button class="chip" id="customLoad">📂 Charger sauvegardée</button>';
    html += '</div>';
    $customPanel.innerHTML = html;
    $customPanel.querySelectorAll("input[type=color]").forEach(function(inp) {
      inp.addEventListener("input", function() { const k = inp.dataset.var; p.vars[k] = inp.value; $stage.style.setProperty(k, inp.value); });
    });
    const range = $customPanel.querySelector(".cp-range");
    if (range) range.addEventListener("input", function() { const k = range.dataset.var; const val = range.value + "px"; p.vars[k] = val; $stage.style.setProperty(k, val); });
    const reset = $customPanel.querySelector("#customReset");
    if (reset) reset.addEventListener("click", function() {
      if (!customBase) return;
      const pl = STYLES[current].palettes[currentPalette];
      for (const k in customBase) pl.vars[k] = customBase[k];
      applyPalette(STYLES[current], currentPalette); renderCustom(STYLES[current], pl);
    });
    const save = $customPanel.querySelector("#customSave");
    if (save) save.addEventListener("click", function() {
      try { localStorage.setItem("sg_custom_" + s.id, JSON.stringify(p.vars)); save.textContent = "✓ Sauvegardée"; } catch (e) {}
    });
    const load = $customPanel.querySelector("#customLoad");
    if (load) load.addEventListener("click", function() {
      const sv = getCustomSaved(s.id); if (!sv) return;
      for (const k in sv) p.vars[k] = sv[k];
      applyPalette(STYLES[current], currentPalette); renderCustom(STYLES[current], p);
    });
  }
  function getCustomSaved(id) {
    try { const v = localStorage.getItem("sg_custom_" + id); return v ? JSON.parse(v) : null; } catch (e) { return null; }
  }
  
  $customToggle.addEventListener("click", function() {
    customOpen = !customOpen;
    $customPanel.hidden = !customOpen;
    if (customOpen) { captureCustomBase(STYLES[current], currentPalette); renderCustom(STYLES[current], STYLES[current].palettes[currentPalette]); }
  });

  /* ---- Mode comparaison (multi-panneaux) ---- */
  let compareOn = false;
  const MAX_PANELS = 4;
  let comparePanels = [{ sel: 0, pal: 0, font: -1 }, { sel: 3, pal: 0, font: -1 }];
  const $compareWrap = document.getElementById("compareWrap");
  const $compareToggle = document.getElementById("compareToggle");
  const $compareExit = document.getElementById("compareExit");
  const $compareLabel = document.getElementById("compareLabel");
  const $compareAdd = document.getElementById("compareAdd");

  function miniPalette(barEl, st, active, onPick) {
    let html = '<span class="plabel">Palette</span>';
    st.palettes.forEach(function(p, i) {
      const colors = [p.vars["--sg-primary"], p.vars["--sg-acc"], p.vars["--sg-text"]].map(paletteSwatch).filter(Boolean);
      const sw = colors.map(function(c){ return '<i style="background:' + c + '"></i>'; }).join("");
      html += '<button class="palette' + (i === active ? " active" : "") + '" data-p="' + i + '"><span class="swatches">' + sw + '</span>' + p.name + '</button>';
    });
    barEl.innerHTML = html;
    barEl.querySelectorAll(".palette").forEach(function(b) { b.addEventListener("click", function(){ onPick(+b.dataset.p); }); });
  }
  function miniFont(barEl, st, active, onPick) {
    let html = '<span class="plabel">Police</span>';
    html += '<button class="palette' + (active === -1 ? " active" : "") + '" data-f="-1">Par défaut</button>';
    const names = (FONT_OPTIONS[st.id] || []).slice(0, 5);
    names.forEach(function(n, i) {
      html += '<button class="palette' + (active === i ? " active" : "") + '" data-f="' + i + '" style="font-family:' + fontCss(n) + '">' + n + '</button>';
    });
    barEl.innerHTML = html;
    barEl.querySelectorAll(".palette").forEach(function(b) { b.addEventListener("click", function(){ onPick(parseInt(b.dataset.f, 10)); }); });
  }
  function panelColumn(i) {
    return '<div class="compare-col" data-cmp="' + i + '">' +
      '<div class="compare-head"><span class="cmp-name">—</span><select class="compare-select cmp-select"></select><button class="cmp-del" data-del="' + i + '" title="Retirer ce panneau">×</button></div>' +
      '<div class="palette-bar cmp-pal"></div>' +
      '<div class="palette-bar cmp-font"></div>' +
      '<div class="stage"><div class="style-out cmp-stage"></div></div>' +
    '</div>';
  }
  function renderComparePanel(i) {
    const panel = comparePanels[i];
    const st = STYLES[panel.sel];
    const p = st.palettes[panel.pal];
    const col = $compareWrap.querySelector('[data-cmp="' + i + '"]');
    if (!col) return;
    const stageEl = col.querySelector(".cmp-stage");
    const palBar = col.querySelector(".cmp-pal");
    const fontBar = col.querySelector(".cmp-font");
    const head = col.querySelector(".cmp-name");
    stageEl.setAttribute("data-style", st.id);
    for (const [k, v] of Object.entries(p.vars)) stageEl.style.setProperty(k, v);
    stageEl.innerHTML = components(st.p, st.flavor);
    applyTheme(stageEl, p);
    if (panel.font !== -1) { const n = (FONT_OPTIONS[st.id] || [])[panel.font]; if (n) { ensureFont(n); stageEl.style.fontFamily = fontCss(n); } } else stageEl.style.fontFamily = "";
    if (head) head.textContent = (i + 1) + " · " + st.name;
    miniPalette(palBar, st, panel.pal, function(idx){ comparePanels[i].pal = idx; renderComparePanel(i); renderCompareDossier(); });
    miniFont(fontBar, st, panel.font, function(idx){ comparePanels[i].font = idx; renderComparePanel(i); renderCompareDossier(); });
  }
  function renderComparePanels() {
    let html = "";
    for (let i = 0; i < comparePanels.length; i++) html += panelColumn(i);
    $compareWrap.innerHTML = html;
    let opts = "";
    STYLES.forEach(function(st, i) { opts += '<option value="' + i + '">' + st.name + '</option>'; });
    $compareWrap.querySelectorAll(".cmp-select").forEach(function(sel) {
      const i = +sel.closest("[data-cmp]").dataset.cmp;
      sel.innerHTML = opts;
      sel.value = String(comparePanels[i].sel);
      sel.addEventListener("change", function(){ comparePanels[i].sel = +sel.value; comparePanels[i].pal = 0; comparePanels[i].font = -1; renderComparePanel(i); renderCompareDossier(); });
    });
    $compareWrap.querySelectorAll(".cmp-del").forEach(function(btn) {
      btn.addEventListener("click", function(){ removeComparePanel(+btn.dataset.del); });
    });
    for (let i = 0; i < comparePanels.length; i++) renderComparePanel(i);
    $compareAdd.hidden = comparePanels.length >= MAX_PANELS;
  }
  function renderCompareDossier() {
    const styles = comparePanels.map(function(pp){ return STYLES[pp.sel]; });
    const metas = styles.map(function(st){ return (window.DSH_META || {})[st.id] || {}; });
    const recipes = styles.map(function(st){ return (window.DSH_RECIPE || {})[st.id] || []; });
    const tags = function(meta){ return (meta.bestFor || []).map(function(t){ return '<span class="note-tag">' + t + '</span>'; }).join(''); };
    const list = function(o){ return '<ul class="cmp-ul' + (o.cls ? ' ' + o.cls : '') + '">' + (o.val || []).map(function(t){ return '<li>' + t + '</li>'; }).join('') + '</ul>'; };
    const chips = function(r){ return '<div class="recipe-list">' + r.map(function(t){ return '<code class="code-chip">' + t + '</code>'; }).join('') + '</div>'; };
    const rows = [
      ["Catégorie", styles.map(function(st){ return st.category; })],
      ["Cas d'usage", metas.map(function(m){ return m.usage || '—'; })],
      ["Idéal pour", metas.map(function(m){ return tags(m) || '—'; })],
      ["Points forts", metas.map(function(m){ return list({cls:"note-pros", val:m.pros}); })],
      ["Points de vigilance", metas.map(function(m){ return list({cls:"note-cons", val:m.cons}); })],
      ["Typographie recommandée", metas.map(function(m){ return list({cls:"", val:m.fonts}); })],
      ["Accessibilité", metas.map(function(m){ return m.accessibility || '—'; })],
      ["La recette", recipes.map(chips)],
      ["Palettes disponibles", styles.map(function(st){ return st.palettes.length; })]
    ];
    let html = '<div class="cmp-title">📊 Comparatif des ' + styles.length + ' styles</div><table class="compare-table"><thead><tr><th>Critère</th>' + styles.map(function(st, i){ return '<th>' + (i + 1) + ' · ' + st.name + '</th>'; }).join('') + '</tr></thead><tbody>';
    rows.forEach(function(row){ html += '<tr><th>' + row[0] + '</th>' + row[1].map(function(c){ return '<td>' + c + '</td>'; }).join('') + '</tr>'; });
    html += '</tbody></table>';
    html = '<div class="compare-table-scroll">' + html + '</div>';
    $noteBox.innerHTML = html;
  }
  function setCompareUI(on) {
    $compareToggle.style.display = on ? "none" : "inline-flex";
    $compareExit.style.display = on ? "inline-flex" : "none";
    $compareLabel.style.display = on ? "inline-flex" : "none";
    $compareAdd.style.display = on ? "inline-flex" : "none";
  }
  function enterCompare() {
    compareOn = true;
    document.body.classList.add("compare-active");
    $compareWrap.hidden = false;
    setCompareUI(true);
    comparePanels = [ { sel: current, pal: currentPalette, font: currentFont } ];
    const dSel = STYLES.findIndex(function(x){ return x.id === "dark"; });
    let bSel = (dSel >= 0 && dSel !== current) ? dSel : (current + 1) % STYLES.length;
    comparePanels.push({ sel: bSel, pal: 0, font: -1 });
    renderComparePanels();
    renderCompareDossier();
    const mn = document.querySelector(".main");
    if (mn && mn.scrollIntoView) mn.scrollIntoView({ behavior: "smooth" });
  }
  function exitCompare() {
    compareOn = false;
    document.body.classList.remove("compare-active");
    $compareWrap.hidden = true;
    setCompareUI(false);
    render();
  }
  function addComparePanel() {
    if (comparePanels.length >= MAX_PANELS) return;
    const used = comparePanels.map(function(p){ return p.sel; });
    let sel = 0;
    for (let k = 0; k < STYLES.length; k++) {
      const cand = (comparePanels[comparePanels.length - 1].sel + k) % STYLES.length;
      if (!used.includes(cand)) { sel = cand; break; }
    }
    comparePanels.push({ sel: sel, pal: 0, font: -1 });
    renderComparePanels();
    renderCompareDossier();
  }
  function removeComparePanel(i) {
    if (comparePanels.length <= 2) return;
    comparePanels.splice(i, 1);
    renderComparePanels();
    renderCompareDossier();
  }
  $compareToggle.addEventListener("click", function() { if (compareOn) exitCompare(); else enterCompare(); });
  $compareExit.addEventListener("click", exitCompare);
  $compareAdd.addEventListener("click", addComparePanel);


  /* ---- Template des composants (structure partagée, thème par style) ---- */
function components(p, flavor) {
    return `
      <span class="sg-decor ${p}-decor ${p}-decor-a"></span>
      <span class="sg-decor ${p}-decor ${p}-decor-b"></span>
      <div class="sg-grid">
        <div class="sg-card ${p}-card">
          <div class="sg-cardtop">
            <div class="sg-avatar ${p}-avatar">${flavor[0]}</div>
            <div class="sg-meta">
              <div class="sg-title ${p}-title">Carte composant</div>
              <span class="sg-badge ${p}-badge">${flavor}</span>
            </div>
          </div>
          <p class="sg-text ${p}-text">Un aperçu complet : boutons, formulaire, interrupteur, contrôles, listes et stats — le tout stylé en « ${flavor} ».</p>
          <div class="sg-row">
            <button class="sg-btn ${p}-btn ${p}-btn-primary">Valider</button>
            <button class="sg-btn ${p}-btn ${p}-btn-ghost">Annuler</button>
          </div>
          <div class="sg-field">
            <label class="sg-label">Adresse e-mail</label>
            <input class="sg-input ${p}-input" placeholder="vous@exemple.fr" />
          </div>
          <div class="sg-row sg-between">
            <span class="sg-text sg-muted">Notifications</span>
            <label class="sg-switch ${p}-switch"><input type="checkbox" checked><span></span></label>
          </div>
          <div class="sg-row sg-between">
            <span class="sg-text sg-muted">Volume</span>
            <input type="range" class="sg-slider" min="0" max="100" value="60" />
          </div>
          <div class="sg-progress ${p}-progress"><div class="sg-fill" style="width:72%"></div></div>
          <div class="sg-row">
            <span class="sg-chip ${p}-chip">#design</span>
            <span class="sg-chip ${p}-chip">#uiux</span>
            <span class="sg-chip ${p}-chip">#frontend</span>
          </div>
        </div>
        <div class="sg-card sg-accent-card ${p}-accent-card">
          <div class="sg-num">128</div>
          <p class="sg-text">Membres actifs ce mois-ci</p>
          <div class="sg-stat-row">
            <div class="sg-stat"><b>98%</b><span>Satisfaction</span></div>
            <div class="sg-stat"><b>4.9</b><span>Note</span></div>
          </div>
        </div>
      </div>

      <div class="sg-grid">
        <div class="sg-card ${p}-card">
          <div class="sg-block-title">Contrôles</div>
          <div class="sg-tabs">
            <button class="sg-tab is-active">Aperçu</button>
            <button class="sg-tab">Composants</button>
            <button class="sg-tab">Code</button>
          </div>
          <div class="sg-toggles">
            <span class="sg-toggle is-on">Jour</span>
            <span class="sg-toggle">Nuit</span>
            <span class="sg-toggle">Auto</span>
          </div>
          <div class="sg-choices">
            <label class="sg-check"><input type="checkbox" checked><span class="sg-box"></span>Activer l&apos;option</label>
            <label class="sg-radio"><input type="radio" name="g1" checked><span class="sg-box"></span>Standard</label>
            <label class="sg-radio"><input type="radio" name="g1"><span class="sg-box"></span>Avancé</label>
          </div>
          <label class="sg-label">Langue</label>
          <select class="sg-select"><option>Français</option><option>English</option><option>Español</option></select>
        </div>

        <div class="sg-card ${p}-card">
          <div class="sg-block-title">Boutons &amp; états</div>
          <div class="sg-row">
            <button class="sg-btn ${p}-btn ${p}-btn-primary">Valider</button>
            <button class="sg-btn ${p}-btn ${p}-btn-ghost">Annuler</button>
            <button class="sg-btn-icon ${p}-btn-icon">+</button>
            <button class="sg-btn-icon sg-btn-icon-primary">✦</button>
          </div>
          <div class="sg-row">
            <button class="sg-btn ${p}-btn ${p}-btn-primary" disabled>Désactivé</button>
            <span class="sg-tag">Nouveau</span>
          </div>
          <div class="sg-list">
            <div class="sg-list-item"><span class="sg-li-dot" style="background:var(--sg-primary)"></span><span class="sg-li-text">Synchronisé</span><span class="sg-li-time">OK</span></div>
            <div class="sg-list-item"><span class="sg-li-dot" style="background:var(--sg-acc)"></span><span class="sg-li-text">Version à jour</span><span class="sg-li-time">v2.3</span></div>
          </div>
        </div>
      </div>

      <div class="sg-grid">
        <div class="sg-card ${p}-card">
          <div class="sg-block-title">Liste &amp; notifications</div>
          <div class="sg-list">
            <div class="sg-list-item"><span class="sg-li-dot" style="background:var(--sg-acc)"></span><span class="sg-li-text">Tâche terminée</span><span class="sg-li-time">maintenant</span></div>
            <div class="sg-list-item"><span class="sg-li-dot" style="background:var(--sg-primary)"></span><span class="sg-li-text">Nouveau message</span><span class="sg-li-time">il y a 2 min</span></div>
            <div class="sg-list-item"><span class="sg-li-dot" style="background:#ffb45c"></span><span class="sg-li-text">Maintenance prévue</span><span class="sg-li-time">il y a 1 h</span></div>
          </div>
          <div class="sg-alert sg-alert-info"><b>Info</b>&nbsp;— Synchronisation effectuée.</div>
          <div class="sg-alert sg-alert-warn"><b>Attention</b>&nbsp;— Solde faible.</div>
        </div>
        <div class="sg-card ${p}-card">
          <div class="sg-block-title">Communauté &amp; stats</div>
          <div class="sg-avstack">
            <span class="sg-av">M</span><span class="sg-av">J</span><span class="sg-av">A</span><span class="sg-av">S</span><span class="sg-more">+9</span>
          </div>
          <div class="sg-kpis">
            <div class="sg-kpi"><div class="sg-kpi-num">1 240</div><div class="sg-kpi-label">Membres</div></div>
            <div class="sg-kpi sg-kpi-acc"><div class="sg-kpi-num">98%</div><div class="sg-kpi-label">Satisfaction</div></div>
          </div>
          <div class="sg-toast">✓ Modifications enregistrées</div>
        </div>
      </div>

      <div class="sg-section-title">Maquette de page</div>
      <div class="sg-page">
        <div class="sg-nav">
          <span class="sg-logo"><i></i>Studio ${flavor}</span>
          <div class="sg-navlinks">
            <a class="on">Accueil</a><a>Produits</a><a>Tarifs</a><a>Contact</a>
            <button class="sg-btn ${p}-btn ${p}-btn-primary" style="padding:8px 14px">Essayer</button>
          </div>
        </div>
        <div class="sg-hero">
          <div class="sg-hero-title">Créez des interfaces qui marquent</div>
          <p class="sg-hero-sub">Choisissez votre direction artistique : douceur, verre, néon, papier — et gardez le contrôle sur chaque détail.</p>
          <div class="sg-hero-actions">
            <button class="sg-btn ${p}-btn ${p}-btn-primary">Commencer</button>
            <button class="sg-btn ${p}-btn ${p}-btn-ghost" style="color:#fff;border-color:rgba(255,255,255,.5)">Voir la démo</button>
          </div>
        </div>
        <div class="sg-pricing">
          <div class="sg-price-card">
            <div class="sg-price-title">Starter</div>
            <div class="sg-price-num">0&nbsp;<span>/ mois</span></div>
            <ul class="sg-price-list"><li>✓ 1 projet</li><li>✓ Composants de base</li><li>✓ Support communautaire</li></ul>
            <button class="sg-btn ${p}-btn ${p}-btn-ghost" style="width:100%">Choisir</button>
          </div>
          <div class="sg-price-card hot">
            <div class="sg-price-title">Pro</div>
            <div class="sg-price-num">19&nbsp;<span>/ mois</span></div>
            <ul class="sg-price-list"><li>✓ Projets illimités</li><li>✓ Tous les styles</li><li>✓ Support prioritaire</li></ul>
            <button class="sg-btn ${p}-btn ${p}-btn-primary" style="width:100%">Choisir</button>
          </div>
        </div>
        <div class="sg-footer"><span>© 2025 Studio ${flavor}</span><span>Mentions légales · Confidentialité</span></div>
      </div>

      <div class="sg-section-title">Composants avancés</div>
      <div class="sg-grid">
        <div class="sg-card ${p}-card">
          <div class="sg-block-title">Navigation &amp; hiérarchie</div>
          <div class="sg-breadcrumb"><a>Accueil</a> › <a>Produits</a> › <b>Composants</b></div>
          <div class="sg-stepper">
            <span class="sg-step done">✓</span><div class="sg-step-line"></div>
            <span class="sg-step active">2</span><div class="sg-step-line"></div>
            <span class="sg-step">3</span>
          </div>
          <table class="sg-table">
            <thead><tr><th>Ressource</th><th>Statut</th><th>Note</th></tr></thead>
            <tbody>
              <tr><td>Design système</td><td>✓ Prêt</td><td>5.0</td></tr>
              <tr><td>Documentation</td><td>En cours</td><td>4.6</td></tr>
              <tr><td>Tests d'accessibilité</td><td>À faire</td><td>—</td></tr>
            </tbody>
          </table>
        </div>
        <div class="sg-card ${p}-card">
          <div class="sg-block-title">Choix &amp; validation</div>
          <div class="sg-dropdown">
            <button class="sg-dropdown-btn">Plan Pro <span>▾</span></button>
            <div class="sg-dropdown-menu">
              <div class="sg-dropdown-item"><span class="sg-dot" style="background:var(--sg-primary)"></span>Débutant</div>
              <div class="sg-dropdown-item"><span class="sg-dot" style="background:var(--sg-acc)"></span>Intermédiaire</div>
              <div class="sg-dropdown-item"><span class="sg-dot" style="background:#ffb45c"></span>Avancé</div>
            </div>
          </div>
          <div class="sg-field">
            <label class="sg-label">E-mail</label>
            <input class="sg-input ${p}-input valid" value="bonjour@exemple.fr" />
            <div class="sg-okmsg">✓ Adresse valide</div>
          </div>
          <div class="sg-field">
            <label class="sg-label">Code postal</label>
            <input class="sg-input ${p}-input invalid" value="12" />
            <div class="sg-err">Saisissez 5 chiffres.</div>
          </div>
          <div class="sg-row">
            <span class="sg-tooltip-wrap"><span class="sg-btn ${p}-btn ${p}-btn-ghost" style="padding:8px 12px">Survoler</span><span class="sg-tooltip">Exemple de bulle</span></span>
            <span class="sg-tag">Nouveau</span>
          </div>
        </div>
        <div class="sg-card ${p}-card">
          <div class="sg-block-title">Retour visuel &amp; états</div>
          <div class="sg-row">
            <span class="sg-avatar-status">A<i class="on"></i></span>
            <span class="sg-avatar-status">B<i class="off"></i></span>
            <span class="sg-rating">★★★★★</span>
          </div>
          <div class="sg-skeleton" style="height:14px;width:80%;margin-bottom:8px"></div>
          <div class="sg-skeleton" style="height:14px;width:60%;margin-bottom:14px"></div>
          <div class="sg-empty"><b>🗂</b>Aucune donnée pour le moment.</div>
        </div>
        <div class="sg-card ${p}-card">
          <div class="sg-block-title">Fenêtre modale</div>
          <div class="sg-modal">
            <button class="sg-modal-x">×</button>
            <div class="sg-title" style="margin-bottom:8px">Confirmer l&apos;action</div>
            <p class="sg-text" style="margin-bottom:14px">Cette action est irréversible. Voulez-vous continuer ?</p>
            <div class="sg-row" style="margin-bottom:0">
              <button class="sg-btn ${p}-btn ${p}-btn-primary">Confirmer</button>
              <button class="sg-btn ${p}-btn ${p}-btn-ghost">Annuler</button>
            </div>
          </div>
        </div>
      </div>

      <div class="sg-section-title">Photos &amp; avatars</div>
      <div class="sg-grid">
        <div class="sg-card ${p}-card">
          <div class="sg-photo"><span class="sg-photo-emoji">🖼</span><span class="sg-photo-cap">Galerie produits</span></div>
          <div class="sg-title ${p}-title">Galerie produits</div>
          <p class="sg-text ${p}-text">Des visuels riches et concrets pour animer les cartes.</p>
          <div class="sg-row"><span class="sg-tag">Nouveau</span></div>
        </div>
        <div class="sg-card ${p}-card">
          <div class="sg-photo pb"><span class="sg-photo-emoji">🏞</span><span class="sg-photo-cap">Couvertures</span></div>
          <div class="sg-title ${p}-title">Couvertures</div>
          <p class="sg-text ${p}-text">Photos et illustrations d'arrière-plan.</p>
          <div class="sg-row"><span class="sg-tag">#media</span></div>
        </div>
        <div class="sg-card ${p}-card">
          <div class="sg-title ${p}-title">Équipe</div>
          <div class="sg-row">
            <span class="sg-avatar-status">M<i class="on"></i></span><span class="sg-avatar-status">J<i class="on"></i></span><span class="sg-avatar-status">A<i class="off"></i></span><span class="sg-avatar-status">S<i class="on"></i></span>
          </div>
          <p class="sg-text ${p}-text">Des avatars avec identité et statut en ligne.</p>
          <div class="sg-row"><span class="sg-avatar-status">A<i class="on"></i></span><span class="sg-tag">En ligne</span></div>
        </div>
      </div>

      <div class="sg-section-title">Données &amp; métriques</div>
      <div class="sg-grid">
        <div class="sg-card ${p}-card">
          <div class="sg-block-title">Activité</div>
          <div class="sg-bars">
            <i style="height:38%"></i><i style="height:64%"></i><i style="height:48%"></i><i style="height:82%"></i><i style="height:58%"></i><i style="height:94%"></i><i style="height:70%"></i>
          </div>
          <div class="sg-bars-labels"><span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span></div>
        </div>
        <div class="sg-card ${p}-card">
          <div class="sg-block-title">Indicateurs</div>
          <div class="sg-data-row"><span class="sg-icon">👥</span>Utilisateurs actifs<span class="sg-data-val">12 480</span><span class="sg-data-delta sg-up">+18%</span></div>
          <div class="sg-data-row"><span class="sg-icon">💳</span>Revenus<span class="sg-data-val">8 240 €</span><span class="sg-data-delta sg-up">+6%</span></div>
          <div class="sg-data-row"><span class="sg-icon">📈</span>Conversion<span class="sg-data-val">4,2%</span><span class="sg-data-delta sg-down">−1%</span></div>
          <div class="sg-data-row"><span class="sg-icon">⭐</span>Note moyenne<span class="sg-data-val">4,9 / 5</span></div>
        </div>
      </div>`;
  }

  /* ---- Sidebar ---- */
  let openCats = {};
  let searchQuery = "";
  const $search = document.getElementById("search");
  function getFavs() {
    try { const v = localStorage.getItem("sg_favs"); return v ? JSON.parse(v) : []; } catch (e) { return []; }
  }
  function saveFavs(list) {
    try { localStorage.setItem("sg_favs", JSON.stringify(list)); } catch (e) {}
  }
  function isFav(id) { return getFavs().indexOf(id) !== -1; }
  function toggleFav(id) {
    const list = getFavs();
    const i = list.indexOf(id);
    if (i === -1) list.push(id); else list.splice(i, 1);
    saveFavs(list);
    renderNav();
  }
  function renderNav() {
    let html = '<button class="nav-item" data-home="1"><span class="num">⌂</span><span>Accueil</span></button>';
    html += '<button class="nav-item" data-mood="1"><span class="num">🗺</span><span>Vue d&#39;ensemble</span></button>';
    const q = searchQuery.toLowerCase().trim();
    const sort = $sortSelect ? $sortSelect.value : "display";
    const isList = q || sort !== "display";
    if (isList) {
      let arr = STYLES.slice();
      if (q) {
        arr = arr.filter(function(s) {
          const meta = (window.DSH_META || {})[s.id] || {};
          const hay = (s.name + " " + s.category + " " + CAT_LABEL[s.category] + " " + (meta.bestFor || []).join(" ")).toLowerCase();
          return hay.indexOf(q) !== -1;
        });
      }
      if (sort === "name") arr.sort(function(a,b){ return a.name.localeCompare(b.name); });
      if (sort === "favs") arr.sort(function(a,b){ return (isFav(b.id)?1:0) - (isFav(a.id)?1:0); });
      if (arr.length === 0) { html += '<div class="nav-empty">Aucun résultat</div>'; $nav.innerHTML = html; $nav.querySelectorAll(".nav-item").forEach(function(b){ b.addEventListener("click", function(){ closeDrawer(); if (b.dataset.home){ showHome(true); return; } if (b.dataset.mood){ showMood(); return; } current = +b.dataset.i; currentPalette = 0; showHome(false); if (compareOn) exitCompare(); else render(); }); }); return; }
      let n = 0;
      arr.forEach(function(s) {
        n++;
        const star = isFav(s.id) ? '<span class="nav-star on" data-fav="' + s.id + '">★</span>' : '<span class="nav-star" data-fav="' + s.id + '">☆</span>';
        html += '<button class="nav-item" data-i="' + STYLES.indexOf(s) + '"><span class="num">' + n + '</span><span>' + s.name + '</span>' + star + '</button>';
      });
    } else {
      const favs = getFavs();
      html += '<div class="nav-cat' + (openCats["favs"] !== false ? " open" : "") + '">';
      html += '<button class="nav-cat-head" data-cat="favs"><span class="nav-caret">▶</span><span class="nav-cat-label">★ Favoris</span><span class="nav-cat-count">' + favs.length + '</span></button>';
      html += '<div class="nav-cat-body">';
      if (favs.length) {
        for (const fid of favs) {
          const idx = STYLES.findIndex(function(s){ return s.id === fid; });
          if (idx < 0) continue;
          html += '<button class="nav-item" data-i="' + idx + '"><span class="num" style="color:var(--shell-accent-2)">★</span><span>' + STYLES[idx].name + '</span></button>';
        }
      } else {
        html += '<div class="nav-empty">Aucun favori — cliquez ☆ sur un style</div>';
      }
      html += '</div></div>';
      let counter = 0;
      for (const cat of CATS) {
        const items = STYLES.map(function(s, i){ return { s: s, i: i }; }).filter(function(x){ return x.s.category === cat; });
        if (!items.length) continue;
        const isOpen = openCats[cat] !== false;
        html += '<div class="nav-cat' + (isOpen ? " open" : "") + '">';
        html += '<button class="nav-cat-head" data-cat="' + cat + '"><span class="nav-caret">▶</span><span class="nav-cat-label">' + CAT_LABEL[cat] + '</span><span class="nav-cat-count">' + items.length + '</span></button>';
        html += '<div class="nav-cat-body">';
        for (const it of items) {
          counter++;
          const star = isFav(it.s.id) ? '<span class="nav-star on" data-fav="' + it.s.id + '">★</span>' : '<span class="nav-star" data-fav="' + it.s.id + '">☆</span>';
          html += '<button class="nav-item" data-i="' + it.i + '"><span class="num">' + counter + '</span><span>' + it.s.name + '</span>' + star + '</button>';
        }
        html += '</div></div>';
      }
    }
    $nav.innerHTML = html;
    $nav.querySelectorAll(".nav-cat-head").forEach(function(h) {
      h.addEventListener("click", function() { const cat = h.dataset.cat; const group = h.parentElement; const open = group.classList.contains("open"); group.classList.toggle("open", !open); openCats[cat] = !open; });
    });
    $nav.querySelectorAll(".nav-star").forEach(function(st) { st.addEventListener("click", function(e) { e.stopPropagation(); toggleFav(st.dataset.fav); }); });
    $nav.querySelectorAll(".nav-item").forEach(function(b) {
      b.addEventListener("click", function() {
        closeDrawer();
        if (b.dataset.home) { showHome(true); return; }
        if (b.dataset.mood) { showMood(); return; }
        current = +b.dataset.i; currentPalette = 0; showHome(false); if (compareOn) exitCompare(); else render();
      });
    });
  }
  /* ---- Palette du style ---- */
  function paletteSwatch(v) {
    // renvoie une couleur exploitable pour la pastille, sinon null
    if (typeof v !== "string") return null;
    if (v.charAt(0) === "#") return v;
    if (v.indexOf("rgb(") === 0 || v.indexOf("rgba(") === 0) return v;
    return null;
  }

  function renderPalettes() {
    const s = STYLES[current];
    let html = `<span class="plabel">Palette</span>`;
    s.palettes.forEach((p, i) => {
      const colors = [p.vars["--sg-primary"], p.vars["--sg-acc"], p.vars["--sg-text"]]
        .map(paletteSwatch).filter(Boolean);
      const sw = colors.map((c) => `<i style="background:${c}"></i>`).join("");
      html += `<button class="palette ${i === currentPalette ? "active" : ""}" data-p="${i}">
        <span class="swatches">${sw}</span>${p.name}
      </button>`;
    });
    $paletteBar.innerHTML = html;
    $paletteBar.querySelectorAll(".palette").forEach((b) => {
      b.addEventListener("click", () => {
        currentPalette = +b.dataset.p;
        render();
      });
    });
  }

  /* ---- Applique les variables d'une palette sur la scène ---- */
  function applyPalette(s, pIdx) {
    const p = s.palettes[pIdx];
    $stage.setAttribute("data-style", s.id);
    for (const [k, v] of Object.entries(p.vars)) {
      $stage.style.setProperty(k, v);
    }
    // Base sur le titre accent : la couleur principale en douceur
    if (p.vars["--sg-primary"]) {
      $stage.style.setProperty("--sg-primary-2", p.vars["--sg-primary-2"] || p.vars["--sg-primary"]);
    }
    return p;
  }

  /* ---- Texte d'aide (note + conseils) ---- */
  function mdToHtml(t) {
    // Convertit les segments **gras** en <b> sans utiliser d'échappements fragiles
    return String(t).split("**").map((part, i) => (i % 2 ? "<b>" + part + "</b>" : part)).join("");
  }

function renderNote(s) {
    const meta = (window.DSH_META || {})[s.id] || {};
    let html = '<div class="note-grid">';
    html += '<div><b>À propos</b><br/>' + mdToHtml(s.note) + '</div>';
    html += '<div><b>Cas d&#39;usage</b><br/>' + (meta.usage || '—') + '</div>';
    if (meta.bestFor && meta.bestFor.length) {
      html += '<div><b>Idéal pour</b><div class="note-tags">';
      html += meta.bestFor.map(function(t){ return '<span class="note-tag">' + t + '</span>'; }).join('');
      html += '</div></div>';
    }
    if (meta.pros && meta.pros.length) {
      html += '<div class="note-list note-pros"><b>Points forts</b><ul>' + meta.pros.map(function(t){return '<li>'+t+'</li>';}).join('') + '</ul></div>';
    }
    if (meta.cons && meta.cons.length) {
      html += '<div class="note-list note-cons"><b>Points de vigilance</b><ul>' + meta.cons.map(function(t){return '<li>'+t+'</li>';}).join('') + '</ul></div>';
    }
    if (meta.fonts && meta.fonts.length) {
      html += '<div class="note-list"><b>Typographie recommandée</b><ul>' + meta.fonts.map(function(t){return '<li>'+t+'</li>';}).join('') + '</ul></div>';
    }
    if (meta.accessibility) {
      html += '<div><b>Accessibilité</b><br/>' + meta.accessibility + '</div>';
    }
    if (s.tips && s.tips.length) {
      html += '<div class="note-list"><b>Bon à savoir</b><ul>' + s.tips.map(function(t){return '<li>'+t+'</li>';}).join('') + '</ul></div>';
    }
    if (window.DSH_RECIPE && window.DSH_RECIPE[s.id]) {
      html += '<div><b>La recette</b><div class="recipe-list">' + window.DSH_RECIPE[s.id].map(function(t){return '<code class="code-chip">' + t + '</code>';}).join('') + '</div></div>';
    }
    html += '</div>';
    $noteBox.innerHTML = html;
  }

  /* ---- Code généré (thème + HTML) ---- */
  function renderCode(s, p) {
    let vars = "";
    for (const [k, v] of Object.entries(p.vars)) {
      vars += `  ${k}: ${v};
`;
    }
    const html = components(s.p, s.flavor).trim();
    const code = `/* ===== Thème « ${s.name} » — variables CSS ===== */
:root {
${vars}}

/* ===== HTML des composants ===== */
${html}`;
    $codePre.textContent = code;
    $copyBtn.classList.remove("ok");
    $copyBtn.textContent = "Copier le code";
  }

  /* ---- Rendu principal ---- */
  function render() {
    const s = STYLES[current];
    if (s.id !== currentStyleId) { currentStyleId = s.id; currentFont = -1; }
    $title.textContent = s.name;
    $desc.innerHTML = `<span style="color:var(--shell-accent-2)">${s.category}</span> · ${s.tagline}`;
    const p = applyPalette(s, currentPalette);
    $stage.innerHTML = components(s.p, s.flavor);
    applyTheme($stage, p);
    renderFonts(s);
    applyFont(s);
    if (customOpen) { captureCustomBase(s, currentPalette); renderCustom(s, p); }
    renderPalettes();
    renderCode(s, p);
    renderNote(s);
    $nav.querySelectorAll(".nav-item").forEach((b) => {
      b.classList.toggle("active", +b.dataset.i === current);
    });
    if (compareOn) { renderComparePanels(); }
    document.title = `UI/UX Style Gallery — ${s.name}`;
  }

  /* ---- Navigation ---- */
  function go(delta) {
    closeDrawer();
    current = (current + delta + STYLES.length) % STYLES.length;
    currentPalette = 0;
    if (compareOn) exitCompare(); else render();
    document.querySelector(".main").scrollIntoView({ behavior: "smooth" });
  }
  $prev.addEventListener("click", () => go(-1));
  $next.addEventListener("click", () => go(1));
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  });

  /* ---- Copie ---- */
  $copyBtn.addEventListener("click", async () => {
    const text = $codePre.textContent;
    try {
      await navigator.clipboard.writeText(text);
      $copyBtn.classList.add("ok");
      $copyBtn.textContent = "Copié ✓";
    } catch (e) {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      $copyBtn.classList.add("ok");
      $copyBtn.textContent = "Copié ✓";
    }
  });

  /* ---- Démarrage ---- */
  $search.addEventListener("input", function() { searchQuery = $search.value; renderNav(); });
  if ($homeMood) $homeMood.addEventListener("click", function(){ closeDrawer(); showMood(); });
  $sortSelect.addEventListener("change", function() { renderNav(); });
  document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeDrawer(); });
  try { if (localStorage.getItem("sg_dark") === "1") { darkMode = true; $darkToggle.textContent = "☀️ Clair"; } } catch (e) {}
  $darkToggle.addEventListener("click", function() {
    darkMode = !darkMode;
    try { localStorage.setItem("sg_dark", darkMode ? "1" : "0"); } catch (e) {}
    $darkToggle.textContent = darkMode ? "☀️ Clair" : "🌙 Sombre";
    if (compareOn) { renderComparePanels(); renderCompareDossier(); } else { render(); }
  });
  renderNav();
  populateHome();
  render();
  showHome(true);
})();
