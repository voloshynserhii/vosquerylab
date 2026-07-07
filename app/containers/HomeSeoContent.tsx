import Link from "next/link";
import { Code2, Layers3, Target, UsersRound } from "lucide-react";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { GradientButton } from "@/components/ui/Buttons";
import { siteName, siteUrl } from "@/lib/seo";
import { localizePath, type Locale } from "@i18n/config";
import type { Dictionary } from "@i18n/dictionaries";
import { cn, colors, radius, space, typography } from "../../src/theme";

const factIcons = [UsersRound, Target, Code2, Layers3];
const factTones = [
  "text-indigo-600 bg-indigo-500/10",
  "text-rose-600 bg-rose-500/10",
  "text-teal-600 bg-teal-500/10",
  "text-violet-600 bg-violet-500/10",
];

export default function HomeSeoContent({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Pick<Dictionary, "home">;
}) {
  const seo = dictionary.home.seo;
  const shareUrl = `${siteUrl}${localizePath(locale)}`;
  const encodedShareUrl = encodeURIComponent(shareUrl);
  const encodedShareText = encodeURIComponent(`${siteName}: ${seo.title}`);
  const shareLinks = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedShareUrl}&text=${encodedShareText}`,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`,
    },
  ];

  return (
    <section className={cn("bg-white", space.sectionY)}>
      <Container className="grid items-center gap-16 lg:grid-cols-[0.72fr_1.28fr]">
        <Reveal>
          <div className="max-w-xl">
            <p className={cn(typography.label, colors.primary)}>
              {seo.eyebrow}
            </p>
            <h2 className={cn("mt-3", typography.headlineXL, colors.textPrimary)}>
              {seo.title}
            </h2>
            <p className={cn("mt-5", typography.body, colors.textSecondary)}>
              {seo.description}
            </p>
            <div className={cn("mt-9 flex flex-col sm:flex-row", space.stack16)}>
              <GradientButton href={localizePath(locale, "/services")}>{seo.primaryCta}</GradientButton>
              <Link
                href={localizePath(locale, "/case-studies")}
                className={cn(
                  "inline-flex items-center justify-center border border-slate-200 bg-white px-7 py-4 text-center hover:border-violet-200 hover:bg-slate-50",
                  typography.caption,
                  radius.lg,
                  colors.textPrimary,
                )}
              >
                {seo.secondaryCta}
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className={cn(typography.caption, colors.textMuted)}>
                Share this page
              </span>
              {shareLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center justify-center border border-slate-200 bg-white px-4 py-2 hover:border-violet-200 hover:bg-slate-50",
                    typography.caption,
                    radius.full,
                    colors.textPrimary,
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {seo.facts.map((fact, index) => {
            const Icon = factIcons[index % factIcons.length];

            return (
            <Reveal key={fact.title} delay={index * 0.05}>
              <GlassCard className={cn("min-h-48", space.cardCompact)}>
                <div className="flex gap-5">
                  <span className={cn("flex h-14 w-14 shrink-0 items-center justify-center", radius.xl, factTones[index % factTones.length])}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className={cn(typography.titleSmall, colors.textPrimary)}>
                      {fact.title}
                    </h3>
                    <p className={cn("mt-3", typography.bodySmall, colors.textSecondary)}>
                      {fact.text}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          );
          })}
        </div>
      </Container>
    </section>
  );
}
