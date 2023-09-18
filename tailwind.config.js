/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'primary': '#5D5D81',
          'secondary': '#3B3355',
          'text': '#BFCDE0',
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