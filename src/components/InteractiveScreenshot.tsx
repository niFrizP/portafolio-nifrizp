"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  height?: number;     // alto del contenedor
  radius?: string;     // clases tailwind para borde
  priority?: boolean;
};

export default function InteractiveScreenshot({
  src,
  alt,
  height = 160,
  radius = "rounded-lg",
  priority = false,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [xy, setXY] = useState({ x: 0.5, y: 0.5 }); // 0..1

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setXY({
      x: Math.min(1, Math.max(0, x)),
      y: Math.min(1, Math.max(0, y)),
    });
  }

  function onLeave() {
    // vuelve al centro suavemente
    setXY({ x: 0.5, y: 0.5 });
  }

  // tilt (rotación 3D leve)
  const rotX = (0.5 - xy.y) * 6;   // -3..3
  const rotY = (xy.x - 0.5) * 10;  // -5..5

  // parallax interno de la captura
  const tx = (xy.x - 0.5) * 14;    // px
  const ty = (xy.y - 0.5) * 10;    // px

  // “shine” (reflejo) que sigue el mouse
  const shineX = xy.x * 100;
  const shineY = xy.y * 100;

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      className={`group relative border border-white/10 ${radius} overflow-hidden`}
      style={{
        height,
        perspective: 800,
      }}
    >
      {/* tarjeta con tilt */}
      <div
        className="h-full w-full will-change-transform transition-transform duration-150 ease-out"
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* imagen (parallax + zoom suave) */}
        <div className="absolute inset-0">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(${tx}px, ${ty}px, 0) scale(1.06)`,
            }}
            priority={priority}
          />
        </div>

        {/* sombreado sutil para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20 pointer-events-none" />

        {/* brillo que sigue el mouse */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-200 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(240px circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.20), transparent 60%)`,
          }}
        />

        {/* borde interior al hover */}
        <div className="absolute inset-0 ring-0 group-hover:ring-1 ring-emerald-400/30 rounded-[inherit] transition-all duration-200" />
      </div>
    </div>
  );
}
