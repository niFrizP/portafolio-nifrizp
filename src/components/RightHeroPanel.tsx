"use client";

import Image from "next/image";

const PK = process.env.NEXT_PUBLIC_LOGO_DEV_PK;

function BrandLogo({ company, domain }: { company: string; domain: string }) {
    const src = PK
        ? `https://img.logo.dev/${domain}?token=${PK}&retina=true`
        : `https://img.logo.dev/${domain}`;

    return (
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
            <Image
                src={src}
                alt={`${company} logo`}
                width={22}
                height={22}
                className="rounded-sm"
                unoptimized
            />
            <span className="text-xs text-muted-foreground">{company}</span>
        </div>
    );
}

export default function RightHeroPanel() {
    return (
        <div className="md:col-span-5">
            <div className="relative mx-auto w-full max-w-sm">
                {/* Decorativo de fondo (sutil) */}
                <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />

                {/* Tarjeta principal */}
                <div className="glass-card rounded-2xl border border-white/10 p-5 backdrop-blur-xl">
                    {/* Estado */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-500 text-sm font-medium">
                        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                        Disponible para proyectos
                    </div>

                    {/* Resumen */}
                    <div className="mt-4 space-y-2 text-sm text-zinc-400">
                        <p>· Concepción / Cauquenes, Chile ·</p>
                        <p>· Híbrido / Remoto / Presencial ·</p>
                    </div>

                    {/* Destacado / KPI chips */}
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
                        <span className="rounded-full border border-zinc-400 px-2 py-1">+{new Date().getFullYear() - 2021} años exp.</span>
                        <span className="rounded-full border border-zinc-400 px-2 py-1">Disponibilidad Inmediata</span>
                    </div>

                    {/* Logos (confianza) */}
                    <div className="mt-5">
                        <p className="mb-2 text-xs uppercase tracking-wide text-zinc-400">Experiencia con</p>
                        <div className="flex flex-wrap gap-2">
                            <BrandLogo company="IBM" domain="ibm.com" />
                            <BrandLogo company="TEQMED" domain="teqmed.cl" />
                            <BrandLogo company="Duoc UC" domain="duoc.cl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
