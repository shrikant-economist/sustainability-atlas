const CompressionPlugin = require('compression-webpack-plugin');
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