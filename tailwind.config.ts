import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37",         // Brushed Gold
        "primary-dark": "#B8860B",
        "background-light": "#F8F5F2",
        "background-dark": "#0F0F0F",
        charcoal: "#1A1A1A",
        taupe: "#8C8279",
        "taupe-dark": "#756D66",
        surface: "#EFEBE7",
        accent: "#2C2C2C",
        "brand-cream": "#FDFCFB",
        "brand-gold-soft": "#E5D1A0",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-noto-serif)", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(24, 23, 22, 0.05)",
        glow: "0 15px 40px rgba(201, 189, 177, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
