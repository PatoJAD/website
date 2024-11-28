/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../content/*.md", "./themes/tailwind/**/*.{html,js,css}"],
  theme: {
    extend: {},
  },
  darkMode: ['selector', '[data-mode="dark"]'],
  plugins: [],
}

