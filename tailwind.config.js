/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1750px",
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
        BaskervvilleSC: ["Baskervville SC", "serif"],
      },
      colors: {
        "custom-background": "#06041f",
        purpleBlue: "#6152ff",
      },
    },
  },
  plugins: [],
};
