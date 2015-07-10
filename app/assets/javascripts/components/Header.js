import React, { PropTypes } from 'react';
import TodoTextInput from './TodoTextInput';

export default class Header {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <div className="ui secondary pointing menu">
        <a className="active item">
          Home
        </a>
        <a className="item">
          Messages
        </a>
        <a className="item">
          Friends
        </a>
        <div className="right menu">
          <a className="ui item">
            <TodoTextInput newTodo={true}
                         onSave={::this.handleSave}
                         placeholder='What needs to be done?' />
          </a>
        </div>
      </div>
    );
  }
}
