/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Blue
        accent: "#F59E0B",  // Amber/Gold
      },
      fontFamily: {
        sans: ["'Segoe UI'", "sans-serif"],
        fancy: ["var(--font-playfair)"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}
