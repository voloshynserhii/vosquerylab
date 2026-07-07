import { redirect } from "next/navigation";
import { localizePath } from "@i18n/config";

type ServiceRedirectProps = { params: Promise<{ slug: string }> };

export default async function ServiceRedirect({ params }: ServiceRedirectProps) {
  const { slug } = await params;
  redirect(localizePath("en", `/services/${slug}`));
}
