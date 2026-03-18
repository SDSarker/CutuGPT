/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gemini: {
          bg: '#131314',
          surface: '#1e1f20',
          hover: '#2b2d31',
          text: '#e3e3e3',
          blue: '#8ab4f8',
        },
      },
    },
  },
  plugins: [],
}