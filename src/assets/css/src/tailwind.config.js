/*
npx tailwindcss-cli@latest build ./src/assets/css/src/tailwind.css -c ./src/assets/css/src/tailwind.config.js -o ./src/assets/css/dist/tailwind.css
*/

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'header': '#323333',

     }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
