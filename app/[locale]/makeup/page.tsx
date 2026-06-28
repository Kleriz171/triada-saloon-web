import SectionPage from "@/components/SectionPage";
import type { Locale } from "@/i18n/routing";
import { metadataForPage } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return metadataForPage(locale, "makeup", "/makeup");
}

export default async function MakeupPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <SectionPage locale={locale} section="makeup" />;
}
