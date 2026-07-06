export { colors } from "./colors";
export { gradients } from "./gradients";
export { radius } from "./radius";
export { shadows } from "./shadows";
export { space, spacing } from "./spacing";
export { transitions } from "./transitions";
export { typography } from "./typography";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
