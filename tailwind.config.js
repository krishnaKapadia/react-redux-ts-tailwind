const defaultTheme = require('tailwindcss/defaultTheme')
const windmill = require('@windmill/react-ui/config')

module.exports = windmill({
  mode: 'jit',
  darkMode: 'class',
  purge: ['src/**/*.{tsx, ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
})