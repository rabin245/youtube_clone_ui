/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: "#181818",
        darkSecondaryBackground: "#202020",
        darkPrimaryText: "#ffffff",
        darkSecondaryText: "#aaaaaa",
        darkHover: "#373737",
        lightBackground: "#f9f9f9",
        lightSecondaryBackground: "#ffffff",
        lightPrimaryText: "#000000",
        lightSecondaryText: "#606060",
        lightHover: "#e6e6e6",
      },
    },
  },
  plugins: [],
};
