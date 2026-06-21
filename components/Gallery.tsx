import Image from "next/image";
import GalleryVideo from "./GalleryVideo";

export type GalleryImage = {
  type?: "image";
  src: string;
  alt: string;
};

export type GalleryVideoItem = {
  type: "video";
  src: string;
  // Optional still frame shown before the clip plays / when motion is reduced.
  poster?: string;
  alt: string;
};

export type GalleryItem = GalleryImage | GalleryVideoItem;

type Props = {
  heading: string;
  items: GalleryItem[];
  // How many placeholder tiles to show when no real media exists yet.
  placeholderCount?: number;
};

// Editorial gallery. Mixes photos and short clips; renders neutral
// placeholder tiles so the layout is reviewable before media arrives.
export default function Gallery({ heading, items, placeholderCount = 6 }: Props) {
  const hasItems = items.length > 0;

  return (
    <section className="container-editorial py-16 md:py-24">
      {heading && <h2 className="text-3xl md:text-4xl">{heading}</h2>}

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {hasItems
          ? items.map((item, i) => {
              const tall = i % 5 === 0;
              const tileClass = `group relative overflow-hidden bg-sand ${
                tall ? "aspect-[3/4] md:row-span-2" : "aspect-square"
              }`;
              const mediaClass =
                "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105";

              if (item.type === "video") {
                return (
                  <figure key={item.src} className={tileClass}>
                    <GalleryVideo
                      src={item.src}
                      poster={item.poster}
                      className={mediaClass}
                    />
                  </figure>
                );
              }

              return (
                <figure key={item.src} className={tileClass}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </figure>
              );
            })
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
