const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    popup: './src/popup.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
    }, {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        // "css-loader",
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        // Compiles Sass to CSS
        {
          loader: "sass-loader",
          options: {
            // implementation: require("node-sass"),
            sourceMap: true,
          },
        },
        // "sass-loader",
      ],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/popup.html',
      filename: 'popup.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public' },
      ],
    }),
  ],
};
