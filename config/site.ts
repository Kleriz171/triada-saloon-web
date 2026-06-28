// Central site config. Update these once the client sends the real details.
// TODO(client): real WhatsApp number, confirmed address, opening hours, logo.

export const siteConfig = {
  name: "Triada Estetic Center",
  // International format, digits only (no +, no spaces) — used to build wa.me links.
  // Local: 068 308 8896 → +355 68 308 8896
  whatsappNumber: "355683088896",
  instagram: "https://www.instagram.com/triada_estetic_center",
  instagramHandle: "@triada_estetic_center",
  // From the salon's own Google listing (Rruga Tom Plezha, Tiranë). TODO(client): confirm building no.
  address: "Rruga Tom Plezha, Tiranë 1050",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Triada%20Estetic%20Center%2C%20Rruga%20Tom%20Plezha%2C%20Tiran%C3%AB&z=16&output=embed",
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
