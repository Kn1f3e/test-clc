import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import rootReducer from "./reducers";
import "./styles.css";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// actions.js
export const updateComponentPower = (componentId, power) => ({
  type: "UPDATE_COMPONENT_POWER",
  payload: { componentId, power }
});

export const calculateTotalPower = () => ({ type: "CALCULATE_TOTAL_POWER" });
