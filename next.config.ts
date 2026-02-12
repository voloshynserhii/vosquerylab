import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        hostname: "yarify.tech",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
