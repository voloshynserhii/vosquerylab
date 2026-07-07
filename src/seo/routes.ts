import type { BlogArticle, CaseStudy, ServicePage } from "@/data/seo-content";

export const staticSeoRoutes = ["/", "/services", "/blog", "/case-studies"] as const;

export function servicePath(service: Pick<ServicePage, "slug">) {
  return `/services/${service.slug}`;
}

export function blogArticlePath(article: Pick<BlogArticle, "slug">) {
  return `/blog/${article.slug}`;
}

export function caseStudyPath(study: Pick<CaseStudy, "slug">) {
  return `/case-studies/${study.slug}`;
}

