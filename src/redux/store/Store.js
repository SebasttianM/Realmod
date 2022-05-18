import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { LoginReducers } from "../reducers/LoginReducers";

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose();

const Reducers= combineReducers({
    login: LoginReducers,
})

export const store= createStore(Reducers, composeEnhancers(applyMiddleware(thunk)) )