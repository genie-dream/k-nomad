import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          orange: "#FF6B35",
          blue: "#004E89",
        },
        accent: {
          mint: "#00D9C0",
        },
        // Neutrals
        bg: {
          light: "#F7F9FB",
          white: "#FFFFFF",
        },
        text: {
          dark: "#2C3E50",
          gray: "#6C757D",
        },
        border: {
          gray: "#DEE2E6",
        },
        // Semantic
        success: "#28A745",
        warning: "#FFC107",
        danger: "#DC3545",
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "6": "24px",
        "8": "32px",
        "12": "48px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
