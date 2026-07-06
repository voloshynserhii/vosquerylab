import Link from "next/link";

const services = [
  {
    title: "AI Engineering",
    href: "/services/ai-engineering",
    description: "Production-ready LLM applications, AI agents, RAG systems and backend AI workflows designed around real business constraints.",
  },
  {
    title: "AI Automation",
    href: "/services/ai-workflow-automation",
    description: "Workflow automation that connects AI models with APIs, documents, CRMs, support tools and internal business systems.",
  },
  {
    title: "React AI Products",
    href: "/services/react-ai-applications",
    description: "AI-powered web and mobile products built with Next.js, React and React Native, including chat, voice, document and dashboard interfaces.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-12 text-center">AI Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                <Link href={service.href} className="hover:underline">
                  {service.title}
                </Link>
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
