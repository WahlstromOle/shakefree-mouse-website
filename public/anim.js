/* Calm entrance animations for the home page.
   Nothing here is needed to read or use the page: the page only hides things once this script
   has marked them, and the inline script in <head> switches everything back on if this file never runs.
   With animations switched off in Windows (prefers-reduced-motion) none of this runs. */
(function () {
  var root = document.documentElement;
  if (!root.classList.contains("anim") || !("IntersectionObserver" in window)) { root.classList.remove("anim"); return; }
  window.sfAnim = true;

  // Start an element's animation; a photo waits until its image is ready, so it never pops in half-loaded
  function show(el) {
    var img = el.querySelector("img");
    if (!img) { el.classList.add("in"); return; }
    var go = function () { el.classList.add("in"); };
    (img.decode ? img.decode() : Promise.resolve()).then(go, go);
  }

  function mark(el, cls, delay) {
    el.classList.add(cls);
    el.style.setProperty("--d", (delay || 0) + "s");
    return el;
  }

  // 1. On load: the top heading rises word by word, then the rest of the top section follows
  var h1 = document.querySelector(".hero h1"), words = [];
  if (h1) {
    words = h1.textContent.trim().split(/\s+/);
    h1.setAttribute("aria-label", h1.textContent.trim());
    h1.textContent = "";
    words.forEach(function (w, i) {
      var outer = document.createElement("span"), inner = document.createElement("span");
      outer.className = "w";
      outer.setAttribute("aria-hidden", "true");
      inner.textContent = w;
      inner.style.setProperty("--d", (0.15 + i * 0.05) + "s");
      outer.appendChild(inner);
      h1.appendChild(outer);
      if (i < words.length - 1) h1.appendChild(document.createTextNode(" "));
    });
  }
  var after = 0.15 + words.length * 0.05;
  var onLoad = [];
  Array.prototype.forEach.call(document.querySelectorAll(".hero-text > :not(h1)"), function (el, i) {
    onLoad.push(mark(el, "reveal", after + i * 0.1));
  });
  var heroPhoto = document.querySelector(".hero-photo");
  if (heroPhoto) onLoad.push(mark(heroPhoto, "reveal", 0.3));
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      if (h1) h1.classList.add("in");
      onLoad.forEach(show);
      root.classList.add("anim-ready");
    });
  });

  // 2. On scroll: blocks and photos rise into place, card groups one after another
  var watched = [];
  function watch(selector, cls, stagger) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), function (el) {
      if (el.parentNode.closest(".reveal")) return; // a parent already animates it
      var i = Array.prototype.indexOf.call(el.parentNode.children, el);
      watched.push(mark(el, cls, stagger ? (i % 4) * stagger : 0));
    });
  }
  watch("main .section-head, .familiar-head > figure, .statement p, .split > div, .demo-controls, .pad, .demo-note, .cards-note, .includes-title, .closing > *", "reveal");
  watch(".moments > li", "reveal", 0.09);
  watch(".pricing > .plan", "reveal", 0.12);
  watch(".includes > li", "reveal", 0.05);
  watch("main .photo:not(.hero-photo)", "reveal");

  var seen = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { show(e.target); seen.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  watched.forEach(function (el) { seen.observe(el); });

  // 3. Gentle depth: photos drift a little slower than the page
  var photos = Array.prototype.slice.call(document.querySelectorAll("main .photo img"));
  var queued = false;
  function drift() {
    queued = false;
    var vh = window.innerHeight;
    photos.forEach(function (img) {
      var r = img.parentNode.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var p = (r.top + r.height / 2 - vh / 2) / vh; // -1 … 1 around the middle of the screen
      img.style.transform = "scale(1.08) translateY(" + (p * -3).toFixed(2) + "%)";
    });
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(drift); } }
  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue);
  drift();
})();
