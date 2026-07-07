import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  DetailBreadcrumbs,
  DetailCard,
  DetailContent,
  DetailCTA,
  DetailHero,
  DetailShell,
  FaqList,
  RelatedLinkGrid,
  TextBlock,
} from "@/components/ui/DetailPagePrimitives";
import { breadcrumbJsonLd, faqJsonLd, siteName, truncateDescription } from "@/lib/seo";
import { blogPostingJsonLd } from "@seo/jsonLd";
import { type Locale, localizePath, locales } from "@i18n/config";
import { getDictionary } from "@i18n/dictionaries";
import { getLocalizedArticle, getLocalizedArticles, getLocalizedCaseStudy, getLocalizedService } from "@i18n/content";
import { buildLocalizedMetadata } from "@i18n/seo";
import { BookOpen, Search } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

type BlogArticlePageProps = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getLocalizedArticles(locale).map((article) => ({ locale, slug: article.slug })),
  );
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getLocalizedArticle(locale, slug);

  if (!article) {
    return { title: "Article not found", robots: { index: false, follow: false } };
  }

  return buildLocalizedMetadata({
    locale,
    path: `/blog/${article.slug}`,
    type: "article",
    entry: {
      title: article.metaTitle,
      description: truncateDescription(article.metaDescription),
      keywords: [article.title, ...getDictionary(locale).metadata.site.keywords],
      openGraphTitle: article.metaTitle,
      openGraphDescription: article.metaDescription,
      twitterTitle: article.metaTitle,
      twitterDescription: truncateDescription(article.metaDescription),
    },
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { locale, slug } = await params;
  const dictionary = getDictionary(locale);
  const article = getLocalizedArticle(locale, slug);
  const detail = dictionary.blog.detail;

  if (!article) notFound();

  const relatedServices = article.relatedServices
    .map((item) => getLocalizedService(locale, item))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const relatedCaseStudies = article.relatedCaseStudies
    .map((item) => getLocalizedCaseStudy(locale, item))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="min-h-screen bg-[#030713]">
      <Header locale={locale} dictionary={dictionary} />
      <DetailShell>
        <DetailHero
          eyebrow={detail.eyebrow}
          title={article.title}
          description={article.summary}
          badges={relatedServices.map((service) => service.title).slice(0, 5)}
          breadcrumbs={
            <DetailBreadcrumbs
              items={[
                { href: localizePath(locale), label: dictionary.common.home },
                { href: localizePath(locale, "/blog"), label: dictionary.blog.page.title },
                { label: article.title },
              ]}
            />
          }
        />
        <DetailContent>
          <DetailCard title={dictionary.common.summary} icon={Search}>
            <TextBlock>
              {detail.searchIntent}: {article.intent}
            </TextBlock>
          </DetailCard>

          <div className="mt-6 grid gap-6">
            {article.sections.map((section) => (
              <DetailCard key={section.heading} title={section.heading} icon={BookOpen}>
                <TextBlock>{section.body}</TextBlock>
              </DetailCard>
            ))}
          </div>

          <div className="mt-6">
            <DetailCard title={dictionary.common.faq}>
              <FaqList faqs={article.faqs} />
            </DetailCard>
          </div>

          <section className="mt-6 grid gap-6 md:grid-cols-2">
            <RelatedLinkGrid title={dictionary.common.relatedServices} basePath={localizePath(locale, "/services")} items={relatedServices} />
            <RelatedLinkGrid title={dictionary.common.relatedCaseStudies} basePath={localizePath(locale, "/case-studies")} items={relatedCaseStudies} />
          </section>

          <DetailCTA
            title={detail.ctaTitle}
            text={detail.ctaText}
            href={localizePath(locale, "/#contact")}
            label={dictionary.navigation.contact}
          />
        </DetailContent>
      </DetailShell>
      <Footer locale={locale} dictionary={dictionary} />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...blogPostingJsonLd(locale, article),
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
              { name: siteName, path: localizePath(locale) },
              { name: dictionary.blog.page.title, path: localizePath(locale, "/blog") },
              { name: article.title, path: localizePath(locale, `/blog/${article.slug}`) },
            ]),
          ),
        }}
      />
    </div>
  );
}
