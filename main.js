import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import Router from "./router";
import reducer from './src/reducers'
const customLogger = store => next => action =>{
    console.group(action.type);
    console.log("%c Prev State", "color: orange", store.getState());
    console.log("%c Action", "color: blue", action);
    next(action);
    console.log("%c Next State", "color: green", store.getState());
    console.groupEnd(action.type);
}
const middleWares = [reduxThunk, customLogger];
const store = createStore(reducer, applyMiddleware(...middleWares))

ReactDOM.render(
        <Provider store={store}><Router /></Provider>, document.getElementById('app')
);