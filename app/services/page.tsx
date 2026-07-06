import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/seo-content";
import { absoluteUrl, breadcrumbJsonLd, siteName } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI Engineering Services",
  description:
    "AI engineering services from Vosquery Lab: AI agents, RAG development, LLM integrations, MCP integrations, AI automation and custom AI software.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Engineering Services | Vosquery Lab",
    description:
      "Explore AI agents, RAG systems, LLM integrations, MCP integrations, automation and custom AI product development.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <main className="px-6 pb-24 pt-32">
        <section className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Services
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            AI engineering, automation and product development services
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Vosquery Lab builds production AI systems for companies that need
            agents, RAG, LLM applications, workflow automation, integrations and
            AI product development with maintainable engineering.
          </p>
        </section>

        <section className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h2 className="text-xl font-semibold">
                <Link href={`/services/${service.slug}`} className="hover:underline">
                  {service.title}
                </Link>
              </h2>
              <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                {service.metaDescription}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-block font-medium text-black underline underline-offset-4 dark:text-white"
              >
                Learn about {service.shortTitle}
              </Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
      <Script
        id="services-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: siteName, path: "/" },
              { name: "Services", path: "/services" },
            ]),
          ),
        }}
      />
      <Script
        id="services-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "AI Engineering Services",
            url: absoluteUrl("/services"),
            mainEntity: services.map((service) => ({
              "@type": "Service",
              name: service.title,
              url: absoluteUrl(`/services/${service.slug}`),
              description: service.metaDescription,
            })),
          }),
        }}
      />
    </div>
  );
}
