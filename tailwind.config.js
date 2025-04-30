/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        graal: {
          "gray-50": "#C9C9C9",
          "gray-100": "#FAFAFA",

          "blue-50": "#202FB1",
        },
      },
      screens: {
        md2: "900px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [],
};
