import type { Section } from "@/config/site";
import type { GalleryItem } from "@/components/Gallery";

// Real photos + clips per section, in display order.
// Photos: public/images/<section>/   Videos: public/videos/<section>/
// Each video has a poster still in public/images/<section>/<name>-poster.jpg.
const media: Record<Section, GalleryItem[]> = {
  hair: [
    { src: "/images/hair/hair-1.jpg", alt: "Ngjyrosje flokësh – e kuqe vishnje" },
    {
      type: "video",
      src: "/videos/hair/hair-1.mp4",
      poster: "/images/hair/hair-1-poster.jpg",
      alt: "Flokë bjondë, të lëmuar",
    },
    { src: "/images/hair/hair-2.jpg", alt: "Balayage bjond" },
    {
      type: "video",
      src: "/videos/hair/hair-2.mp4",
      poster: "/images/hair/hair-2-poster.jpg",
      alt: "Flokë të zinj, me shkëlqim",
    },
    { src: "/images/hair/hair-3.jpg", alt: "Flokë bjondë me onde" },
  ],
  makeup: [
    {
      type: "video",
      src: "/videos/makeup/makeup-1.mp4",
      poster: "/images/makeup/makeup-1-poster.jpg",
      alt: "Make-up elegant për event",
    },
    {
      type: "video",
      src: "/videos/makeup/makeup-2.mp4",
      poster: "/images/makeup/makeup-2-poster.jpg",
      alt: "Make-up glam",
    },
  ],
  nails: [
    { src: "/images/nails/nails-1.jpg", alt: "Nail art pastel" },
    { src: "/images/nails/nails-2.jpg", alt: "Thonj me dizajn rozë dhe të zi" },
    { src: "/images/nails/nails-3.jpg", alt: "Manikyr & pedikyr french" },
    {
      type: "video",
      src: "/videos/nails/nails-1.mp4",
      poster: "/images/nails/nails-1-poster.jpg",
      alt: "Pedikyr spa",
    },
  ],
  esthetics: [
    { src: "/images/esthetics/esthetics-1.jpg", alt: "Mbushje buzësh" },
    { src: "/images/esthetics/esthetics-2.jpg", alt: "Mbushje buzësh" },
    { src: "/images/esthetics/esthetics-3.jpg", alt: "Mbushje buzësh" },
    { src: "/images/esthetics/esthetics-4.jpg", alt: "Mbushje buzësh" },
    {
      type: "video",
      src: "/videos/esthetics/esthetics-1.mp4",
      poster: "/images/esthetics/esthetics-1-poster.jpg",
      alt: "Trajtim buzësh",
    },
    {
      type: "video",
      src: "/videos/esthetics/esthetics-2.mp4",
      poster: "/images/esthetics/esthetics-2-poster.jpg",
      alt: "Trajtim lëkure",
    },
    {
      type: "video",
      src: "/videos/esthetics/esthetics-3.mp4",
      poster: "/images/esthetics/esthetics-3-poster.jpg",
      alt: "Trajtim fytyre me filler",
    },
    {
      type: "video",
      src: "/videos/esthetics/esthetics-4.mp4",
      poster: "/images/esthetics/esthetics-4-poster.jpg",
      alt: "Mezoterapi",
    },
  ],
};

export function getMedia(section: Section): GalleryItem[] {
  return media[section];
}
