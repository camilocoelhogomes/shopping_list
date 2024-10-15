const path = require('path');

module.exports = {
  entry: './src/main.ts', // Adjust the entry file accordingly
  target: 'node',
  mode:"production",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  }
}; 