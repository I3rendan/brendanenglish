import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import ReactGA from 'react-ga';
import registerServiceWorker from './components/registerServiceWorker';
import './styles/App.css';

ReactGA.initialize('UA-22255243-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();