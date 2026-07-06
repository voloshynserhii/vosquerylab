export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black dark:text-white mb-6 max-w-4xl">
        AI Engineering and Automation for B2B Products
      </h1>
      <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed">
        Vosquery Lab designs and builds AI agents, LLM applications, RAG systems, MCP integrations and custom AI automation for companies that need production-ready AI software.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="rounded-full bg-black dark:bg-white text-white dark:text-black px-8 py-3 font-medium hover:opacity-90 transition-opacity"
        >
          Discuss an AI Project
        </a>
        <a
          href="#services"
          className="rounded-full border border-zinc-200 dark:border-zinc-800 px-8 py-3 font-medium text-black dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          AI Services
        </a>
      </div>
    </section>
  );
}
