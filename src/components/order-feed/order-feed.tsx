import style from './order.module.css'
import globalStyle from '../app/app.module.css'
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {FC, useMemo} from "react";
import {STATUS, TActiveOrder, TIngredientCardData} from "../../types/types";
import {nanoid} from "nanoid/non-secure";
import {Link, useLocation} from "react-router-dom";
import {PATH} from "../../utils/constant";
import {selectOrderAction} from "../../services/actions/feed";
import {useDispatch} from "../../services/hook";

type TOrder = {
    order: TActiveOrder
}
export const OrderFeed: FC<TOrder> = ({order}) => {
    const location = useLocation()
    const { pathname}  = useLocation();
    const dispatch = useDispatch()
    const {name, number, createdAt, ingredients, status} = order

    const totalSum = useMemo(() => order.ingredients.reduce((acc, cur) =>  acc + cur.price * cur.quantity, 0), [order.ingredients])
    const maxIngredients: 6 = 6
    const orderInfo = useMemo(() => {
        if(!ingredients.length) return null;

        const ingredientsInfo: TIngredientCardData[] = order.ingredients.reduce((acc:any , item: TIngredientCardData) => {
            const ingredient: TIngredientCardData | undefined = ingredients.find((ing: TIngredientCardData) => ing._id === item._id);
            if (ingredient) acc.push(ingredient);
            return acc;
        }, [])

        const totalSum: number = ingredientsInfo.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0)

        const ingredientsToShow: TIngredientCardData[] = ingredientsInfo.slice(0, maxIngredients)
        const remains: number | null = ingredientsInfo.length > maxIngredients
        ? ingredientsInfo.length - maxIngredients
            : null;

        return {
            ...order,
            ingredientsInfo,
            ingredientsToShow,
            remains,
            totalSum
        }
    }, [order, ingredients])

    if (!orderInfo) return null;
    return (
        <section onClick={() => dispatch(selectOrderAction(order))}>
            <Link
                to={{ pathname: `${number}` }}
                state={{ backgroundLocation: location, state: orderInfo }}
                className={`${style.cardOrderLayout} p-6`}>
                <div className={`${style.orderNumber}`}>
                    <span className={`text text_type_digits-default`}>#{number}</span>
                    <FormattedDate className={`text text_type_main-default text_color_inactive`} date={new Date(createdAt)} />
                </div>
                <div>
                    <span className={`text text_type_main-medium`}>{name}</span>
                </div>
                {pathname === PATH.PROFILE_ORDERS ? <span className={` ${globalStyle.colorSuccess} text text_type_main-default`}>{status === 'created' ? STATUS.CREATED : status === 'pending' ? STATUS.PENDING : status === 'canceled' ? STATUS.CANCELED : STATUS.DONE}</span> : ''}
                <div className={`${style.thumbnailLayout}`}>
                    <div className={`${style.thumbnailImgLayout}`}>
                        {orderInfo.ingredientsToShow.map((ingredient: TIngredientCardData) => (
                            <img className={`${style.thumbnailImg} + ml-2`} src={ingredient.image} alt={ingredient.name} key={nanoid()} title={ingredient.name}/>
                        ))}
                        {orderInfo.remains && <span className={`text text_type_digits-default`}><br className={`text text_type_main-small`}/>+{orderInfo.remains}</span>}
                    </div>
                    <div className={`${style.currencyLayout}`}>
                        <span className={`text text_type_digits-default`}>{totalSum}</span>
                        <CurrencyIcon type={'primary'} />
                    </div>
                </div>
            </Link>
        </section>

    )
}
