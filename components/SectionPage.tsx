import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import type { Section } from "@/config/site";
import { getServices } from "@/content/services";
import { getMedia } from "@/content/media";
import Hero from "./Hero";
import ServiceList from "./ServiceList";
import Gallery, { type GalleryItem } from "./Gallery";
import WhatsAppButton from "./WhatsAppButton";

type Props = {
  locale: Locale;
  section: Section;
  // Photos live in public/images/<section>/ and clips in public/videos/<section>/.
  // Defaults to the section's list in content/media.ts; pass to override.
  media?: GalleryItem[];
};

// Shared template for Hair / Makeup / Nails / Esthetics pages.
export default async function SectionPage({ locale, section, media }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations();
  const services = getServices(locale, section);
  const items = media ?? getMedia(section);

  return (
    <>
      <Hero
        eyebrow={t(`sections.${section}.statement`)}
        title={t(`sections.${section}.title`)}
        subtitle={t(`sections.${section}.intro`)}
      >
        <WhatsAppButton />
      </Hero>

      <ServiceList heading={t("servicesHeading")} services={services} />
      <Gallery heading={t("galleryHeading")} items={items} />

      <div className="container-editorial pb-24 text-center">
        <WhatsAppButton />
      </div>
    </>
  );
}
