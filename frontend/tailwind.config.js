/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'coolgray-600':'#4b5563',
      },
      fontFamily: {
        'inter': ['inter','sans-serif'],
      }
    },
  },
  plugins: [],
}

