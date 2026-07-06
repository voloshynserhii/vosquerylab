import Link from "next/link";
import Image from "next/image";

interface ClientCardData {
    id: string;
    name: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
}

export default function ClientCard({ client }: { client: ClientCardData }) {
    return (
        <article className="group flex flex-col bg-zinc-50 dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 w-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                <Image
                    src={client.image}
                    alt={`${client.name} project preview`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
            </div>
            <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                    {client.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                    <Link href={client.link} className="hover:underline">
                        {client.name}
                    </Link>
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow leading-relaxed">{client.description}</p>
                <div>
                    <Link href={client.link} className="inline-block px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium group-hover:opacity-90 transition-opacity">
                        View {client.name}
                    </Link>
                </div>
            </div>
        </article>
    );
}
