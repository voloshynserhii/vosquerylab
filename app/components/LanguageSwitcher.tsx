"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  localeLabels,
  locales,
  localizePath,
  stripLocale,
  type Locale,
} from "@i18n/config";
import { cn, colors, radius, typography } from "../../src/theme";

export default function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{label}</span>
      <select
        value={locale}
        aria-label={label}
        onChange={(event) => {
          const nextLocale = event.target.value as Locale;
          router.push(localizePath(nextLocale, stripLocale(pathname)));
        }}
        className={cn(
          "appearance-none border border-white/12 bg-white/6 py-2 pl-3 pr-8 text-white outline-none hover:bg-white/10",
          typography.caption,
          radius.full,
          colors.textSecondaryDark,
        )}
      >
        {locales.map((item) => (
          <option key={item} value={item} className="bg-slate-950 text-white">
            {localeLabels[item]}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 h-3.5 w-3.5 text-slate-300" aria-hidden="true" />
    </label>
  );
}
