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
          coklat: '#654104',
          hijau: '#5f6304',
          merah: '#b44241',
          oren: '#ee9052',
        },
        background: {
          default: '#F2F2F2', // Abu muda
          green: '#D0F0C0', // Hijau
          merah: '#b44241',
          oren: '#ee9052',
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
