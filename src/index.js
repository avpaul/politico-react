import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./app.jsx', () => {
    const NextRootContainer = require('./app').default;
    ReactDOM.render(<NextRootContainer />, document.getElementById('app'));
  });
}
