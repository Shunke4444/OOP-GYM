/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'bg-orange' : '#EC5800',
          'bg-orange-end' : '#9D5F3A',
          'amongus' : '#2C2F33',
          'light-blue' : '#ABDCE5',
          
      },
      fontFamily: {
        'jose' : [ "Josefin Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}