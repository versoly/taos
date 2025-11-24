## Installation

Install package
```shell
npm install @versoly/react-taos --save
```

Then add to your main `style.css` file:
```css
@custom-variant taos (&.taos-init:where(:not(.taos-animate)));

html.js :where([class*="taos:"]:not(.taos-init)) {
  visibility: hidden;
}

@source inline('!duration-[0ms] !delay-[0ms]');
```
