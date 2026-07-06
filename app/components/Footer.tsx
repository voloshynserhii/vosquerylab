import Link from "next/link";
import Container from "@/components/ui/Container";
import { cn, colors, typography } from "../../src/theme";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030713] py-8">
      <Container className={cn("flex flex-col items-center justify-between gap-4 md:flex-row", typography.bodySmall, colors.textMutedDark)}>
        <p>&copy; {new Date().getFullYear()} Vo$Query Lab. All rights reserved.</p>
        <nav className="flex flex-wrap justify-center gap-5">
          <Link href="/services" className="hover:text-white">
            AI services
          </Link>
          <Link href="/blog" className="hover:text-white">
            AI engineering blog
          </Link>
          <Link href="/case-studies" className="hover:text-white">
            Case studies
          </Link>
          <Link href="/#contact" className="hover:text-white">
            Contact
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
