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
    { name: "Konsultë & Analizë Floku", description: "Analizë e flokut dhe skalpit për të përcaktuar trajtimin e duhur për ty." },
    { name: "Prerje & Styling", description: "Prerje moderne dhe klasike sipas formës së fytyrës, plus styling për çdo rast." },
    { name: "Modelime për Evente", description: "Modelime elegante për dasma, fejesa dhe raste speciale." },
    { name: "Ngjyrosje Premium", description: "Lyerje profesionale me ngjyra premium, e përshtatur me tonin tënd." },
    { name: "Balayage, Highlights & Ombre", description: "Teknika ndriçimi — balayage, highlights, babylights dhe ombre — për tranzicione natyrale." },
    { name: "Glossing, Toner & Korrigjim Ngjyre", description: "Freskim shkëlqimi, ekuilibrim toni dhe korrigjim profesional i ngjyrës." },
    { name: "Zgjatje Flokësh", description: "Hair extensions — vendosje dhe mirëmbajtje për gjatësi e volum natyral." },
    { name: "Botox & Nanoplasti", description: "Trajtime lëmuese që disiplinojnë flokun dhe i japin shkëlqim e shëndet." },
    { name: "Trajtim Keratine & Hidratues", description: "Trajtime intensive hidratuese dhe rigjeneruese për flokë të lëmuar e të shëndetshëm." },
    { name: "Riparim i Flokut të Dëmtuar", description: "Trajtime me Olaplex, K18 dhe Moroccanoil për flokë të dëmtuar nga dekolorimi e nxehtësia." },
    { name: "Kundër Rënies & Stimulim Rritjeje", description: "Trajtime që forcojnë flokun dhe stimulojnë rritjen e tij." },
    { name: "Kujdes për Skalpin", description: "Trajtime për skalpin e ndjeshëm dhe kundër zbokthit." },
  ],
  makeup: [
    { name: "Make-up Ditor", description: "Look natyral që thekson bukurinë tënde." },
    { name: "Make-up Nusërie", description: "Look elegant dhe rezistent për ditën më të rëndësishme." },
    { name: "Make-up Eventi", description: "Glam për mbrëmje, fejesa dhe foto-shootings." },
    { name: "Full Glam Make-up", description: "Look i plotë glam me intensitet maksimal për çdo rast special." },
  ],
  nails: [
    { name: "Manikyr Klasik & Gel", description: "Manikyr klasik ose me xhel, i qëndrueshëm dhe me përfundim të shkëlqyer." },
    { name: "Ndërtim Thonjsh me Xhel", description: "Thonj të modeluar me xhel, me formë e gjatësi sipas dëshirës." },
    { name: "Thonj me Tipsa", description: "Zgjatim me tipsa për formë dhe qëndrueshmëri." },
    { name: "Forcim i Thonjve Natyralë", description: "Trajtim që forcon dhe mbron thonjtë natyralë." },
    { name: "Mbushje & Mirëmbajtje", description: "Refill dhe mirëmbajtje për thonj gjithmonë të përkryer." },
    { name: "Nail Art & French", description: "Dizajne të personalizuara, dekore dhe French manicure." },
    { name: "Heqje Xheli & Riparim", description: "Heqje profesionale e xhelit dhe riparim i thonjve të dëmtuar." },
    { name: "Pedikyr Estetik & Spa", description: "Pedikyr estetik, profesional dhe spa për këmbë të kujdesura." },
    { name: "Trajtim i Problematikave", description: "Thembra të çara, kallo, thonj të futur në mish dhe lëkurë e trashë." },
    { name: "Hidratim & Masazh", description: "Trajtime ushqyese dhe masazh relaksues për këmbët." },
  ],
  esthetics: [
    { name: "Konsultë Estetike", description: "Konsultë e personalizuar për të përzgjedhur trajtimin e duhur për ty." },
    { name: "Pastrim Profesional i Fytyrës", description: "Pastrim i thellë për lëkurë të pastër dhe të freskët." },
    { name: "Hidrafacial", description: "Pastrim i thellë, hidratim dhe ndriçim i fytyrës në një trajtim." },
    { name: "Mbushje me Filler", description: "Filler për buzë, mollëza, nofull, mjekër dhe konturimin e fytyrës." },
    { name: "Trajtime Anti-rrudhë", description: "Trajtime që zbutin rrudhat dhe ngrenë lëkurën." },
    { name: "PRP", description: "Plasma e pasuruar me trombocite për rigjenerimin natyral të lëkurës." },
    { name: "Mezoterapi & Skin Booster", description: "Mikro-injektime për hidratim intensiv, ushqim dhe elasticitet të lëkurës." },
    { name: "Microneedling", description: "Stimulim i kolagjenit për lëkurë më të fortë dhe të rinovuar." },
    { name: "Peeling Kimik", description: "Rinovim i lëkurës për një ton më të barabartë e të ndritshëm." },
    { name: "Trajtim për Akne", description: "Trajtim për aknet dhe shenjat e lëna prej tyre." },
    { name: "Njolla & Hiperpigmentim", description: "Trajtim për njolla dhe hiperpigmentim për ton uniform." },
    { name: "Rrathët e Zinj", description: "Trajtim për zonën rreth syve dhe rrathët e zinj." },
    { name: "Poret e Zgjeruara", description: "Trajtim që ngushton poret dhe lëmon teksturën e lëkurës." },
    { name: "Lifting & Biostimulim", description: "Trajtime që ngrenë dhe biostimulojnë lëkurën për pamje më të re." },
    { name: "Heqje Qimesh me Lazer", description: "Trajtim efikas dhe i sigurt për heqje afatgjatë." },
    { name: "Solar", description: "Nxirje e sigurt me solarium megaSun për një ton të barabartë." },
  ],
};

const en: SectionServices = {
  hair: [
    { name: "Consultation & Hair Analysis", description: "Hair and scalp analysis to define the right treatment for you." },
    { name: "Cut & Styling", description: "Modern and classic cuts to suit your face shape, plus styling for any occasion." },
    { name: "Event Styling", description: "Elegant updos and styling for weddings, engagements and special occasions." },
    { name: "Premium Coloring", description: "Professional coloring with premium shades, tailored to your tone." },
    { name: "Balayage, Highlights & Ombre", description: "Lightening techniques — balayage, highlights, babylights and ombre — for natural transitions." },
    { name: "Glossing, Toner & Color Correction", description: "Shine refresh, tone balancing and professional color correction." },
    { name: "Hair Extensions", description: "Extension placement and maintenance for natural length and volume." },
    { name: "Botox & Nanoplasty", description: "Smoothing treatments that tame the hair and add shine and health." },
    { name: "Keratin & Hydrating Treatments", description: "Intensive hydrating and regenerating treatments for smooth, healthy hair." },
    { name: "Damaged Hair Repair", description: "Olaplex, K18 and Moroccanoil treatments for hair damaged by bleaching and heat." },
    { name: "Anti-Hair-Loss & Growth", description: "Treatments that strengthen the hair and stimulate growth." },
    { name: "Scalp Care", description: "Treatments for sensitive scalp and against dandruff." },
  ],
  makeup: [
    { name: "Day Makeup", description: "A natural look that enhances your beauty." },
    { name: "Bridal Makeup", description: "An elegant, long-lasting look for your big day." },
    { name: "Event Makeup", description: "Glam for evenings, engagements and photoshoots." },
    { name: "Full Glam Makeup", description: "A complete, high-impact glam look for any special occasion." },
  ],
  nails: [
    { name: "Classic & Gel Manicure", description: "Classic or gel manicure, long-lasting with a glossy finish." },
    { name: "Gel Nail Extensions", description: "Sculpted gel nails shaped to your preferred length." },
    { name: "Tip Extensions", description: "Tip extensions for added shape and durability." },
    { name: "Natural Nail Strengthening", description: "A treatment that strengthens and protects natural nails." },
    { name: "Refill & Maintenance", description: "Refills and upkeep for always-perfect nails." },
    { name: "Nail Art & French", description: "Custom designs, decorations and French manicure." },
    { name: "Gel Removal & Repair", description: "Professional gel removal and repair of damaged nails." },
    { name: "Aesthetic & Spa Pedicure", description: "Aesthetic, professional and spa pedicures for well-kept feet." },
    { name: "Foot Concerns", description: "Cracked heels, calluses, ingrown nails and thickened skin." },
    { name: "Hydration & Massage", description: "Nourishing treatments and a relaxing foot massage." },
  ],
  esthetics: [
    { name: "Aesthetic Consultation", description: "A personalized consultation to choose the right treatment for you." },
    { name: "Professional Facial Cleansing", description: "Deep cleansing for clear, fresh skin." },
    { name: "Hydrafacial", description: "Deep cleansing, hydration and facial glow in one treatment." },
    { name: "Filler", description: "Filler for lips, cheeks, jaw, chin and facial contouring." },
    { name: "Anti-Wrinkle Treatments", description: "Treatments that smooth wrinkles and lift the skin." },
    { name: "PRP", description: "Platelet-rich plasma for natural skin regeneration." },
    { name: "Mesotherapy & Skin Booster", description: "Micro-injections for intensive hydration, nourishment and elasticity." },
    { name: "Microneedling", description: "Collagen stimulation for firmer, renewed skin." },
    { name: "Chemical Peel", description: "Skin renewal for a more even, radiant tone." },
    { name: "Acne Treatment", description: "Treatment for acne and the marks it leaves behind." },
    { name: "Spots & Hyperpigmentation", description: "Treatment for spots and hyperpigmentation for an even tone." },
    { name: "Dark Circles", description: "Treatment for the under-eye area and dark circles." },
    { name: "Enlarged Pores", description: "Treatment that tightens pores and smooths skin texture." },
    { name: "Lifting & Biostimulation", description: "Treatments that lift and biostimulate the skin for a younger look." },
    { name: "Laser Hair Removal", description: "Effective, safe treatment for long-term removal." },
    { name: "Solarium", description: "Safe megaSun tanning for an even, golden tone." },
  ],
};

const byLocale: Record<Locale, SectionServices> = { sq, en };

export function getServices(locale: Locale, section: Section): Service[] {
  return byLocale[locale][section];
}
