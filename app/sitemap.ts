import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { sections, siteConfig } from "@/config/site";

const segments = ["", ...sections.map((s) => `/${s}`), "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return segments.flatMap((segment) =>
    routing.locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}${segment}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: segment === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${siteConfig.url}/${l}${segment}`]),
        ),
      },
    })),
  );
}
