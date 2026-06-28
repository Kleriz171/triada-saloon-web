import type { Locale } from "@/i18n/routing";
import type { Section } from "@/config/site";

export type Service = {
  name: string;
  description: string;
};

// Service lists per section, per locale. No prices (by design — v1).
// TODO(client): confirm the real service list for each section.
type SectionServices = Record<Section, Service[]>;

const sq: SectionServices = {
  hair: [
    { name: "Ngjyrosje", description: "Ngjyrosje e plotë ose retush, e përshtatur me tonin tënd." },
    { name: "Balayage / Shatush", description: "Tranzicione natyrale ngjyrash për një pamje moderne." },
    { name: "Prerje & Styling", description: "Prerje sipas formës së fytyrës dhe styling për çdo rast." },
    { name: "Trajtim Keratine", description: "Flokë të lëmuar, të shëndetshëm dhe lehtësisht të menaxhueshëm." },
    { name: "Zgjatim Flokësh", description: "Hair extensions për gjatësi dhe volum natyral." },
  ],
  makeup: [
    { name: "Make-up Ditor", description: "Look natyral që thekson bukurinë tënde." },
    { name: "Make-up Nusërie", description: "Look elegant dhe rezistent për ditën më të rëndësishme." },
    { name: "Make-up Eventi", description: "Glam për mbrëmje, fejesa dhe foto-shootings." },
    { name: "Full Glam Make-up", description: "Look i plotë glam me intensitet maksimal për çdo rast special." },
  ],
  nails: [
    { name: "Manikyr Gel", description: "Manikyr i qëndrueshëm me përfundim të shkëlqyer." },
    { name: "Ndërtim Thonjsh", description: "Thonj të modeluar me formë dhe gjatësi sipas dëshirës." },
    { name: "Nail Art", description: "Dizajne të personalizuara dhe dekore." },
    { name: "Pedikyr", description: "Kujdes i plotë për këmbët, me higjienë maksimale." },
  ],
  esthetics: [
    { name: "Pastrim Fytyre", description: "Pastrim i thellë për lëkurë të pastër dhe të freskët." },
    { name: "Heqje Qimesh me Lazer", description: "Trajtim efikas dhe i sigurt për heqje afatgjatë." },
    { name: "Trajtime Fytyre", description: "Trajtime hidratuese dhe rinovuese për lëkurën." },
    { name: "Mezoterapi", description: "Mikro-injektime që ushqejnë dhe rinovojnë lëkurën në thellësi." },
    { name: "Mbushje me Filler", description: "Filler për buzë dhe fytyrë, për volum e harmoni natyrale." },
    { name: "Trajtime Anti-rrudhë", description: "Trajtime që zbutin rrudhat dhe ngrenë lëkurën." },
    { name: "Solar", description: "Nxirje e sigurt me solarium megaSun për një ton të barabartë." },
  ],
};

const en: SectionServices = {
  hair: [
    { name: "Coloring", description: "Full color or root retouch, tailored to your tone." },
    { name: "Balayage / Shatush", description: "Natural color transitions for a modern look." },
    { name: "Cut & Styling", description: "Cuts to suit your face shape and styling for any occasion." },
    { name: "Keratin Treatment", description: "Smooth, healthy and easy-to-manage hair." },
    { name: "Hair Extensions", description: "Extensions for natural length and volume." },
  ],
  makeup: [
    { name: "Day Makeup", description: "A natural look that enhances your beauty." },
    { name: "Bridal Makeup", description: "An elegant, long-lasting look for your big day." },
    { name: "Event Makeup", description: "Glam for evenings, engagements and photoshoots." },
    { name: "Full Glam Makeup", description: "A complete, high-impact glam look for any special occasion." },
  ],
  nails: [
    { name: "Gel Manicure", description: "Long-lasting manicure with a glossy finish." },
    { name: "Nail Extensions", description: "Sculpted nails shaped to your preferred length." },
    { name: "Nail Art", description: "Custom designs and decorations." },
    { name: "Pedicure", description: "Complete foot care with maximum hygiene." },
  ],
  esthetics: [
    { name: "Facial Cleansing", description: "Deep cleansing for clear, fresh skin." },
    { name: "Laser Hair Removal", description: "Effective, safe treatment for long-term removal." },
    { name: "Facial Treatments", description: "Hydrating and renewing treatments for the skin." },
    { name: "Mesotherapy", description: "Micro-injections that deeply nourish and renew the skin." },
    { name: "Filler", description: "Lip and facial filler for natural volume and harmony." },
    { name: "Anti-Wrinkle Treatments", description: "Treatments that smooth wrinkles and lift the skin." },
    { name: "Solarium", description: "Safe megaSun tanning for an even, golden tone." },
  ],
};

const byLocale: Record<Locale, SectionServices> = { sq, en };

export function getServices(locale: Locale, section: Section): Service[] {
  return byLocale[locale][section];
}
