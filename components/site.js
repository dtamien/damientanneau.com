window.Site = {
  email: "contact@damientanneau.com",
  linkedin: "https://www.linkedin.com/in/damientanneau",
  github: "https://github.com/dtamien",
  booking: "https://calendar.app.google/CoBxq1Q2LCWjWYjo9",
  umamiWebsiteId: "3999d131-033a-4683-ad4d-e26dc245909c",
  nav: [
    { key: "index", path: "/", label: "nav.home" },
    { key: "experience", path: "/experience", label: "nav.experience" },
    { key: "contact", path: "/contact", label: "nav.contact" },
  ],
  lang: document.documentElement.lang === "en" ? "en" : "fr",
  root: document.documentElement.lang === "en" && !document.querySelector("base") ? "../" : "",
  langNames: { fr: "Français", en: "English" },
  langActions: { fr: "Passer en français", en: "Switch to English" },
};

Site.slugs = { "/mentions-legales": "/legal-notice" };
Site.href = function (path) {
  if (Site.lang !== "en") return path;
  if (Site.slugs[path]) return "/en" + Site.slugs[path];
  return path === "/" ? "/en/" : "/en" + path;
};

Site.text = {
  fr: {
    "nav.aria": "Navigation principale",
    "nav.home": "Accueil",
    "nav.experience": "Expérience",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "cta.talk": "Discutons de votre projet",
    "brand.role": "Ingénieur en systèmes d'IA",
    "footer.aria": "Liens du pied de page",
    "footer.company": "Micro-entreprise DATA",
    "footer.vat": "N° TVA",
    "footer.legal": "Mentions légales",
    "cta.title": "Envie d'échanger ?",
    "cta.book": "Réserver 30 minutes",
  },
  en: {
    "nav.aria": "Main navigation",
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "cta.talk": "Discuss your project",
    "brand.role": "AI Systems Engineer",
    "footer.aria": "Footer links",
    "footer.company": "Micro-entreprise DATA",
    "footer.vat": "VAT no.",
    "footer.legal": "Legal notice",
    "cta.title": "Up for a chat?",
    "cta.book": "Book 30 minutes",
  },
};

Site.t = function (key) {
  var table = Site.text[Site.lang] || Site.text.fr;
  return table[key] !== undefined ? table[key] : Site.text.fr[key];
};

if (location.protocol === "file:") {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="/"]').forEach(function (link) {
      var href = link.getAttribute("href");
      var hash = href.indexOf("#") >= 0 ? href.slice(href.indexOf("#")) : "";
      var path = href.slice(1, href.length - hash.length);
      if (path === "" || path.slice(-1) === "/") path += "index";
      link.setAttribute("href", path + ".html" + hash);
    });
  });
}

(function () {
  if (location.protocol === "file:" || /bot|crawl|spider|slurp/i.test(navigator.userAgent)) return;
  try {
    if (localStorage.getItem("site-lang")) return;
  } catch (e) {
    return;
  }
  var preferred = null;
  (navigator.languages || [navigator.language]).some(function (tag) {
    var code = String(tag || "").slice(0, 2).toLowerCase();
    if (code !== "fr" && code !== "en") return false;
    preferred = code;
    return true;
  });
  if (!preferred || preferred === Site.lang) return;
  var alternate = document.querySelector('link[rel="alternate"][hreflang="' + preferred + '"]');
  if (alternate) location.replace(new URL(alternate.href).pathname + location.search + location.hash);
})();

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="http"]').forEach(function (link) {
    var url = new URL(link.href);
    if (url.host === location.host) return;
    link.target = "_blank";
    link.rel = "noopener";
  });
});

