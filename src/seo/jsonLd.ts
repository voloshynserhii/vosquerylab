import type { Locale } from "@i18n/config";
import { localizePath } from "@i18n/config";
import { getDictionary } from "@i18n/dictionaries";
import type { BlogArticle, CaseStudy, ServicePage } from "@/data/seo-content";
import { absoluteUrl } from "./canonical";
import { seoConfig } from "./config";
import { localizedUrl } from "./hreflang";
import { defaultOgImageUrl } from "./openGraph";
import type { JsonLdNode } from "./types";

const organizationId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");

export function organizationJsonLd(locale: Locale): JsonLdNode {
  const dictionary = getDictionary(locale);

  return {
    "@type": "Organization",
    "@id": organizationId,
    name: seoConfig.businessName,
    url: seoConfig.siteUrl,
    logo: absoluteUrl("/icon"),
    description: dictionary.metadata.site.description,
    founder: {
      "@type": "Person",
      name: seoConfig.author,
    },
    sameAs: seoConfig.sameAs,
    knowsAbout: dictionary.metadata.site.knowsAbout,
  };
}

export function websiteJsonLd(locale: Locale): JsonLdNode {
  const dictionary = getDictionary(locale);

  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: seoConfig.siteName,
    url: localizedUrl(locale),
    inLanguage: locale,
    publisher: { "@id": organizationId },
    description: dictionary.metadata.site.description,
  };
}

export function siteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd(locale), websiteJsonLd(locale)],
  };
}

export function professionalServiceJsonLd(locale: Locale, path = "/services"): JsonLdNode {
  const dictionary = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: seoConfig.businessName,
    url: localizedUrl(locale, path),
    description: dictionary.metadata.pages.services.description,
    areaServed: seoConfig.areaServed,
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
    },
    serviceType: seoConfig.primaryServices,
  };
}

export function serviceJsonLd(locale: Locale, service: ServicePage): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: { "@id": organizationId },
    areaServed: seoConfig.areaServed,
    serviceType: service.title,
    url: localizedUrl(locale, `/services/${service.slug}`),
  };
}

export function collectionPageJsonLd({
  locale,
  path,
  name,
  description,
  mainEntity,
}: {
  locale: Locale;
  path: string;
  name: string;
  description?: string;
  mainEntity: JsonLdNode[];
}): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: localizedUrl(locale, path),
    inLanguage: locale,
    mainEntity,
  };
}

export function blogPostingJsonLd(locale: Locale, article: BlogArticle): JsonLdNode {
  const url = localizedUrl(locale, `/blog/${article.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    author: {
      "@type": "Person",
      name: seoConfig.author,
    },
    publisher: { "@id": organizationId },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: url,
    url,
    image: defaultOgImageUrl(),
    inLanguage: locale,
  };
}

export function caseStudyJsonLd(locale: Locale, study: CaseStudy): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    headline: study.title,
    url: localizedUrl(locale, `/case-studies/${study.slug}`),
    description: study.metaDescription,
    creator: { "@id": organizationId },
    publisher: { "@id": organizationId },
    datePublished: study.publishedAt,
    dateModified: study.updatedAt,
    about: study.technologies,
    inLanguage: locale,
  };
}

export function softwareApplicationJsonLd(locale: Locale, study: CaseStudy): JsonLdNode | null {
  const softwareCaseStudies = new Set(["taluna", "ai-story-generator", "family-historian", "react-ai-applications"]);

  if (!softwareCaseStudies.has(study.slug)) return null;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: study.title,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description: study.metaDescription,
    url: localizedUrl(locale, `/case-studies/${study.slug}`),
    creator: { "@id": organizationId },
    inLanguage: locale,
  };
}

export function faqJsonLd(faqs: Array<{ question: string; answer: string }>): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbItems(locale: Locale, items: Array<{ name: string; path?: string }>) {
  return items.map((item) => ({
    name: item.name,
    path: item.path ? localizePath(locale, item.path) : localizePath(locale),
  }));
}
