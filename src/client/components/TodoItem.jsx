/* @flow */

import React, { Component, PropTypes } from 'react';
import { createDumbComponent } from 'adrenaline';

class TodoItem extends Component {
  render() {
    const { todo } = this.props;

    return (
      <li>{todo.text}</li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default createDumbComponent(TodoItem, {
  fragments: {
    todo: `
      Todo {
        text
      }
    `,
  },
});
