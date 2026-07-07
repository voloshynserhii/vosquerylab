import { redirect } from "next/navigation";
import { localizePath } from "@i18n/config";

export default function RootPage() {
  redirect(localizePath("en"));
}
