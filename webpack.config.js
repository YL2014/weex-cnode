require('webpack')
require('weex-loader')

var path = require('path')

module.exports = {
  entry: {
    main: path.join(__dirname, 'src/views', 'main.we?entry=true'),
    detail: path.join(__dirname, 'src/views', 'detail.we?entry=true')
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.we(\?[^?]+)?$/,
        loaders: ['weex-loader']
      }
    ]
  }
}
