/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "0rem",
        center: "auto",
      },
    },
    screens: {
      "2xl": "1111px",
      xl: { max: "1110px" },
      lg: { max: "940px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      // lg: "768px",
      // "2xl": "1100px",
      // sm: "340px",
    },
    fontFamily: {
      kumbh: ["'Kumbh Sans', sans-serif"],
    },
  },

  plugins: [],
};
