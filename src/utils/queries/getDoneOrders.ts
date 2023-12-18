import {TActiveOrder} from "../../types/types";

export const getDoneOrders = (orders: TActiveOrder[]) => {
    const done: number[] = [];
    const inProgress: number[] = [];
    orders.forEach((order) => {
        if (order.status === 'done') {
            done.push(order.number);
        } else {
            inProgress.push(order.number);
        }
    });
    return { done, inProgress };
};
