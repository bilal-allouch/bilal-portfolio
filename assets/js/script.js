/* ================================================================
   SCRIPT.JS — Portfolio Bilal Allouch
   ----------------------------------------------------------------
   Ce fichier gère toutes les interactions de la page :
     1. Helpers utilitaires
     2. Thème (sombre / clair)
     3. Langue (français / anglais)
     4. Menu mobile (burger)
     5. Navigation active (highlight du lien courant)
     6. Onglets des projets
     7. Scroll horizontal des projets (boutons + molette)
================================================================ */

/* Référence à l'élément <html> pour modifier les attributs data-theme et lang */
const root = document.documentElement;

/* ================================================================
   1. HELPERS — Fonctions utilitaires réutilisables
================================================================ */

/**
 * Retourne la hauteur de la navbar.
 * Utilisé pour calculer les offsets de scroll.
 * @returns {number} Hauteur en pixels
 */
const getNavHeight = () => {
  const topbar = document.querySelector(".topbar");
  return topbar ? topbar.offsetHeight : 86;
};

/* ================================================================
   2. THÈME — Basculer entre sombre et clair
   - Le choix est sauvegardé dans localStorage
   - L'icône du bouton change selon le thème actif
================================================================ */

/* Récupération des boutons thème (desktop + mobile) */
const themeBtn  = document.getElementById("theme-btn");
const themeBtnM = document.getElementById("theme-btn-m");

/* Chargement du thème sauvegardé (ou "dark" par défaut) */
const savedTheme = localStorage.getItem("theme") || "dark";
root.setAttribute("data-theme", savedTheme);

/**
 * Met à jour l'icône du bouton thème selon le thème actif.
 * ☀️ = en mode sombre (pour passer au clair)
 * 🌙 = en mode clair (pour revenir au sombre)
 */
const updateThemeIcon = () => {
  const currentTheme = root.getAttribute("data-theme");
  const icon = currentTheme === "light" ? "🌙" : "☀️";

  if (themeBtn)  themeBtn.textContent  = icon;
  if (themeBtnM) themeBtnM.textContent = icon;
};

/**
 * Bascule entre les thèmes clair et sombre.
 * Sauvegarde le choix dans localStorage.
 */
const toggleTheme = () => {
  const currentTheme = root.getAttribute("data-theme");
  const nextTheme    = currentTheme === "light" ? "dark" : "light";

  root.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  updateThemeIcon();
};

/* Écoute des clics sur les boutons thème */
if (themeBtn)  themeBtn.addEventListener("click", toggleTheme);
if (themeBtnM) themeBtnM.addEventListener("click", toggleTheme);

/* Initialisation de l'icône au chargement */
updateThemeIcon();

/* ================================================================
   3. LANGUE — Basculer entre français et anglais
   - Les textes traduits sont dans translate.js (objet `translations`)
   - Les éléments à traduire ont l'attribut data-i18n="clé"
================================================================ */

/* Récupération des boutons de langue (desktop + mobile) */
const langBtn  = document.getElementById("lang-btn");
const langBtnM = document.getElementById("lang-btn-m");

/* Langue active : récupérée depuis localStorage ou français par défaut */
let currentLang = localStorage.getItem("lang") || "fr";

/**
 * Applique les traductions à tous les éléments [data-i18n].
 * @param {string} lang - Code de langue ("fr" ou "en")
 */
const applyLang = (lang) => {
  /* Sélectionne tous les éléments avec un attribut data-i18n */
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key   = element.getAttribute("data-i18n");
    const value = translations?.[lang]?.[key]; /* Accès sécurisé avec ?. */

    if (value !== undefined) {
      element.textContent = value;
    }
  });

  /* Met à jour l'attribut lang de la page (important pour SEO et accessibilité) */
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
};

/**
 * Met à jour le texte des boutons de langue.
 * Affiche la langue vers laquelle on peut basculer.
 */
const updateLangButtons = () => {
  const label = currentLang === "fr" ? "EN" : "FR";

  if (langBtn)  langBtn.textContent  = label;
  if (langBtnM) langBtnM.textContent = label;
};

/**
 * Bascule entre français et anglais.
 */
const toggleLang = () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  applyLang(currentLang);
  updateLangButtons();
};

/* Écoute des clics sur les boutons langue */
if (langBtn)  langBtn.addEventListener("click", toggleLang);
if (langBtnM) langBtnM.addEventListener("click", toggleLang);

/* Initialisation des traductions au chargement */
applyLang(currentLang);
updateLangButtons();

/* ================================================================
   4. MENU MOBILE — Ouvrir / Fermer avec le burger
   - Gère le verrouillage du scroll de la page quand ouvert
   - Ferme aussi sur clic en dehors de la carte, ou avec Échap
================================================================ */

/* Récupération des éléments du menu mobile */
const burger      = document.getElementById("burger");
const mobileMenu  = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu");

/**
 * Verrouille ou déverrouille le scroll de la page.
 * @param {boolean} lock - true pour verrouiller, false pour libérer
 */
const lockScroll = (lock) => {
  document.body.style.overflow = lock ? "hidden" : "";
};

/**
 * Ouvre le menu mobile.
 * - Ajoute la classe is-open
 * - Met à jour aria-hidden et aria-expanded pour l'accessibilité
 * - Verrouille le scroll de fond
 */
const openMenu = () => {
  if (!mobileMenu) return;

  mobileMenu.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");

  if (burger) burger.setAttribute("aria-expanded", "true");

  lockScroll(true);
};

/**
 * Ferme le menu mobile.
 * - Retire la classe is-open
 * - Remet aria-hidden à true
 * - Libère le scroll de fond
 */
const closeMenu = () => {
  if (!mobileMenu) return;

  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");

  if (burger) burger.setAttribute("aria-expanded", "false");

  lockScroll(false);
};

/**
 * Bascule l'état du menu (ouvre si fermé, ferme si ouvert).
 */
const toggleMenu = () => {
  if (!mobileMenu) return;

  const isOpen = mobileMenu.classList.contains("is-open");
  isOpen ? closeMenu() : openMenu();
};

/* Écoute des clics sur le burger et le bouton fermer */
if (burger)       burger.addEventListener("click", toggleMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeMenu);

if (mobileMenu) {
  /* Ferme le menu si l'utilisateur clique sur l'overlay (fond sombre) */
  mobileMenu.addEventListener("click", (event) => {
    if (event.target === mobileMenu) {
      closeMenu();
    }
  });

  /* Ferme le menu quand un lien est cliqué (scroll vers la section) */
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

/* Ferme le menu avec la touche Échappement (ACCESSIBILITÉ) */
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

/* ================================================================
   5. NAVIGATION ACTIVE — Highlight du lien de la section visible
   Deux mécanismes :
   a) Changement de hash (#home, #about, etc.)
   b) IntersectionObserver : détecte quelle section est visible
================================================================ */

/* Sélection des liens desktop et mobile */
const desktopLinks = document.querySelectorAll(".link");
const mobileLinks  = document.querySelectorAll(".m-link");

/**
 * Active le lien de navigation correspondant au hash donné.
 * @param {string} hash - Ex: "#home", "#about"
 */
const setActiveNav = (hash) => {
  const target = hash || "#home";

  /* Active/désactive les liens desktop */
  desktopLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === target);
  });

  /* Active/désactive les liens mobile */
  mobileLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === target);
  });
};

/* Met à jour le lien actif quand l'URL change (#anchor) */
window.addEventListener("hashchange", () => {
  setActiveNav(location.hash || "#home");
});

/* Initialisation avec le hash de l'URL actuelle */
setActiveNav(location.hash || "#home");

/* --- IntersectionObserver : détecte la section visible au scroll --- */
const sectionIds = ["home", "about", "skills", "projects", "contact"];

/* Récupère les éléments DOM des sections (filtre les null si absents) */
const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter(Boolean);

/* IntersectionObserver : observe quelles sections entrent dans la vue */
if ("IntersectionObserver" in window && sections.length) {
  const navHeight = getNavHeight();

  const observer = new IntersectionObserver(
    (entries) => {
      /* Parmi les sections visibles, on prend celle avec le ratio le plus élevé */
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry?.target?.id) {
        setActiveNav(`#${visibleEntry.target.id}`);
      }
    },
    {
      root: null,
      /* Marge négative : tient compte de la navbar sticky */
      rootMargin: `-${navHeight + 12}px 0px -55% 0px`,
      threshold: [0.15, 0.25, 0.35, 0.5]
    }
  );

  /* Lance l'observation sur chaque section */
  sections.forEach((section) => observer.observe(section));
}

/* ================================================================
   6. ONGLETS PROJETS — Filtrer A1 / A2 / INDI
   - Active l'onglet cliqué
   - Affiche le groupe correspondant, cache les autres
================================================================ */
(function initProjectTabs() {
  const tabs   = document.querySelectorAll("[data-project-tab]");
  const groups = document.querySelectorAll("[data-project-group]");

  /* Si aucun onglet ou groupe trouvé, on sort */
  if (!tabs.length || !groups.length) return;

  /**
   * Active un onglet et affiche son groupe de projets.
   * @param {string} target - Identifiant du groupe ("a1", "a2", "indi")
   */
  const setActiveTab = (target) => {
    /* Met à jour les onglets */
    tabs.forEach((tab) => {
      const isActive = tab.dataset.projectTab === target;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    /* Affiche le groupe cible, cache les autres */
    groups.forEach((group) => {
      const isTarget = group.dataset.projectGroup === target;
      group.classList.toggle("is-hidden", !isTarget);
    });
  };

  /* Affiche A1 par défaut au chargement */
  setActiveTab("a1");

  /* Écoute les clics sur chaque onglet */
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActiveTab(tab.dataset.projectTab);
    });
  });
})();

/* ================================================================
   7. SCROLL HORIZONTAL PROJETS — Boutons ‹ › et molette souris
   - Les boutons font défiler d'une carte à la fois
   - La molette verticale est redirigée en scroll horizontal
================================================================ */

/**
 * Calcule la largeur d'une carte + son gap pour le défilement.
 * @param {HTMLElement} row - Le conteneur de projets
 * @returns {number} Largeur en pixels à faire défiler
 */
const getScrollStep = (row) => {
  const card = row.querySelector(".project-card");
  if (!card) return 360; /* Valeur par défaut */

  /* Récupère le gap depuis le CSS */
  const styles = window.getComputedStyle(row);
  const gap = parseFloat(styles.columnGap || styles.gap || "0") || 22;

  return card.getBoundingClientRect().width + gap;
};

/**
 * Attache les comportements de scroll à une rangée de projets.
 * @param {string} key - Identifiant de la rangée ("a1", "a2", "indi")
 */
const bindHorizontalRow = (key) => {
  const row       = document.querySelector(`[data-project-row="${key}"]`);
  const prevButton = document.querySelector(`[data-project-prev="${key}"]`);
  const nextButton = document.querySelector(`[data-project-next="${key}"]`);

  if (!row) return;

  /* Bouton ‹ : défile vers la gauche */
  if (prevButton) {
    prevButton.addEventListener("click", (event) => {
      event.preventDefault();
      row.scrollBy({ left: -getScrollStep(row), behavior: "smooth" });
    });
  }

  /* Bouton › : défile vers la droite */
  if (nextButton) {
    nextButton.addEventListener("click", (event) => {
      event.preventDefault();
      row.scrollBy({ left: getScrollStep(row), behavior: "smooth" });
    });
  }

  /* Molette souris : redirige le scroll vertical en horizontal
     Utile sur desktop quand la souris survole les projets */
  row.addEventListener(
    "wheel",
    (event) => {
      /* Si le scroll vertical est dominant, on le redirige horizontalement */
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        row.scrollBy({ left: event.deltaY, behavior: "auto" });
      }
    },
    { passive: false } /* passive: false nécessaire pour pouvoir faire preventDefault() */
  );
};

/* Initialise le scroll pour chaque groupe de projets */
["a1", "a2", "indi"].forEach(bindHorizontalRow);