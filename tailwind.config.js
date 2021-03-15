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
        mound: '#4A260E',
        grass: '#aec689',
        overgrownGrass: '#99BD7B',
        moss: '#1a431f',
        wine: '#561E42',
      },
      width: {
        smallest: '1px',
        bigger: '440px',
      },
      minWidth: {
        full: '100%',
      },
      screens: {
        macbook: '2500px',
      },

      inset: {
        '1/10': '10%',
        '3/20': '15%',
        '1/5': '20%',
      },

      animation: {
        cloudOne: 'glide 11s alternate-reverse infinite linear',
        cloudTwo: 'glide 9s alternate-reverse infinite linear',
        cloudThree: 'glide 12s alternate-reverse infinite linear',
        hooverCloud: 'hoovering 18s alternate-reverse infinite linear',
        test: 'glide 1s alternate-reverse infinite linear',
      },

      keyframes: {
        hoovering: {
          '0%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(1% ,-1%)' },
          '20%': { transform: 'translate(3% ,-2%)' },
          '30%': { transform: 'translate(4% ,-3%)' },
          '40%': { transform: 'translate(5% ,-4%)' },
          '50%': { transform: 'translate(6% ,-4%)' },
          '60%': { transform: 'translate(5% ,-3%)' },
          '70%': { transform: 'translate(4% ,-3%)' },
          '80%': { transform: 'translate(3% ,-2%)' },
          '90%': { transform: 'translate(1% ,-1%)' },
          '100%': { transform: 'translate(0% ,-0%)' },
        },

        glide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-5%)' },
        },
      },
    },
  },
  variants: {
    extend: {
      transform: ['group-focus'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
