module.exports = {
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: {
    transform: (content) => content.replace(/taos:/g, ''),
  },
  theme: {
    extend: {
      // ...
    },
  },
  plugins: [
    require('taos/plugin')
  ],
}
