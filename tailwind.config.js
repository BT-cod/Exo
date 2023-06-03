/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla','sans-serif']
      },
      borderRadius: {
        'lg': '0.5rem',
        'full': '9999px',
        'large': '20px',
      },
      colors: {
        Green: '#08A593',
      },
      boxShadow: {
        '3xl':'0px 20px 32px rgba(2, 1, 0, 0.42)'
      }
    },
  },
  plugins: [],
}