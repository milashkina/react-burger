import doneImg from '../../images/done.svg'
import style from '../order-details/order-details.module.css'
import globalStyle from '../app/app.module.css'
import {useSelector} from "../../services/hook";
export const OrderDetails = () => {
  const { orderId, isSuccess } = useSelector(state => state.orderInfo)
  return(
    <div className={`${style.contentWrapper} + p-10`} data-test={'modal_order_info'}>
      {isSuccess ? (
        <div className={`${style.contentWrapper}`} data-test={`${isSuccess}-order-success`}>
          <span className={` ${globalStyle.orderNumber} + text text_type_digits-large mb-8`}>{orderId}</span>
          <span className={`text text_type_main-medium`}>идентификатор заказа</span>
          <img src={doneImg} alt='your order created' className={`text text_type_main-medium pt-15 pb-15`}/>
          <span className={`text text_type_main-small mb-2`}>Ваш заказ начали готовить</span>
          <span className={`text text_type_main-small text_color_inactive`}>Дождитесь готовности на орбитальной станции</span>
        </div>
      ) : (<span className={`text text_type_main-large`}>Loading...</span>)}
    </div>
  )
}

