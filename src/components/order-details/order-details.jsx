import doneImg from '../../images/done.svg'
import style from '../order-details/order-details.module.css'
import {useSelector} from "react-redux";
export default function OrderDetails() {
  const { orderId } = useSelector(state => state.orderInfo)

  return(
    <div className={`${style.contentWrapper} + p-10`}>
      <span className={` ${style.orderNumber} + text text_type_digits-large mb-8`}>{orderId}</span>
      <span className={`text text_type_main-medium`}>идентификатор заказа</span>
      <img src={doneImg} alt='your order created' className={`text text_type_main-medium pt-15 pb-15`}/>
      <span className={`text text_type_main-small mb-2`}>Ваш заказ начали готовить</span>
      <span className={`text text_type_main-small text_color_inactive`}>Дождитесь готовности на орбитальной станции</span>
    </div>
  )
}

