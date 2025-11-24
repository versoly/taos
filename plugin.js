const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, addVariant }) {
  addBase({
    ['html.js :where([class*="taos:"]:not(.taos-init))']: {
      visibility: "hidden",
    },
  });

  // not taos-animate
  addVariant("taos", "&.taos-init:where(:not(.taos-animate))");
});
