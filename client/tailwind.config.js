/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['media'],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}

