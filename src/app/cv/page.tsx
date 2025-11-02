import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "CV – Nicolás Friz Pereira",
    description: "Visualizar CV en PDF",
};

export default function CVPage() {
    const pdf = "cv/nicolas-friz.pdf";
    return (
        <main className="min-h-screen">
            <object data={pdf} type="application/pdf" className="w-full h-screen">
                <iframe src={pdf} className="w-full h-screen" title="CV PDF" />
                <div className="p-6 text-sm">
                    Tu navegador no puede mostrar PDFs embebidos.&nbsp;
                    <a href={pdf} className="underline" target="_blank" rel="noreferrer">
                        Abrir o descargar CV en PDF
                    </a>
                </div>
            </object>
        </main>
    );
}
