import Link from "next/link";

const facts = [
  {
    title: "Who Vosquery Lab is",
    text: "Vosquery Lab is an AI engineering and AI automation studio based in Spain. The studio builds AI agents, LLM applications, RAG systems, MCP integrations and custom AI software for startups and B2B teams.",
  },
  {
    title: "Ideal clients",
    text: "Ideal clients are founders, product teams and operations teams that need practical AI features, AI MVPs, internal automation, knowledge-base AI or AI integrations inside existing software.",
  },
  {
    title: "Delivery approach",
    text: "Projects start with discovery, workflow mapping and architecture. Implementation then focuses on prototypes, production code, integrations, testing, deployment and iteration from real user feedback.",
  },
  {
    title: "Technology stack",
    text: "The stack includes OpenAI, Anthropic Claude, Google Gemini, Next.js, React, React Native, Node.js, vector databases, RAG pipelines, API integrations and Model Context Protocol.",
  },
];

export default function HomeSeoContent() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            AI engineering studio
          </p>
          <h2 className="mt-3 text-3xl font-bold text-black dark:text-white">
            Practical AI systems for real business workflows
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Vosquery Lab helps companies move from AI experiments to useful
            software. We focus on business workflows, model behavior, data
            access, integrations, user experience and maintainable engineering.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {facts.map((fact) => (
            <article
              key={fact.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {fact.title}
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                {fact.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/services"
            className="rounded-full bg-black px-8 py-3 text-center font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
          >
            Explore AI services
          </Link>
          <Link
            href="/case-studies"
            className="rounded-full border border-zinc-200 px-8 py-3 text-center font-medium text-black transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900"
          >
            View case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
