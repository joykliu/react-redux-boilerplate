import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { Router } from 'react-router-dom';
import App from '../App';

const AppRoot = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router path='/'>
        <App />
      </Router>
    </ConnectedRouter>
  </Provider>);

AppRoot.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default AppRoot;