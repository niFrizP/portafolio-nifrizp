"use client";

/**
 * Fondo animado sutil para modo CLARO.
 * - Oculto en dark (dark:hidden)
 * - No interfiere con clics (pointer-events-none)
 * - Se renderiza detrás del contenido (-z-10)
 */
export default function LightMotionBackground() {
    return (
        <div
            aria-hidden="true"
            className="
        absolute inset-0 -z-10 overflow-hidden
        dark:hidden pointer-events-none
      "
        >
            {/* Gradiente base suave */}
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(255,255,255,0.9)_0%,rgba(245,245,245,0.8)_50%,rgba(235,235,235,0.9)_100%)]" />

            {/* Disco cónico muy tenue (gira lento) */}
            <div
                className="
          absolute -top-20 right-[-10%] h-[480px] w-[480px]
          opacity-20 blur-2xl
          bg-[conic-gradient(at_50%_50%,#22c55e_0deg,#06b6d4_120deg,#a78bfa_240deg,#22c55e_360deg)]
        "
                style={{ animation: "spin-slow 60s linear infinite" }}
            />

            {/* Blobs de color translúcidos (flotan) */}
            <div
                className="absolute left-[-10%] top-28 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl"
                style={{ animation: "blob-float 18s ease-in-out infinite" }}
            />
            <div
                className="absolute left-[30%] top-[55%] h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
                style={{ animation: "blob-float 22s ease-in-out infinite reverse" }}
            />
            <div
                className="absolute right-[5%] top-[35%] h-80 w-80 rounded-full bg-violet-400/20 blur-3xl"
                style={{ animation: "blob-float 20s ease-in-out infinite" }}
            />

            {/* Velo blanco muy ligero para mejorar legibilidad del texto/bordes */}
            <div className="absolute inset-0 bg-white/40" />
        </div>
    );
}
