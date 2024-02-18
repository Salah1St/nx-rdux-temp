import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          brand: {
            25: "#fbfffb",
            50: "#f0f6f0",
            100: "#dbe9da",
            200: "#b9d4b9",
            300: "#8db58f",
            400: "#609164",
            500: "#56915d",
            600: "#305935",
            700: "#27462c",
            800: "#263f2a",
            900: "#223726",
          },
          gray: {
            25: "#fcfcfd",
            50: "#f9fafb",
            100: "#f2f4f7",
            200: "#eaecf0",
            300: "#d0d5dd",
            400: "#98a2b3",
            500: "#667085",
            600: "#475467",
            700: "#344054",
            800: "#1d2939",
            900: "#101828",
          },
          error: {
            25: "#fffbfa",
            50: "#fef3f2",
            100: "#fee4e2",
            200: "#fecdca",
            300: "#fda29b",
            400: "#f97066",
            500: "#f04438",
            600: "#d92d20",
            700: "#b42318",
            800: "#912018",
            900: "#7a271a",
          },
          warming: {
            25: "#fffcf5",
            50: "#fffaeb",
            100: "#fef0c7",
            200: "#fedf89",
            300: "#fec84b",
            400: "#fdb022",
            500: "#f79009",
            600: "#dc6803",
            700: "#b54708",
            800: "#93370d",
            900: " #7a2e0e",
          },
          success: {
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
        },
        secondary: {
          "blue-gray": {
            25: "#fcfcfd",
            50: "#f8f9fc",
            100: "#eaecf5",
            200: "#d5d9eb",
            300: "#afb5d9",
            400: "#717bbc",
            500: "#4e5ba6",
            600: "#3e4784",
            700: "#363f72",
            800: "#293056",
            900: "#101323",
          },
        },
        link: "#0185ff",
      },
      fontFamily: {
        Line: ["LINE_Seed_Sans_TH"],
      },
      dropShadow: {
        primary: "4px 4px 8px rgba(38,63,42,0.85)",
        text: "1px 1px 1px rgba(0,0,0,0.85)",
        color: "1px 1px 1px rgba(38,63,42,0.85)",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        "fade-slow": "wiggle 2s ease-in-out  1 ",
        "fade-in": "scaleup 3s ease-in-out  1 ",
        "slide-left": "moveLeft 0.5s ease  1 forwards",
        "slide-left-re": "moveLeftBack 0.5s ease  1 forwards",
        "slide-right": "moveRight 0.5s ease  1 forwards",
        "slide-right-re": "moveRightBack 0.5s ease  1 forwards",
      },
      keyframes: {
        wiggle: {
          "0%": { width: "100%" },
          "100%": { width: "50%" },
        },
        moveLeft: {
          to: { transform: "translateX(-280px)", width: "0px", opacity: "0" },
        },
        moveLeftBack: {
          from: { transform: "translateX(-280px)", width: "0px", opacity: "0" },
          to: { transform: "translateX(0px)", width: "280px", opacity: "1" },
        },
        moveRight: {
          to: { transform: "translateX(280px)", width: "0px", opacity: "0" },
        },
        moveRightBack: {
          from: { transform: "translateX(280px)", width: "0px", opacity: "0" },
          to: { transform: "translateX(0px)", width: "280px", opacity: "1" },
        },
        scaleup: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1.0)" },
        },
      },
      gridTemplateColumns: {
        "10%": "10% 1fr",
        "20%": "20% 1fr",
        "30%": "30% 1fr",
        "40%": "40% 1fr",
        "50%": "50% 1fr",
        "60%": "60% 1fr",
        "70%": "70% 1fr",
        "80%": "80% 1fr",
        "90%": "90% 1fr",
        "100%": "1fr",
      },
    },
  },
  plugins: [],
};
export default config;
