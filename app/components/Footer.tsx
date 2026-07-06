import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500 bg-white dark:bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Vo$Query Lab. All rights reserved.</p>
        <nav className="flex flex-wrap justify-center gap-5">
          <Link href="/services" className="hover:text-black dark:hover:text-white">
            AI services
          </Link>
          <Link href="/blog" className="hover:text-black dark:hover:text-white">
            AI engineering blog
          </Link>
          <Link href="/case-studies" className="hover:text-black dark:hover:text-white">
            Case studies
          </Link>
          <Link href="/#contact" className="hover:text-black dark:hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
