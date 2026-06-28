import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Playfair_Display, Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Sallon Bukurie në Tiranë`,
    template: `%s · ${siteConfig.name}`,
  },
  description:
    "Sallon bukurie elegant në Tiranë: flokë, make-up, thonj dhe estetikë. Balayage, hair extensions, mbushje buzësh, lazer dhe solarium. Rezervo në WhatsApp.",
  keywords: [
    "sallon bukurie Tiranë",
    "beauty salon Tirana",
    "flokë Tiranë",
    "make-up Tiranë",
    "thonj Tiranë",
    "estetikë Tiranë",
    "balayage",
    "hair extensions",
    "mbushje buzësh",
    "heqje qimesh me lazer",
    "solarium Tiranë",
    "Triada Estetic Center",
  ],
  applicationName: siteConfig.name,
  openGraph: { siteName: siteConfig.name, type: "website" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <JsonLd />
        <NextIntlClientProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton floating />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
