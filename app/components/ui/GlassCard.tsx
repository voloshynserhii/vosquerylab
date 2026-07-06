import { cn, colors, gradients, radius, shadows, transitions } from "../../../src/theme";

export default function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "border",
        colors.border,
        gradients.cardGlow,
        radius.xl,
        shadows.card,
        shadows.hover,
        transitions.hoverLift,
        className,
      )}
    >
      {children}
    </article>
  );
}
