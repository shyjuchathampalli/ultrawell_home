import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c12e5a",
        accent: "#f5a623",
        dark: "#0f172a",
        muted: "#475569",
        light: "#f8fafc",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(193,46,90,0.15)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;