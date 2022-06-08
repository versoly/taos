<div align="">
  <a href="https://versoly.com/taos" >
    <img alt="TAOS - Tailwind CSS animation on scroll library" width="50" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/5a71ada3-f5e4-4de1-bda2-75396a148365.png">
  </a>
  <a href="https://versoly.com/taos" align=""><h1>Versoly UI</h1></a>
  <p>Tailwind CSS components library based on Bootstrap, build websites without reinventing the wheel.</p>

  <p>
      <a href="https://discord.versoly.com"><img src="https://flat.badgen.net/badge/icon/discord?icon=discord&label" alt="Discord"></a>
      <a href="https://github.com/versoly/taos/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="Licenese"></a>
      <a href="https://bundlephobia.com/result?p=taos">
          <img src="https://flat.badgen.net/bundlephobia/minzip/taos?icon=packagephobia&label&color=blue&cache=10800" alt="gzip bundle size">
      </a>
      <a href="https://unpkg.com/taos@1.0.6/dist/taos.js">
          <img src="https://flat.badgen.net/badgesize/brotli/https://unpkg.com/taos@1.0.6/dist/taos.js?icon=jsdelivr&label&color=blue&cache=10800" alt="brotli bundle size">
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
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}
```

Add content transform in `tailwind.config.js`
```js
module.exports = {
  content: {
    transform: (content) => content.replace(/taos:/g, ''),
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
<script src="https://unpkg.com/taos@1.0.0/dist/taos.js"></script>
```

## 💡 Inspiration


- [AOS](https://github.com/michalsnik/aos): is a great library and works by using custom classes such as aos-animate to animate elements.
- [Tailwind](https://tailwindcss.com/): created an easy to use utility library that is easily extendable and flexible. Their variant and just in time compiler changed the game for developers.


## Community

If you need help or just want to discuss about the library join the community on Github:

[Discuss about Versoly on GitHub](https://github.com/versoly/taos/discussions)

For casual chatting with others using the library:

[Join the Versoly Discord Server](https://discord.versoly.com)
