import Image from "next/image";
import Link from "next/link";
import ClientCard from "@/components/ClientCard";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import TechChip from "@/components/ui/TechChip";
import { OutlineButton } from "@/components/ui/Buttons";
import { cn, colors, gradients, radius, shadows, space, transitions, typography } from "../../src/theme";

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
    <article className={cn("group flex min-h-full flex-col overflow-hidden border border-white/12 bg-white/6 backdrop-blur-md", radius.xl, shadows.darkCard, transitions.hoverLift)}>
      <div className="relative h-[520px] overflow-hidden bg-[#060916] md:h-[620px]">
        <div className="absolute inset-x-8 bottom-0 top-8 rounded-[2.5rem] border border-white/12 bg-black/30 shadow-[0_24px_90px_rgba(0,0,0,0.5)]" />
        <Image
          src={app.image}
          alt={`${app.name} app preview`}
          fill
          className={cn("object-contain p-6 md:p-8", transitions.scaleHover)}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-grow flex-col p-7">
        <p className={cn("mb-2", typography.caption, colors.primaryLight)}>{app.category}</p>
        <h3 className={cn("mb-3", typography.titleSmall, colors.textPrimaryDark)}>
          <Link href={app.link}>
            {app.name}
          </Link>
        </h3>
        <p className={cn("mb-6 flex-grow", typography.bodySmall, colors.textSecondaryDark)}>{app.description}</p>
        <div className="flex flex-wrap gap-2">
          {app.tags.map((tag) => (
            <TechChip key={tag} dark>{tag}</TechChip>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Clients() {
  return (
    <section id="clients" className={cn("relative overflow-hidden", gradients.darkSection, space.sectionY)}>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.28),transparent_34%)]" />
      <Container className="relative">
        <Reveal>
          <SectionHeader
            eyebrow="Featured Work"
            title="AI Products and Client Work"
            dark
            action={<OutlineButton href="/case-studies" className="hidden md:inline-flex">View All Projects</OutlineButton>}
          />
        </Reveal>
        <div className={cn("mb-8 grid md:grid-cols-2 lg:grid-cols-4", space.stack24)}>
          {mobileApps.map((app) => (
            <Reveal key={app.id}>
              <MobileAppPreviewCard app={app} />
            </Reveal>
          ))}
        </div>
        <div className={cn("grid md:grid-cols-2 lg:grid-cols-4", space.stack24)}>
          {clients.map((client) => (
            <Reveal key={client.id}>
              <ClientCard client={client} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className={cn("mt-12 flex flex-col gap-6 border border-white/10 p-8 md:flex-row md:items-center md:justify-between", gradients.cta, radius.xl, shadows.darkCard)}>
            <div className="max-w-xl">
              <h3 className={cn(typography.headlineM, colors.textPrimaryDark)}>
                Ready to build your next AI-powered product?
              </h3>
              <p className={cn("mt-3", typography.bodySmall, colors.textSecondaryDark)}>
                Let&apos;s turn your idea into a production-ready AI solution that drives real business value.
              </p>
            </div>
            <div className={cn("flex flex-col sm:flex-row", space.stack16)}>
              <OutlineButton href="#contact" className="bg-violet-500 text-white hover:bg-violet-400">
                Discuss Your Project
              </OutlineButton>
              <OutlineButton href="#contact">Contact Us</OutlineButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
