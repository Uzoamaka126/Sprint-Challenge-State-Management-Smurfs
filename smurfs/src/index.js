import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import * as reducers from './state/reducers';

import "./index.css";
import App from "./components/App";

const bigReducer = combineReducers({
    // form: reducers.formReducer,
    smurfs: reducers.smurfReducer,

});

const store = createStore(
    bigReducer,
    {},
    compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);
