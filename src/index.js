import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'//middleman between redux and react//
import { createStore, applyMiddleware } from 'redux'//createStore returns an object w/ getState and dispatch
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
//dispatch is used to update the store/global state
//getState gets the Global store
import { composeWithDevTools } from 'redux-devtools-extension'
import reportWebVitals from './reportWebVitals';
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
