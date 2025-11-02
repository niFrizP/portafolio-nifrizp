"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, SunMedium } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  // Evita el cambio de HTML entre SSR y cliente
  // Mientras no está montado, renderiza un placeholder estable
  return (
    <Button
      variant="outline"
      onClick={toggle}
      aria-label="Cambiar tema"
      className="bg-transparent"
      variant="outline"
      // ancho/alto fijos para evitar salto de layout
      style={{ width: 36, height: 36, padding: 0 }}
    >
      {mounted ? (
        theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />
      ) : (
        // Placeholder neutro con el mismo tamaño — mismo HTML en SSR y cliente
        <span aria-hidden className="block" style={{ width: 18, height: 18 }} />
      )}
    </Button>
  );
}
