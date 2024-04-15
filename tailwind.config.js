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
      screens: {
        "-2xl": { max: "1535px" },
        "-xl": { max: "1279px" },
        "-lg": { max: "1023px" },
        "-md": { max: "767px" },
        "-sm": { max: "639px" },
      },
    },
  },
  plugins: [],
};
