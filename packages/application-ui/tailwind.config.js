module.exports = {
  mode: 'jit',
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0f123f',
        secondary: "#ee786c"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
