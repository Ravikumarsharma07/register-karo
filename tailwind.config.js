/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "dark-blue":"#1C4670"
      },
      colors:{
        "dark-blue":"#1C4670",
      },
      gridTemplateColumns:{
        "custom":"1.7fr 1fr 1fr",
      }
    },
  },
  plugins: [],
}

