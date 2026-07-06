import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCaseStudy, getService, services } from "@/data/seo-content";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  siteName,
  truncateDescription,
} from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found", robots: { index: false, follow: false } };
  }

  return {
    title: service.metaTitle,
    description: truncateDescription(service.metaDescription),
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const relatedServices = service.relatedServices
    .map(getService)
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const relatedCaseStudies = service.relatedCaseStudies
    .map(getCaseStudy)
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <main className="px-6 pb-24 pt-32">
        <article className="mx-auto max-w-4xl">
          <nav className="mb-10 flex gap-2 text-sm text-zinc-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-black dark:hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-black dark:hover:text-white">
              Services
            </Link>
            <span>/</span>
            <span>{service.title}</span>
          </nav>

          <header>
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              AI service
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {service.overview}
            </p>
          </header>

          <section className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-2xl font-bold">Summary</h2>
            <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
              {service.searchIntent} This page explains what the service is,
              who needs it, what problems it solves, how Vosquery Lab
              implements it and what timeline to expect.
            </p>
          </section>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <SectionList title="Who needs it" items={service.whoNeedsIt} />
            <SectionList title="Business problems solved" items={service.problemsSolved} />
            <SectionList title="Benefits" items={service.benefits} />
            <SectionList title="Technology stack" items={service.technologies} />
          </div>

          <section className="mt-10">
            <h2 className="text-3xl font-bold">Implementation process</h2>
            <ol className="mt-5 space-y-4">
              {service.process.map((step, index) => (
                <li key={step} className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
                  <strong>{index + 1}. </strong>
                  <span className="text-zinc-600 dark:text-zinc-400">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold">Typical timeline</h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              {service.timeline}
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold">Frequently asked questions</h2>
            <div className="mt-5 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
              {service.faqs.map((faq) => (
                <section key={faq.question} className="p-5">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {faq.answer}
                  </p>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <RelatedLinks title="Related services" basePath="/services" items={relatedServices} />
            <RelatedLinks title="Related case studies" basePath="/case-studies" items={relatedCaseStudies} />
          </section>

          <section className="mt-12 rounded-2xl bg-black p-8 text-white dark:bg-white dark:text-black">
            <h2 className="text-2xl font-bold">Plan an AI implementation</h2>
            <p className="mt-3 text-zinc-300 dark:text-zinc-700">
              Share the workflow, product feature or automation you want to build.
              We will help define the architecture and next implementation step.
            </p>
            <Link href="/#contact" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-medium text-black dark:bg-black dark:text-white">
              Contact Vosquery Lab
            </Link>
          </section>
        </article>
      </main>
      <Footer />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            url: absoluteUrl(`/services/${service.slug}`),
            description: service.metaDescription,
            provider: { "@id": absoluteUrl("/#organization") },
            serviceType: service.title,
            areaServed: "Worldwide",
          }),
        }}
      />
      <Script
        id="service-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(service.faqs)) }}
      />
      <Script
        id="service-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: siteName, path: "/" },
              { name: "Services", path: "/services" },
              { name: service.title, path: `/services/${service.slug}` },
            ]),
          ),
        }}
      />
    </div>
  );
}

function SectionList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function RelatedLinks({
  title,
  basePath,
  items,
}: {
  title: string;
  basePath: string;
  items: Array<{ slug: string; title: string }>;
}) {
  return (
    <section className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <Link key={item.slug} href={`${basePath}/${item.slug}`} className="block font-medium underline underline-offset-4">
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
