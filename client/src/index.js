import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css'
import App from './components/App';
import {Provider} from 'react-redux'
import store from './redux/store'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// console.log('STRIPE KEY IS: ', process.env.REACT_APP_STRIPE_KEY);
// console.log('Environment is ',process.env.NODE_ENV);
// console.log('STRIPE KEY PRODUCTION IS: ', process.env.REACT_APP_STRIPE_KEY);
