import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

export const store = createStore(combineReducers({
    root: rootReducer
}), {}, applyMiddleware(thunk))