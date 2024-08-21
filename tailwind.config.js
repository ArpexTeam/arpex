/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      colors:{
        'red-rgb-opacity': 'rgba(71, 20, 30, 0.85)',
        'red-rgb': 'rgba(71, 20, 30, 1)',
        'black-opacity': 'rgba(0, 0, 0, 1)',
        'black-opacity-06': 'rgba(0, 0, 0, 0.6)',
        'pink-rgb': 'rgba(237, 66, 100, 1)',
        'white-rgb-02':'rgba(255, 255, 255, 0.2)',
        'black-rgb-01':'rgba(16, 15, 18, 0.1)',
        'input-opacity':'rgba(217,217,217, 0.2)'
      }
    },
  },
  plugins: [],
}

