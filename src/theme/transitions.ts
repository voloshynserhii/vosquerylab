export const transitions = {
  base: "transition-all duration-300 ease-out",
  slow: "transition-all duration-500 ease-out",
  hoverLift: "transition-all duration-300 ease-out hover:-translate-y-1",
  scaleHover: "transition-transform duration-500 ease-out group-hover:scale-[1.02]",
} as const;
