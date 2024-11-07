/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#060A1F', // RGB(6, 10, 31) em hexadecimal
      },
    },
  },
  plugins: [],
}

