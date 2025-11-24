module.exports = {
  theme: {
    // ...
  },
  plugins: [
    // ...
    require("taos/plugin"),
  ],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
