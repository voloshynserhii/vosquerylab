import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { absoluteUrl, defaultDescription, siteName, siteUrl } from "@/lib/seo";
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
  title: {
    default: "Vosquery Lab - AI Engineering and AI Automation Studio",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "AI engineering",
    "AI agents",
    "AI automation",
    "LLM applications",
    "RAG development",
    "MCP integrations",
    "OpenAI integration",
    "custom AI software",
    "AI consulting",
    "React AI applications",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "AI Engineering",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Vosquery Lab - AI Engineering and AI Automation Studio",
    description: defaultDescription,
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Vosquery Lab - AI Engineering and AI Automation Studio",
    description: defaultDescription,
    creator: "@vosquery",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteName,
      alternateName: "Vo$Query Lab",
      url: siteUrl,
      logo: absoluteUrl("/icon"),
      description: defaultDescription,
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
      knowsAbout: [
        "AI Engineering",
        "AI Agents",
        "LLM Applications",
        "RAG Systems",
        "MCP Integrations",
        "AI Automation",
        "React",
        "React Native",
        "Next.js",
      ],
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: siteName,
      url: siteUrl,
      inLanguage: "en",
      publisher: { "@id": absoluteUrl("/#organization") },
      description: defaultDescription,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        {children}
      </body>
    </html>
  );
}
