import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BlogCard,
  CTASection,
  FeaturedCard,
  PageHero,
  SectionContainer,
  TopicChip,
} from "@/components/ui/ListingPagePrimitives";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbJsonLd, siteName } from "@/lib/seo";
import { collectionPageJsonLd } from "@seo/jsonLd";
import { localizedUrl } from "@seo/hreflang";
import { cn, colors, gradients, space } from "@theme/index";
import { type Locale, localizePath } from "@i18n/config";
import { getDictionary } from "@i18n/dictionaries";
import { getLocalizedArticles } from "@i18n/content";
import { buildLocalizedMetadata } from "@i18n/seo";
import {
  Bot,
  BrainCircuit,
  Cable,
  Database,
  FileCode2,
  GitBranch,
  Network,
  Workflow,
} from "lucide-react";
import type { Metadata } from "next";
import Script from "next/script";

type BlogPageProps = { params: Promise<{ locale: Locale }> };

const articleIcons = [Database, Bot, Cable, FileCode2, Network, GitBranch, BrainCircuit, Workflow];

function getArticleCategory(title: string) {
  const value = title.toLowerCase();

  if (value.includes("rag") || value.includes("vector") || value.includes("semantic") || value.includes("embedding")) {
    return "RAG & Retrieval";
  }

  if (value.includes("agent") || value.includes("crewai") || value.includes("langgraph")) {
    return "AI Agents";
  }

  if (value.includes("mcp") || value.includes("api") || value.includes("integration")) {
    return "Integrations";
  }

  if (value.includes("automation") || value.includes("workflow")) {
    return "Automation";
  }

  return "AI Engineering";
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return buildLocalizedMetadata({
    locale,
    path: "/blog",
    entry: dictionary.metadata.pages.blog,
  });
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const blogArticles = getLocalizedArticles(locale);
  const page = dictionary.blog.page;
  const [featuredArticle, ...articleGrid] = blogArticles;

  return (
    <div className={cn("min-h-screen", colors.pageShell)}>
      <Header locale={locale} dictionary={dictionary} />
      <main className={cn("pb-24", gradients.darkSection)}>
        <PageHero
          eyebrow={page.eyebrow}
          title={page.title}
          subtitle={page.subtitle}
          badges={page.badges}
        />

        <SectionContainer className={cn("pt-14", space.sectionYCompact)}>
          <Reveal>
            <FeaturedCard
              href={localizePath(locale, `/blog/${featuredArticle.slug}`)}
              eyebrow={page.featuredEyebrow}
              title={featuredArticle.title}
              description={featuredArticle.metaDescription}
              tags={["RAG", "Vector Databases", "Knowledge Base AI"]}
              icon={Database}
              cta={page.featuredCta}
              featuredLabel={dictionary.common.featured}
              imageAlt={dictionary.common.projectPreviewAlt.replace("{title}", featuredArticle.title)}
            />
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-3">
            {page.filters.map((topic, index) => (
              <TopicChip key={topic} active={index === 0}>
                {topic}
              </TopicChip>
            ))}
          </div>

          <section className={cn("mt-8 grid md:grid-cols-2 xl:grid-cols-3", space.stack24)}>
            {articleGrid.map((article, index) => {
              const Icon = articleIcons[index % articleIcons.length];
              const readingTime = `${6 + (index % 4)} ${page.minRead}`;

              return (
                <Reveal key={article.slug} delay={(index % 6) * 0.02}>
                  <BlogCard
                    href={localizePath(locale, `/blog/${article.slug}`)}
                    icon={Icon}
                    category={getArticleCategory(article.title)}
                    title={article.title}
                    description={article.metaDescription}
                    readingTime={readingTime}
                    cta={dictionary.common.readGuide}
                  />
                </Reveal>
              );
            })}
          </section>

          <CTASection
            title={page.ctaTitle}
            primaryHref={localizePath(locale, "/#contact")}
            primaryLabel={page.primaryCta}
            secondaryHref={localizePath(locale, "/case-studies")}
            secondaryLabel={page.secondaryCta}
          />
        </SectionContainer>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
      <Script
        id="blog-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: siteName, path: localizePath(locale) },
              { name: page.title, path: localizePath(locale, "/blog") },
            ]),
          ),
        }}
      />
      <Script
        id="blog-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            collectionPageJsonLd({
              locale,
              path: "/blog",
              name: page.title,
              description: dictionary.metadata.pages.blog.description,
              mainEntity: blogArticles.map((article) => ({
              "@type": "Article",
              headline: article.title,
              url: localizedUrl(locale, `/blog/${article.slug}`),
              dateModified: article.updatedAt,
              })),
            }),
          ),
        }}
      />
    </div>
  );
}
