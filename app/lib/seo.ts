export const siteUrl = "https://vosquery-lab.site";
export const siteName = "Vosquery Lab";
export const defaultDescription =
  "Vosquery Lab is an AI engineering and automation studio building AI agents, LLM applications, RAG systems, AI integrations, MCP integrations and custom AI software.";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function truncateDescription(text: string, maxLength = 155) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
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
