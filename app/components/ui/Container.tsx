import { cn, space } from "../../../src/theme";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(space.container, className)}>{children}</div>;
}
