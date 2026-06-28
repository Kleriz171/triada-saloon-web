import SectionPage from "@/components/SectionPage";
import type { Locale } from "@/i18n/routing";
import { metadataForPage } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return metadataForPage(locale, "esthetics", "/esthetics");
}

export default async function EstheticsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <SectionPage locale={locale} section="esthetics" />;
}
