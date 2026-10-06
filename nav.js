// Worldline Muse — minimal nav: mobile menu toggle + active link highlight.
(function () {
  "use strict";

  // Mobile menu toggle
  var btn = document.getElementById("menu-btn");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    // Close the menu when a link is tapped
    nav.addEventListener("click", function (e) {
      if (e.target && e.target.tagName === "A") {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", "Open menu");
      }
    });
  }

  // Active-link highlight from the current page
  var links = nav ? nav.querySelectorAll("a") : [];
  var page = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    if (!href) continue;
    var target = href.split("#")[0].split("/").pop().toLowerCase() || "index.html";
    var isActive = target === page || (page === "" && target === "index.html");
    if (isActive) {
      links[i].classList.add("active");
    } else {
      links[i].classList.remove("active");
    }
  }
})();
