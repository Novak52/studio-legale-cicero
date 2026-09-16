import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/malasanita-palermo",
        destination: "/avvocato-malasanita-palermo",
        permanent: true,
      },
      {
        source: "/blog/errore-medico-palermo",
        destination: "/blog/errore-medico-palermo-risarcimento",
        permanent: true,
      },
      {
        source: "/blog/error-medico-palermo-risarcimento",
        destination: "/blog/errore-medico-palermo-risarcimento",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;