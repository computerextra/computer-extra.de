/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "home-bounce": "home-bounce 10s ease-in-out infinite",
      },
      keyframes: {
        "home-bounce": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
