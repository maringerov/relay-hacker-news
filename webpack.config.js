var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {stage: 0}
      }
    ]
  },
  output: {filename: 'index.bundle.js', path: './'}
};
