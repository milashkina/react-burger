import {OrderFeed} from "../order-feed/order-feed";
import style from './order-list.module.css'
import {TActiveOrder} from "../../types/types";
import {FC} from "react";
import {nanoid} from "nanoid/non-secure";

type TOrderList = {
    orders: TActiveOrder[],
}
export const OrderList: FC<TOrderList> = ({orders}) => {
    return (
        <div className={`${style.orderListLayout}`}>
            {orders.map((order) => (<OrderFeed order={order} key={nanoid()} />))}
        </div>
    )
}
