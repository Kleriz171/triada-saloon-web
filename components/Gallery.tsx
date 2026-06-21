import Image from "next/image";

export type GalleryImage = {
  src: string;
  alt: string;
};

type Props = {
  heading: string;
  images: GalleryImage[];
  // How many placeholder tiles to show when no real photos exist yet.
  placeholderCount?: number;
};

// Editorial photo gallery. Renders real photos when present, otherwise
// neutral placeholder tiles so the layout is reviewable before photos arrive.
export default function Gallery({ heading, images, placeholderCount = 6 }: Props) {
  const hasImages = images.length > 0;

  return (
    <section className="container-editorial py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl">{heading}</h2>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {hasImages
          ? images.map((image, i) => (
              <figure
                key={image.src}
                className={`group relative overflow-hidden bg-sand ${
                  i % 5 === 0 ? "aspect-[3/4] md:row-span-2" : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </figure>
            ))
          : Array.from({ length: placeholderCount }).map((_, i) => (
              <div
                key={i}
                className={`flex items-center justify-center bg-sand text-xs uppercase tracking-widest text-charcoal/30 ${
                  i % 5 === 0 ? "aspect-[3/4] md:row-span-2" : "aspect-square"
                }`}
              >
                Foto
              </div>
            ))}
      </div>
    </section>
  );
}
