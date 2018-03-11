import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Router } from 'react-router-dom';
import App from '../App';

// Uncomment for a11y debugging
//
// import a11y from 'react-a11y';
//
// a11y(React, {
//   throw: false,
//   includeSrcNode: true,
//   ReactDOM,
//   filterFn: (name, id, msg) => {
//     // Filter out warnings from vendor modules we have no control over
//     return ['ModalPortal', 'Modal__CloseButton'].indexOf(name) === -1;
//   },
// });

const AppRoot = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router path='/'>
        <App />
      </Router>
    </ConnectedRouter>
  </Provider>
);

AppRoot.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default AppRoot;