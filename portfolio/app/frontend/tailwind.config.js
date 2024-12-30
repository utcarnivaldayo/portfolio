/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mplus1p: ['"M PLUS 1p"', 'sans-serif'],
      },
      backgroundImage: {
        'top-image': "url('/src/assets/img/top.png')"
      }
    },
  },
  plugins: [],
}
