class SiteFooter extends HTMLElement {
  connectedCallback() {
    if (this.rendered) return;
    this.rendered = true;
    this.innerHTML =
      '<footer><div class="wrap"><div class="foot-top">' +
      Site.brand(32) +
      '<nav class="foot-links" aria-label="' + Site.t("footer.aria") + '">' + Site.menuLinks() +
      '<span class="foot-social">' + Site.social() + "</span></nav></div>" +
      '<p class="legal">' +
      '<span class="legal-data">' + Site.logo("legal", 18) + Site.t("footer.company") + "</span>" +
      "<span>SIREN&#8239;: 924&#8239;746&#8239;738</span>" +
      "<span>" + Site.t("footer.vat") + "&#8239;: FR68924746738</span>" +
      '<span><a href="mailto:' + Site.email + '">' + Site.email + "</a></span>" +
      '<span><a href="' + Site.href("/mentions-legales") + '">' + Site.t("footer.legal") + "</a></span>" +
      "</p></div></footer>";
  }
}
customElements.define("site-footer", SiteFooter);
