import React from "react";
import { Provider } from "react-redux";
import { AnyAction, createStore, Store } from "redux";
import rootReducers from "../reducers";
import { StateType } from "../types";

const store: Store<StateType, AnyAction> = createStore(rootReducers);

const ReduxProvider: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
