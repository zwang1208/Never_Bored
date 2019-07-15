import { createStore, applyMiddleware, compose } from "redux";
import { finalReducer } from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(finalReducer, composeEnhancers(
    applyMiddleware(thunk),
));

export default store;
