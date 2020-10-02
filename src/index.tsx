import React from 'react';
import ReactDOM from 'react-dom';

import { Global } from '@emotion/core';
import globalStyles from 'styles/global';

import StoreProvider from 'store';
import KeyNavigator from 'navigation/KeyNavigator';

import App from 'App';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <StoreProvider>
      <KeyNavigator initialContext="home">
        <App />
      </KeyNavigator>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
