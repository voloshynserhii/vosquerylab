import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogArticles, getArticle, getCaseStudy, getService } from "@/data/seo-content";
import { absoluteUrl, breadcrumbJsonLd, faqJsonLd, siteName, truncateDescription } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

type BlogArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: "Article not found", robots: { index: false, follow: false } };
  }

  return {
    title: article.metaTitle,
    description: truncateDescription(article.metaDescription),
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `/blog/${article.slug}`,
      type: "article",
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const relatedServices = article.relatedServices
    .map(getService)
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const relatedCaseStudies = article.relatedCaseStudies
    .map(getCaseStudy)
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <main className="px-6 pb-24 pt-32">
        <article className="mx-auto max-w-4xl">
          <nav className="mb-10 flex gap-2 text-sm text-zinc-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-black dark:hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-black dark:hover:text-white">Blog</Link>
            <span>/</span>
            <span>{article.title}</span>
          </nav>

          <header>
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              AI engineering guide
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {article.summary}
            </p>
          </header>

          <section className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-2xl font-bold">Summary</h2>
            <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Search intent: {article.intent} This article is structured so
              product teams and AI search systems can identify the topic,
              business use cases, implementation considerations and related
              Vosquery Lab services.
            </p>
          </section>

          <div className="mt-10 space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-bold">{section.heading}</h2>
                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <section className="mt-10">
            <h2 className="text-3xl font-bold">Frequently asked questions</h2>
            <div className="mt-5 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
              {article.faqs.map((faq) => (
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
            <section className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h2 className="text-2xl font-bold">Related case studies</h2>
              <div className="mt-4 space-y-3">
                {relatedCaseStudies.map((study) => (
                  <Link key={study.slug} href={`/case-studies/${study.slug}`} className="block font-medium underline underline-offset-4">
                    {study.title}
                  </Link>
                ))}
              </div>
            </section>
          </section>

          <section className="mt-12 rounded-2xl bg-black p-8 text-white dark:bg-white dark:text-black">
            <h2 className="text-2xl font-bold">Need this implemented?</h2>
            <p className="mt-3 text-zinc-300 dark:text-zinc-700">
              Vosquery Lab can help turn this concept into a working AI product,
              workflow or integration.
            </p>
            <Link href="/#contact" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-medium text-black dark:bg-black dark:text-white">
              Talk to Vosquery Lab
            </Link>
          </section>
        </article>
      </main>
      <Footer />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.metaDescription,
            url: absoluteUrl(`/blog/${article.slug}`),
            author: { "@type": "Organization", name: siteName },
            publisher: { "@id": absoluteUrl("/#organization") },
            mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`),
          }),
        }}
      />
      <Script
        id="article-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(article.faqs)) }}
      />
      <Script
        id="article-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: siteName, path: "/" },
              { name: "Blog", path: "/blog" },
              { name: article.title, path: `/blog/${article.slug}` },
            ]),
          ),
        }}
      />
    </div>
  );
}
