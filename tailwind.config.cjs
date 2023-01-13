/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFFFFF",
        "primary-300": "#04ECFF",
        "primary-400": "#1E40AF",
        "primary-500": "#04ECFF",
        "primary-600": "#02C2F5",
        "primary-700": "#04939b",
        "secundary-400": "#FFCD58",
        "secundary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFCC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        evolvetext: "url(./assets/EvolveText.png')",
        abstractwaves: "url(./assets/AbstractWaves.png')",
        sparkles: "url(./assets/Sparkles.png')",
        circles: "url(./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}
