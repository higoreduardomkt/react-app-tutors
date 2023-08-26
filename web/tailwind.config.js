/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        header: '#292841',
        primary: '#423F71',
        body: '#1C1B29',
      },
      screens: {
        mobile: { max: '768px' },
      },
      transitionProperty: {
        margin: 'margin',
        opacity: 'opacity',
        transform: 'transform',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar')],
}
