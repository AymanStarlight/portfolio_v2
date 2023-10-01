/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark' : "#0e0e0e",
        'primary-light' : "#e2dfd9",
        'secondary-dark' : "#5e5d5a",
        'secondary-light' : "#f6f0d9",
      },
      fontFamily: {
        'manrope' : ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}

