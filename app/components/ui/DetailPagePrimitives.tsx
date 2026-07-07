import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn, colors, gradients, radius, shadows, space, typography } from "../../../src/theme";
import Container from "./Container";
import Reveal from "./Reveal";
import TechChip from "./TechChip";
import { GradientButton } from "./Buttons";

export function DetailShell({ children }: { children: React.ReactNode }) {
  return (
    <main className={cn("pb-24", gradients.darkSection)}>
      {children}
    </main>
  );
}

export function DetailBreadcrumbs({
  items,
}: {
  items: Array<{ href?: string; label: string }>;
}) {
  return (
    <nav className={cn("mb-10 flex flex-wrap items-center gap-2", typography.caption, colors.textMutedDark)} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
          {index > 0 && <span className="text-slate-600">/</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-300">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function DetailHero({
  eyebrow,
  title,
  description,
  badges,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  badges: string[];
  breadcrumbs: React.ReactNode;
}) {
  return (
    <section className={cn("relative overflow-hidden pb-16 pt-32", colors.pageShell)}>
      <div className={cn("absolute inset-0 opacity-30", colors.gridLine, "bg-[size:64px_64px]")} />
      <div className={cn("absolute right-0 top-20 h-96 w-96 rounded-full blur-3xl", colors.purpleWash)} />
      <Container className="relative">
        <Reveal>
          <div className="max-w-5xl">
            {breadcrumbs}
            <p className={cn(typography.label, colors.primaryLight)}>{eyebrow}</p>
            <h1 className={cn("mt-4 max-w-4xl", typography.displayL, colors.textPrimaryDark)}>
              {title}
            </h1>
            <p className={cn("mt-6 max-w-3xl", typography.bodyLarge, colors.textSecondaryDark)}>
              {description}
            </p>
            {badges.length > 0 && (
              <div className={cn("mt-9 flex flex-wrap", space.stack12)}>
                {badges.map((badge) => (
                  <TechChip key={badge} dark>
                    {badge}
                  </TechChip>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function DetailContent({ children }: { children: React.ReactNode }) {
  return <Container className={cn("relative pt-14", space.sectionYCompact)}>{children}</Container>;
}

export function DetailCard({
  title,
  children,
  icon: Icon,
  className,
}: {
  title: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <Reveal>
      <section className={cn("border p-6 md:p-8", colors.borderDark, gradients.premiumCard, radius.xl, shadows.darkCard, className)}>
        <div className="mb-5 flex items-center gap-4">
          {Icon && (
            <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center", radius.xl, colors.premiumIcon)}>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
          )}
          <h2 className={cn(typography.headlineM, colors.textPrimaryDark)}>{title}</h2>
        </div>
        {children}
      </section>
    </Reveal>
  );
}

export function TextBlock({ children }: { children: React.ReactNode }) {
  return <p className={cn(typography.body, colors.textSecondaryDark)}>{children}</p>;
}

export function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={cn("flex gap-3", typography.bodySmall, colors.textSecondaryDark)}>
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function NumberedSteps({ items }: { items: string[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {items.map((item, index) => (
        <li key={item} className={cn("border bg-white/5 p-5", colors.borderDark, radius.xl)}>
          <span className={cn("mb-4 flex h-9 w-9 items-center justify-center", radius.full, colors.premiumIcon)}>
            {index + 1}
          </span>
          <p className={cn(typography.bodySmall, colors.textSecondaryDark)}>{item}</p>
        </li>
      ))}
    </ol>
  );
}

export function FaqList({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  return (
    <div className="divide-y divide-white/10">
      {faqs.map((faq) => (
        <section key={faq.question} className="py-5 first:pt-0 last:pb-0">
          <h3 className={cn(typography.titleSmall, colors.textPrimaryDark)}>{faq.question}</h3>
          <p className={cn("mt-2", typography.bodySmall, colors.textSecondaryDark)}>{faq.answer}</p>
        </section>
      ))}
    </div>
  );
}

export function RelatedLinkGrid({
  title,
  basePath,
  items,
}: {
  title: string;
  basePath: string;
  items: Array<{ slug: string; title: string }>;
}) {
  return (
    <DetailCard title={title}>
      <div className="grid gap-3">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`${basePath}/${item.slug}`}
            className={cn("group flex items-center justify-between border bg-white/5 px-4 py-3", colors.borderDark, radius.lg, typography.caption, colors.textPrimaryDark)}
          >
            {item.title}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </DetailCard>
  );
}

export function DetailCTA({
  title,
  text,
  href,
  label,
}: {
  title: string;
  text: string;
  href: string;
  label: string;
}) {
  return (
    <Reveal>
      <section className={cn("mt-12 border p-8 md:flex md:items-center md:justify-between", colors.borderDark, gradients.cta, radius.xl, shadows.darkCard)}>
        <div className="max-w-2xl">
          <h2 className={cn(typography.headlineM, colors.textPrimaryDark)}>{title}</h2>
          <p className={cn("mt-3", typography.bodySmall, colors.textSecondaryDark)}>{text}</p>
        </div>
        <div className="mt-8 md:mt-0">
          <GradientButton href={href}>{label}</GradientButton>
        </div>
      </section>
    </Reveal>
  );
}
