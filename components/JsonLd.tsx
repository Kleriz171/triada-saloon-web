import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { sections, siteConfig } from "@/config/site";
import { getServices } from "@/content/services";

// LocalBusiness (BeautySalon) structured data — helps Google show the salon
// in local/map results with address, hours, phone and social profiles.
export default async function JsonLd({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "sections" });
  const data = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/about/brand.jpg`,
    logo: `${siteConfig.url}/logo.png`,
    telephone: siteConfig.phone,
    priceRange: "$$",
    currenciesAccepted: "ALL",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rruga Sokrat Miho",
      addressLocality: "Tiranë",
      postalCode: "1000",
      addressCountry: "AL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: "Tiranë",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    inLanguage: locale,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: siteConfig.name,
      itemListElement: sections.map((s) => ({
        "@type": "OfferCatalog",
        name: t(`${s}.title`),
        url: `${siteConfig.url}/${locale}/${s}`,
        itemListElement: getServices(locale, s).map((svc) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: svc.name,
            description: svc.description,
          },
        })),
      })),
    },
    hasMap: siteConfig.googleMapsUrl,
    sameAs: [siteConfig.instagram, siteConfig.googleMapsUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
