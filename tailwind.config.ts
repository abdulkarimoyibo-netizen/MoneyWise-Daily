import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1F2E28",
        ivory: "#FAF6EE",
        sage: {
          DEFAULT: "#7A9B7E",
          light: "#A9C2AC",
          dark: "#5C7C60",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E0C15C",
        },
        cream: "#FFFDF8",
        taupe: "#8B8378",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
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
