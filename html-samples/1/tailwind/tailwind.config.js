// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

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
      'laptop': '992px',
      // => @media (min-width: 992px) { ... }
      'desktop': '1200px',
      // => @media (min-width: 1200px) { ... }
      //'retina': '1920px'
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      backgroundImage: theme => ({
        'hero': "url('img/attic-tech.jpg')"
      }),
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
        } 
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
      // Defaults are ['responsive', 'hover', 'focus']
      backgroundColor: ({ after }) => after(['before', 'after']),
      // Output: ['responsive', 'hover', 'focus', 'before', 'after']
    extend: {},
  },
  plugins: [
   require('@tailwindcss/forms'),
   require('tailwind-pseudo-elements'),
  ],
  corePlugins: {
    textOpacity: false,
  }
}



// fonts
//   FontAwesome5Pro-Solid
//   FontAwesome5ProSolid
//   MyriadPro-Regular
//   Poppins-Black
//   Poppins-Bold
//   Poppins-ExtraBold
//   Poppins-Medium
//   Poppins-Regular
//   Poppins-SemiBold
