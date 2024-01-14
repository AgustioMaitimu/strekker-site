/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'genericFont': 'Josefin Sans',
        'logoFont': 'Train One',
        'pistolFont': 'Ranga',
        'detailsFont': 'Figtree'
      },
      backgroundImage: {
        'model-y': "url('/src/assets/model-y.jpg')",
        'model-x': "url('/src/assets/model-x.png')",
        'model-3': "url('/src/assets/model-3.jpg')",
        'model-s': "url('/src/assets/model-s.png')",
      },
      screens: {
        'md': '1200px',
        '2xl': '1440px'
      }
    },
  },
  plugins: [],
};

