import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export const history = createHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState) => createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
    ),
  )
);

export default configureStore;