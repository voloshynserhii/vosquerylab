import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  DetailBreadcrumbs,
  DetailCard,
  DetailContent,
  DetailCTA,
  DetailHero,
  DetailList,
  DetailShell,
  FaqList,
  NumberedSteps,
  RelatedLinkGrid,
  TextBlock,
} from "@/components/ui/DetailPagePrimitives";
import TechChip from "@/components/ui/TechChip";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  siteName,
  truncateDescription,
} from "@/lib/seo";
import { type Locale, localizePath, locales } from "@i18n/config";
import { getDictionary } from "@i18n/dictionaries";
import {
  getLocalizedCaseStudy,
  getLocalizedService,
  getLocalizedServices,
} from "@i18n/content";
import { buildLocalizedMetadata } from "@i18n/seo";
import { Bot, CheckCircle2, Clock3, Layers3, ListChecks, Sparkles, Workflow } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

type ServicePageProps = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getLocalizedServices(locale).map((service) => ({ locale, slug: service.slug })),
  );
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getLocalizedService(locale, slug);

  if (!service) {
    return { title: "Service not found", robots: { index: false, follow: false } };
  }

  return buildLocalizedMetadata({
    locale,
    path: `/services/${service.slug}`,
    entry: {
      title: service.metaTitle,
      description: truncateDescription(service.metaDescription),
      keywords: [service.title, ...getDictionary(locale).metadata.site.keywords],
      openGraphTitle: service.metaTitle,
      openGraphDescription: service.metaDescription,
      twitterTitle: service.metaTitle,
      twitterDescription: truncateDescription(service.metaDescription),
    },
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { locale, slug } = await params;
  const dictionary = getDictionary(locale);
  const service = getLocalizedService(locale, slug);
  const detail = dictionary.services.detail;

  if (!service) notFound();

  const relatedServices = service.relatedServices
    .map((item) => getLocalizedService(locale, item))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const relatedCaseStudies = service.relatedCaseStudies
    .map((item) => getLocalizedCaseStudy(locale, item))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="min-h-screen bg-[#030713]">
      <Header locale={locale} dictionary={dictionary} />
      <DetailShell>
        <DetailHero
          eyebrow={detail.eyebrow}
          title={service.title}
          description={service.overview}
          badges={service.technologies.slice(0, 6)}
          breadcrumbs={
            <DetailBreadcrumbs
              items={[
                { href: localizePath(locale), label: dictionary.common.home },
                { href: localizePath(locale, "/services"), label: dictionary.services.page.title },
                { label: service.title },
              ]}
            />
          }
        />
        <DetailContent>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <DetailCard title={dictionary.common.summary} icon={Sparkles}>
              <TextBlock>
                {service.searchIntent} {detail.summarySuffix}
              </TextBlock>
            </DetailCard>
            <DetailCard title={detail.timeline} icon={Clock3}>
              <TextBlock>{service.timeline}</TextBlock>
            </DetailCard>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <DetailCard title={detail.whoNeedsIt} icon={Bot}>
              <DetailList items={service.whoNeedsIt} />
            </DetailCard>
            <DetailCard title={detail.problemsSolved} icon={Workflow}>
              <DetailList items={service.problemsSolved} />
            </DetailCard>
            <DetailCard title={detail.benefits} icon={CheckCircle2}>
              <DetailList items={service.benefits} />
            </DetailCard>
            <DetailCard title={detail.technologies} icon={Layers3}>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((technology) => (
                  <TechChip key={technology} dark>
                    {technology}
                  </TechChip>
                ))}
              </div>
            </DetailCard>
          </div>

          <div className="mt-6">
            <DetailCard title={detail.process} icon={ListChecks}>
              <NumberedSteps items={service.process} />
            </DetailCard>
          </div>

          <div className="mt-6">
            <DetailCard title={dictionary.common.faq}>
              <FaqList faqs={service.faqs} />
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
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            url: absoluteUrl(localizePath(locale, `/services/${service.slug}`)),
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
              { name: siteName, path: localizePath(locale) },
              { name: dictionary.services.page.title, path: localizePath(locale, "/services") },
              { name: service.title, path: localizePath(locale, `/services/${service.slug}`) },
            ]),
          ),
        }}
      />
    </div>
  );
}
