import {GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS} from "../constants/order";
import {TGetOrderResponse, TOrder} from "../../types/types";
import {AppThunkAction} from "../../types";
import {getOrder} from "../../utils/queries/getOrder";

export interface IGetOrderRequest {
    readonly type: typeof GET_ORDER_REQUEST
}
export interface IGetOrderSuccess {
    readonly type: typeof GET_ORDER_SUCCESS,
    readonly isSuccess: boolean,
    readonly data: TOrder[],
}
export interface IGetOrderFailed {
    readonly type: typeof GET_ORDER_FAILED
    readonly isSuccess: boolean,
    readonly isError: boolean,
}

export type TOrderActions = IGetOrderRequest | IGetOrderSuccess | IGetOrderFailed

// generations actions

export const getOrderRequest = (): IGetOrderRequest => ({
    type: GET_ORDER_REQUEST
})
export const getOrderSuccess = (res: TGetOrderResponse): IGetOrderSuccess => ({
    type: GET_ORDER_SUCCESS,
    isSuccess: true,
    data: res.orders
})
export const getOrderFailed = (): IGetOrderFailed => ({
    type: GET_ORDER_FAILED,
    isSuccess: false,
    isError: true,
})
export const getOrderThunk = (id: string): AppThunkAction<Promise<unknown>> => async(dispatch) => {
    dispatch(getOrderRequest());
    try {
        const res = await getOrder(id);
        dispatch(getOrderSuccess(res))
    } catch {
        dispatch(getOrderFailed())
    }
}
