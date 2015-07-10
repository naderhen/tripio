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
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}
