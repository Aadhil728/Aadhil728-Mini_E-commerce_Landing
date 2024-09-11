/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#F42C37",
        secondary: "#F42C37",
        brandYellow: "#FDC62E",
        brandGreen: "#2DCC6F",
        brandBlue: "#1376F4",
        brandWhite: "#EEEEEE",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      fontFamily: {
        ralwayFont: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
