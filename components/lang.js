class SiteLang extends HTMLElement {
  connectedCallback() {
    if (this.rendered) return;
    this.rendered = true;

    var other = Site.lang === "en" ? "fr" : "en";
    var alternate = document.querySelector('link[rel="alternate"][hreflang="' + other + '"]');
    if (!alternate) return;

    var button = document.createElement("site-button");
    button.setAttribute("variant", "lang");
    button.setAttribute("href", new URL(alternate.href).pathname);
    button.setAttribute("lang", other);
    button.textContent = Site.langActions[other];
    button.addEventListener("click", function () {
      try {
        localStorage.setItem("site-lang", other);
      } catch (e) {}
    });
    this.replaceChildren(button);
  }
}
customElements.define("site-lang", SiteLang);
