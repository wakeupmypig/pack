var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry:'./es6/index.js',
  output:{
    path:'./es6_build/',
    filename:'index.js'
  },
  plugins:[
    new htmlWebpackPlugin({
        title:"webpack",
        template:'./index.html',
        chunks:["index.js"]
    }),
    new openBrowserWebpackPlugin({url:"http://localhost:8888"}),
    new extractTextWebpackPlugin("bundle.css"),
  ],
  module:{
    loaders:[
        {test:/\.css$/,loader:extractTextWebpackPlugin.extract("style","css")},
        {test:/\.(jpg|png|gif)$/,loaders:["url?limit=8000"]},
        {test:/\.js$/,loader:"babel-loader"}
    ]
  },
  resolve:{
      extensions:["",".js",".css",".jsx"],
      alias:{pack:'./a/n/index.js'}
  }
}
