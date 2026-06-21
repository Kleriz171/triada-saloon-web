import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial Luxe — neutral / warm-luxe. Accent finalized from real branding.
        cream: "#F7F3ED",
        sand: "#EDE6DB",
        charcoal: "#1A1714",
        ink: "#0C0A09",
        accent: "#A07E5A", // warm muted gold — placeholder until brand colors arrive
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        editorial: "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
