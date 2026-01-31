import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-black dark:text-white tracking-tighter">
          <Logo className="w-8 h-8" />
          <span>Vosquery Lab</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="#services" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#clients" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
            Clients
          </Link>
          <Link href="#contact" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}