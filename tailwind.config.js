/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      colors:{
        'red-rgb-opacity': 'rgba(0, 207, 119, 0.85)',
        'red-rgb': 'rgba(0, 207, 119, 1)',
        'black-opacity': 'rgba(0, 0, 0, 1)',
        'black-opacity-06': 'rgba(0, 0, 0, 0.6)',
        'pink-rgb': 'rgba(0, 207, 119, 1)',
        'white-rgb-02':'rgba(255, 255, 255, 0.2)',
        'black-rgb-01':'rgba(16, 15, 18, 0.1)',
        'input-opacity':'rgba(217,217,217, 0.2)',
        'white-rgb-025':'rgba(255, 255, 255, 0.25)',
        'white-rgb-008':'rgba(255, 255, 255, 0.08)'
      }
    },
  },
  plugins: [],
}

