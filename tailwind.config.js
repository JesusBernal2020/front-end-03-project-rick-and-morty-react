/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#000000",
        "second-color": "#FBFBFB",
        "third-color": "#AEAEAE",
        "fourth-color": "#8EFF8B",
      },
    },
    fontFamily: {
      firaCode: ["Fira Code", "monospace"],
    },
  },
  plugins: [],
};
