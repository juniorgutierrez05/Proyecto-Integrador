import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const rootElement = document.getElementById('root')

createRoot(rootElement).render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>
);
