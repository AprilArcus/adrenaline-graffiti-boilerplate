/* @flow */

import React from 'react';
import { Route } from 'react-router';
import App from 'client/components/App';
import TodoApp from 'client/components/TodoApp';

export default (
  <Route component={App}>
    <Route path="/" component={TodoApp} />
  </Route>
);
