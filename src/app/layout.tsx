import type { Metadata } from "next";
// @ts-ignore: Allow side-effect import of global CSS without module declarations
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "niFrizP - Portafolio",
  description: "Ingeniero en Informática",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="preload" as="image" href="/bg-base.jpg" />
      <body className="relative bg-transparent">
        {/* ThemeProvider envuelve fondos y contenido para que el tema se aplique coherentemente */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Fondos detrás del contenido */}
          <AnimatedBackground />

          {/* Contenido por encima */}
          <div className="relative z-10">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}