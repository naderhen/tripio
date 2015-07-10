import React from 'react';
import Main from './containers/Main';
import 'semantic-ui-css/semantic.css';
import './styles/main.scss';
import request from 'superagent';

request.get('/home/test').end()

React.render(
  <Main />,
  document.getElementById('root')
);
