import type { Service } from "@/content/services";

type Props = {
  heading: string;
  services: Service[];
};

// Service list — name + short description, no prices (by design).
export default function ServiceList({ heading, services }: Props) {
  return (
    <section className="container-editorial py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl">{heading}</h2>
      <ul className="mt-10 divide-y divide-charcoal/10 border-t border-charcoal/10">
        {services.map((service) => (
          <li
            key={service.name}
            className="grid gap-2 py-6 md:grid-cols-[1fr_2fr] md:gap-10"
          >
            <h3 className="font-serif text-xl">{service.name}</h3>
            <p className="text-charcoal/70">{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
