/* @flow */

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { express as graffitiMiddleware } from '@risingstack/graffiti';
import * as adapter from '@risingstack/graffiti-mongoose';
import { join } from 'path';
import models from 'server/models';

const server = express();

const publicPath = join(__dirname, '..', '..', 'dist');
server.use('/public', express.static(publicPath));

mongoose.connect('mongodb://localhost/graphql');

server.use(bodyParser.json());

server.use(graffitiMiddleware({
  prefix: '/graphql',
  adapter,
  models
}));

server.get('*', function(req, res) {
  res.sendFile(join(__dirname, 'index.html'));
});

export const port = 1337;

export default function listen() {
  server.listen(port, err => {
    console.log('GraphQL Server listening at http://%s:%s', 'localhost', port);

    if (err) {
      console.log('GraphQL Server error: ', err);
      return;
    }
  });
}

// kick off server
if (!module.parent) {
  listen();
}
