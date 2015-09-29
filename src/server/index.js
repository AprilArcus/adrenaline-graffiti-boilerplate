require('babel/register');
require('app-module-path').addPath(__dirname + '/src');
module.exports = require('./server');
