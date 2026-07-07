import type { MetadataRoute } from "next";
import { blogArticles, caseStudies, services } from "@/data/seo-content";
import { locales, localizePath } from "@i18n/config";
import { absoluteUrl } from "@seo/canonical";
import { seoConfig } from "@seo/config";
import { staticSeoRoutes } from "@seo/routes";

function alternates(path: string) {
  return {
    languages: Object.fromEntries(
      locales.map((locale) => [locale, absoluteUrl(localizePath(locale, path))]),
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteLastModified = new Date(seoConfig.siteLastUpdated);

  return locales.flatMap((locale) => [
    ...staticSeoRoutes.map((route) => ({
      url: absoluteUrl(localizePath(locale, route)),
      lastModified: siteLastModified,
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : 0.9,
      alternates: alternates(route),
    })),
    ...services.map((service) => ({
      url: absoluteUrl(localizePath(locale, `/services/${service.slug}`)),
      lastModified: new Date(service.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.85,
      alternates: alternates(`/services/${service.slug}`),
    })),
    ...caseStudies.map((study) => ({
      url: absoluteUrl(localizePath(locale, `/case-studies/${study.slug}`)),
      lastModified: new Date(study.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75,
      alternates: alternates(`/case-studies/${study.slug}`),
    })),
    ...blogArticles.map((article) => ({
      url: absoluteUrl(localizePath(locale, `/blog/${article.slug}`)),
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: alternates(`/blog/${article.slug}`),
    })),
  ]);
}
