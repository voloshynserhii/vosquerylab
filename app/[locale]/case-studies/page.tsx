import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CaseStudyCard,
  CTASection,
  FeaturedCard,
  PageHero,
  SectionContainer,
} from "@/components/ui/ListingPagePrimitives";
import Reveal from "@/components/ui/Reveal";
import { absoluteUrl, breadcrumbJsonLd, siteName } from "@/lib/seo";
import { cn, colors, gradients, space } from "@theme/index";
import { type Locale, localizePath } from "@i18n/config";
import { getDictionary } from "@i18n/dictionaries";
import { getLocalizedCaseStudies } from "@i18n/content";
import { buildLocalizedMetadata } from "@i18n/seo";
import {
  Bot,
  BrainCircuit,
  FileText,
  Mic2,
  Network,
  PanelsTopLeft,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { Metadata } from "next";
import Script from "next/script";

type CaseStudiesPageProps = { params: Promise<{ locale: Locale }> };

const caseStudyIcons = [Sparkles, BrainCircuit, PanelsTopLeft, Network, Bot, Mic2, FileText, Workflow];

export async function generateMetadata({ params }: CaseStudiesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return buildLocalizedMetadata({
    locale,
    path: "/case-studies",
    entry: dictionary.metadata.pages.caseStudies,
  });
}

export default async function CaseStudiesPage({ params }: CaseStudiesPageProps) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const caseStudies = getLocalizedCaseStudies(locale);
  const page = dictionary.caseStudies.page;
  const [featuredCaseStudy, ...caseStudyGrid] = caseStudies;

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
              href={localizePath(locale, `/case-studies/${featuredCaseStudy.slug}`)}
              eyebrow={page.featuredEyebrow}
              title={featuredCaseStudy.title}
              description={featuredCaseStudy.metaDescription}
              tags={featuredCaseStudy.technologies}
              icon={Sparkles}
              cta={page.featuredCta}
              featuredLabel={dictionary.common.featured}
              imageAlt={dictionary.common.projectPreviewAlt.replace("{title}", featuredCaseStudy.title)}
            />
          </Reveal>

          <section className={cn("mt-10 grid md:grid-cols-2", space.stack24)}>
            {caseStudyGrid.map((study, index) => {
              const Icon = caseStudyIcons[(index + 1) % caseStudyIcons.length];

              return (
                <Reveal key={study.slug} delay={index * 0.03}>
                  <CaseStudyCard
                    href={localizePath(locale, `/case-studies/${study.slug}`)}
                    icon={Icon}
                    category={study.technologies[0] ?? "AI Product"}
                    title={study.title}
                    description={study.metaDescription}
                    tags={study.technologies}
                    cta={dictionary.common.viewCaseStudy}
                  />
                </Reveal>
              );
            })}
          </section>

          <CTASection
            title={page.ctaTitle}
            primaryHref={localizePath(locale, "/#contact")}
            primaryLabel={page.primaryCta}
            secondaryHref={localizePath(locale, "/services")}
            secondaryLabel={page.secondaryCta}
          />
        </SectionContainer>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
      <Script
        id="case-studies-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: siteName, path: localizePath(locale) },
              { name: page.title, path: localizePath(locale, "/case-studies") },
            ]),
          ),
        }}
      />
      <Script
        id="case-studies-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: page.title,
            url: absoluteUrl(localizePath(locale, "/case-studies")),
            mainEntity: caseStudies.map((study) => ({
              "@type": "CreativeWork",
              name: study.title,
              url: absoluteUrl(localizePath(locale, `/case-studies/${study.slug}`)),
              description: study.metaDescription,
            })),
          }),
        }}
      />
    </div>
  );
}
