/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        '2xs': [{ max: '319px' }, '2xs'],
        'xs': [{ min: '320px', max: '480px' }, 'xs'],
        'sm': [{ min: '481px', max: '768px' }, 'sm'],
        'md': [{ min: '769px', max: '1024px' }, 'md'],
        'lg': [{ min: '1025px', max: '1200px' }, 'lg'],
        'xl': [{ min: '1201px', max: '1279px' }, 'xl'],
        '2xl': [{ min: '1280px' }, '2xl'],
      },
    },
  },
  plugins: [],
};
