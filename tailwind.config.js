/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImage:
          "url('https://www.gold.ac.uk/media/images-by-section/homepage-hero/Students-in-the-library.jpg')",
      },
    },
  },
  plugins: [],
};
