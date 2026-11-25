var ICON_FILES = { github: "assets/github.webp", linkedin: "assets/linkedin.webp" };

class SiteButton extends HTMLElement {
  connectedCallback() {
    if (this.rendered) return;
    this.rendered = true;

    var label = this.textContent.trim();
    var variant = this.getAttribute("variant") || "violet";
    var size = this.getAttribute("size") || "md";
    var icon = this.getAttribute("icon");
    var iconOnly = this.hasAttribute("icon-only");

    var el = document.createElement(this.hasAttribute("submit") ? "button" : "a");
    if (el.tagName === "BUTTON") {
      el.type = "submit";
    } else {
      el.href = this.getAttribute("href") || "#";
      if (this.hasAttribute("external")) el.rel = "noopener";
    }
    el.className = "btn btn-" + variant + " btn-" + size +
      (this.hasAttribute("full") ? " btn-full" : "") + (iconOnly ? " btn-icon-only" : "");
    if (iconOnly) el.setAttribute("aria-label", label);
    if (iconOnly) el.title = label;

    el.innerHTML =
      (icon ? (ICON_FILES[icon] ? '<img class="btn-ico" src="' + Site.root + ICON_FILES[icon] + '" alt="" width="20" height="20">' : Site.icon(icon)) : "") +
      '<span class="btn-label">' + label + "</span>" +
      '<span class="btn-arrow">' + Site.icon("arrow") + "</span>";

    this.replaceChildren(el);
  }
}
customElements.define("site-button", SiteButton);
