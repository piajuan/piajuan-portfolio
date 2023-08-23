/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Rhiffiral", "serif"],
        secondary: ["SFProDisplay", "sans-serif"],
        tertiary: ["SFProDisplay-Bold", "sans-serif"],
      },
      colors: {
        dark: {
          100: "#26292B",
          200: "#1D2021",
          300: "#161819",
        }
      },
      backgroundImage: {
        hero: "linear-gradient(134deg, rgba(243, 243, 243, 0.80) 0%, rgba(243, 243, 243, 0.10) 100%)",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}