const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: './bundle.js',
  },
  node: {
    fs: 'empty',
    net: 'empty'
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
     },
     {
       test: /\.js$/,
       loader: 'babel-loader'
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
