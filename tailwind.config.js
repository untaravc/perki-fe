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
        // ── Jogja Cardiology Update 2026 ────────────────────────────────────
        // Taken from the registration-fee poster: a deep royal navy and a
        // crimson red, joined left-to-right in the signature gradient pill,
        // over a warm cream ground with antique-gold ornament.

        // Crimson (poster pill right edge / "REGISTRATION FEE" heading)
        blue: {
          50: '#fdf3f3',
          100: '#fbe3e4',
          200: '#f8cccd',
          300: '#f2a5a8',
          400: '#e9737a',
          500: '#e01b24',
          600: '#c2151d',
          700: '#a5121f',
          800: '#87101a',
          900: '#6d0f16',
          950: '#3f0509'
        },
        // Royal navy (poster pill left edge / section labels)
        indigo: {
          50: '#eef2fa',
          100: '#d9e2f4',
          200: '#b7c8e9',
          300: '#8aa5d9',
          400: '#5a7cc4',
          500: '#3b5cab',
          600: '#2c468d',
          700: '#243872',
          800: '#1b2b66',
          900: '#152150',
          950: '#0b1230'
        },
        // Antique gold — logo ornament and rules
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
        // Cream / sand — poster ground
        cream: {
          50: '#fdfaf3',
          100: '#faf4e8',
          200: '#f3e9d6',
          300: '#e8d9bb',
          400: '#d9c294',
          500: '#c9a860'
        },
        // Aliases so legacy class names stay on-brand:
        // violet + cyan resolve to navy, teal + purple to crimson, which keeps
        // every existing `from-violet-… to-teal-…` gradient reading navy → crimson.
        violet: {
          50: '#eef2fa',
          100: '#d9e2f4',
          200: '#b7c8e9',
          300: '#8aa5d9',
          400: '#5a7cc4',
          500: '#3b5cab',
          600: '#2c468d',
          700: '#243872',
          800: '#1b2b66',
          900: '#152150',
          950: '#0b1230'
        },
        cyan: {
          50: '#eef2fa',
          100: '#d9e2f4',
          200: '#b7c8e9',
          300: '#8aa5d9',
          400: '#5a7cc4',
          500: '#3b5cab',
          600: '#2c468d',
          700: '#243872',
          800: '#1b2b66',
          900: '#152150',
          950: '#0b1230'
        },
        teal: {
          50: '#fdf3f3',
          100: '#fbe3e4',
          200: '#f8cccd',
          300: '#f2a5a8',
          400: '#e9737a',
          500: '#e01b24',
          600: '#c2151d',
          700: '#a5121f',
          800: '#87101a',
          900: '#6d0f16',
          950: '#3f0509'
        },
        purple: {
          50: '#fdf3f3',
          100: '#fbe3e4',
          200: '#f8cccd',
          300: '#f2a5a8',
          400: '#e9737a',
          500: '#e01b24',
          600: '#c2151d',
          700: '#a5121f',
          800: '#87101a',
          900: '#6d0f16',
          950: '#3f0509'
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
