import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../product-list/product-list.module.css'

export default function ProductList() {
  return(
    <div className={`${style.wrapperCard}`}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img src='https://code.s3.yandex.net/react/code/bun-02.png' alt='Краторная булка N-200i' className={`p-4`} />
      <div className={`${style.wrapper_currency} + pt-1 pb-1 `}>
        <span className={`text text_type_digits-default`}>1255</span>
        <CurrencyIcon type="primary" />
      </div>
      <span className={`text text_type_main-default`}>Краторная булка N-200i</span>
    </div>

  )
}
