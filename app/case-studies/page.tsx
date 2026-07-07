import { redirect } from "next/navigation";
import { localizePath } from "@i18n/config";

export default function CaseStudiesRedirect() {
  redirect(localizePath("en", "/case-studies"));
}
