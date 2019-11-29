import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const isProduction = process.env.NODE_ENV === 'production';
const enhancerList = [];
const middlewareList = [
  thunk
];

if (!isProduction) {
  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
  }
}

export default compose(
  applyMiddleware(...middlewareList),
  ...enhancerList
);