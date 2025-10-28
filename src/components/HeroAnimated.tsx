"use client";
import Link from "next/link";
import ProjectsSection from "@/components/ProjectsSection";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FileText, ChevronRight } from "lucide-react";
import RightHeroPanel from "@/components/RightHeroPanel";

function HeroAnimated() {
const roles = useMemo(
() => [
"Desarrollador Web Full-Stack",
"QA · Testing",
"PL/SQL · Oracle",
"PHP · Laravel",
"TypeScript · Next.js",
"Asesoría IT",
"Diseño 3D",
"Entusiasta del Hardware",
],
[]
);

const [index, setIndex] = useState(0);
useEffect(() => {
const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2200);
return () => clearInterval(id);
}, [roles.length]);

return (
<section id="home" className="mx-auto max-w-6xl px-4 pt-20 pb-16">
    {/* Texto principal */}
    <div className="grid items-center gap-8 md:grid-cols-12 mt-15">
        <div className="md:col-span-7">
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Nicolás Friz Pereira
            </h1>
            <div className="mt-2 h-8 overflow-hidden">
                <div className="text-lg font-medium text-emerald-500 dark:text-emerald-400 inline-flex items-center gap-2">
                    <span className="opacity-90"> </span>
                    <AnimatePresence mode="wait">
                        <motion.span key={index} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{
                            y: -20, opacity: 0 }} transition={{ duration: 0.35, ease: "easeOut" }}
                            className="inline-block">
                            {roles[index]}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects"
                    className="border border-white/10 backdrop-blur-xl bg-zinc-200 dark:bg-emerald-600 hover:bg-zinc-300 dark:hover:bg-emerald-700 text-zinc-800 dark:text-white font-semibold px-6 py-2 rounded-lg transition inline-flex items-center gap-2">
                    Ver proyectos
                    <ChevronRight className="transition-transform group-hover:translate-x-0.5" size={16} />
                </a>
                <Link href="#cv"
                    className="border border-white/10 backdrop-blur-xl bg-zinc-100 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-800 text-zinc-800 dark:text-white font-semibold px-6 py-2 rounded-lg transition inline-flex items-center gap-2">
                Ver CV
                </Link>
            </div>
        </div>
        {/* Panel derecho */}
        <RightHeroPanel />
    </div>
</section>
);
}

export default HeroAnimated;