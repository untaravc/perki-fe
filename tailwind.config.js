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
          red: '#da3931',
          blue: '#3278b3',
        },
        background: {
          default: '#f9f7f4',    // Off-white/cream
          light: '#f0f2f5',      // Light grey
          beige: '#f5f2ea',      // Soft beige
          lightBlue: '#edf5fb',  // Very light blue
          lightRed: '#fdf0ef',   // Very light red
          mint: '#eaf8f5',       // Light mint
          sand: '#f5f0e6',       // Soft sand
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
