/* @flow */

import React, { Component, PropTypes, findDOMNode } from 'react';

const ENTER_KEY_CODE = 13;

class TodoInput extends Component {
  constructor() {
    super();
    this.onChange = this.onEnter.bind(this);
  }

  onEnter(e) {
    const input = findDOMNode(this.refs.input);
    if (!input.value.length) return;
    if (e.keyCode === ENTER_KEY_CODE) {
      this.props.createTodo({ text: input.value });
      input.value = '';
    }
  }

  render() {
    return (
      <input
        ref="input"
        type="text"
        onKeyDown={this.onEnter}
        autoFocus="true"
      />
    );
  }
}



TodoInput.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default TodoInput
