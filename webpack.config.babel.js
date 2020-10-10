import webpack from 'webpack'
import path from 'path'

const name = 'HmacSha1DynamicValue'

const production = process.env.NODE_ENV === 'production'

const config = {
  target: 'web',
  entry: [
    'immutable',
    './src/HmacSha1DynamicValue.js'
  ],
  output:{
    path: path.join(__dirname,
      './build/xyz.fi5t.PawExtensions.HmacSha1DynamicValue'),
    pathInfo: true,
    publicPath: '/build/',
    filename: name+'.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
        test: /\.jsx?$/,
      }
    ]
  }
}
module.exports = config
