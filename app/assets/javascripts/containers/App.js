import React from 'react';
import TripioApp from './TripioApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';

const redux = createRedux(stores);

export default class App {
  render() {
    return (
      <Provider redux={redux}>
        {() => <TripioApp />}
      </Provider>
    );
  }
}
