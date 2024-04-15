/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      philosopher: ["Philosopher", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
    },
    extend: {
      colors: {
        staile: "#3d4455",
      },
    },
  },
  plugins: [],
};
