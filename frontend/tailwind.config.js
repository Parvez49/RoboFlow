/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'coolgray-600':'#4b5563',
        'coolgray-200':'#e5e7eb',
        'purboflow-500':'#6706ce',
        'purboflow-400':'#8315f9',
        'purboflow-300':'#a351fb',
        'coolgray-400':'#9ca3af',
        'coolgray-900':'#111827',
        'coolgray-500':'#6b7280',
        'coolgray-50':'#f9fafb',
      },
      fontFamily: {
        'inter': ['inter','sans-serif'],
        'ubuntu-mono': ['"Ubuntu Mono"', 'sans-serif'],
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'scroll-left': 'scrollLeft 20s linear infinite',
        'scroll-right': 'scrollRight 20s linear infinite',
      },
    },
  },
  plugins: [],
}

