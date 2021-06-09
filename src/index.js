import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import history from './history';
import Header from './components/Header/header.component';
import { Provider } from "react-redux";
import store from './redux/store'
import './index.css';


ReactDOM.render(
  <BrowserRouter history={history}>
    <Provider store={store}>
      <Header />
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


