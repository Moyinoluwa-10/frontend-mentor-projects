import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "off-white": "hsl(0, 0%, 94%)",
        "light-grey": "hsl(0, 0%, 86%)",
        "smokey-grey": "hsl(0, 1%, 44%)",
        "off-black": "hsl(0, 0%, 8%)",
        purple: "hsl(259, 100%, 65%)",
        "light-red": "hsl(0, 100%, 67%)",
        attribution: "hsl(228, 45%, 44%)",
      },
      fontSize: {
        "3xl": ["2rem", "2.35rem"],
      },
    },
  },
  plugins: [],
};
export default config;

