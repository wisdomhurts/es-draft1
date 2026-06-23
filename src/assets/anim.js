// Motion layer trigger — adds .is-in to elements as they enter the
// viewport, which drives the CSS draw-in animations (section-label
// hairlines, dividers, line icons). Fully reduced-motion aware: if the
// user prefers reduced motion, everything is shown in its final state
// immediately and nothing animates.
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.section-label, .divider, .es-icon, .why-step');
  if (!els.length) return;

  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });

  els.forEach(function (el) { io.observe(el); });
})();

// Team portraits — play the loop on hover, pause (and reset) on leave.
// Still image shows underneath whenever the video is paused/hidden.
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.team-photo video.team-loop').forEach(function (v) {
    var card = v.closest('.team-lead, .team-grid-member, .team-member') || v.parentNode;
    card.addEventListener('mouseenter', function () {
      if (v.readyState === 0) v.load();
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    });
    card.addEventListener('mouseleave', function () { v.pause(); });
  });
})();
