import Link from "next/link";
import { Code2, Layers3, Target, UsersRound } from "lucide-react";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { GradientButton } from "@/components/ui/Buttons";
import { cn, colors, radius, space, typography } from "../../src/theme";

const facts = [
  {
    title: "Who Vosquery Lab is",
    text: "Vosquery Lab is an AI engineering and AI automation studio based in Spain. The studio builds AI agents, LLM applications, RAG systems, MCP integrations and custom AI software for startups and B2B teams.",
    icon: UsersRound,
    tone: "text-indigo-600 bg-indigo-500/10",
  },
  {
    title: "Ideal clients",
    text: "Ideal clients are founders, product teams and operations teams that need practical AI features, AI MVPs, internal automation, knowledge-base AI or AI integrations inside existing software.",
    icon: Target,
    tone: "text-rose-600 bg-rose-500/10",
  },
  {
    title: "Delivery approach",
    text: "Projects start with discovery, workflow mapping and architecture. Implementation then focuses on prototypes, production code, integrations, testing, deployment and iteration from real user feedback.",
    icon: Code2,
    tone: "text-teal-600 bg-teal-500/10",
  },
  {
    title: "Technology stack",
    text: "The stack includes OpenAI, Anthropic Claude, Google Gemini, Next.js, React, React Native, Node.js, vector databases, RAG pipelines, API integrations and Model Context Protocol.",
    icon: Layers3,
    tone: "text-violet-600 bg-violet-500/10",
  },
];

export default function HomeSeoContent() {
  return (
    <section className={cn("bg-white", space.sectionY)}>
      <Container className="grid items-center gap-16 lg:grid-cols-[0.72fr_1.28fr]">
        <Reveal>
          <div className="max-w-xl">
            <p className={cn(typography.label, colors.primary)}>
              AI engineering studio
            </p>
            <h2 className={cn("mt-3", typography.headlineXL, colors.textPrimary)}>
            Practical AI systems for real business workflows
            </h2>
            <p className={cn("mt-5", typography.body, colors.textSecondary)}>
            Vosquery Lab helps companies move from AI experiments to useful
            software. We focus on business workflows, model behavior, data
            access, integrations, user experience and maintainable engineering.
            </p>
            <div className={cn("mt-9 flex flex-col sm:flex-row", space.stack16)}>
              <GradientButton href="/services">Explore AI services</GradientButton>
              <Link
                href="/case-studies"
                className={cn(
                  "inline-flex items-center justify-center border border-slate-200 bg-white px-7 py-4 text-center hover:border-violet-200 hover:bg-slate-50",
                  typography.caption,
                  radius.lg,
                  colors.textPrimary,
                )}
              >
                View case studies
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {facts.map((fact, index) => (
            <Reveal key={fact.title} delay={index * 0.05}>
              <GlassCard className={cn("min-h-48", space.cardCompact)}>
                <div className="flex gap-5">
                  <span className={cn("flex h-14 w-14 shrink-0 items-center justify-center", radius.xl, fact.tone)}>
                    <fact.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className={cn(typography.titleSmall, colors.textPrimary)}>
                      {fact.title}
                    </h3>
                    <p className={cn("mt-3", typography.bodySmall, colors.textSecondary)}>
                      {fact.text}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
