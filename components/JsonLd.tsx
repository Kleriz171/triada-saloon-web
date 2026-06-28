import { siteConfig } from "@/config/site";

// LocalBusiness (BeautySalon) structured data — helps Google show the salon
// in local/map results with address, hours, phone and social profiles.
export default function JsonLd() {
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
