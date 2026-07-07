import type { MetadataRoute } from "next";
import { seoConfig } from "@seo/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoConfig.siteName,
    short_name: "VosQuery",
    description: seoConfig.description,
    start_url: "/en",
    display: "standalone",
    background_color: "#030713",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
