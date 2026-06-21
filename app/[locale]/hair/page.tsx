import SectionPage from "@/components/SectionPage";
import type { Locale } from "@/i18n/routing";

export default async function HairPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  // Mix photos and short clips here. Photos go in public/images/hair/,
  // clips in public/videos/hair/. Order below is the order in the grid.
  // Example (uncomment + point at real files):
  //
  // const media: GalleryItem[] = [
  //   { src: "/images/hair/1.jpg", alt: "Balayage" },
  //   { type: "video", src: "/videos/hair/transformation.mp4",
  //     poster: "/images/hair/1.jpg", alt: "Transformim flokësh" },
  //   { src: "/images/hair/2.jpg", alt: "Prerje" },
  // ];

  return <SectionPage locale={locale} section="hair" />;
}
