import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { LoginReducers } from "../reducers/LoginReducers";
import { RegisterReducers } from "../reducers/RegisterReducers";

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose();

const Reducers= combineReducers({
    login: LoginReducers,
    register: RegisterReducers
})

export const store= createStore(Reducers, composeEnhancers(applyMiddleware(thunk)) )