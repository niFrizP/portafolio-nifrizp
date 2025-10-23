import Link from "next/link";
import ProjectsSection from "@/components/ProjectsSection";
import { Mail, FileText, ChevronRight, Linkedin, Github } from "lucide-react";
import CompanyLogo from "@/components/CompanyLogo";

export default function Page() {
  return (
    <main className="min-h-screen relative bg-landing text-foreground">

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 pt-20 pb-16">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Nicolás Friz Pereira
            </h1>
            <p className="mt-4 text-zinc-400 max-w-prose">
              Desarrollador web full-stack y entusiasta de la tecnología, especializado en crear experiencias digitales atractivas y funcionales.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">
                Ver proyectos <ChevronRight className="transition-transform group-hover:translate-x-0.5" size={16} />
              </a>
              <Link href="/cv/CV_Nicolás_Friz.pdf" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5">
                <FileText size={16} /> Descargar PDF
              </Link>
              <Link href="#cv" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5">
                Ver CV (web)
              </Link>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 hover:bg-emerald-500/20">
                <Mail size={16} /> Contáctame
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative mx-auto h-64 w-64 overflow-hidden glass-card p-2 md:h-80 md:w-80">
              <div className="absolute inset-2 grid place-items-center rounded-2xl bg-linear-to-br from-white/10 to-transparent">
                <span className="text-sm text-muted-foreground">Tu foto / logotipo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Sobre mí</h2>
        <div className="mt-4 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-zinc-400">
              Soy Ingeniero en Informática con foco en desarrollo <strong>full-stack</strong>. Me
              especializo en el ecosistema <strong>TypeScript</strong> (Next.js/NestJS) y me importa
              la <strong>experiencia de usuario</strong>, la <strong>performance</strong> y la{" "}
              <strong>calidad</strong> del código (pruebas, CI/CD y arquitectura limpia).
            </p>
            <p className="mt-3 text-zinc-400">
              Disfruto construir productos end-to-end, desde los componentes UI hasta APIs y
              despliegue. Me motiva colaborar con equipos donde diseño e ingeniería van de la mano.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="mailto:ni.frizp@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10"
              >
                <Mail size={16} />
                Escríbeme
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5"
              >
                Ver proyectos
                <ChevronRight className="transition-transform group-hover:translate-x-0.5" size={16} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• +5 años construyendo productos web</li>
              <li>• Performance, accesibilidad y DX como pilares</li>
              <li>• Experiencia liderando features de punta a punta</li>
              <li>• Next.js, NestJS, Prisma, PostgreSQL, Docker</li>
            </ul>
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
              <p className="text-sm text-muted-foreground mt-2 md:mt-0">Oct 2025 – Actualidad · 1 mes</p>
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
              <p className="text-sm text-muted-foreground mt-2 md:mt-0">Ago 2024 – Feb 2025 · 7 meses</p>
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
              <p className="text-sm text-muted-foreground mt-2 md:mt-0">Abr 2022 – Ago 2024 · 2 años 5 meses</p>
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
              <p className="text-sm text-muted-foreground mt-2 md:mt-0">Ago 2022 – Jul 2024 · 2 años</p>
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
            href="/cv/nicolas-friz.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-white/5"
          >
            📄 Descargar PDF
          </a>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-white/10 bg-[#383434]/30 p-6 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold tracking-tight">¿Hablamos?</h2>
          <p className="mt-2 max-w-prose text-zinc-400">
            Escríbeme para colaborar, conversar de oportunidades o pedir una demo de mis proyectos.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:c11nfp@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">
              <Mail size={16} /> c11nfp@gmail.com
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
