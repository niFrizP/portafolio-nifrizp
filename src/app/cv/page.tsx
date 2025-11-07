import type { Metadata } from "next";
import CvViewer from "./CvViewer";

export const metadata: Metadata = {
    title: "CV – Nicolás Friz Pereira",
    description: "Visualizar CV en PDF",
};

export default function CVPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-zinc-900">
            <CvViewer />
        </main>
    );
}
