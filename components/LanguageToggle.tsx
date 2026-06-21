"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  function switchTo(next: string) {
    if (next === locale) return;
    // Keep the user on the same page, just swap the locale.
    router.replace(
      // @ts-expect-error -- pathname + params are compatible at runtime
      { pathname, params },
      { locale: next }
    );
  }

  return (
    <div className="flex items-center gap-1 text-xs font-medium uppercase tracking-widest">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span className="text-charcoal/30">/</span>}
          <button
            type="button"
            onClick={() => switchTo(loc)}
            aria-current={loc === locale ? "true" : undefined}
            className={
              loc === locale
                ? "text-charcoal"
                : "text-charcoal/40 transition-colors hover:text-charcoal"
            }
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}
