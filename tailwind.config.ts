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
        primary: "#C9BDB1",
        "primary-dark": "#b0a396",
        "background-light": "#FAF9F6",
        "background-dark": "#0A0A0A",
        charcoal: "#1C1C1C",
        taupe: "#8E8680",
        "taupe-dark": "#7b736b",
        surface: "#F2F0ED",
        "brand-cream": "#f0ebe2",
        "brand-beige": "#d4c5a5",
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
