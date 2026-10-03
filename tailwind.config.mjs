/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        // El verde que usamos para acentos (igual al del logo Mauticá)
        accent: "#22A2F3",
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};
