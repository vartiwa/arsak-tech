import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// Major Indian Hubs (Epicenters)
const INDIA_CITIES = [
  { id: "bengaluru", name: "Bengaluru", lat: 12.97, lon: 77.59, color: "#38bdf8", isIndia: true },
  { id: "mumbai", name: "Mumbai", lat: 19.07, lon: 72.87, color: "#fb923c", isIndia: true },
  { id: "delhi", name: "Delhi NCR", lat: 28.61, lon: 77.20, color: "#f59e0b", isIndia: true },
  { id: "hyderabad", name: "Hyderabad", lat: 17.38, lon: 78.48, color: "#60a5fa", isIndia: true },
  { id: "chennai", name: "Chennai", lat: 13.08, lon: 80.27, color: "#34d399", isIndia: true },
];

// Global Tech Capitals across All Continents
const GLOBAL_CITIES = [
  { id: "silicon_valley", name: "Silicon Valley", lat: 37.77, lon: -122.41, color: "#38bdf8" },
  { id: "new_york", name: "New York", lat: 40.71, lon: -74.00, color: "#60a5fa" },
  { id: "toronto", name: "Toronto", lat: 43.65, lon: -79.38, color: "#818cf8" },
  { id: "london", name: "London", lat: 51.50, lon: -0.12, color: "#93c5fd" },
  { id: "frankfurt", name: "Frankfurt", lat: 50.11, lon: 8.68, color: "#a5b4fc" },
  { id: "paris", name: "Paris", lat: 48.85, lon: 2.35, color: "#c084fc" },
  { id: "zurich", name: "Zurich", lat: 47.37, lon: 8.54, color: "#34d399" },
  { id: "stockholm", name: "Stockholm", lat: 59.33, lon: 18.06, color: "#38bdf8" },
  { id: "dubai", name: "Dubai", lat: 25.20, lon: 55.27, color: "#fbbf24" },
  { id: "riyadh", name: "Riyadh", lat: 24.71, lon: 46.67, color: "#f59e0b" },
  { id: "nairobi", name: "Nairobi", lat: -1.29, lon: 36.82, color: "#34d399" },
  { id: "capetown", name: "Cape Town", lat: -33.92, lon: 18.42, color: "#38bdf8" },
  { id: "singapore", name: "Singapore", lat: 1.35, lon: 103.81, color: "#2dd4bf" },
  { id: "tokyo", name: "Tokyo", lat: 35.67, lon: 139.65, color: "#f87171" },
  { id: "seoul", name: "Seoul", lat: 37.56, lon: 126.97, color: "#e879f9" },
  { id: "sydney", name: "Sydney", lat: -33.86, lon: 151.20, color: "#38bdf8" },
  { id: "sao_paulo", name: "São Paulo", lat: -23.55, lon: -46.63, color: "#fb7185" },
  { id: "mexico_city", name: "Mexico City", lat: 19.43, lon: -99.13, color: "#fb923c" },
];

// High-Speed Global Network Routes Bursting Out from India
const GLOBAL_ROUTES = [
  { from: "bengaluru", to: "silicon_valley", color: 0x38bdf8, packetColor: 0x7dd3fc },
  { from: "bengaluru", to: "london", color: 0x60a5fa, packetColor: 0x93c5fd },
  { from: "bengaluru", to: "singapore", color: 0x2dd4bf, packetColor: 0x5eead4 },
  { from: "bengaluru", to: "tokyo", color: 0x38bdf8, packetColor: 0x7dd3fc },
  { from: "bengaluru", to: "sydney", color: 0x0ea5e9, packetColor: 0x38bdf8 },
  { from: "mumbai", to: "new_york", color: 0xfb923c, packetColor: 0xfdba74 },
  { from: "mumbai", to: "frankfurt", color: 0x38bdf8, packetColor: 0x7dd3fc },
  { from: "mumbai", to: "dubai", color: 0xfbbf24, packetColor: 0xfde68a },
  { from: "mumbai", to: "capetown", color: 0x38bdf8, packetColor: 0x7dd3fc },
  { from: "delhi", to: "zurich", color: 0x34d399, packetColor: 0x6ee7b7 },
  { from: "delhi", to: "seoul", color: 0xe879f9, packetColor: 0xf5d0fe },
  { from: "delhi", to: "stockholm", color: 0x38bdf8, packetColor: 0x7dd3fc },
  { from: "delhi", to: "paris", color: 0xc084fc, packetColor: 0xd8b4fe },
  { from: "hyderabad", to: "silicon_valley", color: 0x60a5fa, packetColor: 0x93c5fd },
  { from: "hyderabad", to: "london", color: 0x38bdf8, packetColor: 0x7dd3fc },
  { from: "hyderabad", to: "riyadh", color: 0xf59e0b, packetColor: 0xfbbf24 },
  { from: "chennai", to: "toronto", color: 0x818cf8, packetColor: 0xa5b4fc },
  { from: "chennai", to: "sao_paulo", color: 0xfb7185, packetColor: 0xfda4af },
  { from: "chennai", to: "mexico_city", color: 0xfb923c, packetColor: 0xfdba74 },
  { from: "chennai", to: "nairobi", color: 0x34d399, packetColor: 0x6ee7b7 },
  { from: "chennai", to: "singapore", color: 0x2dd4bf, packetColor: 0x5eead4 },

  // --- High-Speed Domestic Indian Grid ---
  { from: "bengaluru", to: "mumbai", color: 0x38bdf8, packetColor: 0x7dd3fc },
  { from: "mumbai", to: "delhi", color: 0xfb923c, packetColor: 0xfdba74 },
  { from: "delhi", to: "hyderabad", color: 0x60a5fa, packetColor: 0x93c5fd },
  { from: "hyderabad", to: "bengaluru", color: 0x38bdf8, packetColor: 0x7dd3fc },
  { from: "bengaluru", to: "chennai", color: 0x34d399, packetColor: 0x6ee7b7 },
  { from: "chennai", to: "mumbai", color: 0xfb923c, packetColor: 0xfdba74 },
];

function latLonToVec3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// High-Fidelity Fractal Brownian Motion (fBm) Clouds Generator
function createUltraRealisticCloudsTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  const imgData = ctx.createImageData(2048, 1024);
  const data = imgData.data;

  const perm = new Uint8Array(512);
  for (let i = 0; i < 256; i++) perm[i] = (i * 157 + 73) & 255;
  for (let i = 0; i < 256; i++) perm[256 + i] = perm[i];

  function grad(hash, x, y) {
    const h = hash & 7;
    const u = h < 4 ? x : y;
    const v = h < 4 ? y : x;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  function noise2D(x, y) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const u = xf * xf * (3 - 2 * xf);
    const v = yf * yf * (3 - 2 * yf);
    const A = perm[X] + Y;
    const B = perm[X + 1] + Y;
    const g00 = grad(perm[A], xf, yf);
    const g10 = grad(perm[B], xf - 1, yf);
    const g01 = grad(perm[A + 1], xf, yf - 1);
    const g11 = grad(perm[B + 1], xf - 1, yf - 1);
    const x1 = g00 + u * (g10 - g00);
    const x2 = g01 + u * (g11 - g01);
    return x1 + v * (x2 - x1);
  }

  function fbm(x, y) {
    let total = 0;
    let amp = 1.0;
    let freq = 1.0;
    let maxVal = 0;
    for (let o = 0; o < 5; o++) {
      total += noise2D(x * freq, y * freq) * amp;
      maxVal += amp;
      amp *= 0.52;
      freq *= 2.1;
    }
    return (total / maxVal + 1.0) * 0.5;
  }

  for (let py = 0; py < 1024; py++) {
    const lat = (py / 1024 - 0.5) * Math.PI;
    const sinLat = Math.sin(lat);
    const beltFactor = Math.exp(-Math.pow(sinLat, 2) * 5.0) * 0.65 +
                       Math.exp(-Math.pow(Math.abs(sinLat) - 0.55, 2) * 22.0) * 0.9 +
                       Math.exp(-Math.pow(Math.abs(sinLat) - 0.85, 2) * 18.0) * 0.45;

    for (let px = 0; px < 2048; px++) {
      const nx = (px / 2048) * 8.0;
      const ny = (py / 1024) * 4.0;
      const qx = fbm(nx + 1.2, ny + 0.8);
      const qy = fbm(nx + 3.4, ny + 2.5);
      const rawNoise = fbm(nx + 3.0 * qx, ny + 3.0 * qy);

      let cloudVal = (rawNoise * 1.3 - 0.45) * beltFactor;
      cloudVal = Math.max(0, Math.min(1, cloudVal));
      const alpha = Math.pow(cloudVal, 1.6) * 0.72;

      const idx = (py * 2048 + px) * 4;
      data[idx] = 255;
      data[idx + 1] = 255;
      data[idx + 2] = 255;
      data[idx + 3] = Math.floor(alpha * 255);
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

export const ThreePhotoSphere = () => {
  const mountRef = useRef(null);
  const isDragging = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0.0006, y: 0.0016 });
  const isVisible = useRef(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 500;
    const height = mount.clientHeight || 500;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.z = 7.0;

    // 2. High-Precision WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    const maxAniso = renderer.capabilities.getMaxAnisotropy();

    // 3. Texture Loading (NASA Satellite Maps + Procedural Clouds)
    const textureLoader = new THREE.TextureLoader();
    const dayTexture = textureLoader.load("/textures/earth/earth_atmos_2048.jpg");
    const nightTexture = textureLoader.load("/textures/earth/earth_lights_2048.png");
    const normalTexture = textureLoader.load("/textures/earth/earth_normal_2048.jpg");
    const specularTexture = textureLoader.load("/textures/earth/earth_specular_2048.jpg");
    const cloudsTexture = createUltraRealisticCloudsTexture();

    [dayTexture, nightTexture, normalTexture, specularTexture, cloudsTexture].forEach((t) => {
      t.minFilter = THREE.LinearMipmapLinearFilter;
      t.magFilter = THREE.LinearFilter;
      t.anisotropy = Math.min(8, maxAniso);
    });

    // 4. Cosmic Background Starfield
    const starCount = 350;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const r = 25 + Math.random() * 35;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = r * Math.cos(phi);

      const b = 0.55 + Math.random() * 0.45;
      starColors[i * 3] = b * (0.8 + Math.random() * 0.2);
      starColors[i * 3 + 1] = b * (0.85 + Math.random() * 0.15);
      starColors[i * 3 + 2] = b;
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.085,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    // scene.add(starField);

    // 5. Earth Master Group
    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    const globeRadius = 2.0;
    const sunDirection = new THREE.Vector3(1.3, 0.4, 0.75).normalize();

    // --- LAYER 1: Photorealistic Earth Surface ---
    const earthShader = {
      uniforms: {
        dayMap: { value: dayTexture },
        nightMap: { value: nightTexture },
        normalMap: { value: normalTexture },
        specularMap: { value: specularTexture },
        sunDir: { value: sunDirection },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D dayMap;
        uniform sampler2D nightMap;
        uniform sampler2D normalMap;
        uniform sampler2D specularMap;
        uniform vec3 sunDir;

        varying vec3 vNormal;
        varying vec2 vUv;
        varying vec3 vPosition;

        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(-vPosition);

          vec3 normalMapVal = texture2D(normalMap, vUv).xyz * 2.0 - 1.0;
          vec3 perturbedNormal = normalize(normal + normalMapVal * 0.22);

          float sunDot = dot(perturbedNormal, normalize(sunDir));
          float dayFactor = smoothstep(-0.15, 0.35, sunDot);
          float twilightFactor = smoothstep(-0.25, 0.05, sunDot) * (1.0 - smoothstep(0.05, 0.4, sunDot));

          vec4 dayTex = texture2D(dayMap, vUv);
          vec4 nightTex = texture2D(nightMap, vUv);
          vec4 specTex = texture2D(specularMap, vUv);

          vec3 halfVec = normalize(normalize(sunDir) + viewDir);
          float specDot = max(dot(perturbedNormal, halfVec), 0.0);
          float specular = pow(specDot, 36.0) * specTex.r * dayFactor;
          vec3 oceanGlint = vec3(0.9, 0.95, 1.0) * specular * 0.85;

          vec3 nightLights = nightTex.rgb * vec3(2.4, 1.75, 0.9) * (1.0 - dayFactor);
          vec3 surface = mix(nightLights, dayTex.rgb, dayFactor) + oceanGlint;
          vec3 sunsetGlow = vec3(0.98, 0.42, 0.15) * twilightFactor * 0.28;
          surface += sunsetGlow;

          float fresnel = 1.0 - max(0.0, dot(viewDir, normal));
          float rim = pow(fresnel, 3.4);
          vec3 atmoColor = vec3(0.18, 0.62, 1.0) * rim * (dayFactor * 0.95 + 0.3);

          gl_FragColor = vec4(surface + atmoColor, 1.0);
        }
      `,
    };

    const earthGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const earthMat = new THREE.ShaderMaterial(earthShader);
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earthMesh);

    // --- LAYER 2: Multi-Octave Fractal Atmospheric Clouds Layer ---
    const cloudShader = {
      uniforms: {
        cloudsMap: { value: cloudsTexture },
        sunDir: { value: sunDirection },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D cloudsMap;
        uniform vec3 sunDir;
        varying vec3 vNormal;
        varying vec2 vUv;
        varying vec3 vPosition;

        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(-vPosition);
          float sunDot = dot(normal, normalize(sunDir));
          float dayFactor = smoothstep(-0.15, 0.3, sunDot);

          vec4 cloudSample = texture2D(cloudsMap, vUv);
          float alpha = cloudSample.a * 0.44;

          vec3 dayColor = vec3(0.96, 0.98, 1.0);
          vec3 nightColor = vec3(0.04, 0.06, 0.1);
          vec3 color = mix(nightColor, dayColor, dayFactor);

          float rim = pow(1.0 - max(0.0, dot(viewDir, normal)), 2.8);
          color += vec3(0.3, 0.7, 1.0) * rim * dayFactor * 0.25;

          gl_FragColor = vec4(color, alpha * (dayFactor * 0.85 + 0.15));
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    };

    const cloudGeo = new THREE.SphereGeometry(globeRadius * 1.014, 64, 64);
    const cloudMesh = new THREE.Mesh(cloudGeo, new THREE.ShaderMaterial(cloudShader));
    earthGroup.add(cloudMesh);

    // --- LAYER 3: City Radar Beacons & Concentric Ripple Rings ---
    const allCities = [...INDIA_CITIES, ...GLOBAL_CITIES];
    const beaconMaterials = [];
    const dotGeo = new THREE.SphereGeometry(0.024, 12, 12);
    const ringGeo = new THREE.RingGeometry(0.034, 0.052, 16);
    const outerRingGeo = new THREE.RingGeometry(0.06, 0.076, 16);

    allCities.forEach((c) => {
      const pos = latLonToVec3(c.lat, c.lon, globeRadius * 1.008);
      const isIndia = !!c.isIndia;

      // Core glowing LED Pin
      const dotMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(c.color),
      });
      const dotMesh = new THREE.Mesh(dotGeo, dotMat);
      dotMesh.position.copy(pos);
      if (isIndia) dotMesh.scale.set(1.45, 1.45, 1.45);
      earthGroup.add(dotMesh);

      // Inner Pulsing Radar Ring
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(c.color),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: isIndia ? 0.95 : 0.6,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(pos);
      ringMesh.lookAt(0, 0, 0);
      earthGroup.add(ringMesh);

      // Outer Expanding Ripple Ring (for Indian Hubs)
      let outerMesh = null;
      let outerMat = null;
      if (isIndia) {
        outerMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color(c.color),
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.5,
        });
        outerMesh = new THREE.Mesh(outerRingGeo, outerMat);
        outerMesh.position.copy(pos);
        outerMesh.lookAt(0, 0, 0);
        earthGroup.add(outerMesh);
      }

      beaconMaterials.push({ ringMesh, ringMat, outerMesh, outerMat, isIndia });
    });

    // --- LAYER 4: 3D Directional Traveling Arrows (Forward-Oriented Chevrons) ---
    const animatedRoutes = [];
    const dashedLines = [];
    // Cone arrowhead geometry pointing forward along Y-axis
    const arrowGeo = new THREE.ConeGeometry(0.032, 0.085, 8);
    arrowGeo.translate(0, 0.04, 0); // Center apex for accurate orientation
    const tailArrowGeo = new THREE.ConeGeometry(0.022, 0.06, 8);
    tailArrowGeo.translate(0, 0.03, 0);

    GLOBAL_ROUTES.forEach((route, idx) => {
      const fromCity = allCities.find((c) => c.id === route.from);
      const toCity = allCities.find((c) => c.id === route.to);
      if (!fromCity || !toCity) return;

      const vA = latLonToVec3(fromCity.lat, fromCity.lon, globeRadius * 1.008);
      const vB = latLonToVec3(toCity.lat, toCity.lon, globeRadius * 1.008);

      const mid = vA.clone().add(vB).multiplyScalar(0.5);
      const dist = vA.distanceTo(vB);
      mid.setLength(globeRadius * 1.008 + dist * 0.30);

      const curve = new THREE.QuadraticBezierCurve3(vA, mid, vB);
      const points = curve.getPoints(48);

      // 1. Sleek Laser Base Line
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineDashedMaterial({
        color: route.color,
        dashSize: 0.16,
        gapSize: 0.08,
        transparent: true,
        opacity: 0.65,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      line.computeLineDistances();
      earthGroup.add(line);
      dashedLines.push(line);

      // 2. Primary Leading 3D Directional Arrow
      const arrowMat = new THREE.MeshBasicMaterial({
        color: route.packetColor,
      });
      const arrowMesh = new THREE.Mesh(arrowGeo, arrowMat);
      earthGroup.add(arrowMesh);

      // 3. Trailing Directional Arrow Pulse
      const tailMat = new THREE.MeshBasicMaterial({
        color: route.packetColor,
        transparent: true,
        opacity: 0.5,
      });
      const tailMesh = new THREE.Mesh(tailArrowGeo, tailMat);
      earthGroup.add(tailMesh);

      animatedRoutes.push({
        arrowMesh,
        tailMesh,
        curve,
        progress: (idx * 0.12) % 1.0,
        speed: 0.0042 + (idx % 4) * 0.0012,
      });
    });

    // --- LAYER 5: Soft Atmospheric Rayleigh Horizon Halo ---
    const atmoShader = {
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.66 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.2);
          gl_FragColor = vec4(0.22, 0.65, 1.0, 1.0) * intensity * 1.8;
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    };
    const atmoGeo = new THREE.SphereGeometry(globeRadius * 1.045, 64, 64);
    const atmoMesh = new THREE.Mesh(atmoGeo, new THREE.ShaderMaterial(atmoShader));
    earthGroup.add(atmoMesh);

    // --- LAYER 6: Subtle Golden Sunrise Glow on Horizon Limb ---
    const flareCanvas = document.createElement("canvas");
    flareCanvas.width = 256;
    flareCanvas.height = 256;
    const fCtx = flareCanvas.getContext("2d");
    const flareGrad = fCtx.createRadialGradient(128, 128, 2, 128, 128, 110);
    flareGrad.addColorStop(0, "rgba(255, 255, 255, 0.8)");
    flareGrad.addColorStop(0.2, "rgba(254, 215, 170, 0.55)");
    flareGrad.addColorStop(0.5, "rgba(251, 146, 60, 0.2)");
    flareGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
    fCtx.fillStyle = flareGrad;
    fCtx.fillRect(0, 0, 256, 256);

    const flareTex = new THREE.CanvasTexture(flareCanvas);
    const flareMat = new THREE.SpriteMaterial({
      map: flareTex,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.55,
    });
    const flareSprite = new THREE.Sprite(flareMat);
    flareSprite.scale.set(0.75, 0.75, 1.0);
    flareSprite.position.set(globeRadius * 0.94, globeRadius * 0.35 + 0.10, globeRadius * 0.22);
    scene.add(flareSprite);

    // Initial framing orientation centered over India & Outbound Global Routes
    earthGroup.rotation.x = 0.24;
    earthGroup.rotation.y = -1.35;

    // 6. Smooth Mouse & Touch Drag Controls with Inertia
    const onPointerDown = (e) => {
      isDragging.current = true;
      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - prevMousePos.current.x;
      const deltaY = e.clientY - prevMousePos.current.y;
      prevMousePos.current = { x: e.clientX, y: e.clientY };

      const speed = 0.0055;
      earthGroup.rotation.y += deltaX * speed;
      earthGroup.rotation.x += deltaY * speed;

      velocity.current = { x: deltaY * speed, y: deltaX * speed };
    };

    const onPointerUp = () => {
      isDragging.current = false;
    };

    mount.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // 7. IntersectionObserver: Pause rendering when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(mount);

    const onVisibilityChange = () => {
      if (document.hidden) isVisible.current = false;
      else isVisible.current = true;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // 8. 60FPS Cinematic Animation Loop with Dynamic Flowing Line Pulses
    let animationId;
    let pulseClock = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!isVisible.current) return;

      if (!isDragging.current) {
        velocity.current.x *= 0.95;
        velocity.current.y *= 0.95;
        earthGroup.rotation.x += velocity.current.x;
        earthGroup.rotation.y += velocity.current.y + 0.0014;
      }

      // Smooth parallax cloud rotation
      cloudMesh.rotation.y += 0.0003;

      // Pulse beacon rings animation with concentric expansion
      pulseClock += 0.038;
      const scale = 1.0 + Math.sin(pulseClock) * 0.42;
      const alpha = 0.45 + Math.cos(pulseClock) * 0.35;
      const outerScale = 1.0 + Math.sin(pulseClock + 0.8) * 0.55;
      const outerAlpha = Math.max(0.0, 0.4 - Math.sin(pulseClock + 0.8) * 0.35);

      beaconMaterials.forEach(({ ringMesh, ringMat, outerMesh, outerMat, isIndia }) => {
        ringMesh.scale.set(scale, scale, scale);
        ringMat.opacity = Math.max(0.18, alpha * (isIndia ? 1.0 : 0.7));
        if (outerMesh && outerMat) {
          outerMesh.scale.set(outerScale, outerScale, outerScale);
          outerMat.opacity = outerAlpha;
        }
      });

      // Animate flowing dashed laser lines
      dashedLines.forEach((line) => {
        if (line.material) {
          line.material.dashOffset -= 0.006;
        }
      });

      // Animate 3D Directional Arrows oriented forward along curve trajectory
      const upVec = new THREE.Vector3(0, 1, 0);
      animatedRoutes.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1.0) p.progress = 0.0;

        // 1. Leading Arrowhead Position & Tangent Orientation
        const headPoint = p.curve.getPointAt(p.progress);
        const headTangent = p.curve.getTangentAt(p.progress).normalize();
        p.arrowMesh.position.copy(headPoint);
        p.arrowMesh.quaternion.setFromUnitVectors(upVec, headTangent);

        // 2. Trailing Arrowhead Position & Tangent Orientation
        const tailProgress = Math.max(0.0, p.progress - 0.05);
        const tailPoint = p.curve.getPointAt(tailProgress);
        const tailTangent = p.curve.getTangentAt(tailProgress).normalize();
        p.tailMesh.position.copy(tailPoint);
        p.tailMesh.quaternion.setFromUnitVectors(upVec, tailTangent);

        // Dynamic scale at arc apogee
        const altScale = 1.0 + Math.sin(p.progress * Math.PI) * 0.35;
        p.arrowMesh.scale.set(altScale, altScale, altScale);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      mount.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      dayTexture.dispose();
      nightTexture.dispose();
      normalTexture.dispose();
      specularTexture.dispose();
      cloudsTexture.dispose();
      flareTex.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full aspect-square flex items-center justify-center select-none">
      {/* 100% Clean Transparent WebGL Canvas */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing touch-none" />
    </div>
  );
};
