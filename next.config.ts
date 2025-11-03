import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático para Next >=16
  output: "export",
  // Recomiendo trailingSlash para GitHub Pages (URLs tipo /ruta/)
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "logo.clearbit.com" },
      { protocol: "https", hostname: "img.logo.dev" },
    ],
    unoptimized: true,
  },
  // Sitio de usuario: no usar basePath ni assetPrefix
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;