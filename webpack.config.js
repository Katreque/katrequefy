const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'dist/bundle.js',
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
         'style-loader',
         'css-loader'
       ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
};
