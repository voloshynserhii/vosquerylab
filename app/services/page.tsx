import { redirect } from "next/navigation";
import { localizePath } from "@i18n/config";

export default function ServicesRedirect() {
  redirect(localizePath("en", "/services"));
}
