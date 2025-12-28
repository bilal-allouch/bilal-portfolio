/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base sombre (cohérent avec ton style)
        primary: "#0A0F1C",   // fond principal
        secondary: "#0B1B3A", // variante bleue sombre pour les dégradés
        accent: "#60A5FA",    // bleu accent (boutons / liens)
      },

      boxShadow: {
        // Ombre premium pour les cards
        glass: "0 20px 80px -35px rgba(0,0,0,0.9)",
      },

      backgroundImage: {
        // Si tu veux réutiliser ton fond facilement
        "hero-radial":
          "radial-gradient(circle_at_top, rgba(59,130,246,0.35), transparent 55%), radial-gradient(circle_at_bottom, rgba(14,165,233,0.25), transparent 55%), radial-gradient(circle_at_left, rgba(99,102,241,0.20), transparent 55%)",
      },
    },
  },
  plugins: [],
};
