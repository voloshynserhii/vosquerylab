import Link from "next/link";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { localizePath, type Locale } from "@i18n/config";
import type { Dictionary } from "@i18n/dictionaries";
import { cn, colors, radius, transitions, typography } from "../../src/theme";

export default function Header({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Pick<Dictionary, "common" | "navigation">;
}) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/8 bg-[#030713]/78 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href={localizePath(locale)} className={cn("flex items-center gap-3", typography.titleSmall, colors.textPrimaryDark)}>
          <Logo className="h-8 w-8" />
          <span>{dictionary.common.brand}</span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {dictionary.navigation.items.map((item) => (
            <Link
              key={item.href}
              href={localizePath(locale, item.href)}
              className={cn(typography.caption, colors.textSecondaryDark, "hover:text-white", transitions.base)}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} label={dictionary.navigation.language} />
          <Link
            href={localizePath(locale, "/#contact")}
            className={cn("border border-violet-400/60 px-6 py-3 text-white hover:bg-violet-500/12", typography.caption, radius.full, transitions.base)}
          >
            {dictionary.navigation.contact}
          </Link>
        </nav>
      </div>
    </header>
  );
}
