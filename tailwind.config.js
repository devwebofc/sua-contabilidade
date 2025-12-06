/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#009FE3',
          dark: '#141414',
          darker: '#0a0a0a',
          gray: '#2a2a2a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #141414 0%, #0f2630 40%, #009FE3 100%)',
      }
    },
  },
  plugins: [],
}