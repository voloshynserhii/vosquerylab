const services = [
  {
    title: "Web Development",
    description: "Fast, responsive, and SEO-friendly websites built with Next.js and React. We focus on performance and scalability.",
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that provide seamless user experiences on iOS and Android devices.",
  },
  {
    title: "UI/UX Design",
    description: "User-centric design that ensures your product is intuitive, engaging, and visually stunning.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-12 text-center">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">{service.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}