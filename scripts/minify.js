const { minify } = require('terser');
const fs = require('fs');
const path = require('path');

const config = {
  compress: {
    dead_code: true,
    drop_console: false,
    drop_debugger: true,
    keep_classnames: false,
    keep_fargs: true,
    keep_fnames: false,
    keep_infinity: false
  },
  mangle: {
    eval: false,
    keep_classnames: false,
    keep_fnames: false,
    toplevel: false,
    safari10: false
  },
  module: false,
  sourceMap: {
    filename: 'taos.js',
    url: 'taos.js.map'
  },
  output: {
    comments: 'some'
  }
};

const minfiyFile = async () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../src/js/taos.js'), 'utf8');
  const minified = await minify(code, config);
  fs.writeFileSync('dist/taos.js', minified.code);
  fs.writeFileSync('dist/taos.js.map', minified.map);
}

minfiyFile()
