const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto','sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl')},
        'h2': { fontSize: theme('fontSize.2xl')},
        'h3': { fontSize: theme('fontSize.xl')},
      })
    })
  ]
}

