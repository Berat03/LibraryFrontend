/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'uni-purple': 'rgb(146,53,180)', // Example RGB
        'uni-purple-lighter': 'rgb(158,85,185)',
      },},
  },
  plugins: [require('@tailwindcss/forms'),],
}