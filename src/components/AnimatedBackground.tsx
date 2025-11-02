"use client";
import { useEffect, useRef } from "react";

// Tamaño real de tu imagen
const IMG_W = 1400;
const IMG_H = 5792;
const ASPECT = IMG_H / IMG_W;

// Ligero scale para garantizar cobertura total (ajusta 1.02–1.06 si hace falta)
const SCALE = 1.03;

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const bgImage = `${basePath}/bg-base.jpg`;

  useEffect(() => {
    const container = containerRef.current;
    const bg = bgRef.current;
    if (!container || !bg) return;

    let vw = 0;
    let vh = 0;
    let imgHeightPx = 0;
    let maxOffset = 0;

    // RAF scroll sync
    let ticking = false;
    let latestScrollY = window.scrollY;

    const recalc = () => {
      vw = window.innerWidth;
      vh = window.innerHeight;

      // Aseguramos que la altura de la imagen sea al menos la altura del viewport
      imgHeightPx = Math.ceil(Math.max(vw * ASPECT * SCALE, vh));
      maxOffset = Math.max(imgHeightPx - vh, 0);

      bg.style.height = `${imgHeightPx}px`;
      bg.style.minHeight = `100vh`; // por seguridad
      // cover para asegurar que la imagen siempre rellena el elemento
      bg.style.backgroundSize = `cover`;
      // update immediately
      updateImmediate();
    };

    const updateImmediate = () => {
      const doc = document.documentElement;
      const scrollMax = Math.max(doc.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(window.scrollY / scrollMax, 0), 1);
      const y = -(progress * maxOffset);
      bg.style.transform = `translate3d(0, ${y}px, 0)`;
    };

    const onScroll = () => {
      latestScrollY = window.scrollY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const doc = document.documentElement;
          const scrollMax = Math.max(doc.scrollHeight - window.innerHeight, 1);
          const progress = Math.min(Math.max(latestScrollY / scrollMax, 0), 1);
          const y = -(progress * maxOffset);
          bg.style.transform = `translate3d(0, ${y}px, 0)`;
          ticking = false;
        });
      }
    };

    // base styles
    bg.style.backgroundImage = `url(${bgImage})`;
    bg.style.backgroundRepeat = "no-repeat";
    // centra la imagen y alinea arriba para que el movimiento vertical se sienta natural
    bg.style.backgroundPosition = "50% 0";
    bg.style.willChange = "transform, height, background-size";
    bg.style.pointerEvents = "none";
    // ensure stacking within the fixed container
    bg.style.zIndex = "0";

    recalc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recalc);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recalc);
    };
  }, [bgImage]);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-20 overflow-hidden">
      <div
        ref={bgRef}
        className="absolute left-0 top-0 right-0"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 0",
          willChange: "transform, height, background-size",
          pointerEvents: "none",
        }}
      />

      {/* Velo sólido translúcido — sensible al tema */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-veil"
        style={{ zIndex: 10 }}
      />

      {/* Viñeta sutil encima del velo (opcional) */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_60%_at_50%_40%,transparent_60%,rgba(0,0,0,0.22)_100%)]"
        style={{ zIndex: 20 }}
      />
    </div>
  );
}