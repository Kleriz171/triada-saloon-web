# Triada Estetic Center — Website

Multipage showcase site for **Triada Estetic Center**, a beauty salon. Built to turn
the existing Instagram audience into bookings via WhatsApp. No prices, no on-site booking
in v1 — the photos do the selling.

## Stack

- **Next.js** (App Router, SSG) + **TypeScript**
- **Tailwind CSS** — Editorial Luxe direction (neutral/warm-luxe palette)
- **next-intl** — bilingual **SQ (default) + EN** with a toggle
- **next/image** — auto-optimized, lazy-loaded photos
- Deploys on **Vercel**

## Getting started

```bash
npm install
npm run dev    # http://localhost:3000  → redirects to /sq
```

## Project structure

```
app/[locale]/        Home + hair/makeup/nails/esthetics + about + contact
components/           Navbar, Footer, WhatsAppButton, Hero, SectionCard,
                     ServiceList, Gallery, SectionPage, LanguageToggle
content/services.ts  Service lists per section, per locale (no prices)
messages/{sq,en}.json  All UI copy, kept in sync across both languages
config/site.ts       WhatsApp number, socials, address — single source of truth
i18n/                next-intl routing / navigation / request config
public/images/<section>/   Real photos go here
```

## TODO — needed from the client

These are placeholders in the code until the client provides real values:

- [ ] **WhatsApp number** → `config/site.ts` (`whatsappNumber`)
- [ ] **Address + opening hours** → `config/site.ts` + `messages/*.json` (`contact.hoursValue`)
- [ ] **Google Maps embed URL** → `config/site.ts` (`mapsEmbedUrl`)
- [ ] **Photos** by section → `public/images/<section>/`, then wire into each page's `images` prop
- [ ] **Logo** + final brand colors → `tailwind.config.ts` (`accent`) and Navbar
- [ ] **Confirm service lists** per section → `content/services.ts`

## Adding photos to a section

Drop files in `public/images/hair/` (etc.), then pass them to the section page:

```tsx
// app/[locale]/hair/page.tsx
<SectionPage
  locale={locale}
  section="hair"
  images={[{ src: "/images/hair/1.jpg", alt: "Balayage" }]}
/>
```

Galleries render neutral placeholder tiles until real photos are added.
