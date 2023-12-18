import style from "./feed.module.css";
import React, {useEffect} from "react";
import {OrderList} from "../../components/order-list-feed/order-list";
import {FeedInfo} from "../../components/feed-info/feed-info";
import {useDispatch, useSelector} from "../../services/hook";
import {WS_ALL_ORDERS_URL} from "../../utils/constant";
import {wsConnectionClosedAction, wsConnectionStartAction} from "../../services/actions/ws";
import { TIngredientCardData} from "../../types/types";
import {setActiveOrdersAction, setDoneOrdersAction} from "../../services/actions/feed";
import {getOrders} from "../../utils/queries/getOrders";
import {getDoneOrders} from "../../utils/queries/getDoneOrders";


export const FeedPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(wsConnectionStartAction(WS_ALL_ORDERS_URL))
        return () => {
            dispatch(wsConnectionClosedAction())
        }
    }, [dispatch]);
    const {orders} = useSelector(state => state.ws)
    const ingredientData: TIngredientCardData[] = useSelector(state => state.burgerIngredients.ingredients)
    const activeOrders = orders && getOrders(orders, ingredientData)
    const doneOrders = activeOrders && getDoneOrders(activeOrders)

    useEffect(() => {
        if (activeOrders && activeOrders.length && doneOrders) {
            dispatch(setActiveOrdersAction(activeOrders))
            dispatch(setDoneOrdersAction(doneOrders));
        }
    })

    if (!activeOrders) {
        return (
            <span>The list is empty :(</span>
        )
    }
    return (
        <>
            <main className={`${style.feedLayout} + pt-10`}>
                <p className={`text text_type_main-large`}>Лента заказов</p>
                <section className={`${style.feedLayoutContent}`}>
                    <OrderList orders={activeOrders} />
                    <FeedInfo/>
                </section>
            </main>
        </>

    )
}
