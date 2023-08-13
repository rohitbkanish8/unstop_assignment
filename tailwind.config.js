/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      'desktop': '1800px',
      '2xl': '1536px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px'
    },
    extend: {
      colors: {
        'background': '#F6F8FA',
        'blue1': '#0073E6',
        'blue2': '#1C4980',
        'blue3': '#E5F1FC'
      },
      width: {
        '94': '376px',
        '18': '72px'
      },
      height: {
        '18': '72px'
      }
    },
  },
  plugins: [require("daisyui")],
}

