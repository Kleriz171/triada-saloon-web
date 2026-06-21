import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import Gallery from "@/components/Gallery";
import WhatsAppButton from "@/components/WhatsAppButton";

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

      {/* Photos of the space — wired in once client sends them. */}
      <Gallery heading="" items={[]} placeholderCount={4} />
    </>
  );
}
