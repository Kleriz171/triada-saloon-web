import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { siteConfig } from "@/config/site";

const ogLocale: Record<Locale, string> = { sq: "sq_AL", en: "en_US" };

// Build canonical + hreflang alternates and Open Graph/Twitter text for a page.
// `segment` is the path after the locale, e.g. "" for home, "/hair" for a section.
export function pageMetadata({
  locale,
  segment,
  title,
  description,
  absoluteTitle = false,
}: {
  locale: Locale;
  segment: string;
  title: string;
  description: string;
  absoluteTitle?: boolean;
}): Metadata {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = `/${l}${segment}`;
  languages["x-default"] = `/${routing.defaultLocale}${segment}`;

  // Branded social card (public/og.png, resolved absolute via metadataBase).
  const ogImage = { url: "/og.png", width: 1200, height: 630, alt: siteConfig.name };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: `/${locale}${segment}`, languages },
    openGraph: {
      title,
      description,
      url: `/${locale}${segment}`,
      type: "website",
      siteName: siteConfig.name,
      locale: ogLocale[locale],
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

// Pull localized SEO copy from messages (`seo.<page>`) and build the metadata.
export async function metadataForPage(
  locale: Locale,
  page: string,
  segment: string,
  absoluteTitle = false,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "seo" });
  return pageMetadata({
    locale,
    segment,
    title: t(`${page}.title`),
    description: t(`${page}.description`),
    absoluteTitle,
  });
}
