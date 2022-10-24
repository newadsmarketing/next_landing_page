const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    colors: {
        orange: colors.orange,
        gray: colors.gray,
        blue: colors.slate,
        white: colors.white,
      },
      screens: {
          'sm': '300px',
          'lg': '700px'
        },
      extend: {
        backgroundImage:{
         'hero': "url('../src/assets/hero.png')",
         'action': "url('../src/assets/action.png')",
        }
      },
  },
  variants: {
    extend: {
      translate: ['hover'],
    },
  },
  plugins: [],
}