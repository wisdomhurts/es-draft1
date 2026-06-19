/* GSAP motion layer — hero line reveal + magnetic CTAs.
   Fully gated on prefers-reduced-motion; degrades to plain visible content
   if GSAP fails to load. */
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var gsap = window.gsap;

  // No GSAP or user prefers reduced motion: make sure nothing stays hidden.
  if (!gsap || reduce) {
    root.classList.remove('motion-prep');
    return;
  }

  // Keep tweens deterministic if a load hitch produces a large frame gap.
  if (gsap.ticker && gsap.ticker.lagSmoothing) gsap.ticker.lagSmoothing(0);

  // --- Hero headline: clip-reveal each line, then fade in body + buttons ---
  var headline = document.querySelector('.hero .hero-headline');
  var heroContent = document.querySelector('.hero .hero-content');
  if (headline) splitLines(headline);
  root.classList.remove('motion-prep');

  if (headline && heroContent) {
    var lines = headline.querySelectorAll('.line > span');
    var body = heroContent.querySelector('.hero-body');
    var btns = heroContent.querySelector('.hero-buttons');
    gsap.set(lines, { yPercent: 110 });
    if (body) gsap.set(body, { opacity: 0, y: 18 });
    if (btns) gsap.set(btns, { opacity: 0, y: 18 });
    var tl = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: 0.15 });
    tl.to(lines, { yPercent: 0, duration: 1.0, stagger: 0.1 });
    if (body) tl.to(body, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6');
    if (btns) tl.to(btns, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6');
  }

  // --- Magnetic CTAs (fine-pointer / hover devices only) ---
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta').forEach(function (btn) {
      if (getComputedStyle(btn).display === 'inline') btn.style.display = 'inline-block';
      var xTo = gsap.quickTo(btn, 'x', { duration: 0.45, ease: 'power3.out' });
      var yTo = gsap.quickTo(btn, 'y', { duration: 0.45, ease: 'power3.out' });
      btn.addEventListener('pointermove', function (e) {
        var r = btn.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.4);
      });
      btn.addEventListener('pointerleave', function () { xTo(0); yTo(0); });
    });
  }

  // --- Scroll reveals (section headlines, service rows, case visuals) ---
  if (window.ScrollTrigger) {
    gsap.registerPlugin(window.ScrollTrigger);

    gsap.utils.toArray('.section-headline, .services-editorial-head .section-label').forEach(function (el) {
      gsap.from(el, {
        opacity: 0, y: 28, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      });
    });

    var rows = gsap.utils.toArray('.services-editorial-row');
    if (rows.length) {
      gsap.from(rows, {
        opacity: 0, y: 24, duration: 0.7, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: '.services-editorial-list', start: 'top 80%' },
      });
    }

    gsap.utils.toArray('.case-logo, .case-multiplier, .stats-grid').forEach(function (el) {
      gsap.from(el, {
        opacity: 0, y: 20, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      });
    });
  }

  // Split an element's innerHTML into <br>-delimited lines, each wrapped for a
  // clip reveal: .line (overflow hidden) > span (translated).
  function splitLines(el) {
    var parts = el.innerHTML.split(/<br\s*\/?>/i);
    el.innerHTML = parts
      .map(function (p) { return '<span class="line"><span>' + p + '</span></span>'; })
      .join('');
  }
})();
