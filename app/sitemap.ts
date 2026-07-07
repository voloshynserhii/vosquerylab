import type { MetadataRoute } from "next";
import { blogArticles, caseStudies, services } from "@/data/seo-content";
import { absoluteUrl } from "@/lib/seo";
import { locales, localizePath } from "@i18n/config";

const staticRoutes = ["/", "/services", "/blog", "/case-studies"];

function alternates(path: string) {
  return {
    languages: Object.fromEntries(
      locales.map((locale) => [locale, absoluteUrl(localizePath(locale, path))]),
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) => [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(localizePath(locale, route)),
      lastModified,
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : 0.9,
      alternates: alternates(route),
    })),
    ...services.map((service) => ({
      url: absoluteUrl(localizePath(locale, `/services/${service.slug}`)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      alternates: alternates(`/services/${service.slug}`),
    })),
    ...caseStudies.map((study) => ({
      url: absoluteUrl(localizePath(locale, `/case-studies/${study.slug}`)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      alternates: alternates(`/case-studies/${study.slug}`),
    })),
    ...blogArticles.map((article) => ({
      url: absoluteUrl(localizePath(locale, `/blog/${article.slug}`)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: alternates(`/blog/${article.slug}`),
    })),
  ]);
}
