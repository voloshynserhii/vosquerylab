import { Atom, Box, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { cn, gradients, space } from "../../src/theme";

const services = [
  {
    title: "AI Engineering",
    href: "/services/ai-engineering",
    description: "Production-ready LLM applications, AI agents, RAG systems and backend AI workflows designed around real business constraints.",
    icon: Box,
    tone: "violet" as const,
  },
  {
    title: "AI Automation",
    href: "/services/ai-workflow-automation",
    description: "Workflow automation that connects AI models with APIs, documents, CRMs, support tools and internal business systems.",
    icon: Zap,
    tone: "indigo" as const,
  },
  {
    title: "React AI Products",
    href: "/services/react-ai-applications",
    description: "AI-powered web and mobile products built with Next.js, React and React Native, including chat, voice, document and dashboard interfaces.",
    icon: Atom,
    tone: "blue" as const,
  },
];

export default function Services() {
  return (
    <section id="services" className={cn(space.sectionY, gradients.page)}>
      <Container>
        <Reveal>
          <SectionHeader eyebrow="What We Do" title="AI Services" />
        </Reveal>
        <div className={cn("grid md:grid-cols-3", space.stack32)}>
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
