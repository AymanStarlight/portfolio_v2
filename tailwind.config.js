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
        'secondary-dark' : "#454543",
        'secondary-light' : "#f6f0d9",
      },
      fontFamily: {
        'manrope' : ['Manrope', 'sans-serif'],
        'damn' : ['Damn', 'sans-serif']
      },
      transitionTimingFunction: {
        'south': 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
      }
    },
  },
  plugins: [],
}

