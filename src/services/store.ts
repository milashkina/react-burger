import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers/rootReducer";
import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR, WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_ORDERS, WS_GET_USER_ORDERS,
    WS_SEND_ORDER
} from "./constants/wsActionTypes";
import {wsMiddleware} from "./middleware/wsMiddleware";


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const wsActions = {
    wsInit: WS_CONNECTION_START,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onOrders: WS_GET_ORDERS,
    onUserOrders: WS_GET_USER_ORDERS,
    onSendOrders: WS_SEND_ORDER,
}

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const enhancer = composeEnhancers(applyMiddleware(
    thunk,
    wsMiddleware(wsActions)
));

export const store = createStore(rootReducer, enhancer);
