module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#072142",
        customViolet: "#8c2b7a",
        customRose: "#ff4d5a",
        bgBlue: "#020b16",
        bgBlue2: "#020b20",
        bgBlue3: "#020b30",
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
