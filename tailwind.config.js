/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    "colors": {
      "light-text": "#060C0F",
      "light-background": "#F8FBFC",
      "light-primary": "#A7CFDD",
      "light-secondary": "#D2E8EE",
      "light-accent": "#2784A5",
      "dark-text": "#F8FBFC",
      "dark-background": "#060C0F",
      "dark-primary": "#A7CFDD",
      "dark-secondary": "#0B191D",
      "dark-accent": "#83C9E2",
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

