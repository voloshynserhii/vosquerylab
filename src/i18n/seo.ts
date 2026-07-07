import type { Metadata } from "next";
import { absoluteUrl, siteName, siteUrl } from "@/lib/seo";
import {
  defaultLocale,
  localeOg,
  locales,
  localizePath,
  type Locale,
} from "./config";
import { getDictionary } from "./dictionaries";

type MetadataEntry = {
  title: string;
  description: string;
  keywords: string[];
  openGraphTitle: string;
  openGraphDescription: string;
  twitterTitle: string;
  twitterDescription: string;
};

export function localizedAlternates(locale: Locale, path = "/") {
  const languages = Object.fromEntries(
    locales.map((item) => [item, localizePath(item, path)]),
  ) as Record<Locale, string>;

  return {
    canonical: localizePath(locale, path),
    languages: {
      ...languages,
      "x-default": localizePath(defaultLocale, path),
    },
  };
}

export function localizedUrl(locale: Locale, path = "/") {
  return absoluteUrl(localizePath(locale, path));
}

export function buildLocalizedMetadata({
  locale,
  path = "/",
  entry,
  type = "website",
}: {
  locale: Locale;
  path?: string;
  entry: MetadataEntry;
  type?: "website" | "article";
}): Metadata {
  return {
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    alternates: localizedAlternates(locale, path),
    openGraph: {
      title: entry.openGraphTitle,
      description: entry.openGraphDescription,
      url: localizedUrl(locale, path),
      type,
      locale: localeOg[locale],
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: entry.twitterTitle,
      description: entry.twitterDescription,
      creator: "@vosquery",
    },
  };
}

export function siteJsonLd(locale: Locale) {
  const dictionary = getDictionary(locale);
  const description = dictionary.metadata.site.description;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: siteName,
        alternateName: "Vo$Query Lab",
        url: siteUrl,
        logo: absoluteUrl("/icon"),
        description,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Carrer Apostol Santiago, 36",
          addressLocality: "Benicassim",
          postalCode: "12560",
          addressRegion: "Community of Valencia",
          addressCountry: "ES",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+34-614-026-351",
          contactType: "sales",
          email: "vosquery@gmail.com",
        },
        knowsAbout: dictionary.metadata.site.knowsAbout,
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: siteName,
        url: localizedUrl(locale),
        inLanguage: locale,
        publisher: { "@id": absoluteUrl("/#organization") },
        description,
      },
    ],
  };
}
