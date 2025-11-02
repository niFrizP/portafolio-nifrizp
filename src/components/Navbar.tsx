// src/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/components/Logo";


const links = [
  { href: "/#about", label: "Sobre mí" },
  { href: "/#projects", label: "Proyectos" },
  { href: "/#experience", label: "Experiencia" },
  { href: "/#cv", label: "CV" },
  { href: "/#contact", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="mx-auto max-w-6xl px-4">
        {/* Contenedor glass + theme-aware (sin colores fijos) */}
        <div className="mt-4 flex items-center justify-between rounded-2xl glass glass-card px-3 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Inicio">
            <Logo className="h-8 w-auto fill-zinc-900 dark:fill-white" />
          </Link>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="opacity-90 hover:opacity-100">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Links */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <Button asChild variant="outline" className="bg-transparent">
                <a
                  aria-label="GitHub"
                  href="https://github.com/nifrizp"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Github size={18} />
                </a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/nicolasfrizpereira/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Linkedin size={18} />
                </a>
              </Button>
            </div>

            {/* Toggle tema */}
            <ThemeToggle />

            {/* Hamburguesa → Sidebar móvil */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" aria-label="Abrir menú" className="bg-transparent">
                  <Menu size={18} />
                </Button>
              </SheetTrigger>

              {/* Panel móvil con fondo que respeta el tema */}
              <SheetContent
                side="right"
                className="glass glass-card w-72 text-foreground"
              >
                <Link href="/" className="flex items-center gap-2" aria-label="Inicio">
                  <Logo className="h-8 w-auto fill-zinc-900 dark:fill-white" />
                </Link>

                <nav className="mt-6 grid gap-2 text-sm">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="rounded-lg border px-3 py-2 hover:bg-white/5 dark:hover:bg-white/5"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-4 flex gap-2">
                  <Button asChild variant="outline" className="bg-transparent">
                    <a
                      aria-label="GitHub"
                      href="https://github.com/nifrizp"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Github size={18} />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="bg-transparent">
                    <a
                      aria-label="LinkedIn"
                      href="https://www.linkedin.com/in/nicolasfrizpereira/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Linkedin size={18} />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="bg-transparent">
                    <a aria-label="Email" href="mailto:ni.frizp@gmail.com">
                      <Mail size={18} />
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
