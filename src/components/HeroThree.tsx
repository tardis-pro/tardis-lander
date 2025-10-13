import { useEffect, useRef } from "react";

type Props = {
  keywords?: string[];
  accentColor?: string;
};

// We lazy-load Three.js at runtime to avoid bundler/lockfile changes in build envs.
// Utility creator lives inside the effect after Three is loaded.

export default function HeroThree({
  keywords = [
    "GIS",
    "AI",
    "EdTech",
    "Routing",
    "Digital Twins",
    "PostGIS",
    "MapLibre",
    "Deck.gl",
  ],
  accentColor = "#22d3ee",
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const container = containerRef.current!;
    if (!container) return;

    // Respect reduce motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduceMotion = mediaQuery.matches;
    let cleanup: (() => void) | null = null;
    (async () => {
      // Load Three from CDN at runtime
      // Using unpkg ESM build keeps bundler neutral and avoids lockfile edits
      const THREE: any = await import(
        "https://unpkg.com/three@0.160.0/build/three.module.js"
      );

      function makeLabelSprite(text: string, colorA = "#22d3ee", colorB = "#a78bfa") {
        const canvas = document.createElement("canvas");
        canvas.width = 512;
        canvas.height = 256;
        const ctx = canvas.getContext("2d")!;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const radius = 56;
        const w = canvas.width - 64;
        const h = 112;
        const x = (canvas.width - w) / 2;
        const y = (canvas.height - h) / 2;
        ctx.fillStyle = "rgba(255,255,255,0.06)";
        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.arcTo(x + w, y, x + w, y + h, radius);
        ctx.arcTo(x + w, y + h, x, y + h, radius);
        ctx.arcTo(x, y + h, x, y, radius);
        ctx.arcTo(x, y, x + w, y, radius);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        const grad = ctx.createLinearGradient(x, y, x + w, y + h);
        grad.addColorStop(0, colorA);
        grad.addColorStop(1, colorB);
        ctx.fillStyle = grad;
        ctx.font = "bold 64px 'Space Grotesk', system-ui, -apple-system, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.shadowColor = "rgba(0,0,0,0.25)";
        ctx.shadowBlur = 8;
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);

        const tex = new THREE.CanvasTexture(canvas);
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = false;
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
        const sprite = new THREE.Sprite(mat);
        const scale = 1.2;
        sprite.scale.set(3.2 * scale, 1.6 * scale, 1);
        return sprite;
      }

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x020617, 0.08);
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200);
      camera.position.set(0, 0, 9);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const light = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(light);
      const dir = new THREE.DirectionalLight(0xffffff, 0.4);
      dir.position.set(2, 3, 5);
      scene.add(dir);

      const starGeo = new THREE.BufferGeometry();
      const starCount = 400;
      const positions = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i++) {
        const r = 24 * Math.random() + 4;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
      }
      starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const starMat = new THREE.PointsMaterial({ color: 0x6b7280, size: 0.02, transparent: true });
      const stars = new THREE.Points(starGeo, starMat);
      scene.add(stars);

      const group = new THREE.Group();
      scene.add(group);
      const sprites: { sprite: any; radius: number; speed: number; phase: number }[] = [];
      keywords.forEach((kw, i) => {
        const hueShift = i / Math.max(1, keywords.length - 1);
        const colorA = new THREE.Color(accentColor).offsetHSL(hueShift * 0.2, 0, 0).getStyle();
        const colorB = new THREE.Color("#a78bfa").offsetHSL(-hueShift * 0.15, 0, 0).getStyle();
        const sprite = makeLabelSprite(kw, colorA, colorB);
        const radius = 3.8 + (i % 3) * 0.6;
        const speed = 0.2 + (i % 5) * 0.03;
        const phase = (i / keywords.length) * Math.PI * 2;
        sprites.push({ sprite, radius, speed, phase });
        group.add(sprite);
      });

      const resize = () => {
        const { clientWidth, clientHeight } = container;
        renderer.setSize(clientWidth, clientHeight);
        camera.aspect = clientWidth / Math.max(1, clientHeight);
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(container);

      let raf = 0;
      const clock = new THREE.Clock();
      const animate = () => {
        const t = clock.getElapsedTime();
        group.rotation.y = t * 0.08;
        (stars.rotation as any).y = t * 0.01;
        sprites.forEach((s, idx) => {
          const a = t * s.speed + s.phase;
          const y = Math.sin(a * 0.9) * 0.6;
          const x = Math.cos(a) * s.radius;
          const z = Math.sin(a) * s.radius;
          s.sprite.position.set(x, y, z);
          s.sprite.material.opacity = 0.85 + 0.15 * Math.sin(a + idx);
        });
        renderer.render(scene, camera);
        raf = reduceMotion ? 0 : requestAnimationFrame(animate);
      };
      animate();

      cleanup = () => {
        if (raf) cancelAnimationFrame(raf);
        ro.disconnect();
        if (renderer && renderer.domElement && renderer.domElement.parentElement === container) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    })();

    return () => {
      if (cleanup) cleanup();
    };
  }, [keywords, accentColor]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 pointer-events-none"
      aria-hidden
    />
  );
}
