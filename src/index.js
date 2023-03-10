import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";
import { createStore } from "redux"
import rootReducer from "./reduxSetup/rootReducer"
import App from './App';

import { composeWithDevTools } from 'redux-devtools-extension';



const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <Provider store={store}>
    <App />
  </Provider>

);

