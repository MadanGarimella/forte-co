export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1C2D",      // Deep Navy
        accent: "#C6A75E",       // Muted Gold
        light: "#F5F5F5",
        muted: "#9CA3AF",
      },
      fontFamily: {
        heading: ["Georgia", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
