/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'transparent': '#00FFFFFF',
      'aa': '#F2F2F2',
      'a': '#cbcbc4ff',
      'b': '#57a8b7',
      'c': '#3a79bd',
      'd': '#3c6f4e',
      'e': '#785634',
      'f': '#646d75',
      'g': '#34343b',
      'h': '#272a32',
      'c-hover': '#3a79bdd1',
      'd-hover': '#3c6f4ebf',
      'error': '#ff3838',
      'pro': '#eac117',
      'pers': '#16A34A',
      'per': '#C2410C',
      'oxford': '#002057',
      'oxf-hover': '#001a48',
      'heat': '#ff7b00',
    },
    extend: {
      screens: {
        'xs': '350px',
        'sm': '640px',
        'md': '768px',
        'mdlg': '965px',
        'lg': '1024px',
        'lgr': '1140px',
        'xl': '1280px',
        'xxl': '1400px',
      },
      width: {
        'form': '500px',
        'badge': '332px',
      },
      height: {
        'form': '500px',
        'form-md': '400px',
        'contents': '450px',
      },
      margin: {
        'm-auto': '10px, auto',
      },
      grayscale: ['hover', 'focus'],
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}

