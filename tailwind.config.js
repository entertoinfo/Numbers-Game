/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'primary': '#22223B',
          'secondary': '#9A8C98',
          'text': '#C9ADA7',
        },
        fontFamily: {
          'fixel-bold': 'fixel-bold',
          'fixel-normal': 'fixel-normal',
          'fixel-regular': 'fixel-regular'
        },
      },
    },
    plugins: [],
  }