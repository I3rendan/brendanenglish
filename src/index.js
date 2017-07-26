import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-g-analytics';
import './styles/App.css';

ReactDOM.render(
  <BrowserRouter id="UA-22255243-1">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);