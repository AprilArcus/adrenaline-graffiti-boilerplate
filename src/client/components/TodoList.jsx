/* @flow */

import React, { Component, PropTypes } from 'react';
import TodoInput from 'client/components/TodoInput';
import TodoItem from 'client/components/TodoItem';
import { createDumbComponent } from 'adrenaline';

class TodoList extends Component {
  render() {
    const { createTodo } = this.props.mutations;
    return (
      <div>
        <TodoInput createTodo={createTodo} />
        <ul>
          {this.props.todos.map( (todo, i) =>
            <TodoItem todo={todo} key={i} />
          )}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  mutations: PropTypes.object.isRequired,
  todos: PropTypes.array,
};

TodoList.defaultProps = {
  todos: [],
};

export default createDumbComponent(TodoList, {
  fragments: {
    todos: `
      User {
        todos(count: $count) {
          id,
          ${TodoItem.getFragment('todo')}
        }
      }
    `,
  },
});
