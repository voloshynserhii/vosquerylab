export const locales = ["en", "uk", "ru", "pl", "tr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  uk: "Українська",
  ru: "Русский",
  pl: "Polski",
  tr: "Türkçe",
};

export const localeOg: Record<Locale, string> = {
  en: "en_US",
  uk: "uk_UA",
  ru: "ru_RU",
  pl: "pl_PL",
  tr: "tr_TR",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(locale: Locale, path = "/") {
  const cleanPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleanPath}`;
}

export function stripLocale(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] && isLocale(segments[0])) {
    return `/${segments.slice(1).join("/")}`;
  }

  return pathname || "/";
}
