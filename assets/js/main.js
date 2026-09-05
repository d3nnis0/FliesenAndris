(function () {
  "use strict";

  // Aktuelles Jahr im Footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header: Hintergrund beim Scrollen
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobiles Menü
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // Aktiver Menüpunkt beim Scrollen (Scrollspy)
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".main-nav a");
  function onScrollSpy() {
    var scrollPos = window.scrollY + 120;
    sections.forEach(function (section) {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach(function (link) {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === "#" + section.id
          );
        });
      }
    });
  }
  window.addEventListener("scroll", onScrollSpy, { passive: true });
  onScrollSpy();

  // Reveal-on-scroll Animation
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Kontaktformular → vorausgefüllte E-Mail (mailto), da statische Seite ohne Backend
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var phone = form.phone.value.trim();
      var email = form.email.value.trim();
      var subject = form.subject.value;
      var message = form.message.value.trim();

      var body =
        "Name: " + name + "\n" +
        "Telefon: " + (phone || "-") + "\n" +
        "E-Mail: " + email + "\n\n" +
        message;

      var mailto =
        "mailto:info@fliesen-andris.de" +
        "?subject=" + encodeURIComponent("Anfrage: " + subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }
})();
