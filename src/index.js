import React from 'react';
import { render } from 'react-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/rootReducer";

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
));


const app = (
  <Provider store={store}>
      <App />
  </Provider>
);

render(
    app,
  document.getElementById('root')
);

