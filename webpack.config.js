const path = require('path');

module.exports = {
  // Other webpack configurations...

  module: {
    rules: [
      // Rule for handling images
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Path where the images will be stored in the output directory
            },
          },
        ],
      },
      // Other rules...
    ],
  },
};