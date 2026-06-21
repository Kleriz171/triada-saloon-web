import type { ReactNode } from "react";

// Root layout is intentionally minimal — the real <html> lives in [locale]/layout.tsx
// so the lang attribute and fonts are locale-aware.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
