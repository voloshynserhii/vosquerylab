import enBlog from "./locales/en/blog.json";
import enCaseStudies from "./locales/en/caseStudies.json";
import enCommon from "./locales/en/common.json";
import enFooter from "./locales/en/footer.json";
import enHome from "./locales/en/home.json";
import enMetadata from "./locales/en/metadata.json";
import enNavigation from "./locales/en/navigation.json";
import enServices from "./locales/en/services.json";
import plBlog from "./locales/pl/blog.json";
import plCaseStudies from "./locales/pl/caseStudies.json";
import plCommon from "./locales/pl/common.json";
import plFooter from "./locales/pl/footer.json";
import plHome from "./locales/pl/home.json";
import plMetadata from "./locales/pl/metadata.json";
import plNavigation from "./locales/pl/navigation.json";
import plServices from "./locales/pl/services.json";
import ruBlog from "./locales/ru/blog.json";
import ruCaseStudies from "./locales/ru/caseStudies.json";
import ruCommon from "./locales/ru/common.json";
import ruFooter from "./locales/ru/footer.json";
import ruHome from "./locales/ru/home.json";
import ruMetadata from "./locales/ru/metadata.json";
import ruNavigation from "./locales/ru/navigation.json";
import ruServices from "./locales/ru/services.json";
import trBlog from "./locales/tr/blog.json";
import trCaseStudies from "./locales/tr/caseStudies.json";
import trCommon from "./locales/tr/common.json";
import trFooter from "./locales/tr/footer.json";
import trHome from "./locales/tr/home.json";
import trMetadata from "./locales/tr/metadata.json";
import trNavigation from "./locales/tr/navigation.json";
import trServices from "./locales/tr/services.json";
import ukBlog from "./locales/uk/blog.json";
import ukCaseStudies from "./locales/uk/caseStudies.json";
import ukCommon from "./locales/uk/common.json";
import ukFooter from "./locales/uk/footer.json";
import ukHome from "./locales/uk/home.json";
import ukMetadata from "./locales/uk/metadata.json";
import ukNavigation from "./locales/uk/navigation.json";
import ukServices from "./locales/uk/services.json";
import type { Locale } from "./config";

export const dictionaries = {
  en: {
    common: enCommon,
    home: enHome,
    services: enServices,
    blog: enBlog,
    caseStudies: enCaseStudies,
    footer: enFooter,
    navigation: enNavigation,
    metadata: enMetadata,
  },
  uk: {
    common: ukCommon,
    home: ukHome,
    services: ukServices,
    blog: ukBlog,
    caseStudies: ukCaseStudies,
    footer: ukFooter,
    navigation: ukNavigation,
    metadata: ukMetadata,
  },
  ru: {
    common: ruCommon,
    home: ruHome,
    services: ruServices,
    blog: ruBlog,
    caseStudies: ruCaseStudies,
    footer: ruFooter,
    navigation: ruNavigation,
    metadata: ruMetadata,
  },
  pl: {
    common: plCommon,
    home: plHome,
    services: plServices,
    blog: plBlog,
    caseStudies: plCaseStudies,
    footer: plFooter,
    navigation: plNavigation,
    metadata: plMetadata,
  },
  tr: {
    common: trCommon,
    home: trHome,
    services: trServices,
    blog: trBlog,
    caseStudies: trCaseStudies,
    footer: trFooter,
    navigation: trNavigation,
    metadata: trMetadata,
  },
} as const;

export type Dictionary = (typeof dictionaries)["en"];
export type Namespace = keyof Dictionary;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary;
}
