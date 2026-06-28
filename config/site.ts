// Central site config. Update these once the client sends the real details.
// TODO(client): real WhatsApp number, confirmed address, opening hours, logo.

export const siteConfig = {
  name: "Triada Estetic Center",
  // International format, digits only (no +, no spaces) — used to build wa.me links.
  // Local: 068 308 8896 → +355 68 308 8896
  whatsappNumber: "355683088896",
  instagram: "https://www.instagram.com/triada_estetic_center",
  instagramHandle: "@triada_estetic_center",
  // From the salon's own Google Business listing.
  address: "Rruga Sokrat Miho, Tiranë 1000",
  mapsEmbedUrl:
    "https://maps.google.com/maps?cid=10485296304097975113&z=16&output=embed",
  // Canonical Google Business links. CID 10485296304097975113 = Triada Estetic Center;
  // writereview needs the ChIJ place id (CID is not accepted there).
  googleMapsUrl: "https://www.google.com/maps?cid=10485296304097975113",
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJdQTjoHkxUBMRSdt5Ym9Bg5E",
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
