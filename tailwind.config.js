/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      sfpro: ["SF-pro-rounded", "sans-serif"],
      sfprodisplay: ["SF-pro-regular", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0C1421",
      }
    },
  },
  plugins: [],
}

