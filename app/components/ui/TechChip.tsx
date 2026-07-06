import { cn, colors, radius, typography } from "../../../src/theme";

export default function TechChip({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-3 py-1",
        typography.caption,
        radius.md,
        dark ? colors.chipDark : colors.chip,
      )}
    >
      {children}
    </span>
  );
}
