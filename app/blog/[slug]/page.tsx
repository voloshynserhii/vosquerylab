import { redirect } from "next/navigation";
import { localizePath } from "@i18n/config";

type BlogRedirectProps = { params: Promise<{ slug: string }> };

export default async function BlogRedirect({ params }: BlogRedirectProps) {
  const { slug } = await params;
  redirect(localizePath("en", `/blog/${slug}`));
}
