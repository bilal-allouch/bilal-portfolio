/* ================================================================
   SCRIPT.JS — Portfolio Bilal Allouch
   ----------------------------------------------------------------
     1. Helpers utilitaires
     2. Thème (sombre / clair)
     3. Langue (français / anglais)
     4. Menu mobile (burger)
     5. Navigation active
     6. Onglets des projets
     7. Scroll horizontal des projets
================================================================ */

const root = document.documentElement;

/* ================================================================
   1. HELPERS
================================================================ */
const getNavHeight = () => {
  const topbar = document.querySelector(".topbar");
  return topbar ? topbar.offsetHeight : 86;
};

/* ================================================================
   2. THÈME
================================================================ */
const themeBtn  = document.getElementById("theme-btn");
const themeBtnM = document.getElementById("theme-btn-m");

const savedTheme = localStorage.getItem("theme") || "dark";
root.setAttribute("data-theme", savedTheme);

const updateThemeIcon = () => {
  const currentTheme = root.getAttribute("data-theme");
  const icon = currentTheme === "light" ? "🌙" : "☀️";
  if (themeBtn)  themeBtn.textContent  = icon;
  if (themeBtnM) themeBtnM.textContent = icon;
};

const toggleTheme = () => {
  const currentTheme = root.getAttribute("data-theme");
  const nextTheme    = currentTheme === "light" ? "dark" : "light";
  root.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  updateThemeIcon();
};

if (themeBtn)  themeBtn.addEventListener("click", toggleTheme);
if (themeBtnM) themeBtnM.addEventListener("click", toggleTheme);

updateThemeIcon();

/* ================================================================
   3. LANGUE
================================================================ */
const langBtn  = document.getElementById("lang-btn");
const langBtnM = document.getElementById("lang-btn-m");

let currentLang = localStorage.getItem("lang") || "fr";

const applyLang = (lang) => {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key   = element.getAttribute("data-i18n");
    const value = translations?.[lang]?.[key];
    if (value !== undefined) {
      element.textContent = value;
    }
  });
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
};

const updateLangButtons = () => {
  const label = currentLang === "fr" ? "EN" : "FR";
  if (langBtn)  langBtn.textContent  = label;
  if (langBtnM) langBtnM.textContent = label;
};

const toggleLang = () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  applyLang(currentLang);
  updateLangButtons();
};

if (langBtn)  langBtn.addEventListener("click", toggleLang);
if (langBtnM) langBtnM.addEventListener("click", toggleLang);

applyLang(currentLang);
updateLangButtons();

/* ================================================================
   4. MENU MOBILE
================================================================ */
const burger       = document.getElementById("burger");
const mobileMenu   = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu");

const lockScroll = (lock) => {
  document.body.style.overflow = lock ? "hidden" : "";
};

const openMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  if (burger) burger.setAttribute("aria-expanded", "true");
  lockScroll(true);
};

const closeMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  if (burger) burger.setAttribute("aria-expanded", "false");
  lockScroll(false);
};

const toggleMenu = () => {
  if (!mobileMenu) return;
  const isOpen = mobileMenu.classList.contains("is-open");
  isOpen ? closeMenu() : openMenu();
};

if (burger)       burger.addEventListener("click", toggleMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeMenu);

if (mobileMenu) {
  mobileMenu.addEventListener("click", (event) => {
    if (event.target === mobileMenu) closeMenu();
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

/* ================================================================
   5. NAVIGATION ACTIVE
================================================================ */
const desktopLinks = document.querySelectorAll(".link");
const mobileLinks  = document.querySelectorAll(".m-link");

const setActiveNav = (hash) => {
  const target = hash || "#home";
  desktopLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === target);
  });
  mobileLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === target);
  });
};

window.addEventListener("hashchange", () => {
  setActiveNav(location.hash || "#home");
});

setActiveNav(location.hash || "#home");

/* IntersectionObserver */
const sectionIds = ["home", "about", "experience", "skills", "projects", "contact"];

const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const navHeight = getNavHeight();

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry?.target?.id) {
        setActiveNav(`#${visibleEntry.target.id}`);
      }
    },
    {
      root: null,
      rootMargin: `-${navHeight + 12}px 0px -55% 0px`,
      threshold: [0.15, 0.25, 0.35, 0.5]
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ================================================================
   6. ONGLETS PROJETS
================================================================ */
(function initProjectTabs() {
  const tabs   = document.querySelectorAll("[data-project-tab]");
  const groups = document.querySelectorAll("[data-project-group]");

  if (!tabs.length || !groups.length) return;

  const setActiveTab = (target) => {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.projectTab === target;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    groups.forEach((group) => {
      const isTarget = group.dataset.projectGroup === target;
      group.classList.toggle("is-hidden", !isTarget);
    });
  };

  /* Affiche DIST par défaut */
  setActiveTab("dist");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActiveTab(tab.dataset.projectTab);
    });
  });
})();

/* ================================================================
   7. SCROLL HORIZONTAL PROJETS
================================================================ */
const getScrollStep = (row) => {
  const card = row.querySelector(".project-card");
  if (!card) return 360;
  const styles = window.getComputedStyle(row);
  const gap = parseFloat(styles.columnGap || styles.gap || "0") || 22;
  return card.getBoundingClientRect().width + gap;
};

const bindHorizontalRow = (key) => {
  const row        = document.querySelector(`[data-project-row="${key}"]`);
  const prevButton = document.querySelector(`[data-project-prev="${key}"]`);
  const nextButton = document.querySelector(`[data-project-next="${key}"]`);

  if (!row) return;

  if (prevButton) {
    prevButton.addEventListener("click", (event) => {
      event.preventDefault();
      row.scrollBy({ left: -getScrollStep(row), behavior: "smooth" });
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", (event) => {
      event.preventDefault();
      row.scrollBy({ left: getScrollStep(row), behavior: "smooth" });
    });
  }

  row.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        row.scrollBy({ left: event.deltaY, behavior: "auto" });
      }
    },
    { passive: false }
  );
};

/* Initialise le scroll pour tous les groupes */
["dist", "indi", "a1", "a2"].forEach(bindHorizontalRow);