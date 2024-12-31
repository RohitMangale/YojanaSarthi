/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorText: "#e8e3ff",
        blackText: "#181111",
        background: "#f5f5f5",
        primaryColor: "#6B4DEE",
        white: "#fff",  
        black: "#000",
      },
    },
  },
  plugins: [],
}

