import {SELECT_ORDER, SET_ACTIVE_ORDERS, SET_DONE_ORDERS, UNSELECT_ORDER} from "../constants/feed";
import {TDoneInProgressOrders, TActiveOrder} from "../../types/types";

export interface ISetActiveOrdersAction {
    readonly type: typeof SET_ACTIVE_ORDERS;
    readonly payload: TActiveOrder[];
}

export interface ISetDoneOrdersAction {
    readonly type: typeof SET_DONE_ORDERS;
    readonly payload: TDoneInProgressOrders;
}

export interface ISelectOrderAction {
    readonly type: typeof SELECT_ORDER;
    readonly payload: TActiveOrder;
}

export interface IUnselectOrderAction {
    readonly type: typeof UNSELECT_ORDER;
}

export type TFeedActions =
    | ISetActiveOrdersAction
    | ISetDoneOrdersAction
    | ISelectOrderAction
    | IUnselectOrderAction;

export const setActiveOrdersAction = (orders: TActiveOrder[]): ISetActiveOrdersAction => {
    return {
        type: SET_ACTIVE_ORDERS,
        payload: orders,
    };
};

export const setDoneOrdersAction = (orders: TDoneInProgressOrders): ISetDoneOrdersAction => {
    return {
        type: SET_DONE_ORDERS,
        payload: orders,
    };
};

export const selectOrderAction = (order: TActiveOrder): ISelectOrderAction => {
    return {
        type: SELECT_ORDER,
        payload: order,
    };
};

export const unselectOrderAction = (): IUnselectOrderAction => {
    return {
        type: UNSELECT_ORDER,
    };
};
