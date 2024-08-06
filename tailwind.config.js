/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        main_orange: "#f77f00",
        main_red: "#d62828",
        text_color: "#003049",
        sec_black: "#1a1a1a",
        bluebg: "#1d2d44",
        whitebg: "#edede9",

      },
    },
  },
  plugins: [],
}

