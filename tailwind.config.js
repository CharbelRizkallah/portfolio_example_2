/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'cOne' : '#facc15',
        'cTwo' : '#e5e7eb',
        'cThree' : '#d1d5db',
        'cFour' : '#6b7280',
        'cFive' : '#4b5563'
      },
      dropShadow: {
        '2xl' : '0 25px 25px rgb(0 0 0 / 0.50)',
        '3xl' : '0 35px 35px rgba(0,0,0,0.75)'
      }
  
    },
  },
  plugins: [],
}
