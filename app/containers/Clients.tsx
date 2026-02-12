import Link from "next/link";
import Image from "next/image";

const clients = [
  {
    id: "navifit",
    name: "NaviFit",
    category: "Web Application",
    description: "A comprehensive fitness platform offering personalized workout plans and nutrition tracking. Built with modern web technologies for a seamless user experience.",
    image: "https://navifit.eu/images/app-preview.png",
    tags: ["Next.js", "React", "Fitness", "PWA"],
    link: "https://navifit.eu",
  },
  {
    id: "pani-yulya-kids",
    name: "Pani Yulya Kids",
    category: "E-commerce",
    description: "An enchanting online store for children's fashion, delivering joy and style to little ones. Features a user-friendly shopping experience and secure checkout.",
    image: "https://pani-yulya-shop.vercel.app/_next/image?url=%2Fimages%2Fhero_image.jpeg&w=1200&q=75",
    tags: ["E-commerce", "Next.js", "UI/UX", "Fashion"],
    link: "https://pani-yulya.kids",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-12 text-center">Trusted by Clients</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client) => (
            <Link
              key={client.id}
              href={`/clients/${client.id}`}
              className="group flex flex-col bg-zinc-50 dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {client.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">{client.name}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow leading-relaxed">{client.description}</p>
                <div>
                  <span className="inline-block px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium group-hover:opacity-90 transition-opacity">
                    Learn More
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
