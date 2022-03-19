// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');
var fontFun = '30';

module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      phablet: '540px', // => @media (min-width: 576px) { ... }
      tablet: '720px', // => @media (min-width: 768px) { ... }
      laptop: '960px', // => @media (min-width: 1100px) { ... }
      desktop: '1140px', // => @media (min-width: 1441px) { ... }
      //retina: '1600px', // => @media (min-width: 1600px) { ... }
    },
    extend: {
      colors: {
        blue: {
          primary: '#053f5b',
          secondary: '#0b6691',
        },
        yellow: {
          primary: '#ffcb08',
          secondary: '#ffcd2c',
        },
        gray: {
          custom: '#f0f0f0',
          alt: '#231f20',
        },
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        custom: '0 0 0 12px #fff, 2px 1px 6px 4px #fff',
      },
      fontSize: {
        magic: `calc(30px + (${fontFun} - 20) * ((100vw - 300px)/(576 - 300)))`,
        '5xl': '2.75rem',
      },
      gridTemplateColumns: {
        layout: '1fr auto 1fr',
      },
      width: {
        '416': '416px',
        '608.5': '608.5px',
        '512-5': '512.5px',
        '720-5': '720.5px',
        800: '800px',
      },
      minWidth: {
        275: '275px',
      },
      minHeight: {
        400: '400px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    textOpacity: false,
  },
};
