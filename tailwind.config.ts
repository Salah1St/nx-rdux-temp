import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          25: "#f6fef9",
          50: "#ecfdf3",
          100: "#d1fadf",
          200: "#a6f4c5",
          300: "#6ce9a6",
          400: "#32d583",
          500: "#12b76a",
          600: "#039855",
          700: "#027a48",
          800: "#05603a",
          900: "#054f31",
        },
        secondary: "#F0C932",
        validation: "#605DEC",
        error: "#F93232",
        success: "#439F6E",
        grey: "#212121",
        mediumgrey: "#848199",
        lightgrey: "#C9C8D3",
        highlight: { 100: "#1090D2", 200: "#FFA8CA", 300: "3A0CA3" },
        graybg: "#FAFAFA",
        noButton: "#38B4C0",
        questionBar: "#265687",
        noButtonBorder: "#F7E0FE",
      },
      fontFamily: {
        Roboto: ["Roboto"],
      },
      dropShadow: {
        primary: "10px 10px 20px rgba(58,170,166,0.15)",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        "fade-slow": "wiggle 2s ease-in-out  1 ",
        "fade-in": "scaleup 3s ease-in-out  1 ",
      },
      keyframes: {
        wiggle: {
          "0%": { width: "100%" },
          "100%": { width: "50%" },
        },
        scaleup: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1.0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
