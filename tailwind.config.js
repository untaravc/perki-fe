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
      colors: {
        // Poster palette — Jogja Cardiology Update 2026
        // Primary: deep maroon (mapped onto `blue`)
        blue: {
          50: '#fbf4f4',
          100: '#f7e7e8',
          200: '#efd0d2',
          300: '#e2adb0',
          400: '#cf8085',
          500: '#bc5860',
          600: '#a73c44',
          700: '#9b1c22',
          800: '#7f1f28',
          900: '#641920',
          950: '#3d0e13'
        },
        // Secondary: navy blue (mapped onto `indigo`) — poster "CARDIOLOGY UPDATE"
        indigo: {
          50: '#f1f6fb',
          100: '#dde9f4',
          200: '#c0d6ea',
          300: '#93b7d7',
          400: '#5f8fbd',
          500: '#3d6da0',
          600: '#2d5583',
          700: '#26466a',
          800: '#1e3a5f',
          900: '#172c48',
          950: '#101d30'
        },
        // Antique gold (mapped onto `yellow` and `amber`) — poster ornaments & "JOGJA"
        yellow: {
          50: '#fbf7eb',
          100: '#f5ead0',
          200: '#ecd7a0',
          300: '#e0bd6a',
          400: '#d4a743',
          500: '#c69a3a',
          600: '#a97f2f',
          700: '#866125',
          800: '#6e4f24',
          900: '#5c4222',
          950: '#362512'
        },
        amber: {
          50: '#fbf7eb',
          100: '#f5ead0',
          200: '#ecd7a0',
          300: '#e0bd6a',
          400: '#d4a743',
          500: '#c69a3a',
          600: '#a97f2f',
          700: '#866125',
          800: '#6e4f24',
          900: '#5c4222',
          950: '#362512'
        },
        // Cream / sand — poster background
        cream: {
          50: '#fdfbf6',
          100: '#f8f2e6',
          200: '#f1e8d4',
          300: '#e6d7b8',
          400: '#d8c090',
          500: '#c9a860'
        },
        // Warm rose tones that harmonize with maroon (purple/cyan aliases)
        purple: {
          50: '#fdf8f8',
          100: '#f7e8e8',
          200: '#edd2d3',
          300: '#ddb0b2',
          400: '#c9888c',
          500: '#b16469',
          600: '#9d4c51',
          700: '#8a3b40',
          800: '#742f35',
          900: '#5f262b',
          950: '#391518'
        },
        cyan: {
          50: '#faf7f8',
          100: '#f3ecee',
          200: '#e8dadd',
          300: '#d9bcc1',
          400: '#c89ca2',
          500: '#b47b83',
          600: '#a1616a',
          700: '#8f4b54',
          800: '#763e45',
          900: '#613238',
          950: '#3b1d22'
        }
      },
      fontFamily: {
        // 'poppins': ['Poppins', 'sans-serif'],
        'jkt-sans': ['Plus Jakarta Sans', 'sans-serif']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
