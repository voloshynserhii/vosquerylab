import { defaultLocale, locales, localizePath, type Locale } from "@i18n/config";
import { absoluteUrl, normalizePath } from "./canonical";

export function localizedPath(locale: Locale, path = "/") {
  return normalizePath(localizePath(locale, normalizePath(path)));
}

export function localizedUrl(locale: Locale, path = "/") {
  return absoluteUrl(localizedPath(locale, path));
}

export function localizedAlternates(locale: Locale, path = "/") {
  const languages = Object.fromEntries(
    locales.map((item) => [item, localizedUrl(item, path)]),
  ) as Record<Locale, string>;

  return {
    canonical: localizedUrl(locale, path),
    languages: {
      ...languages,
      "x-default": localizedUrl(defaultLocale, path),
    },
  };
}

