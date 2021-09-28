import React, { createContext, useReducer } from "react";
import { productReducer } from "./reducers/productReducer";

export const Store = createContext();

const initialState = {
  productList: { loading: true },
};

// combine reducers ala Redux: each can handle its own slice
const combineReducers = (reducers) => {
  return (state, action) => {
    // I like to use array.reduce, you can also just write a for..in loop 
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      };
    }, state);
  };
};

// provides states for all components/screen in the application
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(
    combineReducers({
      products: productReducer,
    }),
    initialState
  );
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
