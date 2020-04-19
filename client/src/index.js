import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './js/store'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CookiesProvider } from 'react-cookie';

import './index.scss';
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(
  <CookiesProvider>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </CookiesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
