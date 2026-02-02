export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-500 bg-white dark:bg-black">
      <p>&copy; {new Date().getFullYear()} Vo$Query Lab. All rights reserved.</p>
    </footer>
  );
}