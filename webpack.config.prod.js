const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

module.exports = (env = 'dev') => {
  return {
    devtool: false,
    entry: {
      index: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'index.js',
      publicPath: '/public/'
    },
    resolve: {
      alias: require('./config/aliases'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [path.resolve('src')],
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: {
              loader: 'css-loader',
              options: {
                import: true,
                localIdentName: '[name]__[local]'
              },
            },
          }),
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'media/[name].[ext]',
            },
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new ExtractTextPlugin('styles.css')
    ],
  }
};