const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['Roboto', 'sans-sserif', ...defaultTheme.fontFamily.sans],
      fjalla: ['Fjalla One', 'sans-sserif', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
