/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b1020",
        secondary: "#111a33",
        accent: "#38bdf8",
        accent2: "#60a5fa",
      },
    },
  },
  plugins: [],
};
