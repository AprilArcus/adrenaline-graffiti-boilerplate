global.__CLIENT__ = false;
require('babel/register')({
  stage: 0,
});

var path = require('path');
var express = require('express');
var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');
var proxy = require('express-http-proxy');
var url = require('url');

var devServer = express();
var compiler = webpack(config);

devServer.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

devServer.use(require('webpack-hot-middleware')(compiler));

devServer.use(proxy('localhost:1337', {
  forwardPath: function(req, res) {
    return url.parse(req.url).path;
  }
}));

var appPort = 1337;
var proxy = 'http://localhost:' + appPort;

// var devServer = new WebpackDevServer(webpack(config), {
//   contentBase: path.join(__dirname, '.tmp'),
//   publicPath: '/public/',
//   hot: true,
//   historyApiFallback: true,
//   proxy: [
//     {
//       path: /^(?!\/public).*$/,
//       target: proxy
//     }
//   ]
// });

devServer.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://%s:%s', 'localhost', 3000);
});

var app = require('./src/server');
app.listen(appPort, function () {});
