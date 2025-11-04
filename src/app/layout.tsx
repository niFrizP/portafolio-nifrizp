import type { Metadata, Viewport } from "next";
// @ts-ignore: Allow side-effect import of global CSS without module declarations
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import Script from "next/script";


export const metadata: Metadata = {
  metadataBase: new URL("https://nifrizp.github.io"),
  title: "niFrizP - Portafolio",
  description: "Ingeniero Informático",
  openGraph: {
    type: "website",
    url: "/",
    title: "niFrizP - Portafolio",
    description: "Ingeniero Informático",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "niFrizP - Portafolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "niFrizP - Portafolio",
    description: "Ingeniero Informático",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#383434",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {clarityId ? (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        ) : null}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TG8JDLC9');`,
          }}
        />
        <meta name="google-site-verification" content="TwICpiGQi1WwokZsvzzoJ0dXi9ZXJYUSoL2La63J528" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preload" as="image" href="/bg-base.jpg" />
      </head>
      <body className="relative bg-transparent">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TG8JDLC9"
            height="0"
            width="0"
            className="hidden"
            aria-hidden="true"
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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