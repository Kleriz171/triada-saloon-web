import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { sections, siteConfig, type Section } from "@/config/site";
import Hero from "@/components/Hero";
import SectionCard from "@/components/SectionCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { metadataForPage } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return metadataForPage(locale, "home", "", true);
}

// Cover image for each section card on the home page.
const sectionCovers: Record<Section, string> = {
  hair: "/images/hair/hair-7.jpg",
  makeup: "/images/makeup/makeup-6.jpg",
  nails: "/images/nails/nails-1.jpg",
  esthetics: "/images/esthetics/esthetics-1.jpg",
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <Hero
        eyebrow={t("home.heroEyebrow")}
        title={t("home.heroTitle")}
        subtitle={t("home.heroSubtitle")}
        imageSrc="/images/hair/hair-8.jpg"
      >
        <WhatsAppButton />
      </Hero>

      {/* Social proof */}
      <div className="border-y border-charcoal/10 bg-sand">
        <div className="container-editorial flex flex-col items-center gap-2 py-8 text-center">
          <p className="font-serif text-3xl md:text-4xl">
            {t("common.instagramFollowers")}
          </p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-charcoal/60 transition-colors hover:text-accent"
          >
            {siteConfig.instagramHandle}
          </a>
        </div>
      </div>

      {/* Section cards */}
      <section className="container-editorial py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl">{t("home.sectionsTitle")}</h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {sections.map((s) => (
            <SectionCard
              key={s}
              href={`/${s}`}
              title={t(`sections.${s}.title`)}
              statement={t(`sections.${s}.statement`)}
              cta={t("common.viewSection")}
              imageSrc={sectionCovers[s]}
            />
          ))}
        </div>
      </section>

      {/* Instagram teaser */}
      <section className="bg-charcoal text-cream">
        <div className="container-editorial flex flex-col items-center gap-6 py-20 text-center">
          <p className="max-w-2xl font-serif text-2xl md:text-3xl">
            {t("home.instagramTeaser")}
          </p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm uppercase tracking-widest transition-colors hover:border-cream"
          >
            {t("common.followInstagram")}
          </a>
        </div>
      </section>
    </>
  );
}
