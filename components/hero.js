class SiteHero extends HTMLElement {
  connectedCallback() {
    if (this.rendered) return;
    this.rendered = true;

    var inner = document.createElement("div");
    inner.className = "hero-inner";
    inner.append.apply(inner, Array.from(this.childNodes));

    var header = document.createElement("site-header");
    header.setAttribute("current", this.getAttribute("page") || "");

    this.append(header, inner);
  }
}
customElements.define("site-hero", SiteHero);
