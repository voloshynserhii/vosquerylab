import { Box, Code2, ShieldCheck, Sparkles } from "lucide-react";
import AiStackIllustration from "@/components/ui/AiStackIllustration";
import Container from "@/components/ui/Container";
import { GradientButton, OutlineButton } from "@/components/ui/Buttons";
import Reveal from "@/components/ui/Reveal";
import { cn, colors, gradients, radius, shadows, space, typography } from "../../src/theme";

const features = [
  { label: "Production-Ready AI Solutions", icon: Box },
  { label: "End-to-End Development", icon: Sparkles },
  { label: "Modern Stack & Best Practices", icon: Code2 },
  { label: "Scalable & Secure", icon: ShieldCheck },
];

const partners = ["OpenAI", "Anthropic", "Google", "LangChain", "Next.js", "React", "PostgreSQL", "Docker", "AWS"];

export default function Hero() {
  return (
    <section className={cn("overflow-x-clip pt-20", colors.backgroundDark)}>
      <div className={cn("overflow-hidden", gradients.hero, radius.hero, shadows.hero)}>
        <Container className="grid min-h-[650px] items-center gap-10 overflow-hidden py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <Reveal>
            <div className="max-w-3xl">
              <p className={cn("mb-5", typography.label, colors.primaryLight)}>
                AI Engineering Studio
              </p>
              <h1 className={cn(typography.displayXL, colors.textPrimaryDark)}>
                AI Engineering and Automation for{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  B2B Products
                </span>
              </h1>
              <p className={cn("mt-7 max-w-2xl", typography.body, colors.textSecondaryDark)}>
                Vosquery Lab designs and builds AI agents, LLM applications, RAG systems, MCP integrations and custom AI automation for companies that need production-ready AI software.
              </p>
              <div className={cn("mt-9 flex flex-col sm:flex-row", space.stack20)}>
                <GradientButton href="#contact">Discuss an AI Project</GradientButton>
                <OutlineButton href="#services" className="border-violet-300/35">
                  Explore Services
                </OutlineButton>
              </div>
              <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {features.map((feature) => (
                  <div key={feature.label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/18 text-violet-200">
                      <feature.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className={cn(typography.caption, colors.textSecondaryDark)}>
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal className="min-w-0" delay={0.12}>
            <AiStackIllustration />
          </Reveal>
        </Container>
      </div>
      <Container className="flex flex-col gap-6 border-b border-slate-200 py-8 md:flex-row md:items-center">
        <p className={cn("shrink-0", typography.caption, colors.textMuted)}>
          Technologies & Partners
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          {partners.map((partner) => (
            <span key={partner} className={cn(typography.titleSmall, colors.textMuted)}>
              {partner}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
