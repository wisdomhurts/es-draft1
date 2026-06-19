// Footer contour shader — clean, minimal, ambient. Thin topographic isolines
// over domain-warped terrain that drift and morph very slowly. No interaction,
// no accents — just a quiet living contour map behind the footer.
// Drives .footer-canvas (every page) and .paper-shader (case-studies hero).
// Paused off-screen; one static frame under prefers-reduced-motion.

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

  const vec3 LINE = vec3(0.34, 0.36, 0.38);   // soft slate

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
    vec2 q = vec2(fbm(p + vec2(0.0, t * 0.02)), fbm(p + vec2(5.2, 1.3 - t * 0.018)));
    return fbm(p + 1.4 * q);
  }

  void main(){
    float aspect = uRes.x / max(uRes.y, 1.0);
    vec2 uv = vUv;
    float t = uTime * 0.04;                          // slow, calm
    vec2 p = vec2(uv.x * aspect, uv.y) * 2.6 + vec2(t * 0.10, t * 0.05);

    float h = height(p, t);
    float bands = h * 14.0;                          // contour density
    float fr = fract(bands);
    float dd = min(fr, 1.0 - fr);
    float w = fwidth(bands) * 1.3;
    float line = 1.0 - smoothstep(0.0, w, dd);

    // atmosphere — quiet fade toward the top + soft vignette
    float depth = smoothstep(0.0, 1.0, uv.y);
    vec2 cc = uv - 0.5; cc.x *= aspect;
    float vig = smoothstep(1.2, 0.3, length(cc));

    float a = line * 0.16 * mix(0.5, 1.0, depth) * vig;
    gl_FragColor = vec4(LINE, a);
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
  const uniforms = { uTime: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) } };
  const mat = new THREE.ShaderMaterial({
    vertexShader: VERT, fragmentShader: FRAG, uniforms,
    transparent: true, depthTest: false, depthWrite: false,
    extensions: { derivatives: true },
  });
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));

  function resize() {
    const r = canvas.getBoundingClientRect();
    renderer.setSize(Math.max(1, Math.round(r.width)), Math.max(1, Math.round(r.height)), false);
    uniforms.uRes.value.set(Math.max(1, r.width), Math.max(1, r.height));
  }
  resize();
  let resizeTimer;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); }, { passive: true });

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const start = performance.now();
  const render = (now) => { uniforms.uTime.value = (now - start) / 1000; renderer.render(scene, cam); };

  render(reduce ? start + 6000 : start);
  if (reduce) return;

  let visible = false, running = false;
  function tick(now) { if (!visible) { running = false; return; } render(now); requestAnimationFrame(tick); }
  const io = new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
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
