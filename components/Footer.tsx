import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { sections, siteConfig } from "@/config/site";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-charcoal/10 bg-sand">
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">Triada Estetic Center</p>
          <p className="mt-3 max-w-xs text-sm text-charcoal/70">
            {t("footer.tagline")}
          </p>
          <div className="mt-6">
            <WhatsAppButton />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-charcoal/50">
            {t("home.sectionsTitle")}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s}>
                <Link href={`/${s}`} className="transition-colors hover:text-accent">
                  {t(`nav.${s}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-charcoal/50">
            {t("contact.followLabel")}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Instagram {siteConfig.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {t("contact.viewOnMaps")}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {t("contact.leaveReview")}
              </a>
            </li>
            <li className="text-charcoal/70">{siteConfig.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal/10">
        <div className="container-editorial flex flex-col gap-2 py-6 text-xs text-charcoal/50 md:flex-row md:justify-between">
          <span>
            © {year} {siteConfig.name}. {t("footer.rights")}
          </span>
          <span>
            Made by{" "}
            <a href="https://webris.al" className="hover:text-accent">
              Webris
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
