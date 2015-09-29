var webpack = require('webpack');

var config = require('./webpack.config.js');
config.devtool = 'eval';
config.entry.push('webpack-hot-middleware/client');
config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
		'__CLIENT__': true,
    'PRODUCTION': false
	}),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]);
module.exports = config;
