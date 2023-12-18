import {TOrder} from "../../types/types";
import {TOrderActions} from "../actions/order";
import {GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS} from "../constants/order";

type TOrderState = {
    orders: TOrder[];
    isSuccess: boolean;
    orderRequest: boolean;
    isError: boolean;
}
export const initialState: TOrderState = {
    orders: [],
    isSuccess: false,
    orderRequest: false,
    isError: false,
}

export const orderReducer = (state: TOrderState = initialState, action: TOrderActions): TOrderState => {
    switch (action.type) {
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true,
            }
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                orders: action.data,
                isSuccess: true,
                orderRequest: false,
            }
        }
        case GET_ORDER_FAILED: {
            return {
                ...state,
                isSuccess: false,
                orderRequest: false,
                isError: true,
            }
        }
        default: {
            return state;
        }
    }
}
