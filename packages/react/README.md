## Getting started

TAOS React

## Installation

### Install React package

Install React package
```js
npm install @versoly/react-taos --save
```

### Install Tailwind plugin

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

Extend content to include transform in `tailwind.config.js`
```js
module.exports = {
  content: {
    transform: (content) => content.replace(/taos:/g, ''),
    relative: true,
  },
}
```