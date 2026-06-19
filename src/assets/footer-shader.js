// Footer topographic masterpiece — Three.js shader + GSAP.
// Domain-warped, time-evolving terrain rendered as hillshaded contour isolines,
// with a luminous gold "elevation sweep" that scans up through the topography
// (driven by a looping GSAP timeline) and cursor-reactive ripples that bow the
// contours around the pointer. Subtle by design: it lives behind the footer.
// Drives .footer-canvas (every page) and .paper-shader (case-studies hero).
// Paused off-screen; renders one static frame under prefers-reduced-motion.

import * as THREE from 'three';

const VERT = `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const FRAG = `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2  uRes;
  uniform vec2  uMouse;   // aspect-corrected uv space; offscreen when inactive
  uniform float uSweep;   // 0..1 elevation highlight band (GSAP-driven)

  const vec3 LINE   = vec3(0.30, 0.32, 0.34);
  const vec3 ACCENT = vec3(0.72, 0.51, 0.23);
  const vec3 GLOW   = vec3(0.88, 0.64, 0.32);
  const vec3 SHADOW = vec3(0.10, 0.07, 0.12);

  float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    float a = hash(i), b = hash(i + vec2(1.0, 0.0)), c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  float fbm(vec2 p){
    float v = 0.0, a = 0.55;
    mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < 4; i++){ v += a * noise(p); p = m * p; a *= 0.5; }
    return v;
  }
  float height(vec2 p, float t){
    vec2 q = vec2(fbm(p + vec2(0.0, t * 0.03)), fbm(p + vec2(5.2, 1.3 - t * 0.025)));
    return fbm(p + 1.5 * q);
  }

  void main(){
    float aspect = uRes.x / max(uRes.y, 1.0);
    vec2 uv = vUv;
    vec2 ap = vec2(uv.x * aspect, uv.y);
    float t = uTime * 0.06;

    // cursor ripple — bow the domain radially outward from the pointer
    vec2 toM = ap - uMouse;
    float md = length(toM);
    float ripple = exp(-md * md / 0.04);
    vec2 p = ap * 3.0 + vec2(t * 0.14, t * 0.07);
    p += normalize(toM + 1e-4) * ripple * 0.45;

    float e = 0.013;
    float h  = height(p, t);
    float hx = height(p + vec2(e, 0.0), t);
    float hy = height(p + vec2(0.0, e), t);

    vec3 n = normalize(vec3((h - hx) / e, (h - hy) / e, 2.2));
    float diff = clamp(dot(n, normalize(vec3(-0.55, 0.65, 0.85))), 0.0, 1.0);

    float bands = h * 18.0;
    float fr = fract(bands);
    float dd = min(fr, 1.0 - fr);
    float w = fwidth(bands) * 1.25;
    float line = 1.0 - smoothstep(0.0, w, dd);
    float idx = floor(bands);
    float accent = 1.0 - step(0.5, abs(mod(idx, 5.0)));

    // luminous elevation sweep — contours near height uSweep glow gold
    float sweepDist = abs(fract(h) - uSweep);
    float sweep = (1.0 - smoothstep(0.0, 0.16, min(sweepDist, 1.0 - sweepDist)));

    // atmosphere
    float depth = smoothstep(0.0, 1.0, uv.y);
    vec2 cc = uv - 0.5; cc.x *= aspect;
    float vig = smoothstep(1.15, 0.25, length(cc));

    vec3 lineCol = mix(LINE, ACCENT, accent);
    lineCol = mix(lineCol, GLOW, sweep);
    vec3 col = mix(SHADOW, lineCol, line);
    col = mix(col, GLOW, (1.0 - line) * sweep * 0.45);   // faint gold haze in the band

    float reliefA = (1.0 - diff) * 0.10;
    float lineA = line * (0.40 + 0.55 * sweep);
    float hazeA = sweep * 0.07;
    float a = max(max(reliefA, lineA), hazeA);
    a += ripple * 0.05;                                   // gentle lift around cursor
    a *= mix(0.45, 1.0, depth);
    a *= vig;
    a = clamp(a, 0.0, 0.6);

    gl_FragColor = vec4(col, a);
  }
`;

function initCanvas(canvas) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (e) { return; }
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

  const scene = new THREE.Scene();
  const cam = new THREE.Camera();
  const uniforms = {
    uTime:  { value: 0 },
    uRes:   { value: new THREE.Vector2(1, 1) },
    uMouse: { value: new THREE.Vector2(-10, -10) },
    uSweep: { value: 0 },
  };
  const mat = new THREE.ShaderMaterial({
    vertexShader: VERT, fragmentShader: FRAG, uniforms,
    transparent: true, depthTest: false, depthWrite: false,
    extensions: { derivatives: true },
  });
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));

  let W = 1, H = 1;
  function resize() {
    const r = canvas.getBoundingClientRect();
    W = Math.max(1, Math.round(r.width));
    H = Math.max(1, Math.round(r.height));
    renderer.setSize(W, H, false);
    uniforms.uRes.value.set(W, H);
  }
  resize();
  let resizeTimer;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); }, { passive: true });

  // cursor ripple — track pointer over the canvas, lerp toward target
  const target = new THREE.Vector2(-10, -10);
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('pointermove', (ev) => {
      const r = canvas.getBoundingClientRect();
      if (ev.clientX < r.left || ev.clientX > r.right || ev.clientY < r.top || ev.clientY > r.bottom) {
        target.set(-10, -10); return;
      }
      const aspect = W / Math.max(H, 1);
      target.set(((ev.clientX - r.left) / r.width) * aspect, 1.0 - (ev.clientY - r.top) / r.height);
    }, { passive: true });
  }

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const start = performance.now();

  // GSAP-driven elevation sweep (looping). Falls back to time if GSAP absent.
  const state = { sweep: 0 };
  let gsapTween = null;
  if (!reduce && window.gsap) {
    gsapTween = window.gsap.to(state, { sweep: 1, duration: 7, ease: 'none', repeat: -1 });
  }

  function render(now) {
    const tt = (now - start) / 1000;
    uniforms.uTime.value = tt;
    uniforms.uSweep.value = gsapTween ? state.sweep : (tt * 0.14) % 1;
    uniforms.uMouse.value.lerp(target, 0.08);
    renderer.render(scene, cam);
  }

  render(reduce ? start + 9000 : start);
  if (reduce) return;

  let visible = false, running = false;
  function tick(now) { if (!visible) { running = false; return; } render(now); requestAnimationFrame(tick); }
  const io = new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    if (gsapTween) { visible ? gsapTween.play() : gsapTween.pause(); }
    if (visible && !running) { running = true; requestAnimationFrame(tick); }
  }, { threshold: 0 });
  io.observe(canvas);
}

function init() {
  document.querySelectorAll('.footer-canvas, .paper-shader').forEach(initCanvas);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
