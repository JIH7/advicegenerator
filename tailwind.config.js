/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    minHeight: {
      '1/3': '33%',
      '2/5': '40%',
      '1/2': '50%',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightCyan: 'hsl(193, 38%, 86%)',
        neonGreen: 'hsl(150, 100%, 66%)',

        grayishBlue: 'hsl(217, 19%, 38%)',
        darkGrayishBlue: 'hsl(217, 19%, 24%)',
        darkBlue: 'hsl(218, 23%, 16%)',
      },
      letterSpacing: {
        widester: '.32em',
      },
      fontSize: {
        quotesize: ['28px', '34px'],
      },
    },
  },
  plugins: [],
}

