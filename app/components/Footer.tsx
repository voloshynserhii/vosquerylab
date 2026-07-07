import Link from "next/link";
import Container from "@/components/ui/Container";
import { localizePath, type Locale } from "@i18n/config";
import type { Dictionary } from "@i18n/dictionaries";
import { cn, colors, typography } from "../../src/theme";

export default function Footer({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Pick<Dictionary, "footer">;
}) {
  return (
    <footer className="border-t border-white/10 bg-[#030713] py-8">
      <Container className={cn("flex flex-col items-center justify-between gap-4 md:flex-row", typography.bodySmall, colors.textMutedDark)}>
        <p>&copy; {new Date().getFullYear()} Vo$Query Lab. {dictionary.footer.rights}</p>
        <nav className="flex flex-wrap justify-center gap-5">
          {dictionary.footer.links.map((item) => (
            <Link key={item.href} href={localizePath(locale, item.href)} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
