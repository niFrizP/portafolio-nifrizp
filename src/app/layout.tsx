// src/app/layout.tsx
import type { Metadata } from "next";
// @ts-ignore: import of global CSS without module declarations
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Portafolio – niFrizP",
  description: "Desarrollador Full Stack y Diseñador 3D.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange>
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
