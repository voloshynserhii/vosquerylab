import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  DetailBreadcrumbs,
  DetailCard,
  DetailContent,
  DetailHero,
  DetailList,
  DetailShell,
  RelatedLinkGrid,
  TextBlock,
} from "@/components/ui/DetailPagePrimitives";
import TechChip from "@/components/ui/TechChip";
import { breadcrumbJsonLd, siteName, truncateDescription } from "@/lib/seo";
import { caseStudyJsonLd, softwareApplicationJsonLd } from "@seo/jsonLd";
import { type Locale, localizePath, locales } from "@i18n/config";
import { getDictionary } from "@i18n/dictionaries";
import { getLocalizedCaseStudies, getLocalizedCaseStudy, getLocalizedService } from "@i18n/content";
import { buildLocalizedMetadata } from "@i18n/seo";
import { BriefcaseBusiness, CheckCircle2, Network, Sparkles, Wrench } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

type CaseStudyPageProps = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getLocalizedCaseStudies(locale).map((study) => ({ locale, slug: study.slug })),
  );
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const study = getLocalizedCaseStudy(locale, slug);

  if (!study) {
    return { title: "Case study not found", robots: { index: false, follow: false } };
  }

  return buildLocalizedMetadata({
    locale,
    path: `/case-studies/${study.slug}`,
    type: "article",
    entry: {
      title: study.metaTitle,
      description: truncateDescription(study.metaDescription),
      keywords: [study.title, ...getDictionary(locale).metadata.site.keywords],
      openGraphTitle: study.metaTitle,
      openGraphDescription: study.metaDescription,
      twitterTitle: study.metaTitle,
      twitterDescription: truncateDescription(study.metaDescription),
    },
    publishedTime: study.publishedAt,
    modifiedTime: study.updatedAt,
  });
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { locale, slug } = await params;
  const dictionary = getDictionary(locale);
  const study = getLocalizedCaseStudy(locale, slug);
  const detail = dictionary.caseStudies.detail;

  if (!study) notFound();

  const relatedServices = study.relatedServices
    .map((item) => getLocalizedService(locale, item))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const softwareApplicationSchema = softwareApplicationJsonLd(locale, study);

  return (
    <div className="min-h-screen bg-[#030713]">
      <Header locale={locale} dictionary={dictionary} />
      <DetailShell>
        <DetailHero
          eyebrow={detail.eyebrow}
          title={study.title}
          description={study.metaDescription}
          badges={study.technologies.slice(0, 6)}
          breadcrumbs={
            <DetailBreadcrumbs
              items={[
                { href: localizePath(locale), label: dictionary.common.home },
                { href: localizePath(locale, "/case-studies"), label: dictionary.caseStudies.page.title },
                { label: study.title },
              ]}
            />
          }
        />
        <DetailContent>
          <div className="grid gap-6 lg:grid-cols-2">
            <DetailCard title={detail.problem} icon={BriefcaseBusiness}>
              <TextBlock>{study.problem}</TextBlock>
            </DetailCard>
            <DetailCard title={detail.solution} icon={Sparkles}>
              <TextBlock>{study.solution}</TextBlock>
            </DetailCard>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <DetailCard title={detail.architecture} icon={Network}>
              <DetailList items={study.architecture} />
            </DetailCard>
            <DetailCard title={detail.technologies} icon={Wrench}>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((technology) => (
                  <TechChip key={technology} dark>
                    {technology}
                  </TechChip>
                ))}
              </div>
            </DetailCard>
            <DetailCard title={detail.results} icon={CheckCircle2}>
              <DetailList items={study.results} />
            </DetailCard>
            <RelatedLinkGrid title={dictionary.common.relatedServices} basePath={localizePath(locale, "/services")} items={relatedServices} />
          </div>
        </DetailContent>
      </DetailShell>
      <Footer locale={locale} dictionary={dictionary} />
      <Script
        id="case-study-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...caseStudyJsonLd(locale, study),
          }),
        }}
      />
      {softwareApplicationSchema && (
        <Script
          id="case-study-software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
      )}
      <Script
        id="case-study-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: siteName, path: localizePath(locale) },
              { name: dictionary.caseStudies.page.title, path: localizePath(locale, "/case-studies") },
              { name: study.title, path: localizePath(locale, `/case-studies/${study.slug}`) },
            ]),
          ),
        }}
      />
    </div>
  );
}
