import { localeOg, locales, type Locale } from "@i18n/config";
import { absoluteUrl } from "./canonical";
import { seoConfig } from "./config";
import { localizedUrl } from "./hreflang";

export function defaultOgImageUrl() {
  return absoluteUrl(seoConfig.defaultOgImage);
}

export function openGraphImage(image?: string) {
  return {
    url: absoluteUrl(image ?? seoConfig.defaultOgImage),
    width: 1200,
    height: 630,
    alt: `${seoConfig.siteName} - ${seoConfig.description}`,
  };
}

export function alternateOgLocales(locale: Locale) {
  return locales.filter((item) => item !== locale).map((item) => localeOg[item]);
}

export function openGraphUrl(locale: Locale, path = "/") {
  return localizedUrl(locale, path);
}

