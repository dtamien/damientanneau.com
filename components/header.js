class SiteHeader extends HTMLElement {
  connectedCallback() {
    if (this.rendered) return;
    this.rendered = true;
    this.innerHTML =
      '<header class="nav"><div class="bar">' +
      Site.brand(96) +
      '<nav class="links" aria-label="' + Site.t("nav.aria") + '">' + Site.menuLinks(this.getAttribute("current")) + "</nav>" +
      '<div class="actions">' +
      '<site-button variant="gold" size="sm" href="' + Site.href("/contact") + '">' + Site.t("cta.talk") + "</site-button>" +
      Site.social() +
      "</div></div></header>";

    var actions = this.querySelector(".actions");
    var open = function () { actions.classList.add("is-open"); };
    actions.addEventListener("mouseenter", open);
    actions.addEventListener("focusin", open);
    actions.addEventListener("mouseleave", function () {
      if (!actions.contains(document.activeElement)) actions.classList.remove("is-open");
    });
    actions.addEventListener("focusout", function (e) {
      if (!actions.contains(e.relatedTarget)) actions.classList.remove("is-open");
    });
  }
}
customElements.define("site-header", SiteHeader);
