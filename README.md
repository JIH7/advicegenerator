# Advice generator app

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./images/screenshot.jpg)


## My process

### Built with

- Semantic HTML5 markup
- [TailwindCSS](https://tailwindcss.com/)

### What I learned

While working on this, the power of extending TailwindCSS's config file with custom properties really clicked for me. I may have gone slightly overboard, but it was a great learning exercise.

```js
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
```

I'll need to take another look to see if this is bloated for my liking or a fine amount of use.

## Author

- Website - [Jeremy Helsel](https://www.jeremyhelsel.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

