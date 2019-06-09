import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./app.jsx', () => {
    const NextRootContainer = App;
    ReactDOM.render(
      <Provider store={store}>
        <NextRootContainer />
      </Provider>,
      document.getElementById('app'),
    );
  });
}
