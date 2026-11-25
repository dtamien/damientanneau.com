Site.brand = function (photoSize) {
  return (
    '<a class="brand" href="' + Site.href("/") + '"><img class="brand-photo" src="' + Site.root + 'assets/damien.webp" width="' + photoSize +
    '" height="' + photoSize + '" alt="">' +
    '<span class="brand-duo">Damien Tanneau<small>' + Site.t("brand.role") + "</small></span></a>"
  );
};

Site.menuLinks = function (current) {
  return Site.nav.map(function (item) {
    return '<a href="' + Site.href(item.path) + '"' + (item.key === current ? ' aria-current="page"' : "") + ">" + Site.t(item.label) + "</a>";
  }).join("");
};

Site.social = function () {
  return (
    '<site-button variant="github" size="sm" icon="github" href="' + Site.github + '" external icon-only>GitHub</site-button>' +
    '<site-button variant="linkedin" size="sm" icon="linkedin" href="' + Site.linkedin + '" external icon-only>LinkedIn</site-button>'
  );
};
