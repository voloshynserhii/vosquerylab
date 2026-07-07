import { seoConfig } from "./config";

export function normalizePath(path = "/") {
  const pathOnly = path.split("?")[0].split("#")[0] || "/";
  const withSlash = pathOnly.startsWith("/") ? pathOnly : `/${pathOnly}`;

  if (withSlash !== "/" && withSlash.endsWith("/")) {
    return withSlash.slice(0, -1);
  }

  return withSlash;
}

export function absoluteUrl(path = "/") {
  return new URL(path, seoConfig.siteUrl).toString();
}
