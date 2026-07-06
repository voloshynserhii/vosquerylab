import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogArticles } from "@/data/seo-content";
import { absoluteUrl, breadcrumbJsonLd, siteName } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI Engineering Blog",
  description:
    "Technical articles about RAG, AI agents, MCP, LLM integrations, vector databases, AI automation and building AI products.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "AI Engineering Blog | Vosquery Lab",
    description:
      "Educational and commercial AI engineering guides for product teams, founders and operations teams.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <main className="px-6 pb-24 pt-32">
        <section className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Technical blog
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            AI engineering guides for product and automation teams
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Learn how RAG, AI agents, MCP integrations, vector databases,
            function calling, workflow automation and LLM applications work in
            production software.
          </p>
        </section>

        <section className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((article) => (
            <article
              key={article.slug}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h2 className="text-xl font-semibold">
                <Link href={`/blog/${article.slug}`} className="hover:underline">
                  {article.title}
                </Link>
              </h2>
              <p className="mt-3 line-clamp-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                {article.metaDescription}
              </p>
              <Link
                href={`/blog/${article.slug}`}
                className="mt-5 inline-block font-medium text-black underline underline-offset-4 dark:text-white"
              >
                Read about {article.title}
              </Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
      <Script
        id="blog-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: siteName, path: "/" },
              { name: "Blog", path: "/blog" },
            ]),
          ),
        }}
      />
      <Script
        id="blog-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "AI Engineering Blog",
            url: absoluteUrl("/blog"),
            mainEntity: blogArticles.map((article) => ({
              "@type": "Article",
              headline: article.title,
              url: absoluteUrl(`/blog/${article.slug}`),
            })),
          }),
        }}
      />
    </div>
  );
}
