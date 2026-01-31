import Link from "next/link";

const clients = [
  { name: "NaviFit", url: "https://navifit.eu" },
  { name: "Pani Yulya Kids", url: "https://pani-yulya.kids" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-12">Trusted by Innovative Companies</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, i) => (
            <Link
              key={i}
              href={client.url}
              target="_blank"
              className="text-xl md:text-2xl font-bold text-zinc-400 dark:text-zinc-600 select-none"
            >
              {client.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}