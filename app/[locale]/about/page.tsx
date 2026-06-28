import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import Gallery from "@/components/Gallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import { metadataForPage } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return metadataForPage(locale, "about", "/about");
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      <section className="container-editorial py-20 md:py-28">
        <h1 className="max-w-3xl text-4xl leading-tight md:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-8 max-w-2xl text-xl text-charcoal/80">{t("intro")}</p>
        <p className="mt-6 max-w-2xl text-charcoal/70">{t("body")}</p>
        <div className="mt-10">
          <WhatsAppButton />
        </div>
      </section>

      {/* Photos of the space. */}
      <Gallery
        heading=""
        items={[
          { src: "/images/about/stations.jpg", alt: "Stacionet e flokëve – ambienti i sallonit Triada" },
          { src: "/images/about/brand.jpg", alt: "Triada Estetic Center – brandi" },
          { src: "/images/about/treatment-room.jpg", alt: "Dhoma e trajtimeve estetike" },
          { src: "/images/about/pedicure.jpg", alt: "Zona e manikyr & pedikyr" },
          { src: "/images/about/owner.jpg", alt: "Triada Estetic Center" },
          { src: "/images/about/exterior.jpg", alt: "Ambienti i jashtëm i sallonit Triada" },
          { src: "/images/about/space-1.jpg", alt: "Ambienti i sallonit Triada" },
        ]}
      />
    </>
  );
}
