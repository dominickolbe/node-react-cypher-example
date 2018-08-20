module.exports = {
  entry: ['babel-polyfill', './src/client'],
  output: {
    filename: 'public/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      }
    ]
  },
};
