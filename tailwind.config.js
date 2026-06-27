/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#7A1F1F",
          dark: "#5A1414",
          light: "#9A3030",
        },
        gold: {
          DEFAULT: "#D4AF37",
          muted: "#C89B3C",
          pale: "#E8CC7F",
        },
        cream: "#FFFDF8",
        ink: "#1F1F1F",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "foil-shimmer":
          "linear-gradient(110deg, #C89B3C 0%, #F2DA8C 25%, #D4AF37 50%, #F2DA8C 75%, #C89B3C 100%)",
        "maroon-gradient": "linear-gradient(135deg, #5A1414 0%, #7A1F1F 60%, #9A3030 100%)",
      },
      boxShadow: {
        luxury: "0 20px 60px -15px rgba(122, 31, 31, 0.35)",
        "luxury-lg": "0 30px 80px -20px rgba(122, 31, 31, 0.45)",
        gold: "0 0 0 1px rgba(212, 175, 55, 0.4), 0 10px 30px -10px rgba(212, 175, 55, 0.3)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
}
