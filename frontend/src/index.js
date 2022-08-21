import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from './App';
import './index.css';
import messageReducer from "./store/reducers/messageReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    messenger: messageReducer,
});

const store = createStore(rootReducer , composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);