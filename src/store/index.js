import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducers from '../reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    devToolsEnhancer(),
  ),
);

export default store;
