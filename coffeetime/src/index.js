import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
// import store from "./redux/store";
import App from "./app";

import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const reducers = { form: formReducer };
const reducer = combineReducers(reducers);
let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
