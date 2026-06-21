import SectionPage from "@/components/SectionPage";
import type { Locale } from "@/i18n/routing";

// Media for this section lives in content/media.ts (pulled in automatically).
export default async function HairPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <SectionPage locale={locale} section="hair" />;
}
