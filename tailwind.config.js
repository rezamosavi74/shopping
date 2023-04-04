/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'reed1': '#efbfc6',
      'reed2': '#c22828',
      'reed3': '#8a0f0f',
      'reed4': '#3c0303',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    }
  },
  plugins: [],
}

