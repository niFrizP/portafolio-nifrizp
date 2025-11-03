# Mi Portafolio

Portafolio personal de **Nicolás Friz Pereira**, pensado como carta de presentación interactiva para reclutadores y colaboradores. Incluye una landing animada, navegación temática y un currículum generado automáticamente con LaTeX y publicado junto con el sitio estático de Next.js.

---

## Índice
- [Mi Portafolio](#mi-portafolio)
  - [Índice](#índice)
  - [Características](#características)
  - [Stack tecnológico](#stack-tecnológico)
    - [Compilación automática (CI)](#compilación-automática-ci)
  - [Estructura de carpetas](#estructura-de-carpetas)
  - [Flujo de despliegue](#flujo-de-despliegue)

---

## Características
- **Landing inmersiva** con fondo parallax (`AnimatedBackground`), héroe animado vía Framer Motion y panel lateral con disponibilidad en tiempo real.
- **Navegación responsive**: menú sticky, tema claro/oscuro con `next-themes`, hoja de navegación lateral para móviles y accesos directos a redes.
- **Sección de proyectos dinámica** (`ProjectsSection`) que reutiliza tarjetas interactivas (`ProjectCard` + `InteractiveScreenshot`) y datos centralizados en `src/data/projects.ts`.
- **Página de proyectos dedicada** (`/projects`) con tags globales y rutas amigables por *slug* para futuras fichas detalladas.
- **Currículum en LaTeX**: compilado con `latexmk`/XeLaTeX, publicado automáticamente en `/public/cv` y embebido tanto en la landing como en `/cv`.
- **UI consistente** basada en Tailwind CSS, Radix UI y componentes `shadcn/ui`, con utilidades personalizadas (`cn`) y variantes temáticas.

## Stack tecnológico
- **Framework**: Next.js 16 (React 19, App Router, rendering híbrido + export estático).
- **Estilos**: Tailwind CSS 4, PostCSS, `tailwindcss-animate`, capas glassmorphism y diseño responsive.
- **UI/UX**: Radix Primitives, `shadcn/ui`, `lucide-react`, animaciones con Framer Motion.
- **Gestión de estado ligero**: Hooks y utilidades de React; sin dependencias globales complejas.
- **CV**: Plantilla personalizada `developercv.cls` + XeLaTeX.
- **Infraestructura**: GitHub Actions para build estático y despliegue en GitHub Pages, con compilación previa del PDF.


### Compilación automática (CI)
GitHub Actions ejecuta `latexmk` en cada push a `master`, copia el PDF generado a `public/cv/` y sigue con el build de Next.js antes de desplegar.

## Estructura de carpetas
```text
src/
  app/
	 page.tsx          # Landing principal con hero animado, proyectos, experiencia, contacto
	 cv/               # Ruta dedicada para visualizar el CV embebido
	 projects/         # Listado completo de proyectos reutilizando ProjectCard
  components/
	 AnimatedBackground.tsx
	 HeroAnimated.tsx
	 ProjectCard.tsx
	 ProjectsSection.tsx
	 ui/               # Componentes shadcn/ui adaptados
  data/projects.ts    # Fuente única de verdad para los proyectos
latex-cv/             # Plantilla y assets LaTeX del currículum
public/cv/            # PDFs expuestos en el sitio (llenados por CI o manualmente)
```

## Flujo de despliegue
- Workflow `Build & Deploy (Next + LaTeX CV)` (`.github/workflows/deploy.yml`).
- Compila el CV con `latexmk` (XeLaTeX), mueve el PDF a `public/cv/` y ejecuta `npm run build` (export estático).
- Sube la carpeta `out/` a GitHub Pages, habilitando hosting estático sin servidor dedicado.

---

¿Tienes feedback o propuestas de colaboración? Abre un issue o escríbeme a [ni.frizp@gmail.com](mailto:ni.frizp@gmail.com).