/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}", // ← YOU MISSED THIS
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1C3D",
        gold: "#F5B300",
        light: "#F8F8F8",
      },
    },
  },
  plugins: [],
};