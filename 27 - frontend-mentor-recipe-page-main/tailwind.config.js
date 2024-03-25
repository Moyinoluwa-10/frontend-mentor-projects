/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        nutmeg: "hsl(14, 45%, 36%)",
        "dark-raspberry": "hsl(332, 51%, 32%)",
        "rose-white": "hsl(330, 100%, 98%)",
        "egg-shell": "hsl(30, 54%, 90%)",
        "light-grey": "hsl(30, 18%, 87%)",
        "wenge-brown": "hsl(30, 10%, 34%)",
        "dark-charcoal": "hsl(24, 5%, 18%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        "young-serif": ["Young Serif", "serif"],
      },
    },
  },

  plugins: [],
};

