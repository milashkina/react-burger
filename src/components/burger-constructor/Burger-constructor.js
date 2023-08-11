import style from './burger-constructor.module.css'
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import {data} from "../../utils/data"
import {Modal} from "../modal/modal";
import OrderDetails from "../order-details/order-details";
export default function BurgerConstructor() {
  let total = 0;
  data?.map(elem => total += elem.price)
  const [isHidden, setHidden] = useState(true)
  const handleOpen = () => {
    setHidden(false)
  }
  const handleClose = () => {
    setHidden(true)
  }

  return (
    <section className={`pt-15`}>
      <div className={`${style.containerConstructor} + pl-8 pb-4`}>
        <ConstructorElement
          type="top"
          isLocked
          text={data[0]?.name + '(верх)'}
          price={data[0]?.price}
          thumbnail={data[0]?.image}
        />
      </div>
      <div className={`${style.containerConstructor}`}>
        <div className={`${style.containerConstructorInside}`}>
          { data?.map((elem, index) =>
            <div key={index} className={`${style.wrapperConstructor}`}>
              <DragIcon type="primary"/>
              <ConstructorElement
                text={elem.name}
                price={elem.price}
                thumbnail={elem.image}
              />
            </div>
          )}
        </div>
        <div className={`${style.containerConstructor} + pl-8`}>
          <ConstructorElement
            type="bottom"
            isLocked
            text={data[0]?.name + '(низ)'}
            price={data[0]?.price}
            thumbnail={data[0]?.image}
          />
        </div>
      </div>
      <div className={`${style.containerConstructorFinal} + pt-10 pb-10 pl-4 pr-4`}>
        <div className={`pr-10`}>
          <span className={`pr-2 text text_type_digits-medium`} >{total}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={handleOpen}>
          Оформить заказ
        </Button>
      </div>
      {!isHidden &&
        <Modal onClose={handleClose}>
          <OrderDetails />
        </Modal>}
    </section>
    )
}
