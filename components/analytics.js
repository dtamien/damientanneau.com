(function () {
  if (!Site.umamiWebsiteId || location.hostname !== "damientanneau.com") return;
  var script = document.createElement("script");
  script.defer = true;
  script.src = "https://cloud.umami.is/script.js";
  script.setAttribute("data-website-id", Site.umamiWebsiteId);
  document.head.append(script);
})();
