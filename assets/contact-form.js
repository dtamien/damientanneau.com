(function () {
  var form = document.getElementById("diag-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.elements.name.value.trim();
    var company = form.elements.company.value.trim();
    var project = form.elements.project.value.trim();
    var subject = "Premier échange" + (company ? " - " + company : "");
    var body = "Nom : " + name + "\nEntreprise : " + company + "\n\nProjet :\n" + project;
    location.href = "mailto:" + Site.email + "?subject=" +
      encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
})();
