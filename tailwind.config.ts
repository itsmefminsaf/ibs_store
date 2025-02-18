import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#eee",
        foreground: "#e61",
      },
      fontFamily: {
        roboto:
          "@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');",
      },
      boxShadow: {
        top: "0 0px 15px -5px rgba(0,0,0,0.1)",
      },
      animation: {
        work: "work .8s infinite ease",
      },
      keyframes: {
        work: {
          "0%": {
            rotate: "30deg",
          },
          "50%": {
            rotate: "0deg",
          },
          "100%": {
            rotate: "30deg",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
