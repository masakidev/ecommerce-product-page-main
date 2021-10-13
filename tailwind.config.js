module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
      },
      keyframes: {
        "fade-to-right": {
          "0%": {
            transform: "translateX(-100px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-to-right": "fade-to-right 1.4s ease",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
