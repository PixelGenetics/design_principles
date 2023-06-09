/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern':"url('./src/assets/cross-grid.svg')"
      },
      fontFamily:{
        'poppins': ['poppins', 'sans-serif'],
        'franklin': ['Libre Franklin', 'sans-serif'],
        'lato': ['Lato', 'sans-serif']
      },
    },
  },
  plugins: [],
}

