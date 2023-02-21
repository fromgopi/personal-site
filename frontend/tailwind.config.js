/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: [
  //   './src/**/*.js'
  // ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Open Sans', 'sans-serif'],
        header: ['Open Sans', 'sans-serif'],
        footer: ['Open Sans', 'sans-serif'],
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1440px'
    }
  },
  plugins: [],
}


