import style from "../profile.module.css";
import {ProfileNav} from "../profile-nav/profile-nav";
import React, {useEffect} from "react";
import {OrderList} from "../../../components/order-list-feed/order-list";
import {useDispatch, useSelector} from "../../../services/hook";
import {wsConnectionClosedAction, wsConnectionStartAction} from "../../../services/actions/ws";
import {TOKEN, WS_USER_ORDERS_URL} from "../../../utils/constant";
import {getOrders} from "../../../utils/queries/getOrders";
import {setActiveOrdersAction} from "../../../services/actions/feed";
import {getCookie} from "../../../utils/cookies";


export const ProfileOrdersPage = () => {
    const dispatch = useDispatch()
    const token = getCookie(TOKEN.ACCESS);
    const wsUserOrdersUrl = WS_USER_ORDERS_URL + `?token=${token}`;
    useEffect(() => {
        dispatch(wsConnectionStartAction(wsUserOrdersUrl))
        return () => {
            dispatch(wsConnectionClosedAction());
        }
    }, [dispatch, wsUserOrdersUrl]);

    const { orders } = useSelector(state => state.ws)
    const ingredientsData = useSelector(state => state.burgerIngredients.ingredients)
    const activeOrders = orders && getOrders(orders, ingredientsData).reverse()

    useEffect(() => {
        if (activeOrders && activeOrders.length) {
            dispatch(setActiveOrdersAction(activeOrders))
        }
    }, );

  return(
    <article className={`${style.profileLayout} + mt-20`}>
      <section className={`${style.sectionLayout} `}>
        <ProfileNav />
      </section>
      <section>
        <OrderList orders={activeOrders}/>
      </section>
    </article>
  )
}
