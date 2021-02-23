const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['NiveauGrotesk', ...fontFamily.sans],
      },
      colors: {
        ice: '#cbeef6',
        lake: '#0087a2',
        happy: '#259BD9',
        sea: '#009ce0',
        melon: '#e9ffe6',
        dirt: '#ba985f',
        grass: '#aec689',
        moss: '#1a431f',
      },
      backgroundImage: (theme) => ({
        hero: "url('/hero.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
