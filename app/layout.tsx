import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "Vosquery Lab - Digital Product Studio",
    template: "%s | Vosquery Lab",
  },
  description: "We build high-performance websites and mobile applications. Expert web design and development studio specializing in Next.js and React.",
  keywords: ["web design", "web development", "mobile apps", "next.js", "react", "digital agency", "software studio"],
  authors: [{ name: "Vosquery Lab" }],
  creator: "Vosquery Lab",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vosquerylab.vercel.app",
    title: "Vosquery Lab - Digital Product Studio",
    description: "We build high-performance websites and mobile applications.",
    siteName: "Vosquery Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vosquery Lab - Digital Product Studio",
    description: "We build high-performance websites and mobile applications.",
    creator: "@vosquery",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vosquery Lab",
  url: "https://vosquerylab.vercel.app",
  logo: "https://vosquerylab.vercel.app/logo.png",
  description: "We build high-performance websites and mobile applications.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrer de Colón, 1",
    addressLocality: "Valencia",
    postalCode: "46004",
    addressCountry: "ES",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34-614-026-351",
    contactType: "customer service",
  },
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
