var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/TemperatureConvertor');
var APP_DIR = path.resolve(__dirname, 'dist/TemperatureConvertor');

module.exports = {
  //define entry point
    entry: BUILD_DIR +'/App.js',

    output:{
      path:APP_DIR,
      filename:'bundle.js'
    },
    devServer:{
      contentBase: path.join(__dirname, "/"),
      compress: true,
      port: 9000
    },
    module:{
      loaders:[
        {
          test:/\.jsx*$/,
          exclude: /node_modules/,
          loader:'babel-loader',
          query:{
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
          }
        }
      ]
    }
};
