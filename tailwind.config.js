/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <--- ESTO ES VITAL PARA QUE FUNCIONE
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
