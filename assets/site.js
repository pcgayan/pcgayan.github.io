/* ktronics.se: language toggle (Swedish by default, English remembered across pages) and the phone menu. */
(function () {
  var KEY = "ktronics-lang";
  function setLang(l, remember) {
    document.documentElement.lang = l;
    document.querySelectorAll("[data-" + l + "]").forEach(function (el) {
      el.innerHTML = el.getAttribute("data-" + l);
    });
    document.getElementById("b-en").setAttribute("aria-pressed", l === "en");
    document.getElementById("b-sv").setAttribute("aria-pressed", l === "sv");
    if (remember) { try { localStorage.setItem(KEY, l); } catch (e) { /* not remembered */ } }
  }
  document.getElementById("b-en").addEventListener("click", function () { setLang("en", true); });
  document.getElementById("b-sv").addEventListener("click", function () { setLang("sv", true); });
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) { saved = null; }
  if (saved === "en") setLang("en", false);

  var btn = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
})();
