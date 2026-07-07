import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "navifit.eu",
      },
      {
        protocol: "https",
        hostname: "pani-yulya-shop.vercel.app",
      },
      {
        protocol: "https",
        hostname: "pinehotel.vercel.app",
      },
      {
        protocol: "https",
        hostname: "yarify.tech",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
