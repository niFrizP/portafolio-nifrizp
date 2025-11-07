"use client";

import { useEffect, useState } from "react";

export default function CvViewer() {
    const pdf = "/cv/nicolas-friz.pdf";
    const [canEmbedPdf, setCanEmbedPdf] = useState(true);

    useEffect(() => {
        if (typeof navigator === "undefined") return;
        const ua = navigator.userAgent || "";
        const isInstagram = ua.includes("Instagram");
        const isFacebook = ua.includes("FBAN") || ua.includes("FBAV");

        if (isInstagram || isFacebook) {
            setCanEmbedPdf(false);
        }
    }, []);

    return (
        <div className="flex items-center justify-center">
            {canEmbedPdf ? (
                <object data={pdf} type="application/pdf" className="w-full h-screen">
                    <iframe src={pdf} className="w-full h-screen" title="CV PDF" />
                    <div className="p-6 text-sm">
                        Tu navegador no puede mostrar PDF.&nbsp;
                        <a href={pdf} className="underline" target="_blank" rel="noreferrer">
                            Abrir o descargar CV en PDF
                        </a>
                    </div>
                </object>
            ) : (
                <div className="p-8 text-center max-w-md space-y-4">
                    <p>
                        Tu navegador no puede mostrar el PDF.
                    </p>
                    <a
                        href={pdf}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 
                       backdrop-blur-xl bg-emerald-600/70 hover:bg-emerald-500/70 
                       text-white px-4 py-2 transition duration-300"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ver CV en otra pestaña
                    </a>
                </div>
            )}
        </div>
    );
}
