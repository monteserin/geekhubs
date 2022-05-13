import { createStore, combineReducers } from "redux";
import { Provider as ReduxProvider, useSelector, useDispatch } from "react-redux";
import post from "./post";
import contact from "./contact";

const store = createStore(combineReducers({ post, contact }));

const Provider = ({ children }) => <ReduxProvider store={store}>{children}</ReduxProvider>

export {
    Provider,
    useSelector,
    useDispatch
};