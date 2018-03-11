const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = (env = 'dev') => {
  return {
    devtool: 'source-map',
    entry: {
      index: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'index.js',
      publicPath: '/'
    },
    resolve: {
      alias: require('./config/aliases'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [path.resolve(__dirname), path.resolve(__dirname, '../src'), /webpack-dev-server/],
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: {
              loader: 'css-loader',
              options: {
                import: true,
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
    devServer: {
      contentBase: __dirname,
      compress: true,
      port: 9000,
      host: '0.0.0.0',
      disableHostCheck: true,
      stats: 'errors-only',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: 'body',
        filename: 'index.html'
      }),
      new ExtractTextPlugin('style.css')
    ],
  }
};