const { SourceMapDevToolPlugin } = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

const terserOptions = {
  "compress": {
    "dead_code": true,
    "drop_console": false,
    "drop_debugger": true,
    "keep_classnames": false,
    "keep_fargs": true,
    "keep_fnames": false,
    "keep_infinity": false
  },
  "mangle": {
    "eval": false,
    "keep_classnames": false,
    "keep_fnames": false,
    "toplevel": false,
    "safari10": false
  },
  "module": false,
  "sourceMap": {
    "filename": "taos.js",
    "url": "taos.js.map"
  },
  "output": {
    "comments": "some"
  }
}


module.exports = {
  entry: {
    "taos": path.resolve(__dirname, 'src/js/taos.js')
  },
  output: {
    filename: 'taos.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      (compiler) => {
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
          terserOptions
        }).apply(compiler);
      },
    ]
  },
};
