import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Props = {
  href: string;
  title: string;
  statement: string;
  cta: string;
  imageSrc?: string;
};

// A large editorial card linking to a showcase section.
export default function SectionCard({ href, title, statement, cta, imageSrc }: Props) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[4/5] overflow-hidden bg-sand"
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-sand to-cream" />
      )}

      <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />

      <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
        <p className="font-serif text-2xl text-charcoal md:text-3xl">{title}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.25em] text-charcoal/50">
          {statement}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {cta} →
        </span>
      </div>
    </Link>
  );
}
