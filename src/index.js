import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import history from './history';


ReactDOM.render(
  <BrowserRouter history={history}>
    <Routes />
  </BrowserRouter>
  ,
  document.getElementById('root')
);


