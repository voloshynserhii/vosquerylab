import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CTASection,
  FeaturedCard,
  PageHero,
  SectionContainer,
  ServiceListingCard,
  TopicChip,
} from "@/components/ui/ListingPagePrimitives";
import Reveal from "@/components/ui/Reveal";
import { absoluteUrl, breadcrumbJsonLd, siteName } from "@/lib/seo";
import { cn, colors, gradients, space } from "@theme/index";
import { type Locale, localizePath } from "@i18n/config";
import { getDictionary } from "@i18n/dictionaries";
import { getLocalizedServices } from "@i18n/content";
import { buildLocalizedMetadata } from "@i18n/seo";
import {
  Bot,
  BrainCircuit,
  Cable,
  Code2,
  Database,
  FileText,
  Headphones,
  Mic2,
  Network,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { Metadata } from "next";
import Script from "next/script";

type ServicesPageProps = { params: Promise<{ locale: Locale }> };

const serviceIcons = [
  BrainCircuit,
  Bot,
  Sparkles,
  Cable,
  Network,
  Workflow,
  PanelsTopLeft,
  Database,
  FileText,
  Mic2,
  Code2,
  ShieldCheck,
  Headphones,
];

function getServiceCategory(slug: string, labels: typeof import("@i18n/dictionaries").dictionaries.en.services.page.categories) {
  if (slug.includes("rag") || slug.includes("vector") || slug.includes("knowledge")) {
    return labels.retrieval;
  }

  if (slug.includes("integration") || slug.includes("mcp") || slug.includes("openai") || slug.includes("anthropic") || slug.includes("gemini")) {
    return labels.integration;
  }

  if (slug.includes("automation") || slug.includes("document")) {
    return labels.automation;
  }

  if (slug.includes("react") || slug.includes("product") || slug.includes("mobile")) {
    return labels.product;
  }

  return labels.engineering;
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return buildLocalizedMetadata({
    locale,
    path: "/services",
    entry: dictionary.metadata.pages.services,
  });
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const services = getLocalizedServices(locale);
  const page = dictionary.services.page;
  const featuredService = services[0];
  const serviceGrid = services.slice(1);

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
              href={localizePath(locale, `/services/${featuredService.slug}`)}
              eyebrow={page.featuredEyebrow}
              title={featuredService.title}
              description={featuredService.metaDescription}
              tags={featuredService.technologies.slice(0, 6)}
              icon={BrainCircuit}
              cta={page.featuredCta}
              featuredLabel={dictionary.common.featured}
              imageAlt={dictionary.common.serviceVisualAlt.replace("{title}", featuredService.title)}
              imageSrc={`/assets/services/${featuredService.slug}.webp`}
            />
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-3">
            {page.filters.map((category, index) => (
              <TopicChip key={category} active={index === 0}>
                {category}
              </TopicChip>
            ))}
          </div>

          <section className={cn("mt-8 grid md:grid-cols-2 xl:grid-cols-3", space.stack24)}>
            {serviceGrid.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];

              return (
                <Reveal key={service.slug} delay={(index % 6) * 0.02}>
                  <ServiceListingCard
                    href={localizePath(locale, `/services/${service.slug}`)}
                    icon={Icon}
                    category={getServiceCategory(service.slug, page.categories)}
                    title={service.title}
                    description={service.metaDescription}
                    tags={service.technologies.slice(0, 4)}
                    imageSrc={`/assets/services/${service.slug}.webp`}
                    cta={dictionary.common.learnAboutService}
                    imageAlt={dictionary.common.serviceVisualAlt.replace("{title}", service.title)}
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
        id="services-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: siteName, path: localizePath(locale) },
              { name: page.title, path: localizePath(locale, "/services") },
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
            name: page.title,
            url: absoluteUrl(localizePath(locale, "/services")),
            mainEntity: services.map((service) => ({
              "@type": "Service",
              name: service.title,
              url: absoluteUrl(localizePath(locale, `/services/${service.slug}`)),
              description: service.metaDescription,
            })),
          }),
        }}
      />
    </div>
  );
}
