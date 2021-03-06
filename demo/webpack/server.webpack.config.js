/* eslint-disable import/no-commonjs */
const nodeExternals = require('webpack-node-externals');
const partial = require('webpack-partial');
const path = require('path');

module.exports = {
  name: 'server',
  entry: require.resolve('../server'),
  target: 'node',
  externals: [nodeExternals()],
  mode: 'development',
  output: {
    path: path.resolve(path.join(__dirname, '..', 'dist', 'server')),
  },
};

module.exports = partial.loader(
  {
    loader: 'babel-loader',
    test: /\.js$/,
    exclude: /node_modules/,
  },
  module.exports,
);
