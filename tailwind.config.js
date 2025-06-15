/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend:
    {
      fontFamily: {
        // 'poppins': ['Poppins', 'sans-serif'],
        'jkt-sans': ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        primary: {
          coklat: '#fcb426',
          hijau: '#5f6304',
          merah: '#b80a29',
          oren: '#ee9052',
        },
        background: {
          default: '#fcb426', // Abu muda
          green: '#D0F0C0', // Hijau
          merah: '#b80a29',
          oren: '#ee9052',
        },
        'brand-yellow': '#fcb426',
        'brand-green': '#5f6304',
        'brand-red': '#b80a29',
        'brand-orange': '#ee9052',
        'brand-light-green': '#D0F0C0'
      },
      animation: {
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
