import { absoluteUrl } from "@seo/canonical";
import { breadcrumbJsonLd } from "@seo/breadcrumbs";
import { seoConfig } from "@seo/config";
import { faqJsonLd } from "@seo/jsonLd";
import { truncateDescription } from "@seo/metadata";

export const siteUrl = seoConfig.siteUrl;
export const siteName = seoConfig.siteName;
export const defaultDescription =
  "VosQuery Lab is an AI engineering and automation studio building AI agents, LLM applications, RAG systems, AI integrations, MCP integrations and custom AI software.";

export { absoluteUrl, breadcrumbJsonLd, faqJsonLd, truncateDescription };
