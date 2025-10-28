import Link from "next/link";
import Image from "next/image";
import ProjectsSection from "@/components/ProjectsSection";
import { Mail, FileText, ChevronRight, Linkedin, Github } from "lucide-react";
import CompanyLogo from "@/components/CompanyLogo";
import HeroAnimated from "@/components/HeroAnimated";
import LightMotionBackground from "@/components/LightMotionBackground";

export default function Page() {
  return (
    <main className="min-h-screen relative bg-landing text-foreground">

      <LightMotionBackground />

      {/* Hero */}
      <HeroAnimated />


      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12 mt-20 md:scroll-mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Sobre mí</h2>

        <div className="mt-4 grid gap-8 md:grid-cols-12 md:items-center">
          {/* Cuadro/imagen a la izquierda */}
          <div className="md:col-span-5">
            <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80 overflow-hidden glass-card p-2">
              <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-white/10 to-transparent grid place-items-center">
                <span className="text-sm text-muted-foreground">
                  <Image src="thumbs/niko-IA.jpg" alt="Nicolás Friz Pereira" fill className="object-cover rounded-2xl" />
                </span>
              </div>
            </div>
          </div>

          {/* Texto a la derecha */}
          <div className="md:col-span-7">
            <p className="text-zinc-400">
              Soy ingeniero informático con una sólida trayectoria en el desarrollo de soluciones digitales modernas y optimizadas.
              Mi enfoque se centra en <strong>TypeScript</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong> y <strong>Laravel</strong>, donde aplico principios de diseño, arquitectura estructurada y metodologías ágiles.
            </p>
            <p className="mt-3 text-zinc-400">
              También cuento con experiencia en la integración en CMS como WordPress y APIs personalizadas para complementar soluciones. Me apasiona construir productos de principio a fin,
              abarcando desde el levantamiento de requisitos hasta el despliegue.
              Me motiva trabajar y aportar en proyectos en equipo donde el diseño y la ingeniería se complementan.
            </p>

            {/* Stack breve visible */}
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="border border-white/10 rounded-full px-3 py-1">TypeScript</span>
              <span className="border border-white/10 rounded-full px-3 py-1">Next.js</span>
              <span className="border border-white/10 rounded-full px-3 py-1">React</span>
              <span className="border border-white/10 rounded-full px-3 py-1">Tailwind CSS</span>
              <span className="border border-white/10 rounded-full px-3 py-1">Laravel</span>
              <span className="border border-white/10 rounded-full px-3 py-1">WordPress</span>
              <span className="border border-white/10 rounded-full px-3 py-1">PHP</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="mailto:ni.frizp@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10"
              >
                <Mail size={16} />
                Contáctame
              </Link>
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5"
              >
                Ver proyectos
                <ChevronRight className="transition-transform group-hover:translate-x-0.5" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Proyectos destacados (landing) */}
      <ProjectsSection />

      {/* Experiencia */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight mb-8">Experiencia</h2>

        <div className="grid gap-6">
          {/* TEQMED */}
          <div className="glass-card p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <CompanyLogo company="TEQMED" domain="teqmed.cl" size={40} />
                <h3 className="text-lg font-medium">Desarrollador Web y Soporte TI</h3>
                <p className="text-sm text-muted-foreground">TEQMED · Jornada parcial</p>
                <p className="text-sm text-muted-foreground">Concepción, Bio Bio, Chile · Actualidad</p>
              </div>
              <strong>
                <p className="text-sm text-muted-foreground mt-2 md:mt-0">Oct 2025 – Actualidad · 1 mes</p>
              </strong>
            </div>
            <p className="mt-3 text-zinc-400">
              Desarrollo de aplicaciones internas y soporte TI. Enfoque en programación, ingeniería y optimización de sistemas para el sector médico.
            </p>
          </div>

          {/* IBM */}
          <div className="glass-card p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <CompanyLogo company="IBM" domain="ibm.com" size={40} />
                <h3 className="text-lg font-medium">Blue Journey Program Internship</h3>
                <p className="text-sm text-muted-foreground">IBM · Contrato de prácticas</p>
                <p className="text-sm text-muted-foreground">Región Metropolitana de Santiago, Chile · Híbrido</p>
              </div>
              <strong><p className="text-sm text-muted-foreground mt-2 md:mt-0">Ago 2024 – Feb 2025 · 7 meses</p></strong>
            </div>
            <p className="mt-3 text-zinc-400">
              Participación en el programa de formación de IBM centrado en desarrollo de software,
              tecnologías cloud y buenas prácticas de ingeniería.
            </p>
          </div>

          {/* CITT Duoc UC */}
          <div className="glass-card p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <CompanyLogo company="CITT Duoc UC" domain="duoc.cl" size={40} />
                <h3 className="text-lg font-medium">Líder Track Impresión 3D</h3>
                <p className="text-sm text-muted-foreground">CITT Duoc UC · Jornada parcial</p>
                <p className="text-sm text-muted-foreground">Concepción, Bio Bio, Chile · Presencial</p>
              </div>
              <strong>
                <p className="text-sm text-muted-foreground mt-2 md:mt-0">Abr 2022 – Ago 2024 · 2 años 5 meses</p></strong>
            </div>
            <p className="mt-3 text-zinc-400">
              Coordinación del área de impresión y modelado 3D. Creación de prototipos y liderazgo de proyectos estudiantiles y académicos.
            </p>
          </div>

          {/* TEQMED */}
          <div className="glass-card p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <CompanyLogo company="TEQMED" domain="teqmed.cl" size={40} />
                <h3 className="text-lg font-medium">Especialista de asistencia TI / Desarrollador Web Fullstack</h3>
                <p className="text-sm text-muted-foreground">TEQMED · Jornada parcial</p>
                <p className="text-sm text-muted-foreground">Concepción, Bio Bio, Chile · Presencial</p>
              </div>
              <strong>
                <p className="text-sm text-muted-foreground mt-2 md:mt-0">Ago 2022 – Jul 2024 · 2 años</p>
              </strong>
            </div>
            <p className="mt-3 text-zinc-400">
              Desarrollo de sistemas web fullstack, mantenimiento de infraestructura y soporte técnico.
              Enfoque en optimización de procesos internos y automatización.
            </p>
          </div>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">Currículum Vitae</h2>
        <p className="text-sm text-muted-foreground max-w-prose">
          Aquí puedes visualizar mi CV actualizado directamente en esta página o descargarlo en PDF.
        </p>

        {/* Viewer embebido (mismo PDF que descargas) */}
        <div className="mt-6 rounded-xl border overflow-hidden shadow-xl glass-card">
          <object
            data="/cv/nicolas-friz.pdf"
            type="application/pdf"
            className="w-full h-[75vh]"
          >
            <iframe
              src="/cv/nicolas-friz.pdf"
              className="w-full h-[75vh]"
              title="CV PDF"
            />
            <div className="p-6 text-sm">
              Tu navegador no puede mostrar PDFs embebidos.&nbsp;
              <a href="/cv/nicolas-friz.pdf" className="underline" target="_blank" rel="noreferrer">
                Abrir o descargar CV en PDF
              </a>
            </div>
          </object>
        </div>

        {/* Botón de descarga */}
        <div className="mt-6">
          <a
            href="/cv/CV_Nicolás_Friz.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-white/5"
          >
            📄 Descargar PDF
          </a>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
        <div
          className=" glass-card
    rounded-2xl border p-8 shadow-lg backdrop-blur-xl transition-all duration-300
    bg-white/70 dark:bg-gradient-to-br dark:from-zinc-900/80 dark:via-zinc-800/70 dark:to-zinc-900/80
    border-zinc-200/60 dark:border-white/10
  "
        >
          <h2 className="text-2xl font-semibold tracking-tight mb-2 text-zinc-900 dark:text-white">Contactame</h2>

          <p className="max-w-prose text-white dark:text-zinc-200">
            Para colaborar, conversar de oportunidades o pedir una demo de mis proyectos.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:ni.frizp@gmail.com"
              className="
        inline-flex items-center gap-2 rounded-xl border
        border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20
        text-emerald-700 dark:text-emerald-500
        px-4 py-2 font-medium transition-all duration-200
      "
            >
              <Mail size={16} /> ni.frizp@gmail.com
            </a>

            <a
              href="#"
              className="
        inline-flex items-center gap-2 rounded-xl border
        border-zinc-500/60 bg-white/30 hover:bg-zinc-100
        text-zinc-700 hover:text-zinc-900
        dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10 dark:text-zinc-200 dark:hover:text-white
        px-4 py-2 font-medium transition-all duration-200
      "
            >
              <Linkedin size={16} /> LinkedIn
            </a>

            <a
              href="#"
              className="
        inline-flex items-center gap-2 rounded-xl border
        border-zinc-500/60 bg-white/30 hover:bg-zinc-100
        text-zinc-700 hover:text-zinc-900
        dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10 dark:text-zinc-200 dark:hover:text-white
        px-4 py-2 font-medium transition-all duration-200
      "
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </section>
    </main >
  );
}
