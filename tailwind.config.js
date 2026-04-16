/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#040404', // Deep black
        accent: {
          purple: '#9333ea',
          teal: '#14b8a6',
          gold: '#fbbf24'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cinematic: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
