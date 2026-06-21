import type { ReactNode } from "react";
import Image from "next/image";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  // Optional background image. Falls back to a warm neutral block until photos arrive.
  imageSrc?: string;
  children?: ReactNode;
};

export default function Hero({ eyebrow, title, subtitle, imageSrc, children }: Props) {
  return (
    <section className="relative overflow-hidden">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-sand via-cream to-sand" />
      )}

      <div
        className={`relative ${
          imageSrc ? "bg-ink/40" : ""
        }`}
      >
        <div className="container-editorial flex min-h-[70vh] flex-col justify-center py-24 md:min-h-[80vh]">
          {eyebrow && (
            <p
              className={`mb-4 text-xs uppercase tracking-[0.3em] ${
                imageSrc ? "text-cream/80" : "text-accent"
              }`}
            >
              {eyebrow}
            </p>
          )}
          <h1
            className={`max-w-4xl text-4xl leading-[1.05] md:text-6xl lg:text-7xl ${
              imageSrc ? "text-cream" : "text-charcoal"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-6 max-w-xl text-lg ${
                imageSrc ? "text-cream/90" : "text-charcoal/70"
              }`}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}
