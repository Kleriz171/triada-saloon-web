import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import WhatsAppButton from "@/components/WhatsAppButton";
import { metadataForPage } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return metadataForPage(locale, "contact", "/contact");
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <section className="container-editorial py-20 md:py-28">
      <h1 className="text-4xl leading-tight md:text-6xl">{t("title")}</h1>
      <p className="mt-6 max-w-xl text-xl text-charcoal/80">{t("intro")}</p>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-charcoal/50">
              {t("addressLabel")}
            </p>
            <p className="mt-2 text-lg">{siteConfig.address}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-charcoal/50">
              {t("hoursLabel")}
            </p>
            <p className="mt-2 text-lg">{t("hoursValue")}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-charcoal/50">
              {t("followLabel")}
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-lg transition-colors hover:text-accent"
            >
              Instagram {siteConfig.instagramHandle}
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-charcoal/50">
              {t("googleLabel")}
            </p>
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-lg transition-colors hover:text-accent"
              >
                {t("viewOnMaps")} <span aria-hidden>→</span>
              </a>
              <a
                href={siteConfig.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-lg transition-colors hover:text-accent"
              >
                {t("leaveReview")} <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          <WhatsAppButton />
        </div>

        {/* Google Map — embed URL added once client confirms the address. */}
        <div className="aspect-square w-full overflow-hidden bg-sand md:aspect-auto">
          {siteConfig.mapsEmbedUrl ? (
            <iframe
              src={siteConfig.mapsEmbedUrl}
              title="Map"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="flex h-full min-h-[20rem] items-center justify-center text-xs uppercase tracking-widest text-charcoal/30">
              Hartë
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
