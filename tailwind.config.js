/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.js', './src/components/header.js', './src/pages/home.js','./src/pages/register.js'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      body: ['Gilroy'],
      foot: ['Gilroy-b']
    },
    extend: {},
  },
  plugins: [],
}
