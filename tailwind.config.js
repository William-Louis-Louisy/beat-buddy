/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#00c5cc",
        back: "#050011",
        element: "#292434",
        txt: "#c3d7d8",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
