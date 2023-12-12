import React from "react";
import globalStyle from '../app/app.module.css'

import style from './feed-info.module.css'
import {useSelector} from "../../services/hook";
import {STATUS, TOrders} from "../../types/types";
import {nanoid} from "nanoid/non-secure";
export const FeedInfo = () => {
    const {orders, total, totalToday} = useSelector(state => state.ws)
    let doneOrders: TOrders = []
    let inProgressOrders: TOrders = []
    if (orders && orders.length) {
        doneOrders = orders.filter((order) => order.status === STATUS.DONE)
        inProgressOrders = orders.filter((order) => order.status === STATUS.PENDING)
    }
    return(
        <section className={`${style.feedInfoLayout}`}>
            <div className={`${style.feedInfoColumn}`}>
                <div>
                    <span className={`text text_type_main-medium`}>Готовы:</span>
                    <div className={`${style.orderColumn} text text_type_digits-default`}>
                        {
                            doneOrders.map((doneOrder) =>
                                <span className={`${style.successOrder}`} key={nanoid()}>{doneOrder.number}</span>)
                        }
                    </div>
                </div>
                <div>
                    <span className={`text text_type_main-medium`}>В работе:</span>
                    <div className={`${style.orderColumn} text text_type_digits-default`}>
                        {
                            inProgressOrders.map((inProgressOrder) =>
                                <span key={nanoid()}>{inProgressOrder.number}</span>)
                        }
                    </div>
                </div>
            </div>
            <div>
                <span className={`text text_type_main-medium`}>Выполнено за все время:</span>
                <div className={`${globalStyle.orderNumber} text text_type_digits-large`}>{total}</div>
            </div>
            <div>
                <span className={`text text_type_main-medium`}>Выполнено за сегодня:</span>
                <div className={`${globalStyle.orderNumber} text text_type_digits-large`}>{totalToday}</div>
            </div>
        </section>
    )
}
