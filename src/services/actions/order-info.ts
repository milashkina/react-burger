import {
    CLOSE_ORDER_INFO_MODAL,
    OPEN_ORDER_INFO_MODAL,
    POST_ORDER_FAILED,
    POST_ORDER_REQUEST,
    POST_ORDER_SUCCESS
} from "../constants/order-info";
import {usePostOrder} from "../../utils/queries/postOrder";
import {TOrderData, TOrderDataSuccessRequest} from "../../types/types";
import {AppDispatch, AppThunkAction} from "../../types";
import {cleanConstructor} from "./burger-constructor";

export interface IPostOrderRequest {
    readonly type: typeof POST_ORDER_REQUEST
}
export interface IPostOrderSuccess {
    readonly type: typeof POST_ORDER_SUCCESS,
    readonly isSuccess: boolean,
    readonly order: number,
    readonly name: string,
}
export interface IPostOrderFailed {
    readonly type: typeof POST_ORDER_FAILED,
    readonly IsSuccess: boolean,
}
export interface IOpenOrderInfoModal {
    readonly type: typeof OPEN_ORDER_INFO_MODAL
}
export interface ICloseOrderInfoModal {
    readonly type: typeof CLOSE_ORDER_INFO_MODAL,
}
export type TOrderInfoAction = ICloseOrderInfoModal | IOpenOrderInfoModal | IPostOrderFailed | IPostOrderSuccess | IPostOrderRequest


// генераторы экшенов

export const openOrderInfoModal = (): IOpenOrderInfoModal => ({
    type: OPEN_ORDER_INFO_MODAL
})
export const closeOrderInfoModal = (): ICloseOrderInfoModal => ({
    type: CLOSE_ORDER_INFO_MODAL
})
export const postOrderRequest = (): IPostOrderRequest => ({
    type: POST_ORDER_REQUEST,
})
export const postOrderSuccess = (res: TOrderDataSuccessRequest): IPostOrderSuccess => ({
    type: POST_ORDER_SUCCESS,
    isSuccess: true,
    order: res.order.number,
    name: res.name
})
export const postOrderFailed = (): IPostOrderFailed => ({
    type: POST_ORDER_FAILED,
    IsSuccess: false
})
export const postOrderThunk = (data: TOrderData): AppThunkAction => (dispatch: AppDispatch) => {
    dispatch(postOrderRequest());
    dispatch(openOrderInfoModal())
    usePostOrder(data)
        .then((res) => {
            dispatch(postOrderSuccess(res))
            dispatch(cleanConstructor())
        })
        .catch(() => {
            dispatch(postOrderFailed())
        })
}
