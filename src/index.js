import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CoffeeBeans from './containers/CoffeeBeans'
import Roasters from './containers/Roasters'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router />
      <>
        <Route exact path='/' component={App} />
        <Route exact path='/coffee-beans' component={CoffeeBeans} />
        <Route exact path='/roasters' component={Roasters} />
      </>
    </Router
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
