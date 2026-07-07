import { Atom, Box, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { localizePath, type Locale } from "@i18n/config";
import type { Dictionary } from "@i18n/dictionaries";
import { cn, gradients, space } from "../../src/theme";

const serviceIcons = [Box, Zap, Atom];
const tones = ["violet", "indigo", "blue"] as const;

export default function Services({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Pick<Dictionary, "home">;
}) {
  const services = dictionary.home.services;

  return (
    <section id="services" className={cn(space.sectionY, gradients.page)}>
      <Container>
        <Reveal>
          <SectionHeader eyebrow={services.eyebrow} title={services.title} />
        </Reveal>
        <div className={cn("grid md:grid-cols-3", space.stack32)}>
          {services.items.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <ServiceCard
                {...service}
                href={localizePath(locale, service.href)}
                icon={serviceIcons[index % serviceIcons.length]}
                tone={tones[index % tones.length]}
                cta={`Learn about ${service.title}`}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
