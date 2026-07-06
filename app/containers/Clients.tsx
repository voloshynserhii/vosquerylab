import Image from "next/image";
import Link from "next/link";
import ClientCard from "@/components/ClientCard";

const clients = [
  {
    id: "navifit",
    name: "NaviFit",
    category: "Web Application",
    description: "A comprehensive fitness platform offering personalized meal plans and nutrition tracking. Built with modern web technologies for a seamless user experience.",
    image: "https://navifit.eu/images/app-preview.png",
    tags: ["Next.js", "React Native", "Fitness", "Health", "PWA"],
    link: "https://navifit.eu",
  },
  {
    id: "pani-yulya-kids",
    name: "Pani Yulya Kids",
    category: "E-commerce",
    description: "A joyful entertainment platform where fans can enjoy exclusive music by Пані Юля, order personalized video greetings, and shop for toys featured in her YouTube videos. Designed for fun, creativity, and memorable experiences for children and families.",
    image: "https://pani-yulya-shop.vercel.app/_next/image?url=%2Fimages%2Fhero_image.jpeg&w=1200&q=75",
    tags: ["E-commerce", "Next.js", "UI/UX", "Kids", "Music"],
    link: "https://pani-yulya.kids",
  },
  {
    id: "pine-hotel",
    name: "A Hotel in the Mountains",
    category: "Hospitality",
    description: "A luxury hotel experience with modern amenities and personalized service. Features a stunning location and exceptional guest satisfaction.",
    image: "https://pinehotel.vercel.app/_next/image?url=%2Fimages%2Fhero2.jpg&w=3840&q=75",
    tags: ["Next.js", "React", "Hotel", "Hospitality", "Luxury", "Travel", "Tourism"],
    link: "https://pinehotel.vercel.app",
  },
  {
    id: "castellon-cycling-tours",
    name: "Cycling Tours",
    category: "Fitness & Health",
    description: "It is a company that offers cycling tours and provides accomodation in own hotel on countryside.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070",
    tags: ["Next.js", "React", "Cycling", "Travel", "Tourism"],
    link: "https://tours-ecru-seven.vercel.app/",
  },
];

const mobileApps = [
  {
    id: "taluna-stories",
    name: "Taluna Stories",
    category: "AI Storytelling Mobile App",
    description: "A magical story builder where families choose a child, companion, and world to create personalized adventures.",
    image: "/assets/clients/taluna.jpeg",
    tags: ["React Native", "AI", "Kids", "Subscriptions"],
    link: "https://apps.apple.com/app/taluna-bedtime-magic/id6770110481?l=en-GB",
  },
  {
    id: "epik-childhood-book",
    name: "Childhood Book",
    category: "Family Memories Mobile App",
    description: "A warm memory journal that turns saved family moments, highlights, and milestones into a previewable childhood book.",
    image: "/assets/clients/memory-box.jpeg",
    tags: ["Mobile UX", "Memories", "Family", "Book Builder"],
    link: "#",
  },
];

function MobileAppPreviewCard({ app }: { app: (typeof mobileApps)[number] }) {
  return (
    <Link
      href={app.link}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 transition-all duration-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="relative h-[560px] overflow-hidden bg-zinc-100 dark:bg-zinc-950">
        <Image
          src={app.image}
          alt={`${app.name} app preview`}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="p-8">
        <p className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">{app.category}</p>
        <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">{app.name}</h3>
        <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400">{app.description}</p>
        <div className="flex flex-wrap gap-2">
          {app.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-12 text-center">Trusted by Clients</h2>
        <div className="mb-14 grid gap-8 md:grid-cols-2">
          {mobileApps.map((app) => (
            <MobileAppPreviewCard key={app.id} app={app} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client) => <ClientCard key={client.id} client={client} />)}
        </div>
      </div>
    </section>
  );
}
