import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies, getCaseStudy, getService } from "@/data/seo-content";
import { absoluteUrl, breadcrumbJsonLd, siteName, truncateDescription } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

type CaseStudyPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case study not found", robots: { index: false, follow: false } };
  }

  return {
    title: study.metaTitle,
    description: truncateDescription(study.metaDescription),
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: study.metaTitle,
      description: study.metaDescription,
      url: `/case-studies/${study.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  const relatedServices = study.relatedServices
    .map(getService)
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <main className="px-6 pb-24 pt-32">
        <article className="mx-auto max-w-4xl">
          <nav className="mb-10 flex gap-2 text-sm text-zinc-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-black dark:hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-black dark:hover:text-white">Case Studies</Link>
            <span>/</span>
            <span>{study.title}</span>
          </nav>

          <header>
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Case study
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
              {study.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {study.metaDescription}
            </p>
          </header>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">Problem</h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">{study.problem}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold">Solution</h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">{study.solution}</p>
          </section>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ListBlock title="Architecture" items={study.architecture} />
            <ListBlock title="Technologies" items={study.technologies} />
            <ListBlock title="Results" items={study.results} />
            <section className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h2 className="text-2xl font-bold">Related services</h2>
              <div className="mt-4 space-y-3">
                {relatedServices.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="block font-medium underline underline-offset-4">
                    {service.title}
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
      <Script
        id="case-study-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: study.title,
            url: absoluteUrl(`/case-studies/${study.slug}`),
            description: study.metaDescription,
            creator: { "@id": absoluteUrl("/#organization") },
            about: study.technologies,
          }),
        }}
      />
      <Script
        id="case-study-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: siteName, path: "/" },
              { name: "Case Studies", path: "/case-studies" },
              { name: study.title, path: `/case-studies/${study.slug}` },
            ]),
          ),
        }}
      />
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
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
