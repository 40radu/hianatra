import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#020F4F",
        "blue-secondary": "#031EA9",
        "red": "#FF1414", 
        "black-50": "#00000080",
        "blue-50":"#031EA980"
      },
      boxShadow: {
        primary: "0 0 36px #031EA92E"
      },
      screens: {
        '2xl': '1440px'
      }
    },
  },
  plugins: [],
} satisfies Config;
