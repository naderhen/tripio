import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const {todo, markTodo, deleteTodo} = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo.id, text)} />
      );
    } else {
      element = (
        <div className="ui segment grid">
          <div className="two wide column">
            <img className="ui medium circular bordered image" src="http://semantic-ui.com/images/wireframe/white-image.png" />
          </div>
          <div className="twelve wide column">
            <h3 onDoubleClick={::this.handleDoubleClick}>{todo.title}</h3>
            <p>Booking Ref: {todo.booking_reference}</p>
            <input className='toggle'
                 type='checkbox'
                 checked={todo.marked}
                 onChange={() => markTodo(todo.id)} />
          </div>
          <div className="two wide column">
            <button className='destroy'
                  onClick={() => deleteTodo(todo.id)} />
          </div>
        </div>
      );
    }

    return (
      <li className={classnames({
        completed: todo.marked,
        editing: this.state.editing
      })}>
        {element}
      </li>
    );
  }
}
