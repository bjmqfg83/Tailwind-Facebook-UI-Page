module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.js'],
    safelist: []
  },
  mode: 'jit',
  darkMode: 'false', // or 'media'(由系統設定決定(電腦主題)) or 'class' or false
  theme: {
    extend: {
      screens: {
      },
      colors: {

      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
  ],
}
