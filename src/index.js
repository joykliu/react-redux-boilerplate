import React from 'react';
import { render } from 'react-dom';
import { configureStore } from 'store/configureStore';
import AppRoot from 'containers/Root';

const initialState = {
  config: {
    language: 'en',
  }
};

const store = configureStore(initialState);

render(
  <AppRoot store={store} />,
  document.getElementById('app-root')
);