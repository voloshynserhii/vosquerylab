import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn, colors, gradients, radius, space, typography } from "../../../src/theme";
import GlassCard from "./GlassCard";

export default function ServiceCard({
  title,
  href,
  description,
  icon: Icon,
  tone,
}: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  tone: "violet" | "indigo" | "blue";
}) {
  const toneClass = {
    violet: "bg-violet-500/12 text-violet-600 shadow-[0_18px_45px_rgba(139,92,246,0.18)]",
    indigo: "bg-indigo-500/12 text-indigo-600 shadow-[0_18px_45px_rgba(99,102,241,0.16)]",
    blue: "bg-blue-500/10 text-blue-600 shadow-[0_18px_45px_rgba(59,130,246,0.14)]",
  }[tone];

  return (
    <GlassCard className={cn("group flex min-h-64 flex-col justify-between", space.card)}>
      <div>
        <div className={cn("mb-7 flex h-14 w-14 items-center justify-center", radius.xl, toneClass)}>
          <Icon className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className={cn(typography.titleSmall, colors.textPrimary)}>
          <Link href={href}>{title}</Link>
        </h3>
        <p className={cn("mt-3", typography.bodySmall, colors.textSecondary)}>{description}</p>
      </div>
      <Link
        href={href}
        className={cn(
          "mt-8 inline-flex items-center gap-2",
          typography.caption,
          colors.primaryDark,
        )}
      >
        Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
      <div className={cn("pointer-events-none absolute inset-x-8 bottom-0 h-16 opacity-70", gradients.primary, "blur-3xl")} />
    </GlassCard>
  );
}
