/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0F0817",
        plum: "#1B1029",
        surface: "#221534",
        surface2: "#2B1B42",
        orchid: "#B24CE0",
        orchid2: "#8B2FC9",
        rose: "#F0549A",
        mist: "#F3EAFB",
        fog: "#A997C2",
        line: "#3A2752",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "orchid-rose": "linear-gradient(135deg, #B24CE0 0%, #F0549A 100%)",
      },
    },
  },
  plugins: [],
};
