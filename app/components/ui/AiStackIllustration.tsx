import { Bot, BrainCircuit, Database, GitBranch, Network, Sparkles } from "lucide-react";
import { cn, colors, gradients, radius, shadows, typography } from "../../../src/theme";

const labels = [
  { text: "LLM Applications", className: "left-2 top-10 -rotate-6" },
  { text: "RAG Systems", className: "right-2 top-16 rotate-6" },
  { text: "AI Agents", className: "left-6 top-36 -rotate-3" },
  { text: "MCP Integrations", className: "right-0 top-44 rotate-4" },
  { text: "AI Automation", className: "right-10 bottom-20 rotate-6" },
];

export default function AiStackIllustration() {
  return (
    <div className="relative min-h-[460px] w-full min-w-0 overflow-hidden lg:min-h-[520px]">
      <div className={cn("absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 blur-3xl", colors.glowPurple)} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 [transform:perspective(900px)_rotateX(64deg)_rotateZ(-18deg)_scale(.9)]" />
      {labels.map((label) => (
        <div
          key={label.text}
          className={cn(
            "absolute z-20 border border-violet-300/35 bg-[#101838]/70 px-6 py-4 text-slate-200 backdrop-blur-md",
            typography.bodySmall,
            radius.md,
            shadows.darkCard,
            label.className,
          )}
        >
          {label.text}
        </div>
      ))}

      <div className="absolute left-1/2 top-1/2 h-[320px] w-[360px] -translate-x-1/2 -translate-y-[42%] [transform-style:preserve-3d] lg:h-[360px] lg:w-[430px]">
        <div className="absolute inset-x-8 bottom-2 h-28 skew-x-[-25deg] border border-violet-400/24 bg-[#071023]/80 shadow-[0_30px_90px_rgba(30,12,80,0.7)]" />
        <div className="absolute inset-x-12 bottom-20 h-28 skew-x-[-25deg] border border-violet-400/30 bg-[#0b1430]/90" />
        <div className="absolute inset-x-20 bottom-36 h-28 skew-x-[-25deg] border border-violet-300/35 bg-violet-500/22 shadow-[0_0_60px_rgba(168,85,247,0.35)]" />
        <div className="absolute inset-x-28 bottom-52 h-24 skew-x-[-25deg] border border-violet-200/45 bg-[#171b45]/90" />

        <div className={cn("absolute left-1/2 top-4 z-10 flex h-32 w-48 -translate-x-1/2 rotate-45 items-center justify-center border border-violet-200/40", radius.xl, gradients.primary, shadows.glow)}>
          <div className="flex h-20 w-20 -rotate-45 items-center justify-center rounded-2xl bg-white/12 text-white">
            <BrainCircuit className="h-11 w-11" aria-hidden="true" />
          </div>
        </div>

        <div className="absolute left-1/2 top-36 z-10 grid w-72 -translate-x-1/2 grid-cols-4 gap-3 text-violet-200">
          {[Bot, Network, Database, GitBranch].map((Icon, index) => (
            <span
              key={index}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-300/20 bg-white/8 backdrop-blur"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>

      <Sparkles className="absolute right-20 top-4 h-5 w-5 text-violet-300" aria-hidden="true" />
      <Sparkles className="absolute bottom-28 left-16 h-4 w-4 text-fuchsia-300" aria-hidden="true" />
      <Sparkles className="absolute bottom-10 right-32 h-4 w-4 text-indigo-200" aria-hidden="true" />
    </div>
  );
}
