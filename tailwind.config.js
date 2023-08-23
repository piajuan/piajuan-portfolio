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
        // hero: "linear-gradient(134deg, rgba(243, 243, 243, 0.80) 0%, rgba(243, 243, 243, 0.10) 100%)",
        // hero: "linear-gradient(133deg, rgba(255, 255, 255, 0.80) 0%, rgba(217, 217, 217, 0.00) 100%)",
        hero: "linear-gradient(to bottom right, rgba(240, 240, 250, 0.8), rgba(240, 240, 250, 1))",
      },
      boxShadow: {
        hero: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      },
      transitionTimingFunction: {
        'slow-in': 'cubic-bezier(.19,1,.22,1)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}