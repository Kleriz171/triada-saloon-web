import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";

// Root layout is intentionally minimal — the real <html> lives in [locale]/layout.tsx
// so the lang attribute and fonts are locale-aware. metadataBase is set here so
// root-level metadata routes (opengraph-image, etc.) resolve absolute URLs correctly.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
