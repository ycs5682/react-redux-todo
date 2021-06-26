import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore } from 'redux';
import rootReducer from './modules/';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
