var path = require('path');
var webpack = require('webpack');
/**********************************************
 * default entry: './src/index',
 * default output: './dist/main'
 */
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',      /* 生产环境下输出目录 --mode production*/
    publicPath: '/static/'    /* 编译环境下输出目录 --mode development*/
  },
  mode: "development",       /* 指定环境下编译 --mode development*/
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']}
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
