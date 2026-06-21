import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Albanian is the default, English is the toggle.
  locales: ["sq", "en"],
  defaultLocale: "sq",
});

export type Locale = (typeof routing.locales)[number];
