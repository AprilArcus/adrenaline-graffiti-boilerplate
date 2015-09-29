global.__CLIENT__ = false;

import express from 'express';
import webpack from 'webpack';
import config from './webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import proxy from 'express-http-proxy';
import { parse } from 'url';

const devServer = express();
const compiler = webpack(config);

devServer.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

devServer.use(require('webpack-hot-middleware')(compiler));

import { default as server, port } from './src/server';
server();
devServer.use(proxy(`localhost:${port}`, {
  forwardPath: function(req, res) {
    return parse(req.url).path;
  }
}));

devServer.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log('Dev Server error:', err);
    return;
  }

  console.log('Dev Server listening at http://%s:%s', 'localhost', 3000);
});
