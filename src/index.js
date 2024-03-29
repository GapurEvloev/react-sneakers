import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './index.sass';
import 'macro-css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={`/${"react-sneakers"}/`}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);