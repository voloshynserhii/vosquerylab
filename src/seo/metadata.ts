import type { Metadata } from "next";
import { localeOg } from "@i18n/config";
import { seoConfig } from "./config";
import { localizedAlternates, localizedUrl } from "./hreflang";
import { alternateOgLocales, openGraphImage } from "./openGraph";
import type { BuildMetadataInput } from "./types";

export function truncateDescription(text: string, maxLength = 155) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trimEnd()}...`;
}

export function buildLocalizedMetadata({
  locale,
  path = "/",
  entry,
  type = "website",
  publishedTime,
  modifiedTime,
  image,
}: BuildMetadataInput): Metadata {
  const ogImage = openGraphImage(image);

  return {
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    alternates: localizedAlternates(locale, path),
    openGraph: {
      title: entry.openGraphTitle,
      description: entry.openGraphDescription,
      url: localizedUrl(locale, path),
      siteName: seoConfig.siteName,
      type,
      locale: localeOg[locale],
      alternateLocale: alternateOgLocales(locale),
      images: [ogImage],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors: [seoConfig.author],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: entry.twitterTitle,
      description: entry.twitterDescription,
      images: [ogImage.url],
      creator: seoConfig.twitterCreator,
    },
  };
}

