import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // We define our NGO Green palette here
        primary: {
          50: '#ecfdf5',  // Very light green (backgrounds)
          100: '#d1fae5', // Light green
          600: '#059669', // Main Emerald Green (Buttons, Highlights)
          700: '#047857', // Darker Green (Text, Hover states)
        }
      },

      animation: {
    blob: "blob 7s infinite",
  },
  keyframes: {
    blob: {
      "0%": { transform: "translate(0px, 0px) scale(1)" },
      "33%": { transform: "translate(30px, -50px) scale(1.1)" },
      "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
      "100%": { transform: "translate(0px, 0px) scale(1)" },
    },
  },

    },
  },
  plugins: [],
};
export default config;