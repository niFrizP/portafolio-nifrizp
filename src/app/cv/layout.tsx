export default function CVLayout({ children }: { children: React.ReactNode }) {
    // Layout minimal sin Navbar ni ThemeProvider extra (hereda estilos globales)
    return (
        <html lang="es" suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}
