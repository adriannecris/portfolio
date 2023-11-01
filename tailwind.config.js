/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        mono: ["Geist Mono", "monospace"],
        sans: ["Geist", "sans-serif"],
      },
    },
  },
  plugins: [],
}
