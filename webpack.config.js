// Imports
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// require("babel-register");
// Webpack Configuration
const config = {
  // Entry
  entry: './main.js',
  
  // Output
  output: {
    path: path.join(__dirname, '/bundle'),
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 8080
 },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
  
};
// Exports
module.exports = config;