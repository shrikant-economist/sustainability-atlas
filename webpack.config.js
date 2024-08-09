const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

module.exports = function override(config, env) {
  if (env === 'production') {
    config.plugins.push(
      new CompressionPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
      })
    )}
  return config;
};

module.exports = {
  // Other configurations...
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'src', // Prevents the [path] from including `src`
              outputPath: 'assets/images',
              publicPath: 'assets/images',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'public/assets'),
    },
  },
};