"use client";
import { useEffect, useRef } from "react";

/**
 * Fondo animado sutil para modo CLARO.
 * - dark:hidden como fallback CSS
 * - JS ajusta opacidad tras hidratación y reacciona a cambios de tema
 */
export default function LightMotionBackground() {
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const overlay = overlayRef.current;
        if (!overlay) return;

        const getPreferredDark = () => {
            const html = document.documentElement;
            const dataTheme = html.getAttribute("data-theme");
            if (html.classList.contains("dark")) return true;
            if (dataTheme === "dark") return true;
            if (dataTheme === "light") return false;
            if (window.matchMedia?.("(prefers-color-scheme: dark)")?.matches) return true;
            return false;
        };

        const apply = () => {
            const dark = getPreferredDark();
            if (dark) {
                overlay.style.opacity = "0";
                overlay.style.pointerEvents = "none";
            } else {
                overlay.style.opacity = "1";
                overlay.style.pointerEvents = "none";
            }
        };

        // base styles y evitar flash inicial
        overlay.style.transition = "opacity 300ms ease, background-color 300ms ease";
        overlay.style.opacity = "0"; // start hidden until we determine the theme
        overlay.style.backgroundColor = "rgba(255,255,255,0.40)";

        apply();

        // observe class/data-theme changes on <html>
        const mo = new MutationObserver(() => apply());
        mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-theme"] });

        // listen to OS color scheme changes
        const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
        const onPref = () => apply();
        if (mql?.addEventListener) mql.addEventListener("change", onPref as EventListener);
        else if (mql?.addListener) (mql as any).addListener(onPref);

        return () => {
            mo.disconnect();
            if (mql?.removeEventListener) mql.removeEventListener("change", onPref as EventListener);
            else if (mql?.removeListener) (mql as any).removeListener(onPref);
        };
    }, []);

    return (
        // -z-9 para quedar arriba del fondo animado (-z-20) y debajo del contenido (z-10)
        <div aria-hidden="true" ref={rootRef} className="absolute inset-0 -z-9 overflow-hidden dark:hidden pointer-events-none">
            {/* Gradiente base suave */}
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(255,255,255,0.9)_0%,rgba(245,245,245,0.8)_50%,rgba(235,235,235,0.9)_100%)]" />

            {/* Disco cónico muy tenue */}
            <div
                className="absolute -top-20 right-[-10%] h-[480px] w-[480px] opacity-20 blur-2xl bg-[conic-gradient(at_50%_50%,#22c55e_0deg,#06b6d4_120deg,#a78bfa_240deg,#22c55e_360deg)]"
                style={{ animation: "spin-slow 60s linear infinite" }}
            />

            {/* Blobs de color (flotan) */}
            <div className="absolute left-[-10%] top-28 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" style={{ animation: "blob-float 18s ease-in-out infinite" }} />
            <div className="absolute left-[30%] top-[55%] h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" style={{ animation: "blob-float 22s ease-in-out infinite reverse" }} />
            <div className="absolute right-[5%] top-[35%] h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" style={{ animation: "blob-float 20s ease-in-out infinite" }} />

            {/* Velo blanco muy ligero — su opacidad la gestiona JS */}
            <div ref={overlayRef} className="absolute inset-0 bg-white/40 pointer-events-none" />
        </div>
    );
}