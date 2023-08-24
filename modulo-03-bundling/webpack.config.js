const path = require('path');
const StatsPlugin = require('webpack-stats-plugin').StatsWriterPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',  
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new StatsPlugin({
      filename: 'stats.json',
      stats: 'verbnose'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/img',
          to: 'img',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },
};