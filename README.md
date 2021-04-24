# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
-

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![desktop-preview](./desktop-preview.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS
- Vanilla JS
- Webpack

### What I learned

With the challenge I was able to reinforce my knowledge about webpack is Vanilla JavaScript.

```webpack

  module.exports = (env) => {
    const config = require(`./config/webpack.${env.mode}`);
    return config;
  };

```

```postcss.config.js

  module.exports = {
    plugins: [
      require("postcss-preset-env")({
        browsers: ["> 1%", "last 2 versions"],
        autoprefixer: {
          grid: "autoplace",
        },
      }),
    ],
  };

```

```js
const mySVG64 = window.btoa(mySVG);
class BgHeader {
  insertBgHeader() {
    const bgHeader = document.createElement("div");
    bgHeader.className = "bgHeader";
    document.querySelector(".header").prepend(bgHeader);
    bgHeader.style.backgroundImage =
      "url('data:image/svg+xml;base64," + mySVG64 + "')";
  }
}

export default BgHeader;
```

### Continued development

In this project, just as practice I used some Javascript classes to insert images (as in the example above), in future projects I do not intend to use this approach.

### Useful resources

- [robinwieruch.de](https://www.robinwieruch.de/webpack-postcss) - This site is a good tutorial for beginners on how to put autoprefixer in your css by using the webpack.

## Author

- Website - [personal website](https://bit.ly/artur-da-silva-rezende)
- Frontend Mentor - [@ArturdaSilvaRezende](https://www.frontendmentor.io/profile/ArturdaSilvaRezende)
