// =========================
// script.js (clean + stable)
// =========================
const root = document.documentElement;

// -------------------------
// HELPERS
// -------------------------
function getNavHeight() {
    const topbar = document.querySelector(".topbar");
    return topbar ? topbar.offsetHeight : 86; // fallback
}

// =========================
// THEME
// =========================
const themeBtn = document.getElementById("theme-btn");
const themeBtnM = document.getElementById("theme-btn-m");

const savedTheme = localStorage.getItem("theme") || "dark";
root.setAttribute("data-theme", savedTheme);

function updateThemeIcon() {
    const t = root.getAttribute("data-theme");
    // light => show moon (switch to dark) | dark => show sun (switch to light)
    const icon = t === "light" ? "🌙" : "☀️";
    if (themeBtn) themeBtn.textContent = icon;
    if (themeBtnM) themeBtnM.textContent = icon;
}

function toggleTheme() {
    const current = root.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon();
}

if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
if (themeBtnM) themeBtnM.addEventListener("click", toggleTheme);
updateThemeIcon();

// =========================
// LANGUAGE (i18n)
// =========================
const langBtn = document.getElementById("lang-btn");
const langBtnM = document.getElementById("lang-btn-m");

let currentLang = localStorage.getItem("lang") || "fr";

function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const value = translations?.[lang]?.[key];
        if (value) el.textContent = value;
    });

    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
}

function updateLangButtons() {
    const label = currentLang === "fr" ? "EN" : "FR";
    if (langBtn) langBtn.textContent = label;
    if (langBtnM) langBtnM.textContent = label;
}

function toggleLang() {
    currentLang = currentLang === "fr" ? "en" : "fr";
    applyLang(currentLang);
    updateLangButtons();
}

if (langBtn) langBtn.addEventListener("click", toggleLang);
if (langBtnM) langBtnM.addEventListener("click", toggleLang);

applyLang(currentLang);
updateLangButtons();

// =========================
// MOBILE MENU
// =========================
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu");

function lockScroll(lock) {
    document.body.style.overflow = lock ? "hidden" : "";
}

function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    if (burger) burger.setAttribute("aria-expanded", "true");
    lockScroll(true);
}

function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    if (burger) burger.setAttribute("aria-expanded", "false");
    lockScroll(false);
}

function toggleMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.contains("is-open") ? closeMenu() : openMenu();
}

if (burger) burger.addEventListener("click", toggleMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeMenu);

if (mobileMenu) {
    // clic sur fond (overlay)
    mobileMenu.addEventListener("click", (e) => {
        if (e.target === mobileMenu) closeMenu();
    });

    // clic sur un lien
    mobileMenu.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => closeMenu());
    });
}

// ESC
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
});

// =========================
// ACTIVE NAV LINK (HASH + SCROLL)
// Fix "Accueil / À propos" inversé
// =========================
const desktopLinks = document.querySelectorAll(".link");
const mobileLinks = document.querySelectorAll(".m-link");

function setActive(hash) {
    const target = hash || "#home";
    desktopLinks.forEach((a) =>
        a.classList.toggle("is-active", a.getAttribute("href") === target)
    );
    mobileLinks.forEach((a) =>
        a.classList.toggle("is-active", a.getAttribute("href") === target)
    );
}

window.addEventListener("hashchange", () => {
    setActive(location.hash || "#home");
});

// init
setActive(location.hash || "#home");

// IntersectionObserver avec marge NAV (évite que "about" devienne actif trop tôt)
const sectionIds = ["home", "about", "skills", "projects", "contact"];
const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
    const navH = getNavHeight();

    const observer = new IntersectionObserver(
        (entries) => {
            // section la plus visible
            const visible = entries
                .filter((e) => e.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (visible?.target?.id) {
                setActive(`#${visible.target.id}`);
            }
        },
        {
            root: null,
            // IMPORTANT : on "descend" le haut de la zone d'observation sous la navbar
            rootMargin: `-${navH + 12}px 0px -55% 0px`,
            threshold: [0.15, 0.25, 0.35, 0.5],
        }
    );

    sections.forEach((sec) => observer.observe(sec));
}

// =========================
// PROJECTS TABS (A1/A2/INDI)
// =========================
(function initProjectTabs() {
    const tabs = document.querySelectorAll("[data-project-tab]");
    const groups = document.querySelectorAll("[data-project-group]");

    if (!tabs.length || !groups.length) return;

    function setActiveTab(target) {
        tabs.forEach((t) => {
            const active = t.dataset.projectTab === target;
            t.classList.toggle("is-active", active);
            t.setAttribute("aria-selected", active ? "true" : "false");
        });

        groups.forEach((g) => {
            const isTarget = g.dataset.projectGroup === target;
            g.classList.toggle("is-hidden", !isTarget);
        });
    }

    // default = a1
    setActiveTab("a1");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => setActiveTab(tab.dataset.projectTab));
    });
})();

// =========================
// PROJECTS HORIZONTAL SCROLL (ARROWS + WHEEL)
// IMPORTANT HTML:
// - Ton conteneur scroll doit avoir: data-project-row="a1" (ou a2/indi)
// - Tes boutons: data-project-prev="a1" et data-project-next="a1" etc.
// =========================
function getScrollStep(row) {
    const card = row.querySelector(".project-card");
    if (!card) return 360;

    const styles = window.getComputedStyle(row);
    const gap =
        parseFloat(styles.columnGap || styles.gap || "0") ||
        parseFloat(styles.getPropertyValue("gap") || "0") ||
        22;

    return card.getBoundingClientRect().width + gap;
}

function bindHorizontalRow(key) {
    const row = document.querySelector(`[data-project-row="${key}"]`);
    if (!row) return;

    // arrows
    const prev = document.querySelector(`[data-project-prev="${key}"]`);
    const next = document.querySelector(`[data-project-next="${key}"]`);

    if (prev) {
        prev.addEventListener("click", (e) => {
            e.preventDefault();
            row.scrollBy({ left: -getScrollStep(row), behavior: "smooth" });
        });
    }

    if (next) {
        next.addEventListener("click", (e) => {
            e.preventDefault();
            row.scrollBy({ left: getScrollStep(row), behavior: "smooth" });
        });
    }

    // wheel vertical => horizontal (PC)
    row.addEventListener(
        "wheel",
        (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                row.scrollBy({ left: e.deltaY, behavior: "auto" });
            }
        },
        { passive: false }
    );
}

// Bind all rows
["a1", "a2", "indi"].forEach(bindHorizontalRow);