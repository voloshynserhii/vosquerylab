import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Clock } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";
import TechChip from "./TechChip";
import { GradientButton, OutlineButton } from "./Buttons";
import { cn, colors, gradients, radius, shadows, space, transitions, typography } from "../../../src/theme";

export function SectionContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <Container className={cn("relative", className)}>{children}</Container>;
}

export function PageHeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className={cn("inline-flex border px-3 py-1", typography.caption, radius.full, colors.chipDark)}>
      {children}
    </span>
  );
}

export function TopicChip({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex border px-4 py-2",
        typography.caption,
        radius.full,
        active ? colors.chipActive : colors.chipDark,
      )}
    >
      {children}
    </span>
  );
}

export function IconBadge({
  icon: Icon,
  strong = false,
}: {
  icon: LucideIcon;
  strong?: boolean;
}) {
  return (
    <span className={cn("flex h-12 w-12 items-center justify-center", radius.xl, strong ? colors.premiumIconStrong : colors.premiumIcon)}>
      <Icon className="h-6 w-6" aria-hidden="true" />
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  badges,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  badges: string[];
}) {
  return (
    <section className={cn("relative overflow-hidden pb-20 pt-36", colors.pageShell)}>
      <div className={cn("absolute inset-0 opacity-30", colors.gridLine, "bg-[size:64px_64px]")} />
      <div className={cn("absolute right-0 top-20 h-96 w-96 rounded-full blur-3xl", colors.purpleWash)} />
      <SectionContainer>
        <Reveal>
          <div className="max-w-5xl">
            <p className={cn(typography.label, colors.primaryLight)}>{eyebrow}</p>
            <h1 className={cn("mt-4 max-w-4xl", typography.displayL, colors.textPrimaryDark)}>
              {title}
            </h1>
            <p className={cn("mt-6 max-w-3xl", typography.bodyLarge, colors.textSecondaryDark)}>
              {subtitle}
            </p>
            <div className={cn("mt-9 flex flex-wrap", space.stack12)}>
              {badges.map((badge) => (
                <PageHeroBadge key={badge}>{badge}</PageHeroBadge>
              ))}
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}

export function PremiumCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group min-h-full border backdrop-blur-md",
        colors.borderDark,
        gradients.premiumCard,
        radius.xl,
        shadows.darkCard,
        transitions.hoverLift,
        className,
      )}
    >
      {children}
    </article>
  );
}

export function FeaturedCard({
  href,
  eyebrow,
  title,
  description,
  tags,
  icon,
  cta,
  imageSrc,
  featuredLabel,
  imageAlt,
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  cta: string;
  imageSrc?: string;
  featuredLabel: string;
  imageAlt: string;
}) {
  return (
    <Link href={href} className="block">
      <PremiumCard className={cn("p-8 md:p-10", colors.borderGlow, gradients.featuredCard)}>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <PageHeroBadge>{eyebrow}</PageHeroBadge>
              <span className={cn(typography.caption, colors.primaryLight)}>{featuredLabel}</span>
            </div>
            <h2 className={cn(typography.headlineL, colors.textPrimaryDark)}>{title}</h2>
            <p className={cn("mt-5", typography.body, colors.textSecondaryDark)}>{description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <TechChip key={tag} dark>{tag}</TechChip>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 lg:items-end">
            {imageSrc ? (
              <div className={cn("relative aspect-[16/10] w-full overflow-hidden border", colors.borderDark, colors.imageSurface, radius.xl)}>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            ) : (
              <IconBadge icon={icon} strong />
            )}
            <span className={cn("inline-flex items-center gap-2", typography.caption, colors.textPrimaryDark)}>
              {cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </div>
        </div>
      </PremiumCard>
    </Link>
  );
}

export function CaseStudyCard({
  href,
  icon,
  category,
  title,
  description,
  tags,
  cta,
}: {
  href: string;
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
  tags: string[];
  cta: string;
}) {
  return (
    <PremiumCard className={space.cardCompact}>
      <div className="flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
          <IconBadge icon={icon} />
          <span className={cn(typography.caption, colors.primaryLight)}>{category}</span>
        </div>
        <h2 className={cn(typography.title, colors.textPrimaryDark)}>
          <Link href={href}>{title}</Link>
        </h2>
        <p className={cn("mt-4 flex-grow", typography.bodySmall, colors.textSecondaryDark)}>{description}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TechChip key={tag} dark>{tag}</TechChip>
          ))}
        </div>
        <Link href={href} className={cn("mt-7 inline-flex items-center gap-2", typography.caption, colors.textPrimaryDark)}>
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </PremiumCard>
  );
}

export function BlogCard({
  href,
  icon,
  category,
  title,
  description,
  readingTime,
  cta,
}: {
  href: string;
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
  readingTime: string;
  cta: string;
}) {
  return (
    <PremiumCard className={space.cardCompact}>
      <div className="flex h-full flex-col">
        <div className="mb-6 flex items-center justify-between gap-4">
          <IconBadge icon={icon} />
          <span className={cn("inline-flex items-center gap-2", typography.caption, colors.textMutedDark)}>
            <Clock className="h-4 w-4" aria-hidden="true" />
            {readingTime}
          </span>
        </div>
        <p className={cn("mb-3", typography.caption, colors.primaryLight)}>{category}</p>
        <h2 className={cn(typography.titleSmall, colors.textPrimaryDark)}>
          <Link href={href}>{title}</Link>
        </h2>
        <p className={cn("mt-4 line-clamp-4 flex-grow", typography.bodySmall, colors.textSecondaryDark)}>{description}</p>
        <Link href={href} className={cn("mt-7 inline-flex items-center gap-2", typography.caption, colors.textPrimaryDark)}>
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </PremiumCard>
  );
}

export function ServiceListingCard({
  href,
  icon,
  category,
  title,
  description,
  tags,
  imageSrc,
  cta,
  imageAlt,
}: {
  href: string;
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  cta: string;
  imageAlt: string;
}) {
  return (
    <PremiumCard className="overflow-hidden">
      <Link href={href} className={cn("relative block aspect-[16/10] overflow-hidden border-b", colors.borderDark, colors.imageSurface)}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </Link>
      <div className={cn("flex h-full flex-col", space.cardCompact)}>
        <div className="mb-7 flex items-start justify-between gap-4">
          <IconBadge icon={icon} />
          <span className={cn("border px-3 py-1", typography.caption, radius.full, colors.chipDark)}>
            {category}
          </span>
        </div>
        <h2 className={cn(typography.titleSmall, colors.textPrimaryDark)}>
          <Link href={href}>{title}</Link>
        </h2>
        <p className={cn("mt-4 flex-grow", typography.bodySmall, colors.textSecondaryDark)}>
          {description}
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TechChip key={tag} dark>{tag}</TechChip>
          ))}
        </div>
        <Link href={href} className={cn("mt-7 inline-flex items-center gap-2", typography.caption, colors.textPrimaryDark)}>
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </PremiumCard>
  );
}

export function CTASection({
  title,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <Reveal>
      <section className={cn("mt-16 border p-8 md:flex md:items-center md:justify-between", colors.borderDark, gradients.cta, radius.xl, shadows.darkCard)}>
        <h2 className={cn("max-w-2xl", typography.headlineM, colors.textPrimaryDark)}>{title}</h2>
        <div className={cn("mt-8 flex flex-col sm:flex-row md:mt-0", space.stack16)}>
          <GradientButton href={primaryHref}>{primaryLabel}</GradientButton>
          <OutlineButton href={secondaryHref}>{secondaryLabel}</OutlineButton>
        </div>
      </section>
    </Reveal>
  );
}
