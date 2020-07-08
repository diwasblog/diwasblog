!(function(e, n, t) {
  "use strict";
  var o = "https://fonts.googleapis.com/css?family=Roboto&display=swaps",
    r = "__3perf_googleFonts_22961";
  function c(e) {
    (n.head || n.body).appendChild(e);
  }
  function a() {
    var e = n.createElement("link");
    (e.href = o), (e.rel = "stylesheet"), c(e);
  }
  function f(e) {
    if (!n.getElementById(r)) {
      var t = n.createElement("style");
      (t.id = r), c(t);
    }
    n.getElementById(r).innerHTML = e;
  }
  e.FontFace && e.FontFace.prototype.hasOwnProperty("display")
    ? (t[r] && f(t[r]),
      fetch(o)
        .then(function(e) {
          return e.text();
        })
        .then(function(e) {
          return e.replace(/@font-face {/g, "@font-face{font-display:swap;");
        })
        .then(function(e) {
          return (t[r] = e);
        })
        .then(f)
        .catch(a))
    : a();
})(window, document, localStorage);
