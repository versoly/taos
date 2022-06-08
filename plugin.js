const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase }) {
    addBase({
        ['html.js :where([class*="taos:"]:not(.taos-init))']: {
            visibility: 'hidden'
        }
    })
})
