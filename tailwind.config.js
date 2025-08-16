/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          light: "#60a5fa", // light blue
          DEFAULT: "#2563eb", // main blue
          dark: "#1e40af",   // deep blue
        },
      },
    },
  },
  darkMode: "class", // enable dark mode
  plugins: [],
};
