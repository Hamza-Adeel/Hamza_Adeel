import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Scan app folder
    "./components/**/*.{js,ts,jsx,tsx}", // Scan components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6300", // Orange
        secondary: "#1a1a1a", // Dark bg
        foreground: "#ffffff", // Text
        color: "#ff6600ff",
      },
    },
  },
  plugins: [],
};

export default config;
