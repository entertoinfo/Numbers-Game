/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#5D5D81",
        secondary: "#3B3355",
        text: "#BFCDE0",
      },
      fontFamily: {
        "fixel-bold": "fixel-bold",
        "fixel-normal": "fixel-normal",
        "fixel-regular": "fixel-regular",
      },
      fontSize: {
        tableNumbers: [
          "1.5rem",
          {
            lineHeight: "1rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
      },
      rotateX: {
        '180': '40deg',
      }
    },
    plugins: [],
  },
};
