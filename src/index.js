import React from 'react';
import ReactDOM from 'react-dom';
import ActFor from './ActFor';

// utils
import * as serviceWorker from './utils/serviceWorker';

// styles
import './semantic/dist/semantic.min.css';
import './styles/index.css';
import './styles/App.css';


ReactDOM.render(
  <ActFor />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
