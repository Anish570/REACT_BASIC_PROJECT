/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:"#323334",
        yellow:"#FFEAAE",
        "dark-yellow":"#EEAB37",
        orange:"#FFA50E"

      }
    },
  },
  plugins: [],
}

