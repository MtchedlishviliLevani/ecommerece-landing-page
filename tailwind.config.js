/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "0rem",
        center: "auto",
      },
      screens: {
        sm: "480px",
        md: "768px",
        xl: "940px",
        "2xl": "1110px",
      },
      fontFamily: {
        kumbh: ["'Kumbh Sans', sans-serif"],
      },
    },
  },
  plugins: [],
};
