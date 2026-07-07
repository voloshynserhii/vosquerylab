import Header from "@/components/Header";
import Hero from "@/containers/Hero";
import Services from "@/containers/Services";
import Clients from "@/containers/Clients";
import Contact from "@/containers/Contact";
import Footer from "@/components/Footer";
import HomeSeoContent from "@/containers/HomeSeoContent";
import type { Metadata } from "next";
import { type Locale } from "@i18n/config";
import { getDictionary } from "@i18n/dictionaries";
import { buildLocalizedMetadata } from "@i18n/seo";

type HomeProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: HomeProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return buildLocalizedMetadata({
    locale,
    entry: dictionary.metadata.pages.home,
  });
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-950 selection:bg-violet-200">
      <Header locale={locale} dictionary={dictionary} />
      <main className="flex flex-col">
        <Hero locale={locale} dictionary={dictionary} />
        <Services locale={locale} dictionary={dictionary} />
        <HomeSeoContent locale={locale} dictionary={dictionary} />
        <Clients locale={locale} dictionary={dictionary} />
        <Contact dictionary={dictionary} />
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </div>
  );
}
