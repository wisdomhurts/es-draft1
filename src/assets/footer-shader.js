// Atmospheric 3D topographic contour shader. Drives the dormant .footer-canvas
// (every page) and .paper-shader (case-studies hero). Domain-warped fbm terrain,
// hillshaded with surface normals for a 3D relief feel, overlaid with crisp
// contour isolines (gold every 5th), an atmospheric depth gradient + vignette,
// and a slow chill drift. Subtle: it reads as an embossed map behind the page.
// Paused off-screen; renders a single static frame under prefers-reduced-motion.

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

  // sRGB palette (renderer outputs LinearSRGB, so these pass through)
  const vec3 LINE   = vec3(0.30, 0.32, 0.34);   // slate isolines
  const vec3 ACCENT = vec3(0.72, 0.51, 0.23);   // ore gold (every 5th)
  const vec3 SHADOW = vec3(0.10, 0.07, 0.12);   // graphite relief shadow

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
  // domain-warped terrain height — flowing, organic ridgelines
  float height(vec2 p, float t){
    vec2 q = vec2(fbm(p + vec2(0.0, t * 0.03)), fbm(p + vec2(5.2, 1.3 - t * 0.025)));
    return fbm(p + 1.5 * q);
  }

  void main(){
    float aspect = uRes.x / max(uRes.y, 1.0);
    vec2 uv = vUv;
    vec2 p = vec2(uv.x * aspect, uv.y) * 3.0;
    float t = uTime * 0.06;                 // chill, slow
    p += vec2(t * 0.14, t * 0.07);          // gentle drift

    float e = 0.013;
    float h  = height(p, t);
    float hx = height(p + vec2(e, 0.0), t);
    float hy = height(p + vec2(0.0, e), t);

    // surface normal from the height gradient → soft 3D relief
    vec3 n = normalize(vec3((h - hx) / e, (h - hy) / e, 2.2));
    vec3 lightDir = normalize(vec3(-0.55, 0.65, 0.85));
    float diff = clamp(dot(n, lightDir), 0.0, 1.0);

    // contour isolines
    float bands = h * 18.0;
    float fr = fract(bands);
    float dd = min(fr, 1.0 - fr);
    float w = fwidth(bands) * 1.25;
    float line = 1.0 - smoothstep(0.0, w, dd);
    float idx = floor(bands);
    float accent = 1.0 - step(0.5, abs(mod(idx, 5.0)));   // every 5th = gold

    // atmosphere — fade toward the top, soft radial vignette
    float depth = smoothstep(0.0, 1.0, uv.y);
    vec2 cc = uv - 0.5; cc.x *= aspect;
    float vig = smoothstep(1.15, 0.25, length(cc));

    vec3 lineCol = mix(LINE, ACCENT, accent);
    vec3 col = mix(SHADOW, lineCol, line);

    float reliefA = (1.0 - diff) * 0.10;     // shadowed slopes faintly visible
    float lineA = line * 0.42;
    float a = max(reliefA, lineA);
    a *= mix(0.45, 1.0, depth);              // atmospheric top fade
    a *= vig;
    a *= 0.95;

    gl_FragColor = vec4(col, a);
  }
`;

function initCanvas(canvas) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (e) {
    return; // WebGL unavailable — leave canvas blank
  }
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

  const scene = new THREE.Scene();
  const cam = new THREE.Camera();
  const uniforms = {
    uTime: { value: 0 },
    uRes: { value: new THREE.Vector2(1, 1) },
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

  render(reduce ? start + 8000 : start);   // one frame so it's present pre-scroll
  if (reduce) return;

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
