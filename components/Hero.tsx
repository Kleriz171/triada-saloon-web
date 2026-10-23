import type { ReactNode } from "react";
import Image from "next/image";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  // Optional background image. Falls back to a warm neutral block until photos arrive.
  imageSrc?: string;
  // Portrait photo: full-bleed on mobile, right-hand half of a split hero from md up.
  portraitSrc?: string;
  portraitAlt?: string;
  children?: ReactNode;
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  portraitSrc,
  portraitAlt = "",
  children,
}: Props) {
  if (portraitSrc) {
    return (
      <section className="relative overflow-hidden bg-charcoal md:grid md:min-h-[85vh] md:grid-cols-2">
        <div className="absolute inset-0 md:left-1/2">
          <Image
            src={portraitSrc}
            alt={portraitAlt}
            fill
            priority
            className="object-cover object-[50%_30%]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="absolute inset-0 bg-ink/55 md:hidden" />

        <div className="relative flex min-h-[80vh] flex-col justify-center px-6 py-24 md:min-h-0 md:px-12 lg:px-20">
          {eyebrow && (
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cream/80">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-xl text-4xl leading-[1.05] text-cream md:text-5xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-md text-lg text-cream/90">{subtitle}</p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </section>
    );
  }

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
