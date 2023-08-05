import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../product-list/product-list.module.css'

export default function ProductList({data}) {
  return(
    <div className={`${style.productWrapper} + pt-6 pb-10 pl-4`}>
      {data?.map((elem,index) =>
        <div key={index}>
          <Counter count={1} size="default" extraClass="m-1" />
          <img src={elem.image} alt={elem.name} className={`p-4`} />
          <div className={` pt-1 pb-1 `}>
            <span className={`text text_type_digits-default`}>{elem.price}</span>
            <CurrencyIcon type="primary" />
          </div>
          <span className={`text text_type_main-default`}>{elem.name}</span>
        </div>)
      }
    </div>
  )
}
