const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: resolvePath('.'),
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          configFile: false,
          presets: [
            require.resolve('@babel/preset-env'),
            require.resolve('@babel/preset-react')
          ]
        }
      },
      {
        test: /\.css$/,
        include: resolvePath('.'),
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader')
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        include: resolvePath('.'),
        use: [
          {
            loader: require.resolve('file-loader')
          }
        ]
      }
    ]
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      React: require.resolve('react'),
      ReactDOM: require.resolve('react-dom')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template.html')
    })
  ],
  devServer: {
    static: resolvePath('dist')
  }
};
