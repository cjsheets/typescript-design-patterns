const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'typescript-design-patterns': './src/index.ts',
    'typescript-design-patterns.min': './src/index.ts',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'tsDesignPatterns',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [{
      enforce: 'pre',
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'tslint-loader',
      options: {
        emitErrors: true
      }
    }, {
      test: /\.ts$/,
      use: ['ts-loader']
    },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /^typescript-design-patterns.min\.js$/,
      minimize: true
    })
  ]
};