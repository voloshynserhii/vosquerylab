import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { siteName, siteUrl } from "@/lib/seo";
import { defaultLocale, isLocale, type Locale } from "@i18n/config";
import { getDictionary } from "@i18n/dictionaries";
import { siteJsonLd } from "@i18n/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "AI Engineering",
  openGraph: {
    type: "website",
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@vosquery",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const localeParam = requestHeaders.get("x-locale") ?? undefined;
  const locale: Locale = localeParam && isLocale(localeParam) ? localeParam : defaultLocale;
  const dictionary = getDictionary(locale);
  const jsonLd = siteJsonLd(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MEASUREMENT_ID');
          `}
        </Script>
        <script
          type="application/json"
          id="localized-site-metadata"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dictionary.metadata.site) }}
        />
        {children}
      </body>
    </html>
  );
}
