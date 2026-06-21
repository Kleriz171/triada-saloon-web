// Central site config. Update these once the client sends the real details.
// TODO(client): real WhatsApp number, confirmed address, opening hours, logo.

export const siteConfig = {
  name: "Triada Estetic Center",
  // International format, digits only (no +, no spaces) — used to build wa.me links.
  whatsappNumber: "355000000000", // TODO(client): replace with real number
  instagram: "https://www.instagram.com/triada_estetic_center",
  instagramHandle: "@triada_estetic_center",
  // TODO(client): real address + Google Maps embed URL
  address: "Tiranë, Shqipëri",
  mapsEmbedUrl: "",
  email: "",
};

// Build a tap-to-chat WhatsApp link with a pre-filled message.
export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

// The four showcase sections (route segments) in display order.
export const sections = ["hair", "makeup", "nails", "esthetics"] as const;
export type Section = (typeof sections)[number];
