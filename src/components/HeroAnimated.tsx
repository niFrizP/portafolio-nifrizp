"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import RightHeroPanel from "./RightHeroPanel";

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
    const [mounted, setMounted] = useState(false);
    const { theme, systemTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const id = setInterval(
            () => setIndex((i) => (i + 1) % roles.length),
            2200
        );
        return () => clearInterval(id);
    }, [roles.length]);

    const currentTheme = theme === "system" ? systemTheme : theme;
    const isDark = currentTheme === "dark";

    return (
        <section id="home" className="mx-auto max-w-6xl px-4 pt-20 pb-16">
            <div className="grid items-center gap-8 md:grid-cols-12 mt-15">
                <div className="md:col-span-7">
                    <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                        Nicolás Friz Pereira
                    </h1>

                    <div className="mt-2 h-8 overflow-hidden">
                        <div className="inline-flex items-center gap-2 text-lg font-medium">
                            <AnimatePresence mode="wait">
                                {mounted && (
                                    <motion.span
                                        key={index}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                        className="inline-block px-2 rounded transition-colors duration-200"
                                        style={{
                                            color: isDark
                                                ? "rgb(52 211 153)" // emerald-400
                                                : "rgb(84 94 92)", // zinc-800
                                        }}
                                    >
                                        {roles[index]}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {/* Botón Ver proyectos */}
                        <Link
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/30
               backdrop-blur-xl bg-white/60 hover:bg-white/70 
               dark:bg-emerald-600/60 dark:hover:bg-emerald-500/60
               text-zinc-900 dark:text-white font-semibold px-6 py-2 
               shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)]
               transition-all duration-300 hover:scale-[1.03]"
                        >
                            Ver proyectos
                            <ChevronRight
                                className="transition-transform group-hover:translate-x-0.5"
                                size={16}
                            />
                        </Link>

                        {/* Botón Ver CV */}
                        <Link
                            href="#cv"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/30
               backdrop-blur-xl bg-white/60 hover:bg-white/70 
               dark:bg-zinc-800/60 dark:hover:bg-zinc-700/60
               text-zinc-900 dark:text-white font-semibold px-6 py-2 
               shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)]
               transition-all duration-300 hover:scale-[1.03]"
                        >
                            Ver CV
                        </Link>
                    </div>
                </div>

                <RightHeroPanel />
            </div>
        </section>
    );
}

export default HeroAnimated;
