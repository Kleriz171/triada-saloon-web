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

## Adding photos & videos to a section

Drop photos in `public/images/hair/` and clips in `public/videos/hair/`, then pass
them to the section page as a single `media` list (photos and videos can be mixed —
order is preserved in the grid):

```tsx
// app/[locale]/hair/page.tsx
import type { GalleryItem } from "@/components/Gallery";

const media: GalleryItem[] = [
  { src: "/images/hair/1.jpg", alt: "Balayage" },
  {
    type: "video",
    src: "/videos/hair/transformation.mp4",
    poster: "/images/hair/1.jpg", // still frame shown before it plays
    alt: "Transformim flokësh",
  },
  { src: "/images/hair/2.jpg", alt: "Prerje" },
];

<SectionPage locale={locale} section="hair" media={media} />
```

**Video tips:** keep clips short (~5–15s), use `.mp4` (H.264), muted, ideally
square or 3:4 portrait to match the grid. They autoplay (muted, looping) only while
on screen and stay paused for users with reduced-motion enabled — so always provide a
`poster` image. Galleries render neutral placeholder tiles until real media is added.
