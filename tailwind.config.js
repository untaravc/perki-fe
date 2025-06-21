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
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out 0.2s both',
        'fade-in-right': 'fadeInRight 0.8s ease-out 0.4s both',
        'float': 'float 6s ease-in-out infinite',
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
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
