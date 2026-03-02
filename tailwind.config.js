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
        blue: {
          50: '#fcf7f8',
          100: '#f7edef',
          200: '#efd8da',
          300: '#e2b8bb',
          400: '#cf8b90',
          500: '#bc646a',
          600: '#a74a51',
          700: '#97262e',
          800: '#7f1f28',
          900: '#641920',
          950: '#3d0e13'
        },
        indigo: {
          50: '#f2f6fb',
          100: '#dbe8f6',
          200: '#bfd6ee',
          300: '#95bcdf',
          400: '#669cc9',
          500: '#447dad',
          600: '#2f6594',
          700: '#1f537d',
          800: '#174364',
          900: '#0f4d89',
          950: '#0a2d4f'
        },
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
