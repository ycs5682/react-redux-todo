import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todos from './modules/todos';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(todos, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
