const { join, } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = (env, argv) => {
  const DEVELOPMENT = argv.mode === 'development';

  return {
    devtool: DEVELOPMENT ? 'cheap-eval-source-map' : false,
    output: {
      path: join(__dirname, 'docs'), // for github pages
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader',
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CopyWebpackPlugin([
        { from: './src/assets', to: 'assets' },
      ]),
      new SpriteLoaderPlugin()
    ],
    devServer: {
      contentBase: join(__dirname, 'docs'),
    },
  };
};
