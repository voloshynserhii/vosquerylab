import Link from "next/link";
import Logo from "./Logo";
import { cn, colors, radius, transitions, typography } from "../../src/theme";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "About" },
];

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/8 bg-[#030713]/78 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className={cn("flex items-center gap-3", typography.titleSmall, colors.textPrimaryDark)}>
          <Logo className="h-8 w-8" />
          <span>VosQuery Lab</span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(typography.caption, colors.textSecondaryDark, "hover:text-white", transitions.base)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className={cn("border border-violet-400/60 px-6 py-3 text-white hover:bg-violet-500/12", typography.caption, radius.full, transitions.base)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
