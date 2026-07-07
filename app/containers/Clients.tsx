import Image from "next/image";
import Link from "next/link";
import ClientCard from "@/components/ClientCard";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import TechChip from "@/components/ui/TechChip";
import { OutlineButton } from "@/components/ui/Buttons";
import { localizePath, type Locale } from "@i18n/config";
import type { Dictionary } from "@i18n/dictionaries";
import { cn, colors, gradients, radius, shadows, space, transitions, typography } from "../../src/theme";

type ClientItem = Dictionary["home"]["clients"]["items"][number];

function MobileAppPreviewCard({ app }: { app: ClientItem }) {
  return (
    <article className={cn("group flex min-h-full flex-col overflow-hidden border border-white/12 bg-white/6 backdrop-blur-md", radius.xl, shadows.darkCard, transitions.hoverLift)}>
      <div className="relative h-[520px] overflow-hidden bg-[#060916] md:h-[620px]">
        <div className="absolute inset-x-8 bottom-0 top-8 rounded-[2.5rem] border border-white/12 bg-black/30 shadow-[0_24px_90px_rgba(0,0,0,0.5)]" />
        <Image
          src={app.image}
          alt={`${app.name} app preview`}
          fill
          className={cn("object-contain p-6 md:p-8", transitions.scaleHover)}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-grow flex-col p-7">
        <p className={cn("mb-2", typography.caption, colors.primaryLight)}>{app.category}</p>
        <h3 className={cn("mb-3", typography.titleSmall, colors.textPrimaryDark)}>
          <Link href={app.link}>
            {app.name}
          </Link>
        </h3>
        <p className={cn("mb-6 flex-grow", typography.bodySmall, colors.textSecondaryDark)}>{app.description}</p>
        <div className="flex flex-wrap gap-2">
          {app.tags.map((tag) => (
            <TechChip key={tag} dark>{tag}</TechChip>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Clients({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Pick<Dictionary, "home">;
}) {
  const clients = dictionary.home.clients;

  return (
    <section id="clients" className={cn("relative overflow-hidden", gradients.darkSection, space.sectionY)}>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.28),transparent_34%)]" />
      <Container className="relative">
        <Reveal>
          <SectionHeader
            eyebrow={clients.eyebrow}
            title={clients.title}
            dark
            action={<OutlineButton href={localizePath(locale, "/case-studies")} className="hidden md:inline-flex">{clients.viewAll}</OutlineButton>}
          />
        </Reveal>
        <div className={cn("mb-8 grid md:grid-cols-2 lg:grid-cols-4", space.stack24)}>
          {clients.mobileApps.map((app) => (
            <Reveal key={app.id}>
              <MobileAppPreviewCard app={app} />
            </Reveal>
          ))}
        </div>
        <div className={cn("grid md:grid-cols-2 lg:grid-cols-4", space.stack24)}>
          {clients.items.map((client) => (
            <Reveal key={client.id}>
              <ClientCard client={client} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className={cn("mt-12 flex flex-col gap-6 border border-white/10 p-8 md:flex-row md:items-center md:justify-between", gradients.cta, radius.xl, shadows.darkCard)}>
            <div className="max-w-xl">
              <h3 className={cn(typography.headlineM, colors.textPrimaryDark)}>
                {clients.ctaTitle}
              </h3>
              <p className={cn("mt-3", typography.bodySmall, colors.textSecondaryDark)}>
                {clients.ctaText}
              </p>
            </div>
            <div className={cn("flex flex-col sm:flex-row", space.stack16)}>
              <OutlineButton href={localizePath(locale, "/#contact")} className="bg-violet-500 text-white hover:bg-violet-400">
                {clients.primaryCta}
              </OutlineButton>
              <OutlineButton href={localizePath(locale, "/#contact")}>{clients.secondaryCta}</OutlineButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
