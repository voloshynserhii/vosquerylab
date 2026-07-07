import { redirect } from "next/navigation";
import { localizePath } from "@i18n/config";

type CaseStudyRedirectProps = { params: Promise<{ slug: string }> };

export default async function CaseStudyRedirect({ params }: CaseStudyRedirectProps) {
  const { slug } = await params;
  redirect(localizePath("en", `/case-studies/${slug}`));
}
