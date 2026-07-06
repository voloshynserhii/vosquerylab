import { BrainCircuit } from "lucide-react";
import { cn, gradients, radius, shadows } from "../../src/theme";

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <span
      className={cn("inline-flex items-center justify-center text-white", className, gradients.primary, radius.lg, shadows.button)}
      aria-label="Vosquery Lab Logo"
    >
      <BrainCircuit className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}
