/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: '#1C1C1C',
        cream: '#E5DFD3',
        coral: '#FF6F61',
        light: {
          bg: '#FFFFFF',
          text: '#1C1C1C'
        }
      },
      fontFamily: {
        serif: ['EB Garamond', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      textColor: {
        DEFAULT: '#1C1C1C',
        dark: '#E5DFD3',
      }
    },
  },
  plugins: [],
};
