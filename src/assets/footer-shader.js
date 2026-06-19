// Topographic contour shader — subtle animated isolines evoking an elevation
// map. Drives the dormant .footer-canvas (every page) and .paper-shader
// (case-studies hero). Both sit on the warm quartz page, so lines are a faint
// slate with an occasional gold accent contour. Paused when off-screen and
// rendered as a single static frame under prefers-reduced-motion.

import * as THREE from 'three';

const VERT = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FRAG = `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2  uRes;
  uniform vec3  uLine;
  uniform vec3  uAccent;
  uniform float uAlpha;

  float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    float a = hash(i), b = hash(i + vec2(1.0, 0.0)), c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  float fbm(vec2 p){
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++){ v += a * noise(p); p *= 2.0; a *= 0.5; }
    return v;
  }

  void main(){
    vec2 uv = vUv;
    uv.x *= uRes.x / max(uRes.y, 1.0);
    vec2 p = uv * 3.2 + vec2(uTime * 0.018, uTime * 0.012);
    float n = fbm(p);
    float lines = n * 16.0;                 // number of contour bands
    float f = fract(lines);
    float dist = min(f, 1.0 - f);           // distance to nearest isoline
    float w = fwidth(lines) * 1.1;          // anti-aliased line width
    float line = 1.0 - smoothstep(0.0, w, dist);
    float idx = floor(lines);
    float accent = 1.0 - step(0.5, abs(mod(idx, 5.0)));  // every 5th line = gold
    vec3 col = mix(uLine, uAccent, accent);
    gl_FragColor = vec4(col, line * uAlpha);
  }
`;

function initCanvas(canvas) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (e) {
    return; // WebGL unavailable — leave canvas blank, no error
  }
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace; // pass our sRGB values straight through
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const scene = new THREE.Scene();
  const cam = new THREE.Camera();
  const uniforms = {
    uTime:   { value: 0 },
    uRes:    { value: new THREE.Vector2(1, 1) },
    uLine:   { value: new THREE.Vector3(0.353, 0.373, 0.388) }, // slate #5A5F63
    uAccent: { value: new THREE.Vector3(0.722, 0.510, 0.227) }, // ore #B8823A
    uAlpha:  { value: 0.16 },
  };
  const mat = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    uniforms,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    extensions: { derivatives: true },
  });
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));

  function resize() {
    const r = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.round(r.width));
    const h = Math.max(1, Math.round(r.height));
    renderer.setSize(w, h, false);
    uniforms.uRes.value.set(w, h);
  }
  resize();
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  }, { passive: true });

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const start = performance.now();
  const render = (now) => {
    uniforms.uTime.value = (now - start) / 1000;
    renderer.render(scene, cam);
  };

  // Always draw one frame so the contours are present even before scroll.
  render(reduce ? start + 6000 : start);
  if (reduce) return;

  // Animate only while visible.
  let visible = false;
  let running = false;
  function tick(now) {
    if (!visible) { running = false; return; }
    render(now);
    requestAnimationFrame(tick);
  }
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
