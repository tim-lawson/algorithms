import type { Config } from "tailwindcss";
import {
  amber,
  green,
  lime,
  mauve,
  orange,
  red,
  yellow,
} from "@radix-ui/colors";
import radix from "tailwindcss-radix";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [radix],
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...green,
        ...yellow,
        ...lime,
        ...amber,
        ...orange,
        ...red,
      },
      keyframes: {
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
};

export default config;
