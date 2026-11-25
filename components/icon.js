class SiteIcon extends HTMLElement {
  connectedCallback() {
    if (this.rendered) return;
    this.rendered = true;
    this.setAttribute("aria-hidden", "true");
    var bare = this.hasAttribute("bare");
    this.innerHTML = Site.icon(this.getAttribute("name"), Number(this.getAttribute("size")) || (bare ? 16 : 18));
  }
}
customElements.define("site-icon", SiteIcon);
