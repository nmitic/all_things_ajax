let LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: ['babel-polyfill', './app.js'],
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    },
    plugins: [
      new LiveReloadPlugin()
    ]
};
