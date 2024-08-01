/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-colour': '#FFF7F1',
        'primary-colour': '#FFE4C9',
        'secondary-colour': '#E78895',
        'tertiary-colour': '#E35166',
      },
      body: {
        'background-colour': '#FFF7F1',
      },
      select: {
        'background-colour': '#FFF7F1',
      },
    }
  },
  plugins: [],
}