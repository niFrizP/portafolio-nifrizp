import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
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