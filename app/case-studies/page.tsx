import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/seo-content";
import { absoluteUrl, breadcrumbJsonLd, siteName } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI Case Studies",
  description:
    "Case studies from Vosquery Lab covering AI story generation, React AI applications, custom AI integrations, document AI and workflow automation.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "AI Case Studies | Vosquery Lab",
    description:
      "Explore AI product, integration, automation and React AI application case studies.",
    url: "/case-studies",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <main className="px-6 pb-24 pt-32">
        <section className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Case studies
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            AI product and automation case studies
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Examples of AI products, React AI applications, mobile AI apps,
            document processing, integrations and workflow automation projects.
          </p>
        </section>

        <section className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h2 className="text-2xl font-semibold">
                <Link href={`/case-studies/${study.slug}`} className="hover:underline">
                  {study.title}
                </Link>
              </h2>
              <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                {study.metaDescription}
              </p>
              <Link href={`/case-studies/${study.slug}`} className="mt-5 inline-block font-medium underline underline-offset-4">
                View {study.title} case study
              </Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
      <Script
        id="case-studies-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: siteName, path: "/" },
              { name: "Case Studies", path: "/case-studies" },
            ]),
          ),
        }}
      />
      <Script
        id="case-studies-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "AI Case Studies",
            url: absoluteUrl("/case-studies"),
            mainEntity: caseStudies.map((study) => ({
              "@type": "CreativeWork",
              name: study.title,
              url: absoluteUrl(`/case-studies/${study.slug}`),
              description: study.metaDescription,
            })),
          }),
        }}
      />
    </div>
  );
}
