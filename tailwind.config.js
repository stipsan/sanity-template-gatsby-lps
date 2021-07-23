// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');
var fontFun = '30';

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'phablet': '576px',
      // => @media (min-width: 576px) { ... }
      'tablet': '768px',
      // => @media (min-width: 768px) { ... }
      'laptop': '1025px',
      // => @media (min-width: 992px) { ... }
      'desktop': '1441px',
      // => @media (min-width: 1200px) { ... }
      'retina': '1600px'
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      // backgroundImage: theme => ({
      //   'hero': "url('img/attic-tech.jpg')"
      // }),
      colors: {
        'blue': {
          'primary': '#053f5b',
          'secondary': '#0b6691'
        },
        'yellow': {
          'primary': '#ffcb08',
          'secondary': '#ffcd2c'
        },
        'gray': {
          'custom': '#f0f0f0',
        },
        'black': {
          'custom': '#231f20'
        }
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'custom': '0 0 0 12px #fff, 2px 1px 6px 4px #fff'
      },
      fontSize: {
        'magic': `calc(30px + (${fontFun} - 20) * ((100vw - 300px)/(576 - 300)))`,
      },
      gridTemplateColumns: {
        'layout': '1fr auto 1fr',
      },
      width: {
        '512-5': '512.5px',
        '720-5': '720.5px'
      },
      minHeight: {
        '400': '400px',
       }
    },
  },
  variants: {
      // Defaults are ['responsive', 'hover', 'focus']
      //backgroundColor: ({ after }) => after(['before', 'after']),
      // Output: ['responsive', 'hover', 'focus', 'before', 'after']
    extend: {},
  },
  plugins: [
   require('@tailwindcss/forms'),
   require('tailwind-pseudo-elements'),
   require('tailwindcss-multi-column')()
  ],
  corePlugins: {
    textOpacity: false,
  }
}