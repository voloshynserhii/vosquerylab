import { cn, colors, typography } from "../../../src/theme";

export default function SectionHeader({
  eyebrow,
  title,
  align = "left",
  dark = false,
  action,
  className,
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  dark?: boolean;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
        align === "center" && "items-center text-center md:items-center md:justify-center",
        className,
      )}
    >
      <div className="max-w-3xl">
        <p className={cn(typography.label, dark ? colors.primaryLight : colors.primary)}>
          {eyebrow}
        </p>
        <h2
          className={cn(
            "mt-2",
            typography.headlineXL,
            dark ? colors.textPrimaryDark : colors.textPrimary,
          )}
        >
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
