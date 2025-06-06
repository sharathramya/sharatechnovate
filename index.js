function loadSection(id, htmlFile, cssFile, jsFile) {
  fetch(htmlFile)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;

      if (cssFile) {
        const cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.href = cssFile;
        document.head.appendChild(cssLink);
      }

      if (jsFile) {
        const script = document.createElement("script");
        script.src = jsFile;
        document.body.appendChild(script);
      }
    });
}

// Load sections
loadSection("navbar", "html-files/navbar.html", "css-files/navbar.css", "js-files/navbar.js");
// loadSection("landing", "html-files/landing.html", "css-files/landing.css", "js-files/landing.js");
// loadSection("weoffer", "html-files/weoffer.html", "css-files/weoffer.css", "js-files/weoffer.js");
// loadSection("training", "html-files/training.html", "css-files/training.css", "js-files/training.js");
// loadSection("duration", "html-files/duration.html", "css-files/duration.css", "js-files/duration.js");
loadSection("review", "html-files/review.html", "css-files/review.css", "js-files/review.js");
// loadSection("about", "html-files/about.html", "css-files/about.css", "js-files/about.js");
// loadSection("footer", "html-files/footer.html", "css-files/footer.css", null); // No JS for footer
