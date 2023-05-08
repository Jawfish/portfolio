/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        atkinson: ['var(--font-atkinson)', 'sans-serif'],
        'atkinson-bold': ['var(--font-atkinson-bold)', 'sans-serif']
      }
    }
  },
  plugins: []
};
