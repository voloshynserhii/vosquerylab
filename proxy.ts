import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, localizePath } from "@i18n/config";

const PUBLIC_FILE = /\.(.*)$/;
const legacyRoutes = ["/services", "/blog", "/case-studies"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split("/").filter(Boolean)[0];
  if (firstSegment && isLocale(firstSegment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", firstSegment);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  if (pathname === "/" || legacyRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`))) {
    const url = request.nextUrl.clone();
    url.pathname = localizePath(defaultLocale, pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
