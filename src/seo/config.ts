import { defaultLocale, locales } from "@i18n/config";

export const seoConfig = {
  siteName: "VosQuery Lab",
  siteUrl: "https://vosquery-lab.site",
  defaultLocale,
  locales,
  author: "Sergiy Voloshyn",
  businessName: "VosQuery Lab",
  businessType: "AI Engineering Studio",
  description: "AI Engineering and Automation for B2B Products",
  primaryServices: [
    "AI Engineering",
    "AI Automation",
    "LLM Applications",
    "RAG Systems",
    "AI Agents",
    "MCP Integrations",
    "React AI Products",
    "Workflow Automation",
  ],
  areaServed: "Worldwide",
  baseLocation: "Great Britain",
  siteLastUpdated: "2026-07-07",
  defaultOgImage: "/og/default-og.png",
  twitterCreator: "@vosquery",
  sameAs: ["https://www.linkedin.com/company/vosquery-lab/"],
} as const;
