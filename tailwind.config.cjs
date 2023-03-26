/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f0e17",
        secondary: "#ffffff",
        label: "#494949",
        paragraph: "#a7a9be",
        button: "#ff8906",
      },
    },
  },
  plugins: [],
};
