import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn, gradients, radius, shadows, transitions, typography } from "../../../src/theme";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
};

export function GradientButton({
  href,
  children,
  className,
  showArrow = true,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-3 px-7 py-4 text-white",
        typography.caption,
        radius.lg,
        gradients.primary,
        shadows.button,
        transitions.hoverLift,
        className,
      )}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Link>
  );
}

export function OutlineButton({
  href,
  children,
  className,
  showArrow = false,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-3 border border-white/16 bg-white/5 px-7 py-4 text-white backdrop-blur-md hover:border-violet-300/50 hover:bg-white/10",
        typography.caption,
        radius.lg,
        transitions.base,
        className,
      )}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Link>
  );
}
