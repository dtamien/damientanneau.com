class SiteCta extends HTMLElement {
  connectedCallback() {
    if (this.rendered) return;
    this.rendered = true;
    this.innerHTML =
      '<section><div class="wrap"><div class="band">' +
      "<h2>" + Site.t("cta.title") + "</h2>" +
      '<site-button variant="violet" href="https://calendar.app.google/CoBxq1Q2LCWjWYjo9" external>' + Site.t("cta.book") + "</site-button>" +
      "</div></div></section>";
  }
}
customElements.define("site-cta", SiteCta);
