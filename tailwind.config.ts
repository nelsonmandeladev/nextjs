import type { Config } from "tailwindcss";


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        fuzzy: ["Fuzzy Bubbles", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FF67A0",
        secondary: "#95BCE3",
        "main-black": "#021A2C",
        "background": "#FAFAFA",
        orange: "#FF7C60",
        "gray-1": "#3C6081",
        "gray-2": "#6698C5",
        "main-yellow": "#FFB341",
        "gray-3": "#95BCE3",
        success: "#208C4B",
        error: "#FA294E",
        warning: "#FF7426",
        "main-white": "#FAFAFA",
      },
      boxShadow: {
        "auth-header": "0px 20px 40px 0px rgba(149, 188, 227, 0.12)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config