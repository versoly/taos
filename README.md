<div align="">
  <a href="https://versoly.com/taos" align=""><h1>TAOS - Tailwind CSS Animation on Scroll</h1></a>
  <p>A simple and small (600 bytes) library to help animate elements while scrolling using responsive Tailwind CSS utility classes.</p>

  <p>
      <a href="https://discord.versoly.com"><img src="https://flat.badgen.net/badge/icon/discord?icon=discord&label" alt="Discord"></a>
      <a href="https://github.com/versoly/taos/blob/main/LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue" alt="Licenese"></a>
      <a href="https://unpkg.com/taos@1.0.5/dist/taos.js">
          <img src="https://flat.badgen.net/badgesize/brotli/https://unpkg.com/taos@1.0.5/dist/taos.js?icon=jsdelivr&label&color=blue&cache=10800" alt="brotli bundle size">
      </a>
  </p>
</div>

------

## Demo

To view 20+ examples of TAOS in action go to [versoly.com/taos](https://versoly.com/taos).


## Getting started

TAOS can be included as a plugin into an existing Tailwind CSS project and will allow you to add responsive Tailwind CSS utility classes for animation on scroll.

## Installation

### Install Tailwind Plugin


Install TAOS package
```js
npm install taos --save
```

Add plugin in `tailwind.config.js`
```js
module.exports = {
  plugins: [
    require('taos/plugin')
  ],
}

```

Add safelist utilties `tailwind.config.js`
```js
module.exports = {
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}
```

Add content transform in `tailwind.config.js`
```js
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/*.{html,js}'],
  },
}
```

### Add JavaScript scripts

Add script in `<head>`
```html
<script>document.documentElement.classList.add('js')</script>
```

Add the CDN script or download and paste right before the closing `</body>` tag
```html
<script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>
```

## TAOS Frequently Asked Questions

### Does TAOS work with React/Vue/JS frameworks

TAOS does not currently work with JS frameworks as they rerender, disable certain event listeners.

Support for them is on the road map.


## 💡 Inspiration


- [AOS](https://github.com/michalsnik/aos): is a great library and works by using custom classes such as aos-animate to animate elements.
- [Tailwind](https://tailwindcss.com/): created an easy to use utility library that is easily extendable and flexible. Their variant and just in time compiler changed the game for developers.


## Community

If you need help or just want to discuss about the library join the community on Github:

[Discuss about Versoly on GitHub](https://github.com/versoly/taos/discussions)

For casual chatting with others using the library:

[Join the Versoly Discord Server](https://discord.versoly.com)
