/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImage:
          "url('https://www.gold.ac.uk/media/images-by-section/homepage-hero/Students-in-the-library.jpg')",
      },
      colors: {
        whiteSmoke: "#f6f7f7",
        otherBlue: "#3771c1",
        footerGray: "#333333",
        footerText: "#bec4c8",
      },
    },
  },
  plugins: [],
};
