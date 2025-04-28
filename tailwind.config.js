/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md2: "900px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [],
};
