import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './order-card.module.css'
import globalStyle from '../app/app.module.css'
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "../../services/hook";
import {STATUS} from "../../types/types";
import {OrderIngredientsList} from "../order-ingredients-list/order-ingredients-list";
import {FC, useEffect, useMemo} from "react";
import {getCookie} from "../../utils/cookies";
import {PATH, TOKEN, WS_ALL_ORDERS_URL, WS_USER_ORDERS_URL} from "../../utils/constant";
import {wsConnectionClosedAction, wsConnectionStartAction} from "../../services/actions/ws";
import {getOrders} from "../../utils/queries/getOrders";

export const OrderCard: FC = () => {
    const { orderNumber } = useParams<{ orderNumber?: string }>()
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    const token = getCookie(TOKEN.ACCESS);
    const wsUrl: string = pathname.includes(PATH.PROFILE_ORDERS) ? WS_USER_ORDERS_URL : WS_ALL_ORDERS_URL
    const wsUrlConnection = wsUrl  + `?token=${token}`;
    const { orders }  = useSelector(state => state.ws)

    useEffect(() => {
        dispatch(wsConnectionStartAction(wsUrlConnection))
        return () => {
            dispatch(wsConnectionClosedAction());
        }
    }, [dispatch, wsUrlConnection]);

    const ingredientsData = useSelector(state => state.burgerIngredients.ingredients)

    const info = useMemo(() => {
        if (!ingredientsData) return null;

        const activeOrders = orders && getOrders(orders, ingredientsData).reverse()
        const activeOrder = activeOrders.filter((activeOrder) => activeOrder.number.toString() === orderNumber)
        const activeOrderInfo = activeOrder && activeOrder[0]
        const totalSum = activeOrderInfo && activeOrderInfo.ingredients.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
        return {
            ...activeOrderInfo,
            totalSum
        }
    }, [ingredientsData, orderNumber, orders])

    return (
        <div className={`${style.orderIdModalLayout}`}>
            {info ?
                <>
                  <span className={`text text_type_digits-default`}>#{info.number}</span>
                  <span className={`text text_type_main-medium`}>{info.name}</span>
                  <span className={` ${globalStyle.colorSuccess} text text_type_main-default`}>{info.status === 'created' ? STATUS.CREATED : info.status === 'pending' ? STATUS.PENDING : info.status === 'canceled' ? STATUS.CANCELED : STATUS.DONE}</span>
                  <span className={`text text_type_main-medium`}>Состав:</span>
                    <OrderIngredientsList ingredients={info.ingredients}/>
                  <div className={`${style.bottomTip}`}>
                    <FormattedDate className={`text text_type_main-default text_color_inactive`} date={new Date(info.createdAt)} />
                    <div className={`${style.currencyTip}`}>
                        {info && <span className={`text text_type_digits-default p-2`}>{info.totalSum}</span>}
                      <CurrencyIcon type={"primary"} />
                    </div>
                  </div>
            </> :
            <span>
                Loading...
            </span>}
        </div>
    )
}
