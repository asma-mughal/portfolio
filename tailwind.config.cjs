/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        thBlue: "#35EEED",
        secondary: '#a21caf',
        background:"#222127"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },

  },
 
  plugins: [],
}