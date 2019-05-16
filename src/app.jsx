import React from 'react';
import Nav from './components/navbarComponent/navbar';

const App = () => (
  <div>
    <Nav />
    <div>Politico</div>
  </div>
);

if (module.hot) {
  module.hot.accept();
}

export default App;
