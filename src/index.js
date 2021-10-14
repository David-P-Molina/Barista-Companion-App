import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux'//createStore returns an object w/ getState and dispatch
//dispatch is used to update the store/global state
//getState gets the Global store
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'//middleman between redux and react//
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import App from './App';
import reportWebVitals from './reportWebVitals';
import RoastersContainer from './containers/RoastersContainer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RoastersContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
