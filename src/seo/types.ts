import type { Metadata } from "next";

export type SeoPageType = "website" | "article";

export type MetadataEntry = {
  title: string;
  description: string;
  keywords: string[];
  openGraphTitle: string;
  openGraphDescription: string;
  twitterTitle: string;
  twitterDescription: string;
};

export type JsonLdNode = Record<string, unknown>;

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type BuildMetadataInput = {
  locale: import("@i18n/config").Locale;
  path?: string;
  entry: MetadataEntry;
  type?: SeoPageType;
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
};

export type NextMetadata = Metadata;

