import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TripioActions from '../actions/TripioActions';

export default class TodoApp {
  render() {
    return (
      <Connector select={state => ({ todos: state.todos })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ todos, dispatch }) {
    const actions = bindActionCreators(TripioActions, dispatch);
    return (
      <div className="ui container">
        <Header addTodo={actions.addTodo} />
        <div className="ui segment grid">
          <div className="two wide column">
            <img className="ui medium circular bordered image" src="http://semantic-ui.com/images/wireframe/white-image.png" />
          </div>
          <div className="twelve wide column">
            <h3>United Airlines Flight JFK -> Shannon</h3>
            <p>Booking Ref: 1234567890</p>
          </div>
          <div className="two wide column"></div>
        </div>
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}
