import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import type { Section } from "@/config/site";
import { getServices } from "@/content/services";
import Hero from "./Hero";
import ServiceList from "./ServiceList";
import Gallery, { type GalleryImage } from "./Gallery";
import WhatsAppButton from "./WhatsAppButton";

type Props = {
  locale: Locale;
  section: Section;
  // Real photos live in public/images/<section>/ and get wired in here later.
  images?: GalleryImage[];
};

// Shared template for Hair / Makeup / Nails / Esthetics pages.
export default async function SectionPage({ locale, section, images = [] }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations();
  const services = getServices(locale, section);

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
      <Gallery heading={t("galleryHeading")} images={images} />

      <div className="container-editorial pb-24 text-center">
        <WhatsAppButton />
      </div>
    </>
  );
}
